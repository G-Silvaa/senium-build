import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { NavbarComponent } from "./navbar/navbar.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [NavbarComponent, ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, MatMenuModule, MatIconModule],
  exports: [NavbarComponent, ButtonComponent],
})
export class ComponentsModule {}
