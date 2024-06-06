import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LinkerService } from '../linker.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public ErrorMsg: string | null = null;
  public MsgType: string = 'danger';
  public ShowSpinner: boolean = false;
  constructor(private linker: LinkerService, private http: HttpClient)
  {

  }

  SignUp(f: NgForm)
  {
    this.ErrorMsg = null;
    this.MsgType = 'danger';

    if (f.value.Password != f.value.ConfirmPassword)
    {
      this.ErrorMsg = "Error! Passwords isn't Match";
      this.MsgType = 'danger';
      return;
    }

    if (f.valid)
    {
      var Phone = f.value.Phone as string;
      if (Phone.length != 11 || (!Phone.startsWith("012") && !Phone.startsWith("011") && !Phone.startsWith("010") && !Phone.startsWith("015")))
      {
        this.ErrorMsg = `Invalid Phone Number`;
        return;
      }
      alert('');
      this.ShowSpinner = true;

      this.http.post<boolean>(`${this.linker.backend}/Base/SignUp/`, {
        Name: f.value.Name,
        Phone: f.value.Phone,
        Password: f.value.Password,
        PrintRequests: []
      })
      .subscribe(x => {

        this.ShowSpinner = false;
        f.reset();
        if (x)
        {
          this.MsgType = 'success';
          this.ErrorMsg = 'Signed In Successfully';
        }
        else
        {
          this.MsgType = 'danger';
          this.ErrorMsg = "Error! Sign Up Failed, Phone already Exist!";
        }
      }, error =>{

        this.MsgType = 'danger';
        this.ErrorMsg = error.message;
      })
    }
  }
}
