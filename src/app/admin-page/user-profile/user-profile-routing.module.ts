import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../../components/guards/admin.guard";
import { UserProfileComponent } from "./user-profile-base/user-profile.component";

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }