import { Component } from '@angular/core';
import { LinkerService } from '../linker.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  GotoUpload(iscolored: boolean)
  {
    this.http.get<number>(`${this.linker.backend}/Base/GetIDFromPhone/${localStorage.getItem('Phone')}`)
    .subscribe(x => {
      this.linker.firstsub.next(iscolored ? 'Colored' : 'Gray');
      
      this.linker.CurrentRequestThrough.next({
        id: 0,
        isColored: iscolored,
        ownerId: x,
        customerClass: {
          id: 0,
          name: '',
          password: '',
          phone: '',
          printRequests: []
        },
        documentsFiles: []
      });

      this.router.navigate(['upload']);
    }, error => {
      alert(`Error can't get id from this Phone!`);
    });

    
  }

  constructor(private linker: LinkerService, private router: Router, private http: HttpClient)
  {
    
  }
}
