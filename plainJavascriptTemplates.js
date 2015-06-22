var MyView = Backbone.View.extend({
    render: function() {
        var data = { 
            "lat": "27", 
            "lon": "90"
        };
        console.log(data);
        var myTemp = $('#myTemplate').html();
        this.$el.html(_.template(myTemp, data));
        return this;
    }
});

var v = new MyView({el: 'body'});
v.render();


// Sample Template
<script type="text/html" id="myTemplate">
    <p>Latitude: <%= lat %></p>
    <p>Longittude: <%= lon %></p>    
</script>     