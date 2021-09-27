import { v4 as uuid } from 'uuid';
export type NodeType = 'folder' | 'file' | 'unset' | null;

export class NodeModel {
    type: NodeType;
    name?: string;
    children?: NodeModel[];
    id: string;

    constructor(type: NodeType, name?: string, children?: NodeModel[]) {
        this.type = type;
        this.id = uuid();
        this.name = name;
        this.children = children;
    }

    addChild(child: NodeModel ): void {
        if(!this.children) {
            this.children = [];
        }
        this.children.push(child);
    }

    removeChild(childId: string) : void {
        if(!this.children) {
            return;
        }
        this.children = this.children.filter(function(child){ 
            return child.id !== childId; 
        });
    }

    setType(type: NodeType) {
        this.type = type;
    }

    setName(name: string) {
        this.name = name;
    }
}