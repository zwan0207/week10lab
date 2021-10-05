import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {

  aTitle: string = "";
  aYear: number = 0;
  movieId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) {}

  onSaveActor() {
    let obj = { title: this.aTitle, year: this.aYear };
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

}
