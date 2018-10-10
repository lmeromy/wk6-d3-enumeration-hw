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
  // // DOES NOT USE ENUMERATION! but it does the job well:
  let transportArr = this.getModesOfTransport();
  return uniqueTransport = Array.from(new Set(transportArr));
  // a Set object lets you store unique values of any type

  // // Solution using enumeration:
  // let uniqueTransport = this.getModesOfTransport();
  //
  // return uniqueTransport.filter((element, index) => uniqueTransport.indexOf(element) === index);
  // // indexOf - returns Only the first index item that fulfils condition
};


module.exports = Traveller;
