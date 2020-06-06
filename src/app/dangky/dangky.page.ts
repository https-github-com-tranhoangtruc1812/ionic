import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFireList} from '@angular/fire/database'

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.page.html',
  styleUrls: ['./dangky.page.scss'],
})
export class DangkyPage implements OnInit {

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) { }
  userName : String;
  password: String;
  againPass: String;
   
  ngOnInit() {
  }
  kt() {
    if (this.againPass == this.password)
      return true;
    else return false
  }


  add() {
      
        console.log(this.userName, this.password)
      this.db.list('Users').push({username:this.userName,password:this.password})
      
      
    

  }
  

}
