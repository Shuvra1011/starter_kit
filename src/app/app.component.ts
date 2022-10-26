import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(  private snackbar: MatSnackBar) { }
  ngOnInit(): void {
    this.snackbar.open('Hello World', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}
