import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PopoverModule } from "ngx-smart-popover";
import { ParticipantesComponent } from "src/components/participantes/participantes.component";
import { ParticipantesDetalhesComponent } from "src/components/participantes-detalhes/participantes-detalhes.component";

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    ParticipantesDetalhesComponent,
  ],
  imports: [BrowserModule, PopoverModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
