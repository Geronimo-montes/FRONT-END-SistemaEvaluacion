import { Routes } from "@angular/router";
import { AdminGuard } from "./admin.guard";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const AdminBaseRoutes: Routes = [
    {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [ AdminGuard ]
    }
];