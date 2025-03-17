const app = angular.module("MyApp", []);

app.
  component('inputWidget', {
    template: 
    '<div class="field-widget">' +
                '<p class = "field-widget-text">{{$ctrl.text}}</p>'+
               '<input class="field-widget-input" type="{{$ctrl.type}}" id="{{$ctrl.id}}" name="fname">' +
            '</div>',
    controller: function inputWidget() {
      this.text = "login :"
      this.type = "text"
      this.id= "username"
    }
  });