import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {HistoireComponent} from "./modal/histoire/histoire.component";
import {PedagogieComponent} from "./modal/pedagogie/pedagogie.component";
import {CommunicationComponent} from "./modal/communication/communication.component";
import {DeveloppementComponent} from "./modal/developpement/developpement.component";

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(){
  }

  openDialogHist(): void {
    const dialogRef = this.dialog.open(HistoireComponent, {
      height: '90%',
      width: '90%',
    });
  }

    openDialogPedago(): void {
    const dialogRef = this.dialog.open(PedagogieComponent, {
      height: '90%',
      width: '90%',
    });
    }

    openDialogComm(): void {
      const dialogRef = this.dialog.open(CommunicationComponent, {
        height: '90%',
        width: '90%',
      });
    }

    openDialogDev(): void {
      const dialogRef = this.dialog.open(DeveloppementComponent, {
        height: '90%',
        width: '90%',
      });
}}
