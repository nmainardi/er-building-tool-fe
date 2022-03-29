import { GearService } from './gear.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.fb.group({
    pesoArmi: [0, Validators.required],
    pesoTrasportabile: [0, Validators.required],
  });

  constructor(private fb: FormBuilder,private gearService:GearService) {
    this.darkThemeCheck=sessionStorage.getItem("darkTheme")=="true";
  }

  dataSourceFast:any[] = [];
  dataSourceMid:any[] = [];
  dataSourceFat:any[] = [];
  darkThemeCheck;

  emailFormControl = new FormControl('', [Validators.required]);
  title = 'er-building-tool';
  listaBuildFast:any[]=[];
	listaBuildMid:any[]=[];
	listaBuildFat:any[]=[];

  onSubmit() {
    if (this.form.invalid) {
      alert('Inserisci tutti i campi');
    }
    else
    {
      this.gearService.getBuild(this.form.get("pesoArmi")?.value,this.form.get("pesoTrasportabile")?.value).subscribe((data) => {
          this.listaBuildFast=data.listaBuildFast;
          this.listaBuildMid=data.listaBuildMid;
          this.listaBuildFat=data.listaBuildFat;
          this.dataSourceFast=this.listaBuildFast;
          this.dataSourceMid=this.listaBuildMid;
          this.dataSourceFat=this.listaBuildFat;
      });
    }
  }

  slidato(e:MatSlideToggleChange){
    this.darkThemeCheck=e.checked;
    sessionStorage.setItem("darkTheme", JSON.stringify(e.checked));
  }
}
