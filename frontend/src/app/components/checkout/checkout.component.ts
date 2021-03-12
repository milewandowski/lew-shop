import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}$')]),
        phoneNumber: new FormControl('', [Validators.required,
          Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')])
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required])
      }),
      billingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required])
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
