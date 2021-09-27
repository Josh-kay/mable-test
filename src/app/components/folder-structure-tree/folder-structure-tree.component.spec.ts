import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderStructureTreeComponent } from './folder-structure-tree.component';

describe('FolderStructureTreeComponent', () => {
  let component: FolderStructureTreeComponent;
  let fixture: ComponentFixture<FolderStructureTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderStructureTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderStructureTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
