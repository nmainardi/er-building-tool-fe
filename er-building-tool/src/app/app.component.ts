import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  emailFormControl = new FormControl('', [Validators.required]);
  title = 'er-building-tool';

  onSubmit() {
    if (this.form.invalid) {
      alert("Inserisci tutti i campi");
    }
  }
}
