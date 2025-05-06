import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
  selector: 'app-atm',
  imports: [
    TooltipModule,
    TableModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent
  ],
  templateUrl: './atm.component.html',
  styleUrl: './atm.component.scss'
})
export class ATMComponent {
  globalFilterFields: any = ['code','name','category','quantity'];
  
  customers = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ];

  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'Action', header: 'Action' ,type:['view','edit','delete']},
  ];

  constructor(private router: Router) { };


  addOrEdit(type: any, data: any) {
      this.router.navigate(['/pages/add_edit_atm'], { state:{ data:data?.data , type:type} });
      console.log(data?.data);
      
  }
}
