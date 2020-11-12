import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() logeado: EventEmitter<boolean> = new EventEmitter<boolean>();

  registrar: boolean = false;

  user: User = new User();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("sesion activa:", this.loginService.currentUser);
    //this.logeado.emit(this.loginService.authenticated);
  }

  onEnviarDatos() {

    if (this.registrar) {
      console.log("registrar, usuario: ", this.user);
      this.loginService.signUpWithEmail(this.user).then(result => {
        console.log(result);
        if(result.additionalUserInfo.isNewUser){
          sessionStorage.setItem("sesion",'true');
          Swal.fire('Exito', 'Se creo correctamente el usuario', 'success');
          this.logeado.emit(result.additionalUserInfo.isNewUser);
        }else{
          Swal.fire('Error', 'No se pudo crear el usuario', 'error');
        }
       
      }).catch(error => {
        console.log(error);
        
        Swal.fire('Error', 'No se pudo crear el usuario', 'error');
      })
    }else{
      console.log("Iniciar sesión, usuario: ", this.user);
      this.loginService.signInWithEmail(this.user).then(result => {
        console.log(result);
        Swal.fire('Exito', 'Se inicio sesión', 'success');
        sessionStorage.setItem("sesion", 'true');
        this.logeado.emit(true);
      }).catch(error => {
        console.log(error);
        Swal.fire('Error', 'No se pudo iniciar sesión', 'error');
      })
    }

  }



}
