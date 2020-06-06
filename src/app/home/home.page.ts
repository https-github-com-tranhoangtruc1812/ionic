import { Component } from '@angular/core';
import  {AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private db : AngularFireDatabase,
              private storage:AngularFireDatabase
              ) {}
  listUsers : any; 
  username;
  password
   ngOnInit(){
     this.db.list(`Users`).valueChanges().subscribe(data =>{
       this.listUsers = data;
     })

       
  }
  dangnhap(){
    this.listUsers.forEach(element => {
      if(element.username == this.username && element.password == this.password){
        console.log('đăng nhập thành công')
      }
      else 
      console.log('đăng nhập thất bại')
    });
  }

}
