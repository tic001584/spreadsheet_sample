import { Component, ViewChild, ElementRef } from "@angular/core";
import * as jspreadsheet from "jspreadsheet-ce"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("spreadsheet")
  spreadsheet!: ElementRef;
  title = "CodeSandbox";
  
  ngAfterViewInit() {
    jspreadsheet(this.spreadsheet.nativeElement, {
      data:[[]],
      columns:[
        {type: "dropdown",width: 100,source:["〇","×","△"]},
        {type:"color",width: 100,render: "square"},
        {type:"checkbox",width: 100,}
      ],
      minDimensions:[10,10]
    });
  }
}
