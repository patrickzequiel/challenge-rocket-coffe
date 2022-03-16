import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, CustomersRoutingModule],
  providers: [CustomerService],
})
export class CustomersModule {
  constructor(private customerService: CustomerService) {
    console.log('CustomersModule.constructor()');
    console.log(
      'customerService.getCustomers()',
      customerService.getCustomers()
    );
  }
}
