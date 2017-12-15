'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieTable = document.getElementById('cookieTable');

var allStores = [];

function SalmonCookies (name, min, max, avg) {
  this.name = name;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookiesPerCust = avg;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
}

new SalmonCookies('1st and Pike', 23, 65, 6.3);
new SalmonCookies('SeaTac Airport', 3, 24, 1.2);
new SalmonCookies('Seattle Center', 11, 38, 3.7);
new SalmonCookies('Capitol Hill', 20, 38, 2.3);
new SalmonCookies('Alki', 2, 16, 4.6);

SalmonCookies.prototyoe.custPerHourFunc = function(){
  for(var i = 0; i < hours.length; i++){
    this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
  }
};

SalmonCookies.prototype.cookiesPerHourFunc = function(){
  this.custPerHourFunc();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
}, //help from Sam's demo
SalmonCookies.render = function(){
  this.cookiesPerHourFunc();

  var trEL = document.getElementById('tr');
  for(var i = 0; i < hours.length; i++){

    var thEl = document.createElement('li');

    liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
  ulEl.appendChild(liEl);
}

var seaTacStore = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('seatac');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaCenStore = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('sea-cen');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var capHillStore = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('capitol hill');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var alkiStore = {
  name: 'Aliki Store',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('alki');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};
