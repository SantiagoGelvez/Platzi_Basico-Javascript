function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];
var marcas = ["Chevrolet", "Mazda", "Tesla", "Audi"];
var modelos = ["Aveo", "3", "Model S", null];
var annios = [2017, 2019, 2021, 2022];

for (var i = 0; i < 4; i++){
    var nuevoAuto = new auto(marcas[i], modelos[i], annios[i]);
    autos.push(nuevoAuto);
}