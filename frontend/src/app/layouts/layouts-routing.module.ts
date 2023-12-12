import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorsLayout } from './doctors-layout/doctors-layout.component';
import { PatientLayout } from './patient-layout/patient-layout.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'doctor',
                component: DoctorsLayout
            },
            {
                path: 'patient',
                component: PatientLayout
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
