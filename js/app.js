//global variable to store ajax data
var data;

var model = {
  getData: function() {
    return $.ajax({
      url: 'http://apis.is/concerts',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        data = response;
      }
    });
  }
}


var contoller = {
  init: function() {
    model.getData()
    view.init()
  },
  data: function() {
    return model.getData()
  }
}


var view = {
  init: function() {
    this.render();
  },
  render: function() {
    contoller.data().done(function() {
      $.each(data.results, function(_, val) {
        console.log(val);
      });
    });
  }
}
