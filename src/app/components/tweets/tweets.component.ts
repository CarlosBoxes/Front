import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";
import { GLOBAL } from "../../services/GLOBAL";
import {UserService} from "../../services/user.service"; 
import {TweetService } from "../../services/tweet.service"; 
import {Router} from "@angular/router";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  public socket = io('http://localhost:4201');
  public identity;
  public url;
  public UsuarioId; 
  public datos_user : any = {};
  public datos_publicaciones : any = {}; 
  public datos_follow: any= {}; 
  public datos_mis_tweets: any = {}; 
  public datos_mis_seguidores: any = {}; 
  public count_seguidores; 
  public count_follow; 
  public texto;

  constructor(
    private _userService: UserService,
    private _tweetService: TweetService,
    private _router:Router, 
     
  ) {
    this.url = GLOBAL.url; 
    this.identity = this._userService.getIdentity();
    this.UsuarioId = this.identity._id; 

   }

  ngOnInit(): void {
    if(this.identity)
    {
      this._userService.get_user(this.UsuarioId).subscribe(
        response =>{
          this.datos_user = response.user; 
        }, 
        err=>{

        }
      )

      this._tweetService.get_count_follow(this.UsuarioId).subscribe(
        response => {
          this.count_follow = response.follows;
        },
        err => {

        }
      )

      this._tweetService.get_count_seguidores(this.UsuarioId).subscribe(
        response => {
          this.count_seguidores = response.seguidores;
        },
        err => {

        }
      )

      this._tweetService.get_tweets(this.UsuarioId).subscribe(
        response => {
          this.datos_publicaciones = response.tweets;
        },
        err => {

        }
      )


      this._tweetService.get_follow(this.UsuarioId).subscribe(
        response => {
          this.datos_follow = response.users;
        },
        err => {

        }
      )

      this._tweetService.get_seguidores(this.UsuarioId).subscribe(
        response => {
          this.datos_mis_seguidores = response.users;
        },
        err => {

        }
      )

      this._tweetService.get_mis_tweets(this.UsuarioId).subscribe(
        response => {
          
          this.datos_mis_tweets = response.tweets;
        },
        err => {

        }
      )

    }else{
      this._router.navigate(['']); 
    }
  }

  GuardarPublicacion()
  {
     var datos_user: any = {};

     datos_user = {
       texto: this.texto , 
       user: this.UsuarioId
     }

    console.log(datos_user);

    this._tweetService.post_publicar(datos_user).subscribe(
      response => {
        console.log(response);
        if (response){
          this.datos_publicaciones.unshift(response.tweet);
          this.datos_mis_tweets.unshift(response.tweet);
          this.datos_mis_tweets.pop();
          
        }
        this.texto = "";
        console.log(this.datos_publicaciones);
      },
      error => {
        console.log(error);
      }
    )
  }

  


}
