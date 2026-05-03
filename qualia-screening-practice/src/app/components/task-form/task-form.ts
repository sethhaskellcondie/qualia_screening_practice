import {Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {TaskService} from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  @Output() cancel = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<void>();

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  resetForm() {
    this.taskForm.reset();
  }

  onCancel() {
    this.resetForm();
    this.cancel.emit();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskForm.markAllAsTouched(); //TODO This isn't working as expected, this should "touch" all the field and then have the input error message show when clicking submit without filling in the needed information

      const title = this.taskForm.value.title;
      const tags = this.taskForm.value.tags
        .split(',')
        .map((tag: string) => tag.trim())
        .filter((tag: string) => tag.length > 0);

      if (tags.length === 0) {
        return;
      }

      this.taskService.addTask(title, tags);
      this.resetForm();
      this.taskCreated.emit();
    }
  }
}
