import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit{

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  movieId: any = "";
  actorId: any = "";
  aTitle: string = "";
  fullName: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  onGetMoives() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  onSelectMovie(item:any) {
    this.movieId = item._id;
    this.aTitle = item.title;
  }

  onSelectActor(item:any) {
    this.actorId = item._id;
    this.fullName = item.name;
  }

  onAddActor() {
    this.dbService.addActorToMovie(this.movieId,this.actorId).subscribe(result => {
      this.onGetMoives();
      this.router.navigate(["/listmovies"]);
    });
  }

  ngOnInit() {
    this.onGetMoives();
    this.onGetActors()
  }

}
