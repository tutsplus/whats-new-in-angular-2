var SecondComponent = ng.
    Component({
        selector: 'second-comp'
    })
    .View({
        template: '<h2><em>Level: {{ skill }}</em></h2>'
    })
    .Class({
        constructor: function () { 
            this.skill = 'Expert';
        }
    });


var FirstComponent = ng.
    Component({
        selector: 'first-comp'
    })
    .View({
        directives: [SecondComponent],
        template: '<h2>I am learning {{ myFramework }}</h2><br><second-comp></second-comp>'    
    })
    .Class({ 
        constructor: function () { 
            this.myFramework = "Angular2";
        }

    });
    
document.addEventListener('DOMContentLoaded', function() {
    ng.bootstrap(FirstComponent);
});