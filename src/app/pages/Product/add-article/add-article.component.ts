import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleForm: FormGroup;
  showAlert: boolean = false;
  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      articleRef: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,10}$')]], // Alphanumeric, 3-10 characters
      articleName: ['', Validators.required],
      productFamily: ['', Validators.required],
      articleDesc: ['', Validators.required],
      pricPurchase: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]], // Decimal number
      sellingPrice: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]]  // Decimal number
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Form Submitted!', this.articleForm.value);
      this.showAlert = false; // Hide the alert if the form is valid
    } else {
      console.log('Form not valid');
      this.showAlert = true; // Show the alert if the form is not valid
    }
  }

}
