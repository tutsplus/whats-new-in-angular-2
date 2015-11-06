import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {myService} from './myService';

@Component({ 
    selector: 'sub-comp'
})
@View({
    directives: [NgFor],
    template: `
    <div *ng-for="#info of MyService.myInfo">
        <h2><em>{{ info }}</em></h2>
    </div>
        <input #my-box (keyup.enter)="onEnter(myBox.value)">
    <div>

    </div>
    `
})
class SubComponent { 
    
    
    constructor( public MyService: myService) { 
        
        console.log(MyService.myInfo);
    }
    onEnter(myBox){ 
        this.MyService.addInfo(myBox);
    }
}

@Component({ 
    selector: 'ts-comp'
})
@View({ 
    template: `
    <h2>I am learning </h2>
    <sub-comp></sub-comp>
    `,
    directives: [SubComponent]
})
class TSComponent { 
    myFramework: string;
    
    constructor() { 
        this.myFramework = "Angular 2";
        
    }
}

bootstrap(TSComponent, [myService]);
