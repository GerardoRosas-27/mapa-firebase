import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase-mapa';

  loginUser = false;

  ngOnInit(): void {
    this.loginUser = sessionStorage.getItem('sesion') === 'true' ? true : false; 
  }
  onLoger(loger: boolean){

    this.loginUser = loger;
  }

}
