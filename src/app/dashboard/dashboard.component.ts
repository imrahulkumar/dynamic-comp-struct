import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tabularConfigData:any={
    controlTypeId:"121",
    options: {msg1:"Hello", msg2:"I am dynamic component"}
  }
  constructor() { }

  ngOnInit(): void {
  }
  optionsChange(e){
  console.log("Hey i m dashboard listening to dynamic component",e);
    /**
     * it will automatically bind the data of this.tabularConfigData.options 
     * without any assignment i.e it behave likes two way binding like ngModal
     * */ 
    
  }
}
