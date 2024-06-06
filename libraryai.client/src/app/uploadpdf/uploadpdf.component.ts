import { BootstrapOptions, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkerService } from '../linker.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadpdf',
  templateUrl: './uploadpdf.component.html',
  styleUrl: './uploadpdf.component.css'
})
export class UploadpdfComponent {
  
  public FileName: string = 'None';
  public ShowSpinner: boolean = false;
  FileNameShow(input: HTMLInputElement)
  {
    if (input.files!.length > 0)
      this.FileName = input.files![0].name;
    else this.FileName = 'None';
  }

  Upload(file: HTMLInputElement)
  {
    this.ShowSpinner = true;
    this.postFile(file.files![0])
    .subscribe(x => {
      this.ShowSpinner = false;
      alert('Uploaded Successfully');
      this.router.navigate(['last']);
    }, error => {alert(`Error, can't upload file to the server!`); this.ShowSpinner = false;})
  }

  postFile(fileToUpload: File): Observable<object> {
    const formData: FormData = new FormData();
    formData.append('File', fileToUpload, fileToUpload.name);
    return this.http
      .post(`${this.linker.backend}/Base/UploadAFile/${this.linker.CurrentRequest.id}/`, formData);
}

  constructor(private linker: LinkerService, private http: HttpClient, private router: Router)
  {
    
  }
}
