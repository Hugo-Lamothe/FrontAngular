import { Component, OnInit } from '@angular/core';
import { JsonService } from "../services/json.service";

@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent implements OnInit {
  jsonData: any;
  startIndex: number = 0;
  numPage: String = "1/2"

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getJSONData().subscribe(data => {
      this.jsonData = data;
    });
  }

  updateDataSlice(start: number): void {
    this.startIndex = start;
    if (start == 0){
      this.numPage = "1/2"
    }else{
      this.numPage = "2/2"
    }
  }

}
