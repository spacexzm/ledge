import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgeMermaidComponent } from './ledge-mermaid.component';
import { TohtmlPipe } from '../../pipes/tohtml.pipe';

describe('LedgeMermaidComponent', () => {
  let component: LedgeMermaidComponent;
  let fixture: ComponentFixture<LedgeMermaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LedgeMermaidComponent, TohtmlPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeMermaidComponent);
    component = fixture.componentInstance;
    component.data = `gantt
  title  双周迭代模型
  dateFormat YYYY-MM-DD
  axisFormat W%U

  section A 组
  需求评审排期  :a1, 2020-01-05, 7d
  提供 UI 素材 :a2, after a1 ,7d
  API 开发    :a3, after a1 , 7d
  第一周开始   :done, a4, after a3 , 7d
  第二周开始   :done, a5, after a4 , 7d
  提测        :crit, a6, after a5 , 7d
  灰度全量     :crit, a7, after a6 , 3d

  section B 组
  需求评审排期  :b1, 2020-01-19, 7d
  提供 UI 素材 :b2, after b1 ,7d
  API 开发    :b3, after b1 , 7d
  第一周开始   :done, b4, after b3 , 7d
  第二周开始   :done, b5, after b4 , 7d
  提测        :crit, b6, after b5 , 7d
  灰度全量     :crit, b7, after b6 , 3d
    `;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
