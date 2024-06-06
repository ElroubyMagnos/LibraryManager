import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LinkerService } from '../linker.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  public ShowSpinner: boolean = false;
  public ShowModule: boolean = false;
  constructor(private http: HttpClient, private linker: LinkerService, private router: Router)
  {
    
  }

  SignIn(f: NgForm)
  {
    if (f.valid)
    {
      this.http.post<boolean>(`${this.linker.backend}/Base/CheckValidCustomer/${f.value.Phone}/${f.value.Password}/`, {})
      .subscribe(data => {
        if (data)
        {
          localStorage.setItem('Phone', f.value.Phone);
          localStorage.setItem('Password', f.value.Password);
          
          this.router.navigate(['']);
        }
        else
        {
          this.ShowModule = true;
        }

        f.reset();
      })
    }
  }
}
