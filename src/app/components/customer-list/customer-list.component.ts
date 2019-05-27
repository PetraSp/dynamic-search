import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {pickBy, identity} from 'lodash';
import {CustomerSearchDTO, CustomerDTO} from '../../customerDTO.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() customers: {'customers': CustomerDTO[]} = {};
  @Output() onSearchEvent = new EventEmitter<string>();

  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'totalOrders'];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm =  this.fb.group({
      search: ['']
    });

    this.searchForm.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((value) => value.search);
  }
}
