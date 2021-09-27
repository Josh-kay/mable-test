import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderStructureNodeComponent } from './folder-structure-node.component';

describe('FolderStructureNodeComponent', () => {
  let component: FolderStructureNodeComponent;
  let fixture: ComponentFixture<FolderStructureNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderStructureNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderStructureNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
