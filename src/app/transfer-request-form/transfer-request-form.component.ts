import {Component, OnInit} from '@angular/core';
import {TransferRequest} from '../transfer-request';

@Component({
  selector: 'app-transfer-request-form',
  templateUrl: './transfer-request-form.component.html',
  styleUrls: ['./transfer-request-form.component.css']
})
export class TransferRequestFormComponent {
  transferRequest = new TransferRequest(0, '', 1, '', '');
  submitted = false;
  message;
  countries = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  onSubmit() {
    this.submitted = true;
    console.log(this.transferRequest);
    this.message = {type: 'success', value: 'Your transfer request has been submited! We will notify you when it gets booked.'};
  }
}
