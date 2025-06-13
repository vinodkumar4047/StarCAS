import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { NodeServiceService } from '../node-service.service';
import { RestService } from '../../../../layout/service/rest.service';
import { LucideAngularModule, Save } from 'lucide-angular';
interface PermissionItem {
  title: string;
  menuId: string;
  checked: boolean;
}

interface SubMenuItem {
  title: string;
  link?: string;
  icon?: string;
  color?: string;
  menuId: string;
  checked: boolean;
  permissions?: PermissionItem[];
}

interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
  color?: string;
  menuId: string;
  checked: boolean;
  subMenu?: SubMenuItem[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-profile',
  imports: [InputTextModule, LucideAngularModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule, SelectModule, FloatLabel, Tree],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent {
  fitForm: any;
  constructor(private location: Location, private restApi: RestService, private fb: FormBuilder, private nodeService: NodeServiceService, private cd: ChangeDetectorRef) { }

  routetype: any;

  uploadedFiles: any[] = [];
  files: TreeNode[] = [];
  selectedFiles: TreeNode[] = [];

  routeData: any = history.state.data || {};
  formType: 'add' | 'edit' | 'view' = history.state.type || 'add';
  // routetype: any = history.state.check;


  get formTitle(): string {
    switch (this.formType) {
      case 'edit': return 'Edit Profile Details';
      case 'view': return 'View Profile Details';
      default: return 'Add Profile Details';
    }
  }

  InstIDOpt = [{ name: 'Test', code: 'SCB' }];
  logicalOpt = [{ name: 'MAKER', code: 'M' }, { name: 'CHECKER', code: 'C' }];
  previousSelectedIds: Set<string> = new Set();


  ngOnInit(): void {
    this.routetype = history.state.check;
    console.log('Route type:', this.routetype);

    this.fitForm = this.fb.group({
      profileName: ['', Validators.required, Validators.maxLength(25)],
      profileDesc: ['', Validators.required,],
      instId: ['', Validators.required],
      userType: ['', Validators.required],
      profileId: ['', Validators.required],
      status: ['', Validators.required],
      indirectState: []
    });

    // Patch form values for edit/view
    if (this.formType !== 'add' && this.routeData) {
      this.fitForm.patchValue(this.routeData);
    }

    // Disable form in view mode
    if (this.formType === 'view') {
      this.fitForm.disable();
    }

    // Always get the full menu tree
    this.nodeService.getUserAccessModules().then((data: any) => {
      this.files = this.convertMenuStructureToTreeNodes(data);

      // For edit/view: mark nodes as checked based on selectedMenuIds
      if (this.formType !== 'add' && this.routeData?.selectedMenuIds) {
        console.log('Route Data for selectedMenuIds:', this.routeData);

        this.markCheckedNodes(this.files, this.routeData.selectedMenuIds);
        console.log('Marked nodes as checked:', this.files);
        console.log('Route Data:', this.routeData.selectedMenuIds);
        // Expand tree if in view mode
        if (this.formType === 'view') {
          this.files.forEach(node => this.expandRecursive(node, true));
        }

        this.cd.detectChanges();
      }



      // Build selectedFiles (based on which nodes are checked)
      this.selectedFiles = this.getCheckedNodes(this.files);

      this.cd.detectChanges();
    });
    // --------------------------------------------
    // this.fitForm = this.fb.group({
    //   profileName: ['', Validators.required],
    //   profileDesc: ['', Validators.required],
    //   instId: ['', Validators.required],
    //   userType: ['', Validators.required],
    //   profileId: ['', Validators.required],
    //   status: ['', Validators.required],
    // });
    // this.nodeService.getUserAccessModules().then((data: any) => {
    //   this.files = this.convertMenuStructureToTreeNodes(data);
    //   console.log('this.files----------add:', this.files);

    //   this.cd.detectChanges();
    //   this.cd.markForCheck();
    //   if (this.formType === 'view') this.files.forEach(node => this.expandRecursive(node, true));
    //   this.selectedFiles = this.findPreselectedNodes(this.files, ['user_mgmt', 'deposit', 'Delete_Authorize_Branch']);
    // });

    // if (this.formType !== 'add' && this.routeData) {
    //   this.fitForm.patchValue(this.routeData);
    //   this.files = this.convertMenuStructureToTreeNodes(this.routeData.selectedMenuIds || []);
    //   this.cd.detectChanges();
    //   this.cd.markForCheck();
    //   console.log('this.files----------edit:', this.files);

    //   // this.selectedFiles = this.findPreselectedNodes(this.files, this.routeData.selectedMenuIds || []);
    // }
    // console.log('Route Data:', this.routeData.selectedMenuIds);

    // if (this.formType === 'view') this.fitForm.disable();


  }
  getCheckedNodes(nodes: TreeNode[]): TreeNode[] {
    const checkedNodes: TreeNode[] = [];

    const collect = (node: TreeNode) => {
      if (node.data?.checked) {
        checkedNodes.push(node);
      }

      if (node.children) {
        node.children.forEach(child => collect(child));
      }
    };

    nodes.forEach(node => collect(node));
    return checkedNodes;
  }

  markCheckedNodes(nodes: TreeNode[], selected: any[]): void {
    console.log('Marking nodes as checked with selected:', selected);

    const selectedSet = new Set<string>();

    // Flatten selected menuIds from backend into a Set
    selected.forEach((menu: any) => {
      if (menu.checked == true) {
        selectedSet.add(menu.menuId);

        menu.subMenu?.forEach((sub: any) => {
          if (sub.checked == true) {
            selectedSet.add(sub.menuId);

            sub.permissions?.forEach((perm: any) => {
              if (perm.checked == true) { selectedSet.add(perm.menuId); }

            });
          }

        });
      }

    });

    // Recursive function to mark nodes
    const mark = (node: TreeNode) => {
      const menuId = node.data?.menuId;
      if (selectedSet.has(menuId)) {
        node.data.checked = true;
      }

      if (node.children?.length) {
        node.children.forEach(child => mark(child));
      }
    };

    nodes.forEach(mark);
  }


  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.fitForm.valid) {
      const selectedModuleIds = this.selectedFiles.map(node => node.data.menuId);
      const fullData = { ...this.fitForm.value, accessModules: selectedModuleIds };
      console.log('Form Data with Access:', fullData);
    } else {
      this.fitForm.markAllAsTouched();
    }
  }

  onSave(): void {
    const postData = this.convertTreeNodesToMenuStructure(this.files);
    // const payload = {
    //   ...this.fitForm.value,
    //   selectedMenuIds: postData
    // };
    // console.log('Data to POST:', payload);


    // // if (this.formType === 'add') {
    // this.restApi.post(payload, '/usermanagement/profile/add').subscribe({
    //   next: (res) => {
    //     console.log('Profile added successfully:', res);
    //     this.goBack();
    //   },
    //   error: (err) => console.error('Error adding profile:', err)
    // });
    if (this.fitForm.valid) {
      console.log(' fitForm:', this.fitForm.value);
      if (this.formType == 'add') {
        let payload = {
          profileName: this.fitForm.value.profileName,
          profileDesc: this.fitForm.value.profileDesc,
          instId: this.fitForm.value.instId,
          userType: this.fitForm.value.userType,
          selectedMenuIds: postData
        };

        // ✅ Log nicely formatted payload
        console.log('Data to POST:', JSON.stringify(payload, null, 2));
        this.restApi.post(payload, '/usermanagement/profile/add').subscribe({
          next: (res) => {
            console.log('Profile added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile:', err)
        });
      } else if (this.formType == 'edit') {
        let payload = {
          profileId: this.fitForm.value.profileId,
          profileName: this.fitForm.value.profileName,
          profileDesc: this.fitForm.value.profileDesc,
          instId: this.fitForm.value.instId,
          userType: this.fitForm.value.userType,
          selectedMenuIds: postData
        };

        // ✅ Log nicely formatted payload
        console.log('Data to POST:', JSON.stringify(payload, null, 2));
        this.restApi.post(payload, '/usermanagement/profile/edit').subscribe({
          next: (res) => {
            console.log('Profile added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile:', err)
        });
      }
      // this.fitForm.markAllAsTouched();
      // console.error('Form is invalid:', this.fitForm);
      // 
    } else {
      this.fitForm.markAllAsTouched();
    }


    // Your actual POST call here
    // this.apiService.saveUserPermissions(payload).subscribe(...)


    // } else if (this.formType === 'edit') {
    //   this.restApi.put(`/usermanagement/profile/updateProfile/${this.routeData.profileId}`, payload).subscribe({
    //     next: (res) => {
    //       console.log('Profile updated successfully:', res);
    //       this.goBack();
    //     },
    //     error: (err) => console.error('Error updating profile:', err)
    //   });
    // }

  }

  Authorized(action: 'authorize' | 'reject' | 'deleteProfileAuth' | 'deleteProfileDeAuth' | 'editProfileAuth' | 'editProfileDeAuth'): void {

    if (this.routetype === 'auth' || this.routetype === 'deleteAuth' || this.routetype === 'edit') {
      console.log('kamal', this.routetype);

      if (action === 'authorize') {
        console.log('Calling Authorize API...');
        this.restApi.post(null, `/usermanagement/profile/addAuth/${this.fitForm.value.profileId}`).subscribe({
          next: (res) => {
            console.log('Profile added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile:', err)
        });


      } else if (action === 'reject') {
        console.log('Calling Reject API...');
        this.restApi.post(null, `/usermanagement/profile/addDeAuth/${this.fitForm.value.profileId}`).subscribe({
          next: (res) => {
            console.log('Profile added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile:', err)
        });

      } else if (action === 'deleteProfileAuth') {
        console.log('Calling Delete Profile Authorization API...');
        this.restApi.delete(this.fitForm.value.profileId, '/usermanagement/profile/deleteAuth/').subscribe({
          next: (res) => {
            console.log('Profile delete authorization added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile delete authorization:', err)
        });
      } else if (action === 'deleteProfileDeAuth') {
        console.log('Calling Delete Profile De-Authorization API...');
        this.restApi.delete(this.fitForm.value.profileId, '/usermanagement/profile/deleteDeAuth/').subscribe({
          next: (res) => {
            console.log('Profile delete de-authorization added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile delete de-authorization:', err)
        });
      } else if (action === 'editProfileAuth') {
        console.log('Calling Delete Profile De-Authorization API...');
        this.restApi.post(null, `/usermanagement/profile/editAuth/${this.fitForm.value.profileId}`).subscribe({
          next: (res) => {
            console.log('Profile delete de-authorization added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile delete de-authorization:', err)
        });
      } else if (action === 'editProfileDeAuth') {
        console.log('Calling Delete Profile De-Authorization API...');
        this.restApi.post(null, `/usermanagement/profile/editDeAuth/${this.fitForm.value.profileId}`).subscribe({
          next: (res) => {
            console.log('Profile delete de-authorization added successfully:', res);
            this.goBack();
          },
          error: (err) => console.error('Error adding profile delete de-authorization:', err)
        });
      }
    }
  }

  onSelectionChange(selected: any): void {
    this.selectedFiles = selected;
    this.updateCheckedFlags(this.files, selected);
    selected.forEach((node: any) => this.checkParentNodes(node));
    this.selectedFiles = this.collectCheckedNodes(this.files);
    // Then mark only selected nodes as checked

  }

  updateCheckedFlags(nodes: TreeNode[], selectedNodes: TreeNode[]): void {
    for (let node of nodes) {
      node.data.checked = selectedNodes.includes(node);
      if (node.children?.length) {
        this.updateCheckedFlags(node.children, selectedNodes);
        node.data.checked ||= node.children.some(child => child.data.checked);
      }
    }
  }

  checkParentNodes(node: TreeNode): void {
    let current = (node as any).parent;
    while (current) {
      current.data.checked = true;
      current = (current as any).parent;
    }
  }

  collectCheckedNodes(nodes: TreeNode[]): TreeNode[] {
    return nodes.flatMap(node => [
      ...(node.data.checked ? [node] : []),
      ...(node.children ? this.collectCheckedNodes(node.children) : [])
    ]);
  }

  expandRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    node.children?.forEach(child => this.expandRecursive(child, isExpand));
  }

  findPreselectedNodes(nodes: TreeNode[], selectedData: string[]): TreeNode[] {
    const result: TreeNode[] = [];
    const traverse = (nodeList: TreeNode[]) => nodeList.forEach(node => {
      if (selectedData.includes(node.data.menuId)) result.push(node);
      if (node.children) traverse(node.children);
    });
    traverse(nodes);
    return result;
  }

  convertMenuStructureToTreeNodes(menuItems: MenuItem[]): TreeNode[] {
    const setParent = (children: TreeNode[], parent: TreeNode) => {
      children.forEach(child => {
        (child as any).parent = parent;
        if (child.children) setParent(child.children, child);
      });
    };

    return menuItems.map(item => {
      const node: TreeNode = {
        label: item.title,
        data: { ...item },
        icon: item.icon || 'pi pi-folder',
        children: []
      };

      if (item.subMenu) {
        node.children = item.subMenu.map(sub => {
          const subNode: TreeNode = {
            label: sub.title,
            data: { ...sub },
            icon: sub.icon || 'pi pi-folder',
            children: []
          };

          if (sub.permissions) {
            subNode.children = sub.permissions.map(perm => ({
              label: perm.title,
              data: { ...perm },
              icon: 'pi pi-eye',
              leaf: true
            }));
          }

          return subNode;
        });
        setParent(node.children, node);
      }

      return node;
    });
  }

  convertTreeNodesToMenuStructure(nodes: TreeNode[]): MenuItem[] {
    const result: MenuItem[] = [];
    const findOrCreate = (arr: any[], menuId: string) => arr.find(i => i.menuId === menuId) || null;

    nodes.forEach(top => {
      if (!top.data?.menuId) return;

      let existingTop = findOrCreate(result, top.data.menuId);
      if (!existingTop) {
        existingTop = {
          title: top.label,
          menuId: top.data.menuId,
          checked: !!top.data.checked,
          icon: top.data.icon,
          link: top.data.link,
          color: top.data.color,
          subMenu: []
        };
        result.push(existingTop);
      }

      top.children?.forEach(sub => {
        let existingSub = findOrCreate(existingTop.subMenu, sub.data.menuId);
        if (!existingSub) {
          existingSub = {
            title: sub.label,
            menuId: sub.data.menuId,
            checked: !!sub.data.checked,
            icon: sub.data.icon,
            link: sub.data.link,
            color: sub.data.color,
            permissions: []
          };
          existingTop.subMenu.push(existingSub);
        }

        if (sub.children?.length) {
          existingSub.permissions = sub.children.map(perm => ({
            title: perm.label,
            menuId: perm.data.menuId,
            checked: !!perm.data.checked
          }));
        }
      });
    });

    return result;
  }
}
