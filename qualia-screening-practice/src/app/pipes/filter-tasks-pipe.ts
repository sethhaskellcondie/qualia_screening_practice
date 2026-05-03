import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task.model';

@Pipe({
  name: 'filterTasks',
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: Task[], selectedTags: string[]): Task[] {
    if (!selectedTags || selectedTags.length === 0) {
      return tasks;
    }


    //TODO this isn't working when I apply a filter, all of the tasks are being filters out of the results...
    return tasks.filter(task =>
      selectedTags.every(tag => {task.tags.includes(tag)})
    );
  }
}
