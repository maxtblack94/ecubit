import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

/*
* This component is used to display a generic dialog.
* It can be used to simply display text or to make a choice.
* */
@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.sass']
})
export class GenericDialogComponent {


  msg: string;
  title: string;
  // when true, displays the two buttons with okMsg and noMsg labels
  enableActions: boolean;
  okMsg: string;
  noMsg: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // mandatory
    this.msg = this.data.msg;
    // mandatory
    this.title = this.data.title;
    // optional
    this.enableActions = this.data.enableActions === undefined ? false : this.data.enableActions;
    // optional
    this.okMsg = this.data.okMsg === undefined ? 'YES' : this.data.okMsg;
    // optional
    this.noMsg = this.data.noMsg === undefined ? 'NO' : this.data.noMsg;
  }

}
