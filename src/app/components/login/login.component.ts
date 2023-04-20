import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router ,private UsuarioService:UsuarioService){
    this.form = this.fb.group({
      
      usuario: ['',Validators.required],
      rol: ['',Validators.required],
    })

  }

  ngOnInit(): void {
    }
    @Output() rstatus = new EventEmitter<boolean>();

    ingresar(){
      const usuario = this.form.value.usuario;
      const rol = this.form.value.rol;
     
      console.log(usuario);
      console.log(rol);

   
      this.UsuarioService.createUsuario(usuario,rol)
        .subscribe(response => {
          if (response.status == 200) {
            console.log("dadded true")
            this.rstatus.emit(true);
          } else {
            console.log("added true")
            this.rstatus.emit(false);
          }
        });
        this.bien();
    }
     


      bien(){
        this._snackBar.open("Usuario creado correctamente ",'',{
          duration:3000,
          horizontalPosition:'center',
        })
        this.router.navigateByUrl('/dashboard');
      }
    }
  