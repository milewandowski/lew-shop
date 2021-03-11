import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country } from 'src/app/common/country';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  countries: Country[] = [];

  constructor(private formBuilder: FormBuilder, private checkoutFormService: CheckoutFormService) { }

  ngOnInit(): void {
    this.createCheckoutFormGroup();
    this.listCountries();
  }

  listCountries() {
    this.checkoutFormService.getCountries().subscribe(
      data => {
        this.countries = data;
      }
    )
  }

  createCheckoutFormGroup() {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        phoneNumber: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        zipCode: [''],
        country: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        zipCode: [''],
        country: ['']
      })
    });
  }

  copyShippingAddressToBillingAddress(event) {
    if(event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
      .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    } else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
  }

  onSubmit() {
    //TODO: Handle submit button click
    console.log(this.checkoutFormGroup.get('customer').value);
  }

}
