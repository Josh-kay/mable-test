import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FolderStructureTreeComponent } from './components/folder-structure-tree/folder-structure-tree.component';
import { FolderStructureNodeComponent } from './components/folder-structure-node/folder-structure-node.component';
import { AutofocusDirective } from './shared/directives/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    FolderStructureTreeComponent,
    FolderStructureNodeComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
