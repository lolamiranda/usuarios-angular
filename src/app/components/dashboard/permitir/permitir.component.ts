import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import usuario from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-permitir',
  templateUrl: './permitir.component.html',
  styleUrls: ['./permitir.component.css']
})
export class PermitirComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router,private UsuarioService:UsuarioService){
    this.form = this.fb.group({
      id: ['',Validators.required],

    })

  }

  ngOnInit(): void {
  }
  @Output() rstatus = new EventEmitter<boolean>();



  permitir(){
    const id = this.form.value.id;
     
      console.log(id);
      if (id == '1234'){
        this.bien();
      }else{
        this.error();
      }
      
  }
   

  error(){
    this._snackBar.open("No eres Administrador",'',{
      duration:5000,
      horizontalPosition:'center',
    })

    }

    bien(){
      console.log("BIEN")
       this.router.navigateByUrl('/dashboard/usuarios');
    }
  }

