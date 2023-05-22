import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      projectName: ['', [Validators.required, this.projectNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      projectStatus: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log('Form submitted successfully');
      console.log('Project Name:', this.projectForm.value.projectName);
      console.log('Email:', this.projectForm.value.email);
      console.log('Project Status:', this.projectForm.value.projectStatus);
    } else {
      console.log('Form is invalid');
    }
  }

  projectNameValidator(control: any) {
    if (control.value.toLowerCase() === 'test') {
      return { invalidProjectName: true };
    }
    return null;
  }
}
