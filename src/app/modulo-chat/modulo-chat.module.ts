import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloChatRoutingModule } from './modulo-chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms'; 
import {Mensaje} from '../clases/mensaje';
import { Firestore } from '@angular/fire/firestore';




@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ModuloChatRoutingModule,
    FormsModule,
    
  ],
  exports:[ChatComponent]
})
export class ModuloChatModule { }
