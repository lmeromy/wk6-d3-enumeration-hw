const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
      return journey.startLocation;
    })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((counter, journey) => {
    return counter + journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {

    // either use filter with indexOf, or use set and convert that back to an array with Array.from(mySet) or look up another method to find unique values using enumeration
  // var a = ["1", "1", "2", "3", "3", "1"];
  // var unique = a.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

  let transport_array = this.getModesOfTransport();
  return list = transport_array.filter((x, i, a) => a.indexOf(x) == i)

// x --> item in array
// i --> index of item
// a --> array reference, (in this case "list")


  // // THIS DOES NOT USE ENUMERATION! but it works :
  // let transport_unique = [];
  // // const result = this.journeys.includes((journey) {
  // // solution adapted from stackoverflow:
  // for(let i = 0; i < this.journeys.length; i++){
  //   if(!transport_unique.includes(this.journeys[i].transport)){
  //     transport_unique.push(this.journeys[i].transport);
  //   }
  // }
  // return transport_unique;

};


module.exports = Traveller;
