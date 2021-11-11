import {Component} from '@angular/core';
import {EXAMPLE_DATA, User} from './users-summary-datasource';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {GenericDialogComponent} from "../dialogs/generic-dialog/generic-dialog.component";


@Component({
  selector: 'app-users-summary',
  templateUrl: './users-summary.component.html',
  styleUrls: ['./users-summary.component.css']
})
export class UsersSummaryComponent {
  dataSource = new MatTableDataSource<User>(EXAMPLE_DATA);

  displayedColumns = ['name', 'age', 'company', 'delete'];

  constructor(private diag: MatDialog) {
  }

  deleteUser(index: number) {
    this.openModal('Delete user','Are you sure you want to delete this user?','Delete' , 'Cancel' , true).afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter((u, idx) => idx !== index);
      }
    });
  }

  addRandomUser() {
    this.openModal('Add random user','Are you sure you want to add a random user?','Add' , 'Cancel' , true).afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      const randomUser = {
        name: 'Random user ' + Math.floor(Math.random() * 100),
        age: Math.floor(Math.random() * 100),
        company: 'Random company ' + Math.floor(Math.random() * 100)
      };
      const currentData = this.dataSource.data;
      currentData.push(randomUser);
      this.dataSource.data = currentData;
    });
  }

  openModal(title: string, msg: string, okMsg?: string, noMsg?: string, enableActions?: boolean) {
    const dialogRef = this.diag.open(GenericDialogComponent, {
      width: '300px',
      data: {
        title: title,
        msg: msg,
        okMsg: okMsg,
        noMsg: noMsg,
        enableActions: enableActions
      }
    });
    return dialogRef;
  }


}
