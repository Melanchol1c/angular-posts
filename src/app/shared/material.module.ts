import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatToolbarModule, MatListModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatListModule, MatCardModule],
})
export class MaterialModule {}
