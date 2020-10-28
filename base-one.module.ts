import { DemoNgZorroAntdModule } from './../core/shared/DemoNgZorroAntdModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseOneRoutingModule } from './base-one-routing.module';
import { NavOneAllComponent } from './nav-one-all/nav-one-all.component';
import { MainOneAllComponent } from './main-one-all/main-one-all.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './../icons-provider.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [NavOneAllComponent, MainOneAllComponent],
  imports: [
    CommonModule,
    BaseOneRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzCheckboxModule,
    FormsModule,
    NzDatePickerModule,
    NzRadioModule,
    NzAvatarModule,
    NzToolTipModule
  ]
})
export class BaseOneModule { }
