import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Location } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'app-add-edit-view-atm-details',
    imports: [InputTextModule, FormsModule, CommonModule, ButtonModule, InputGroupModule, ReactiveFormsModule,
        CheckboxModule, TableModule, InputGroupAddonModule, SelectModule, SelectButtonModule],
    templateUrl: './add-edit-view-atm-details.component.html',
    styleUrl: './add-edit-view-atm-details.component.scss'
})
export class AddEditViewAtmDetailsComponent {
    routeData: any = history.state;
    locat: string = 'New York';
    mapUrl: SafeResourceUrl | undefined;
    EMVOptions: any[] = [{ label: 'ON', value: '1' }, { label: 'OFF', value: '0' }];
    aliveOptions: any[] = [{ label: 'ON', value: '1' }, { label: 'OFF', value: '0' }];
    connectionOptions: any[] = [{ label: 'Server', value: '1' }, { label: 'Client', value: '0' }];
    statusOptions: any[] = [{ label: 'Active', value: '1' }, { label: 'Inactive', value: '0' }];
    headerOptions: any[] = [{ label: 'HEX', value: '1' }, { label: 'ASCII', value: '0' }];
    logicalGroupOpt = [
        { name: 'NDC+ATM', code: 'NDC+ATM' },
    ];
    atmTypes = [
        { name: 'NDC ATMs', code: 'NDC+ATM' },
        { name: 'WINCOR', code: 'WINCOR' },
        { name: 'Diebold ATMs', code: 'Diebold ATMs' },
    ];
    institution = [
        { name: 'Test Bank 1', code: '1' },
        { name: 'Test Bank 2', code: '2' },
        { name: 'Test Bank 3', code: '3' },
    ];
    branchOpt = [
        { name: 'Head Office', code: '1' },
        { name: 'Test Branch', code: '2' },
    ];
    keyOpt = [
        { name: '46', code: '46' },
        { name: '32', code: '32' },
        { name: '13', code: '13' },
    ];

