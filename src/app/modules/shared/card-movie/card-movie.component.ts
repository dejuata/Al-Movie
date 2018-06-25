import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie;
  @Input() compactView;
  @Input() styleActor;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMovies(id: number) {
    this.router.navigate(['/movies']);
    console.log(id);
  }

}
