import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-childlist',
    template: `
      <div>
      <p>{{item.title}}</p>
      </div>
  `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildListComponent {

    @Input() item: any;
    constructor() { }
}