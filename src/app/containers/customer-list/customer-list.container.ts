import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../customer.service';
import {CustomerDTO} from '../../customerDTO.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list.container.html',
  styleUrls: ['./customer-list.container.css']
})
export class CustomerListContainer implements OnInit {

  customers$: Observable<{'customers': CustomerDTO[]}>;

constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers$ = this.customerService.getCustomers();
  }
}
