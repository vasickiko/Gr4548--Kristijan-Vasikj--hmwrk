
function convertMilesToKm(mi){
  return mi * 1.6;
}

function convertCelsuisToFahrenheit(c){
  return (c * 9/5) + 32;
}

function convertPoundsToKilogram(lbs){
  return lbs * 0.453592;
}

function convertFeetToMetres(ft){
  return ft * 0.3048;
}

module.exports = {
  convertMilesToKm,
  convertCelsuisToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMetres
};