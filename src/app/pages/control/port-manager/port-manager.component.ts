import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-port-manager',
  imports: [TooltipModule,
      TableModule,  // Only import TableModule
      CommonModule,
      FormsModule,],
  templateUrl: './port-manager.component.html',
  styleUrl: './port-manager.component.scss'
})
export class PortManagerComponent {
    // Mock Data for Ports (Port Details)
    portData = [
      { portname: "MUCB1234", ipaddress: "172.16.10.35", portno: "6234", aptype: "SERVER", portid: "6233", portstatus: "LISTEN" },
      { portname: "ORIENT_ATM", ipaddress: "172.16.10.229", portno: "5002", aptype: "SERVER", portid: "6234", portstatus: "LISTEN" },
      { portname: "PORT_1", ipaddress: "192.168.0.10", portno: "9001", aptype: "CLIENT", portid: "9002", portstatus: "CLOSED" },
      { portname: "PORT_2", ipaddress: "192.168.0.11", portno: "8080", aptype: "SERVER", portid: "8081", portstatus: "LISTEN" },
      { portname: "PORT_3", ipaddress: "192.168.0.12", portno: "3030", aptype: "CLIENT", portid: "3031", portstatus: "OPEN" },
      { portname: "PORT_4", ipaddress: "192.168.0.13", portno: "1020", aptype: "SERVER", portid: "1021", portstatus: "LISTEN" },
      { portname: "PORT_5", ipaddress: "192.168.0.14", portno: "2000", aptype: "SERVER", portid: "2001", portstatus: "LISTEN" },
      { portname: "PORT_6", ipaddress: "192.168.0.15", portno: "5000", aptype: "CLIENT", portid: "5001", portstatus: "CLOSED" },
      { portname: "PORT_7", ipaddress: "192.168.0.16", portno: "7000", aptype: "SERVER", portid: "7001", portstatus: "LISTEN" },
      { portname: "PORT_8", ipaddress: "192.168.0.17", portno: "4000", aptype: "CLIENT", portid: "4001", portstatus: "OPEN" },
      { portname: "PORT_9", ipaddress: "192.168.0.18", portno: "6000", aptype: "SERVER", portid: "6001", portstatus: "LISTEN" },
      { portname: "PORT_10", ipaddress: "192.168.0.19", portno: "1234", aptype: "CLIENT", portid: "1235", portstatus: "CLOSED" },
      { portname: "PORT_11", ipaddress: "192.168.0.20", portno: "8082", aptype: "SERVER", portid: "8083", portstatus: "LISTEN" },
      { portname: "PORT_12", ipaddress: "192.168.0.21", portno: "9002", aptype: "SERVER", portid: "9003", portstatus: "LISTEN" },
      { portname: "PORT_13", ipaddress: "192.168.0.22", portno: "4040", aptype: "CLIENT", portid: "4041", portstatus: "CLOSED" },
      { portname: "PORT_14", ipaddress: "192.168.0.23", portno: "7070", aptype: "SERVER", portid: "7071", portstatus: "OPEN" },
      { portname: "PORT_15", ipaddress: "192.168.0.24", portno: "8000", aptype: "CLIENT", portid: "8001", portstatus: "CLOSED" },
      { portname: "PORT_16", ipaddress: "192.168.0.25", portno: "3000", aptype: "SERVER", portid: "3001", portstatus: "LISTEN" },
      { portname: "PORT_17", ipaddress: "192.168.0.26", portno: "9003", aptype: "CLIENT", portid: "9004", portstatus: "OPEN" },
    ];
}
