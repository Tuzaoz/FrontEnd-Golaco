import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formularioLogin!: FormGroup;
  user = {
    login:' ',
    senha:' ',
    role:' '
  };

  constructor(  private router: Router) { 
  }

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      login: new FormControl('', Validators.required),
      senha:new FormControl ('', Validators.required)
    })
  }

  login(){
    // this.api.login(this.formularioLogin.value.login, this.formularioLogin.value.senha).subscribe(response => {
    //   if(response){
    //     this.redirecionar();
    //   }else{
    //     this.openSnackBar();
    // }
    // },err =>{
    //   console.log('error', err)
    // });
    

  }
  
  redirecionar(){
  // this.api.getUser(this.formularioLogin.value.login).subscribe(response => {
  //     if(response.role === 'admin'){
  //       this.teste()
  //     }else{
  //       this.router.navigate(['./reservas'])
  //     }
  //     },err =>{
  //       console.log('error', err)
  //     });
  }

  teste(){
    document.cookie = 'cname' + "=" + 'cvalue' + ";" + 'expires' + ";path=/"  }

  openSnackBar() {
    // this._snackBar.open('E-mail ou senha invalidos', 'X', {
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    //   duration:5000
    // });
  }

  cadastrar(){
    this.router.navigate(['./cadastrar'])
  }

}
