export class myService { 
    myInfo:string[] = ['Angular2', 'jQuery', 'Javascript' ];
    
    addInfo(value:any){ 
        this.myInfo.push(value);
    }

}