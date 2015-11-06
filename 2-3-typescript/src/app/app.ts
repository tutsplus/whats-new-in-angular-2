import {Component, View, bootstrap} from 'angular2/angular2';

@Component({ 
    selector: 'sub-comp'
})
@View({ 
    template: `
    <h2><em>Level: {{ mySkill }}</em></h2>
    `
})
class SubComponent { 
    mySkill: string;
    
    constructor() { 
        this.mySkill = "Novice";

    }
}

@Component({ 
    selector: 'ts-comp'
})
@View({ 
    template: `
    <h2>I am learning {{ myFramework }}</h2>
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

bootstrap(TSComponent);
