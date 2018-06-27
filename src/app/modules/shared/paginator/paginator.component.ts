import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() pageSize;
  @Input() length;

  @Output() pageIndex = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  page (event) {
    return this.pageIndex.emit(event.pageIndex);
  }

}
