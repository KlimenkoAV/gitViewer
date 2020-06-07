import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "@viewer/reducers";
import { RepositoriesEffects } from "@viewer/effects/repository.effects";
import { RepositoriesPageComponent } from "@viewer/containers/repositories-page/repositories-page.component";
import { ViewRepositoriesPageComponent } from "@viewer/containers/view-repositories-page/view-repositories-page.component";
import { FilterComponent } from "./components/filter/filter.component";
import { ListComponent } from "./components/list/list.component";
import { MaterialModule } from "@shared/material.module";
import { Paginator } from "@app/shared/paginator";
import { MatPaginatorIntl } from "@angular/material/paginator";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature("repositories", reducers),
    EffectsModule.forFeature([RepositoriesEffects]),
    MaterialModule,
  ],
  declarations: [
    RepositoriesPageComponent,
    ViewRepositoriesPageComponent,
    FilterComponent,
    ListComponent,
  ],
  // providers: [
  //   {
  //     provide: MatPaginatorIntl,
  //     useClass: Paginator,
  //   },
  // ],
})
export class ViewerModule {}
