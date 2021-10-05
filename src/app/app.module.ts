import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { RouterModule, Routes } from "@angular/router";
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { AddactortomovieComponent } from './addactortomovie/addactortomovie.component';
import { InvalidComponent } from './invalid/invalid.component';
import { AgeTransferPipe } from './age-transfer.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "listmovies", component: ListmovieComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "addactortomovie", component: AddactortomovieComponent },

  { path: '**',  pathMatch: "full",component: InvalidComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmovieComponent,
    AddactortomovieComponent,
    InvalidComponent,
    AgeTransferPipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{useHash : true}),

    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}