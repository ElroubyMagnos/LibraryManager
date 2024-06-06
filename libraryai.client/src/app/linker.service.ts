import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OneRequest } from './Models/OneRequest';

@Injectable({
  providedIn: 'root'
})
export class LinkerService implements OnInit {
  public CurrentRequest!: OneRequest;
  public CurrentRequestThrough: Subject<OneRequest> = new Subject<OneRequest>();
  public SignedIn: boolean = false;
  public backend: string = 'http://localhost:5276';

  public firstsub: Subject<string> = new Subject<string>();
  public secondsub: Subject<string> = new Subject<string>();
  public thirdsub: Subject<string> = new Subject<string>();
  
  constructor(private http: HttpClient) 
  { 
    this.CurrentRequestThrough.subscribe(
      x => {
        this.http.post<number>(`${this.backend}/Base/GetRequestFromZero/`, x)
        .subscribe(cr => {
          this.CurrentRequest = x;
          this.CurrentRequest.id = cr;
        }, error => alert(error.message));
      }
    );
  }

  public ngOnInit()
  {
    this.http.post<boolean>(`${this.backend}/Base/CheckValidCustomer/${localStorage.getItem('Phone')}/${localStorage.getItem('Password')}/`, {})
    .subscribe(x => 
    {
        this.SignedIn = x;
        if (!this.SignedIn)
        {
          localStorage.clear();
        }

        return x;
    }, error => 
      {
        localStorage.clear();
        window.location.reload();
      });
  }
}
