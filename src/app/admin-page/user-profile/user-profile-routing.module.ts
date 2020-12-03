import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileGuard } from "./user-profile-base/profile.guard";
import { UserProfileComponent } from "./user-profile-base/user-profile.component";

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [ProfileGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }