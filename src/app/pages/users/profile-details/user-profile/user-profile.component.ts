import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { NodeServiceService } from '../node-service.service';
@Component({
  selector: 'app-user-profile',
  imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, ReactiveFormsModule,
    SelectModule, FloatLabel, Tree],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent {
  fitForm: any;
  uploadedFiles: any[] = [];
  files: TreeNode[] = [];
  selectedFiles: TreeNode[] = [];

  // 👇 dynamic state
  routeData: any = history.state.data || {};
  formType: 'add' | 'edit' | 'view' = history.state.type || 'add';

  get formTitle(): string {
    if (this.formType === 'edit') return 'Edit Profile Details';
    if (this.formType === 'view') return 'View Profile Details';
    return 'Add Profile Details';
  };
  constructor(private location: Location, private fb: FormBuilder, private nodeService: NodeServiceService) { };

  InstIDOpt: any = [
    { name: 'Test', code: '1' }
  ];

  logicalOpt: any = [
    { name: 'MAKER', code: '1' }, { name: 'CHECKER', code: '2' }
  ];
  ngOnInit(data: any) {
    console.log('data', data);

    this.fitForm = this.fb.group({
      INSTID: [null, Validators.required],
      logicalGroup: [null, Validators.required],
      BINValue: ['', Validators.required],
      indirectState: ['', Validators.required]
    });


    if (this.formType !== 'add' && this.routeData) {
      this.fitForm.patchValue(this.routeData);
    };

    if (this.formType === 'view') {
      this.fitForm.disable(); // Make form readonly

    };
    // Load user-access modules
    this.nodeService.getUserAccessModules().then(data => {
      this.files = data;
      console.log('files', this.files);

      if (this.formType === 'view') {
        this.files.forEach((node) => {
          this.expandRecursive(node, true);
        });
      }

      // 📝 Optional: Pre-select items the user already has access to
      // For demo: assume user has access to 'User Management' and 'Deposit'
      this.selectedFiles = this.findPreselectedNodes(data, ['user_mgmt', 'deposit', 'Delete_Authorize_Branch']);
    });

  }


  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  findPreselectedNodes(nodes: TreeNode[], selectedData: string[]): TreeNode[] {
    const result: TreeNode[] = [];

    const traverse = (nodeList: TreeNode[]) => {
      for (const node of nodeList) {
        if (selectedData.includes(node.data)) {
          result.push(node);
        }
        if (node.children) {
          traverse(node.children);
        }
      }
    };

    traverse(nodes);
    return result;
  }

  goBack() {
    this.location.back();
  }
  onSubmit() {
    if (this.fitForm.valid) {
      console.log('Form Data:', this.fitForm.value);
      // Process the form data here 
      const selectedModuleIds = this.selectedFiles.map(node => node.data);
      console.log('Selected Modules:', selectedModuleIds);

      const fullData = {
        ...this.fitForm.value,
        accessModules: selectedModuleIds
      };

      console.log('Form Data with Access:', fullData);
    } else {
      console.log('Form is invalid', this.fitForm);
      this.fitForm.markAllAsTouched();
    }
  }


}
