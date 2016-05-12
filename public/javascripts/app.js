$('#get-dish').on('click', function(event) {
  event.preventDefault();

  $.get("/new-dish", function(newDish) {
    alert(newDish["dish"]);
  });
});
