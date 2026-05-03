import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  imports: [],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss',
})
export class FilterBar {
  @Input() availableTags: string[] = [];
  @Output() filterChanged = new EventEmitter<string[]>();

  selectedTags: string[] = [];

  onTagToggle(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags = [...this.selectedTags, tag];
    }
    this.filterChanged.emit(this.selectedTags);
  }

  isSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }
}
