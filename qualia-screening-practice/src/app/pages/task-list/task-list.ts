import { Component } from '@angular/core';
import {TaskForm} from '../../components/task-form/task-form';
import {TaskService} from '../../services/task';
import {Task} from '../../models/task.model';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FilterBar} from '../../components/filter-bar/filter-bar';
import {FilterTasksPipe} from '../../pipes/filter-tasks-pipe';

@Component({
  selector: 'app-task-list',
  imports: [
    TaskForm,
    ReactiveFormsModule,
    FilterBar,
    FilterTasksPipe
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  showForm = false;
  editingTaskId: number | null = null;
  editForm: FormGroup;
  selectedTags: string[] = [];

  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      tags: ['', Validators.required],
      completed: [false]
    })
  }

  get hasTasks(): boolean {
    return this.taskService.getTasks().length > 0;
  }

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  get availableTags(): string[] {
    return this.taskService.getAvailableTags();
  }

  get incompleteCount(): number {
    return this.taskService.getTasks().filter(t => !t.completed).length;
  }

  get completeCount(): number {
    return this.taskService.getTasks().filter(t => t.completed).length;
  }

  onAddTask() {
    this.showForm = true;
  }

  onCancel() {
    this.showForm = false;
  }

  onTaskCreated() {
    this.showForm = false;
  }

  onFilterChanged(tags: string[]) {
    this.selectedTags = tags;
  }

  onEdit(task: Task) {
    this.editingTaskId = task.id;
    this.editForm.setValue({
      title: task.title,
      tags: task.tags.join(', '),
      completed: task.completed
    });
  }

  onSave(taskId: number) {
    this.editForm.markAsTouched();
    if (this.editForm.valid) {
      const title = this.editForm.value.title;
      const tags = this.editForm.value.tags
        .split(',')
        .map((tag: string) => tag.trim())
        .filter((tag: string) => tag.length > 0);
      const completed = this.editForm.value.completed;

      this.taskService.updateTask(taskId, title, tags, completed);
      this.editingTaskId = null;
      this.editForm.reset();
    }
  }

  onCancelEdit() {
    this.editingTaskId = null;
    this.editForm.reset();
  }

  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}
