import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  private element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.element.focus();
  }
}