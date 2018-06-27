// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
  //let result = [];

  if (requestType === 'GET'){
    if (presetsIndex === 0 || presetsIndex === 1) {
      return [200, presets[presetsIndex]];

      //result[0] = 200;
      //result[1] = presets[presetsIndex];
    } else {
      return [404];
      //result[0] = 404;
    }
  } else if (requestType === 'PUT') {
    if (presetsIndex === 0 || presetsIndex === 1) {
      presets[presetsIndex] = newPresetArray;
      return [200, presets[presetsIndex]];
      //result[0] = 200;
    } else {

      return [404];
      //result[0] = 404;
    }
  } else {
    return [400];
    //result[0] = 400;
  }

  // return result;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
