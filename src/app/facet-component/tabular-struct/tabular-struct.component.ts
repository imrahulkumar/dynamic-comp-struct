import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tabular-struct',
  templateUrl: './tabular-struct.component.html',
  styleUrls: ['./tabular-struct.component.scss']
})
export class TabularStructComponent implements OnInit {

  @Input() msg1:any;
  @Input() msg2:any;
  @Output() msg2Change  = new EventEmitter();
  @Output() onSave  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  clicked(){
    this.msg2 = "You clicked that!"
    console.log("Clicked");
    this.msg2Change.emit(this.msg2);
    this.onSave.emit("heey")
  }
}
