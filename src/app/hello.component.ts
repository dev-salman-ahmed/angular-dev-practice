import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<h1>My Store</h1>`,
  styles: [`h1 { font-family: Lato; background:blue;color:#fff;padding:10px }`]
})
export class HeaderComponent  {
  @Input() name: string;
}
