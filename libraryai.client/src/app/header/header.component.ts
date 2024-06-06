import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { LinkerService } from '../linker.service';
import { Subject, first } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  subactive: number = 1;

  sub1: string = '...';
  sub2: string = '...';
  sub3: string = '...';

  constructor(private linker: LinkerService, private app: AppComponent)
  {
    
  }
  ngOnInit() {
    this.linker.firstsub.subscribe(x => 
      {
        this.sub1 = x;
        this.subactive = 1;
      });
    this.linker.secondsub.subscribe(x => 
      {
        this.sub2 = x;
        this.subactive = 2;
      });
    this.linker.thirdsub.subscribe(x => 
      {
        this.sub3 = x;
        this.subactive = 3;
      });
  }

  ShowNav(navbar: HTMLDivElement)
  {
    navbar.style.display = navbar.style.display === '' || navbar.style.display === 'none' ? 'block' : 'none';
  }
}
