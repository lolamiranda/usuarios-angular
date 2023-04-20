import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Usuario from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router, private UsuarioService: UsuarioService){
    this.form = this.fb.group({
      id: ['',Validators.required],
    })

  }

  ngOnInit(): void {
    }
    @Output() rstatus = new EventEmitter<boolean>();

    eliminar(){
      const id = this.form.value.id;
      console.log(id);
        
        this.UsuarioService.deleteUsuario(id)
        .subscribe(response => {
          if (response.status == 200) {
            console.log("dadded true")
            this.rstatus.emit(true);
            this.bien();
          } else {
            console.log("added true")
            this.rstatus.emit(false);
          }
        });
        
    }
     
      
    

    bien(){
      this._snackBar.open("Usuario eliminado correctamente",'',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'top'
      })

      }
     
    }
  