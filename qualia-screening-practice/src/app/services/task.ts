import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string, tags: string[]): void {
    if (!title || tags.length === 0) {
      return;
    }
    const newTask: Task = {
      id: this.nextId++,
      title: title.trim(),
      completed: false,
      tags: tags
    };
    this.tasks.push(newTask);
  }

  updateTask(id: number, title: string, tags: string[], completed: boolean): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = title.trim();
      task.tags = tags;
      task.completed = completed;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getAvailableTags(): string[] {
    const allTags = this.tasks.flatMap(t => t.tags);
    return [...new Set(allTags)];
  }
}
