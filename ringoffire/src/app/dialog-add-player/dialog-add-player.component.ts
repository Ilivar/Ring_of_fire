import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, CommonModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
name: string = '';

constructor(private dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

onNoClick(){
  this.dialogRef.close();
}

}
