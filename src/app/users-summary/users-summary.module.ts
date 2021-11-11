import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersSummaryComponent } from './users-summary.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersSummaryComponent,
      },
    ]),
  ]
})
export class OrdersModule { }
