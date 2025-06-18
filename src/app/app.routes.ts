import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuditsComponent } from './components/audits/audits.component';
import { FindingComponent } from './components/finding/finding.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuditDetailsComponent } from './components/audit-details/audit-details.component';
import { FindingDetailsComponent } from './components/finding-details/finding-details.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Profile', component:ProfileComponent},
    {path:'Audits', component:AuditsComponent},
    {path:'Findings', component:FindingComponent,children:[
        {path:'', redirectTo:'FindingDetails', pathMatch:'full'},
        {path:'AuditDetails', component:AuditDetailsComponent},
        {path:'FindingDetails', component:FindingDetailsComponent},
        {path:'ReviewDetails', component:ReviewDetailsComponent},
    ]},
    {path:'**', component:NotFoundComponent},
];
