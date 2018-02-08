import {Component, OnInit} from '@angular/core';
import {SendSearchRequest} from '../send-search-request';
import {TransferRequest} from '../transfer-request';

@Component({
  selector: 'app-send-search-form',
  templateUrl: './send-search-form.component.html',
  styleUrls: ['./send-search-form.component.css']
})
export class SendSearchFormComponent {
  transferRequests;
  countries = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new SendSearchRequest('', '', '', '', '');
  submitted = false;
  message;
  selectedTransfer;

  onSubmit() {
    this.submitted = true;
    console.log(this.model.by);
    this.transferRequests = [
      new TransferRequest(1, '02-10-2018', 10, 'Estonia', 'India'),
      new TransferRequest(1, '02-10-2018', 10, 'Estonia', 'India'),
      new TransferRequest(1, '02-10-2018', 10, 'Estonia', 'India'),
      new TransferRequest(1, '02-10-2018', 10, 'Estonia', 'India')
    ];
  }

  OnSelect(transferRequest) {
    console.log(transferRequest);
    this.selectedTransfer = transferRequest;
    this.transferRequests = null;
  }
  OnBook() {
    console.log(this.model);
    this.message = {type: 'success', value: 'Your booking has been made! now you can drop of your package at the nearest checkpoint.'};
    console.log(this.selectedTransfer);
  }
}
