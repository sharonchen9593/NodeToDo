var searchTodo = () => {
  $.ajax({
    url: apiUrl,
    type: 'GET',
    contentType: 'application/json',
    success: function(data) {
      console.log("data")
    },
    error: function() {
      console.log("error")
    }
  })
}