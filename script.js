function Item(name, price, ozPer, ozUsed) {
  this.name = name;
  this.price = price;
  this.ozPer = ozPer;
  this.ozUsed = ozUsed;
  this.cost = (this.price / this.ozPer) * this.ozUsed;
}

var btn = $('.btn')

btn.on('click', function() {
  var nameA = $('.nameA').val();
  var priceA = $('.a').val();
  var ozPerA = $('.b').val();
  var ozUsedA = $('.c').val();

  var nameB = $('.nameB').val();
  var priceB = $('.d').val();
  var ozPerB = $('.e').val();
  var ozUsedB = $('.f').val();

  var nameC = $('.nameB').val();
  var priceC = $('.d').val();
  var ozPerC = $('.e').val();
  var ozUsedC = $('.f').val();

  var ingredient1 = new Item(nameA, priceA, ozPerA, ozUsedA);
  var ingredient2 = new Item(nameB, priceB, ozPerB, ozUsedB);
  var ingredient3 = new Item(nameC, priceC, ozPerC, ozUsedC);
  var cost = ingredient1.cost + ingredient2.cost + ingredient3.cost;

  var string = "It costs $" + cost + " to make this drink."
  var target = $('.target')
  target.append(string);
  console.log(cost);

});
