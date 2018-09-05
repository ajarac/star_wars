import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { COMPONENTS } from './components/index';

const MODULES = [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule ];

@NgModule({
	imports: [ ...MODULES ],
	exports: [ ...MODULES, ...COMPONENTS ],
	declarations: [ ...COMPONENTS ]
})
export class SharedModule {}
