"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carsNamePrediction(carName, predictName) {
    if (carName == predictName) {
        console.log(`Is ${carName} == '${predictName}' ? I predict True.`);
    }
    else {
        console.log(`Is ${carName} == '${predictName}' ? I predict false.`);
    }
}
carsNamePrediction("Lexus", "Lexus");
carsNamePrediction("Lotus", "Lotus");
carsNamePrediction("Magna", "Magna");
carsNamePrediction("Manta", "Manta");
carsNamePrediction("subaru", "subaru");
carsNamePrediction("Lexus", "Lotus");
carsNamePrediction("Lotus", "subaru");
carsNamePrediction("Magna", "Manta");
carsNamePrediction("Manta", "Magna");
carsNamePrediction("subaru", "Lotus");
