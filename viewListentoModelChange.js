var MyModel = Backbone.Model.extend({});

var m = new MyModel({
    'text': new Date().toString()
});

var MyView = Backbone.View.extend({
    tagName: 'div',
    className: 'mydiv',
    initialize: function() {
        this.model.on('change:text', function(){
            this.render();
        }, this);
    },
    render: function(){
        this.$el.html(this.model.get('text'));
        return this;
    }
});

var v = new MyView({model: m});
$('body').append(v.render().el); // this is required as el is not in DOM

setInterval(function(){
    m.set('text', new Date().toString());
}, 1000);


// or this : Here append is not required as el is in the DOM

// var MyView = Backbone.View.extend({
//     initialize: function() {
//         this.model.on('change:text', function(){
//             this.render();
//         }, this);
//     },
//     render: function(){
//         this.$el.html(this.model.get('text'));
//         return this;
//     }
// });

// var v = new MyView({model: m, el: 'body'});
// v.render(); 




// Sample View
//var V = Backbone.View.extend({
//     id: 'one'
//     tagName: 'div',
//     className: 'div-class',
//     attributes: {
//         data_cardType: 'VISA',
//         data_cardExpiry: false
//     }
// });

// var v = new V();
