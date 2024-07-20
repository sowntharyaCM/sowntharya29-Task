var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color, type) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        type: type
    };
};

getCarInfo = function (car) {
    return car.make + " " + car.model + ": " + car.year + " " + car.color + " " + car.type;
};

car1 = buildCar("Toyota", "Camry", 2022, "White", "Sedan");
car2 = buildCar("Ford", "Mustang", 2020, "Red", "Coupe");

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
