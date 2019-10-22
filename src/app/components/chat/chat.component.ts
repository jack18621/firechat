import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string="";
  constructor(private chat:ChatService) { 
    this.chat.cargarMensajes().subscribe()
  }

  ngOnInit() {
  }

  enviarMensaje(){
    if(this.mensaje.length===0){
      return
    }
    this.chat.agregarMensajes(this.mensaje).then(()=>this.mensaje=""
    ).catch(err=>console.log("Error", err)
    );

    
  }
}
