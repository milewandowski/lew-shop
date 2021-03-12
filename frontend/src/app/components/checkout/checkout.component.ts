import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/common/country';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';
import { LewshopValidators } from 'src/app/validators/lewshop-validators';

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
        firstName: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
        lastName: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}$')]),
        phoneNumber: new FormControl('', [Validators.required,
          Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')])
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
        city: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
        zipCode: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
        country: new FormControl('', [Validators.required])
      }),
      billingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
        city: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
        zipCode: new FormControl('', [Validators.required, LewshopValidators.notOnlyWhitespace]),
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

  get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
  get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
  get email() { return this.checkoutFormGroup.get('customer.email'); }
  get phoneNumber() { return this.checkoutFormGroup.get('customer.phoneNumber'); }

  get shippingAddressStreet() { return this.checkoutFormGroup.get('shippingAddress.street'); }
  get shippingAddressCity() { return this.checkoutFormGroup.get('shippingAddress.city'); }
  get shippingAddressZipCode() { return this.checkoutFormGroup.get('shippingAddress.zipCode'); }
  get shippingAddressCountry() { return this.checkoutFormGroup.get('shippingAddress.country'); }

  get billingAddressStreet() { return this.checkoutFormGroup.get('billingAddress.street'); }
  get billingAddressCity() { return this.checkoutFormGroup.get('billingAddress.city'); }
  get billingAddressZipCode() { return this.checkoutFormGroup.get('billingAddress.zipCode'); }
  get billingAddressCountry() { return this.checkoutFormGroup.get('billingAddress.country'); }

}
