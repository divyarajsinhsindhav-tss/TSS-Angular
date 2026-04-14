import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  myForm!: FormGroup;

  hobbiesList = [
    { name: 'Backend Engineer', value: 'backend' },
    { name: 'Frontend Engineer', value: 'frontend' },
    { name: 'DevOps Engineer', value: 'devops' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      country: ['', Validators.required],

      hobbies: this.fb.array([], [Validators.required])
    });
  }

  get hobbies(): FormArray {
    return this.myForm.get('hobbies') as FormArray;
  }

  onCheckboxChange(event: any) {
    const value = event.target.value;

    if (event.target.checked) {
      this.hobbies.push(this.fb.control(value));
    } else {
      const index = this.hobbies.controls.findIndex(x => x.value === value);
      this.hobbies.removeAt(index);
    }
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('Form values:', this.myForm.value);
    this.hobbies.clear();
    this.myForm.reset();
  }
}