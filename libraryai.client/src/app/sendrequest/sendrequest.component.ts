import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sendrequest',
  templateUrl: './sendrequest.component.html',
  styleUrl: './sendrequest.component.css'
})
export class SendrequestComponent {
  public requestsent: boolean = false;

  FinishRequest(f: NgForm)
  {
    if (f.valid)
    {
      this.requestsent = true;
    }
    else alert('Please select count from 1 to 10');
  }
}
