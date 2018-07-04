import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, debounceTime } from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public value = '';
  public searchTerm = new FormControl();
  public searchResult: any[] = [];


  constructor(
    private searchService: SearchService
  ) {
    // this.searchMovieOrActor('scarlett');
    this.searchTerm.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400)
      )
      .subscribe(value => {
        this.searchMovieOrActor(value.toLowerCase());
      });
  }

  public searchMovieOrActor(value: string) {
    this.searchService.getMultiSearch(value)
      .subscribe(data => {
        this.searchResult = data.results;
        console.log(data);
      });
  }

  clearResults() {
    this.value = '';
    this.searchResult = [];
  }

  ngOnInit() {

  }


}
