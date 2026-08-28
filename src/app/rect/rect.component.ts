import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({required: true}) size!: {width: string; height: string}; 
  @Output() sizeChange = new EventEmitter<{width: string; height: string}>();

  // sizenew = model.required<{width: string; height: string}>();
  //questo signal model poi puo essere usato nel template come segnale = sizenew(). 


  onReset() {
    // this.sizenew.set({
    //   width: '200',
    //   height: '100'
    // });
    this.sizeChange.emit({
      width: '200',
      height: '100',
    });
  }
}
