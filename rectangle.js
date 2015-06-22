(function(){
	
	var Rectangle = Backbone.Model.extend({});

	var RectangleView = Backbone.View.extend({
		tagName: 'div',
		className: 'rectangle',
		events:{
			'click': 'move'
		},
		render: function() {
			this.setDimensions();
			this.setPosition();
			return this;
		},
		setDimensions: function() {
			this.$el.css({
				'width': this.model.get('width') + 'px',
				'height': this.model.get('height') + 'px'
			});
		},
		setPosition: function() {
			this.$el.css({
				'top': this.model.get('position').y + 'px',
				'left': this.model.get('position').x + 'px' 
			});
		},

		move: function() {
			this.$el.css('left', this.$el.position().left + 10);
		}
	});

	// var myRectangle = new Rectangle({
	// 	'width': '100',
	// 	'height': '60',
	// 	'position': {
	// 		'x': '40',
	// 		'y': '60'
	// 	}
	// });

	// 	var myView = new RectangleView({
	// 	model: myRectangle
	// });

	//$('div#canvas').append(myView.render().el);

	var rectModels = [
		new Rectangle({'width':'100','height':'40','position':{'x':'40','y':'60'}}),
		new Rectangle({'width':'60','height':'70','position':{'x':'140','y':'160'}}),
		new Rectangle({'width':'150','height':'140','position':{'x':'340','y':'360'}})
		];

	_(rectModels).each(function(model){
		var myRectview = new RectangleView({model:model});
		$('div#canvas').append(myRectview.render().el);
	});

	

}());
