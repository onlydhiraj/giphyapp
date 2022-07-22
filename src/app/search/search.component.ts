import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() public placeholderText:string = " ";

  ngOnInit(): void {
  }


  onSearch(searchTerm: string){
    if(searchTerm){
      this.dataService.searchgifs(searchTerm)
    }

  }

}
