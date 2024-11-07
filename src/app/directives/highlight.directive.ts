import { Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{
  constructor(private ele:ElementRef,private render:Renderer2) {}
@HostListener('mouseenter') onmousehover()
{
  this.render.setStyle(this.ele.nativeElement, 'background','lightblue')
}
@HostListener('mouseleave') onmouseout()
{
  this.render.setStyle(this.ele.nativeElement, 'background','none')
}
}