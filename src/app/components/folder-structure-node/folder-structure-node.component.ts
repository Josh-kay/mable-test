import { Component, Input } from '@angular/core';
import { NodeModel, NodeType } from '../../shared/models/node.model';

@Component({
  selector: 'app-folder-structure-node',
  templateUrl: './folder-structure-node.component.html',
  styleUrls: ['./folder-structure-node.component.scss']
})

export class FolderStructureNodeComponent {

  @Input() node!: NodeModel;
  @Input() parent?: NodeModel;

  constructor() { }

  getNode(): NodeModel {
    return this.node;
  }

  setType(type: NodeType) {    
    this.node.setType(type);
  }

  setName(name: string) {   
    if(!name) {
      this.removeChild();
    } 
    this.node.setName(name);
  }

  canAddChild(): boolean {
    return this.node.type === 'folder';
  }

  addChild(): void {
    const child = new NodeModel('unset');
    this.node.addChild(child)
  }

  removeChild(): void {
    if(!this.parent) {
      return;
    }
    this.parent.removeChild(this.node.id);
  }

  isTypeSelected(type: NodeType) {
    return type === 'file' || type === 'folder';
  }

  showNodeDetails(): boolean {
    return !!this.node.name && this.isTypeSelected(this.node.type);  
  }

  showNodeNameInput(): boolean {
    return !this.node.name && this.isTypeSelected(this.node.type);    
  }

  showTypeSelect(): boolean {
    return this.node.type === 'unset';
  }

  getNodeIconPath(): string {
    if(this.node.type === 'folder') {
      return 'assets/folder-open-regular.svg'
    }
    return 'assets/file-regular.svg'
  }

}