    selectprod: any;
    products: any = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Denom A',
            check: false
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Denom B',
            check: false
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Denom C',
            check: false
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Denom D',
            check: false
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'Denom E',
            check: false
        },
        {
            id: '1005',
            code: 'av2231fwg',
            name: 'Denom F',
            check: false
        },
        {
            id: '1006',
            code: 'bib36pfvm',
            name: 'Denom G',
            check: false
        },
        {
            id: '1007',
            code: 'mbvjkgip5',
            name: 'Denom H',
            check: false
        },
    ];
    atmForm: any;
    saveCheck: boolean = false;
    constructor(private location: Location, private sanitizer: DomSanitizer, private fb: FormBuilder) {
        this.updateMap()
    }

    ngOnInit() {
        console.log(this.routeData, 'routedata');
        this.saveCheck = this.routeData?.type == 'Add' ? true : false;
        this.atmForm = this.fb.group({
            ATMID: ['', Validators.required],
            Locate: [''],
            ATMLocation: ['', Validators.required],
            ATMType: ['', Validators.required],
            ATMLogicalGroup: ['', Validators.required],
            TerminalId: ['', Validators.required],
            AcquirerBin: ['', Validators.required],
            AcquirerInstitution: ['', Validators.required],
            AcquirerBranch: ['', Validators.required],
            ATMKeylen: ['', Validators.required],
            ATMMasterKey: ['', Validators.required],
            ATMCommonKey: ['', Validators.required],
            IPAddress: ['', Validators.required],
            PORTID: ['', Validators.required],
            MaxNotedDispence: ['', Validators.required],
            MaxAmountDispence: ['', Validators.required],
            EMVEnabled: ['1', Validators.required],
            KeepAlive: ['1', Validators.required],
            Connection: ['1', Validators.required],
            Header: ['1', Validators.required],
            ATMStatus: ['1', Validators.required],
            productDetails: this.fb.array([])  
        });

        this.initializeProductFormArrays();
       if( this.routeData?.type == 'Edit' || this.routeData?.type == 'View'){
        this.setFormData(this.routeData?.data);
        this.atmForm.disable();
       }else{ 
        this.atmForm.enable();
       }; 
    }

    initializeProductFormArrays() {
        const productDetailsArray = this.atmForm.get('productDetails') as FormArray;

        this.products.forEach((product: any) => {
            const group = this.fb.group({
                selectedProduct: [product.check ?? false],
                denomValue: [{ value: '', disabled: !product.check }, Validators.required],
                currencyCode: [{ value: '', disabled: !product.check }, Validators.required]
            });

            group.get('selectedProduct')?.valueChanges.subscribe(checked => {
                const denom = group.get('denomValue');
                const currency = group.get('currencyCode');
                if (checked) {
                    denom?.enable();
                    currency?.enable();
                } else {
                    denom?.disable();
                    currency?.disable();
                }
            });

            productDetailsArray.push(group);
        });
    }


    getProductControl(index: number, controlName: string): FormControl {
        return (this.atmForm.get('productDetails') as FormArray)
            .at(index)
            .get(controlName) as FormControl;
    }

    onSubmit() {
        if (this.atmForm.valid) {
            console.log('Form Data:', this.atmForm.value);
            // Process the form data here 
            if (this.routeData?.type == 'Edit') {
                this.saveCheck = false;
                this.atmForm.disable();
            }
        } else {
            console.log('Form is invalid',this.atmForm);
        }
    }

    goBack() {
        this.location.back();
    }

    updateMap() {
        const query = encodeURIComponent(this.locat);
        // const url = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${query}`;
        const url = " https://maps.google.com/maps?q=40.5509,-105.0668&output=svembed"
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    editEnable() {
        this.atmForm.enable();
        this.saveCheck = true;
        this.EnableDisableAllProductFields();
    }

   EnableDisableAllProductFields() {
        const productDetailsArray = this.atmForm.get('productDetails') as FormArray;
        productDetailsArray.controls.forEach((group: any, index: number) => {
            const selectedProductControl = group.get('selectedProduct');
            const denomControl = group.get('denomValue');
            const currencyControl = group.get('currencyCode');
            const isChecked = selectedProductControl?.value;
    
            if (isChecked) {
                denomControl?.enable();
                currencyControl?.enable();
            } else {
                denomControl?.disable();
                currencyControl?.disable();
            }
        });
    }
    
    setFormData(data: any) {
        // Set top-level values in the form
        this.atmForm.patchValue({
            ATMID: data.ATMID,
            Locate: data.Locate,
            ATMLocation: data.ATMLocation,
            ATMType: data.ATMType,
            ATMLogicalGroup: data.ATMLogicalGroup,
            TerminalId: data.TerminalId,
            AcquirerBin: data.AcquirerBin,
            AcquirerInstitution: data.AcquirerInstitution?.name,
            AcquirerBranch: data.AcquirerBranch?.name,
            ATMKeylen: data.ATMKeylen?.name,
            ATMMasterKey: data.ATMMasterKey,
            ATMCommonKey: data.ATMCommonKey,
            IPAddress: data.IPAddress,
            PORTID: data.PORTID,
            MaxNotedDispence: data.MaxNotedDispence,
            MaxAmountDispence: data.MaxAmountDispence,
            EMVEnabled: data.EMVEnabled,
            KeepAlive: data.KeepAlive,
            Connection: data.Connection,
            Header: data.Header,
            ATMStatus: data.ATMStatus,
        });
    
        // Set product details (form array)
        const productDetailsArray = this.atmForm.get('productDetails') as FormArray;
        data.productDetails.forEach((product: any, index: number) => {
            const group = productDetailsArray.at(index) as FormGroup;
    
            group.patchValue({
                selectedProduct: product.selectedProduct ?? false,
                denomValue: product.denomValue ?? '',
                currencyCode: product.currencyCode ?? ''
            });
    
        });
    }
}
