import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RepositoriesPageComponent } from "./viewer/containers/repositories-page/repositories-page.component";

const routes: Routes = [{ path: "", component: RepositoriesPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
