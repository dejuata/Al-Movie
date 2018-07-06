import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() login;
  @Output() user = new EventEmitter();
  data: any = {
    'email': '',
    'password': ''
  };
  disabled = true;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor() {
  }

  ngOnInit() {
  }

  sendData() {
    this.disabled = false;
    return this.user.emit(this.data);
  }

  checkData() {
    if (this.data.email !== '' && this.data.password !== '') {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

}
