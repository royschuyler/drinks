function Item(name, price, ozPer, ozUsed) {
  this.name = name;
  this.price = price;
  this.ozPer = ozPer;
  this.ozUsed = ozUsed;
  this.cost = (this.price / this.ozPer) * this.ozUsed;
}

var btn = $('.btn');
var saveBtn = $('.saveBtn');
var newBtn = $('.newBtn')


btn.on('click', function () {
  btn.attr("disabled","disabled");
  newBtn.css({display: "block"})

  var drinkName = $('.drinkName').val();
  var nameA     = $('.nameA').val();
  var priceA    = $('.a').val();
  var ozPerA    = $('.b').val();
  var ozUsedA   = $('.c').val();

  var nameB     = $('.nameB').val();
  var priceB    = $('.d').val();
  var ozPerB    = $('.e').val();
  var ozUsedB   = $('.f').val();

  var nameC     = $('.nameC').val();
  var priceC    = $('.g').val();
  var ozPerC    = $('.h').val();
  var ozUsedC   = $('.i').val();

  var ingredient1 = new Item(nameA, priceA, ozPerA, ozUsedA);
  var ingredient2 = new Item(nameB, priceB, ozPerB, ozUsedB);
  var ingredient3 = new Item(nameC, priceC, ozPerC, ozUsedC);
  var cost = ingredient1.cost + ingredient2.cost + ingredient3.cost;

  var target = $('.target');
  var breakdownTarget = $('.breakdownTarget');
  var string = "It costs $" + cost + " to make this " + drinkName + ".";
  var breakdownString =
    '<li>The ' + ingredient1.name + ' cost is $' + ingredient1.cost + '.</li>' +
    '<li>The ' + ingredient2.name + ' cost is $' + ingredient2.cost + '.</li>' +
    '<li>The ' + ingredient3.name + ' cost is $' + ingredient3.cost + '.</li>';

  target.append(string);
  breakdownTarget.append(breakdownString);
  saveBtn.css({display: "block"})
});

newBtn.on('click', function () {

  var target = $('.target');
  var breakdownTarget = $('.breakdownTarget');
  target.empty();
  breakdownTarget.empty();

  var drinkName = $('.drinkName').val('');
  var nameA     = $('.nameA').val('');
  var priceA    = $('.a').val('');
  var ozPerA    = $('.b').val('');
  var ozUsedA   = $('.c').val('');

  var nameB     = $('.nameB').val('');
  var priceB    = $('.d').val('');
  var ozPerB    = $('.e').val('');
  var ozUsedB   = $('.f').val('');

  var nameC     = $('.nameC').val('');
  var priceC    = $('.g').val('');
  var ozPerC    = $('.h').val('');
  var ozUsedC   = $('.i').val('');

  btn.removeAttr("disabled");
  newBtn.css({display: "none"})
  saveBtn.css({display: "none"})


});


