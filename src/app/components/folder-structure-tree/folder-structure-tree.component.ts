import { Component } from '@angular/core';
import { NodeModel } from '../../shared/models/node.model';

@Component({
  selector: 'app-folder-structure-tree',
  templateUrl: './folder-structure-tree.component.html',
  styleUrls: ['./folder-structure-tree.component.scss']
})

export class FolderStructureTreeComponent {

  private rootNode: NodeModel;

  constructor() { 
    this.rootNode = new NodeModel('folder', 'root');
  }

  getRootNode(): NodeModel {
    return this.rootNode;
  }

  addRootLevelNode(): void {
    const node = new NodeModel('folder');
    this.rootNode.addChild(node);
  }

}
