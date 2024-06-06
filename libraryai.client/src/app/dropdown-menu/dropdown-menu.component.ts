import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkerService } from '../linker.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {

  NameOFSignedIn: string = 'Account';

  SignOut()
  {
    localStorage.clear();

    this.router.navigate(['logouthome']);
  }

  constructor(private router: Router, public linker: LinkerService, private http: HttpClient)
  {
    this.http.get(`${this.linker.backend}/Base/GetNameFromPhone/${localStorage.getItem('Phone')}/`, {responseType: 'text'})
    .subscribe(x => this.NameOFSignedIn = x);
  }

  ShowDropDown(htmldiv: HTMLDivElement)
  {
    htmldiv.style.display = htmldiv.style.display === '' || htmldiv.style.display === 'none' ? 'block' : 'none'
  }
}
