import { Component, OnDestroy, OnInit } from '@angular/core';

import { PoMenuItem, PoSelectOption } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {

  stateOption: string = 'SAO PAULO';
  state: any ;
  stateOptions: Array<PoSelectOption> = [];
  contact: any;

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  //private statesSubscription: Subscription;

  private onClick() {
    alert('Clicked in menu item')
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnDestroy(){
    //this.statesSubscription?.unsubscribe();
  }

  onChangeState() {
    console.log('state',this.stateOption);
  }

  initialize() {
    this.state = '01'
    this.stateOptions = [
                          { label: 'SAO PAULO'     , value: '01' },
                          { label: 'RIO DE JANEIRO', value: '02' },
                          { label: 'MINAS GERAIS'  , value: '03' },
                          { label: 'BAHIA'         , value: '04' }
                        ];
    return this.state = this.stateOptions[1].value;
   // this.getStateByValue(this.state);
   // console.log('state',this.state);
   // console.log('state',this.stateOptions);
   // this.stateOptions.values
  }

  EventSelecFilial(id: string): void {
    console.log('EventSelecFilial',id);
    this.getStateByValue(id);
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

}
