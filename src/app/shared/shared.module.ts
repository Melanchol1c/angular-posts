import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AvatarComponent } from './components/avatar/avatar.component';
import { EntityInfoComponent } from './components/entity-info/entity-info.component';

@NgModule({
  declarations: [AvatarComponent, EntityInfoComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, AvatarComponent, EntityInfoComponent],
})
export class SharedModule {}
