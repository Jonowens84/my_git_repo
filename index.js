//write a function to define the area
function calculateTheArea(length, width) {
  return length * width;
}

//function to define the volume
function calculateTheVolume(length, width, height) {
  return length * width * height;
}

//function to define how much area a meter square of material covers
function quantityOfCubicMetersRequired(area, volume, depth) {
  return area / (volume / depth);
}

//function to calculate the price of materials
function priceOfMaterials(pricePerMeterSquare, noOfMeterSquare) {
  return "£" + pricePerMeterSquare * noOfMeterSquare;
}

let volume = calculateTheVolume(10, 5, 10);
let area = calculateTheArea(10, 5);
let noOfMetersSquared = quantityOfCubicMetersRequired(50, 500, 15);
let price = priceOfMaterials(12, 1.5);
console.log(area, volume, noOfMetersSquared, price);

//create an object to describe the values of a meter cubed bag of MOT

mot = {
  height: 100,
  width: 100,
  length: 100,
};
let motArea = calculateTheArea(mot.width, mot.length);

console.log(mot.length, motArea);

// function to convert motArea into meters
function motAreaInMeters(motArea) {
  return motArea / 100;
}

let meters = motAreaInMeters(motArea);
console.log(meters);
