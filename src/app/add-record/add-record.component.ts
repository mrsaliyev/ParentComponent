import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {

  constructor() { }

  @Output() public childEvent = new EventEmitter();
  // tslint:disable-next-line:typedef
  public date: any;
  public distance: any;
  public time: any;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  sendData(date: any, distance: any, time: any) {
      // @ts-ignore
    this.childEvent.emit(date, distance, time);
  }
}
