import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../../../layout/component/table/table.component';

@Component({
  selector: 'app-network-control',
  imports: [TooltipModule,
    CommonModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
    TableComponent,
    DialogModule,],
  templateUrl: './network-control.component.html',
  styleUrl: './network-control.component.scss'
})
export class NetworkControlComponent {
  globalFilterFields: any = [
    'instId',
    'atmId',
    'atmTypeId',
    'logicalGroup',
    'ipAddress',
    'acquirerBranch'
  ];

  atmData = [{ "networkid": "NFS", "channelname": "EzNFS8583", "portname": "NFS", "status": "DOWN", "timeout": "30" },
  { "networkid": "NFSPOS", "channelname": "EzNFSPOS8583", "portname": "NFSPOS", "status": "DOWN", "timeout": "30" },
  { "networkid": "MASTER", "channelname": "EzMaster8583", "portname": "MASTER", "status": "DOWN", "timeout": "30" },
  { "networkid": "UATCBS", "channelname": "EzUATHost8583", "portname": "UATCBS", "status": "DOWN", "timeout": "30" },
  { "networkid": "UDIR", "channelname": "EzUdir8583", "portname": "UDIR", "status": "DOWN", "timeout": "30" },
  { "networkid": "MBCBS", "channelname": "EzHost8583", "portname": "MBCBS", "status": "DOWN", "timeout": "30" },
  { "networkid": "MUCBCBS", "channelname": "EzHost8583", "portname": "MUCBCBS", "status": "DOWN", "timeout": "30" }]

  cols = [
    { field: 'networkid', header: 'NETWORK ID' },
    { field: 'channelname', header: 'CHANNEL NAME' },
    { field: 'portname', header: 'PORT NAME' },
    { field: 'status', header: 'STATUS' },
    { field: 'timeout', header: 'TIME OUT' },
  ];
  delete_visible: any;

  addOrEdit(data1: any, data: any) {

  }
}
