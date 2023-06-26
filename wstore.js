"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PORT = 3003;
//port where the app is listening
app.use(express_1.default.json());
var workersAB = [
    //database
    {
        id: "1",
        name: "Camilo Santacruz",
        role: "aseo general",
        cc: "1234",
        email: "cs@gmail.com",
        address: "cll 25 #16-31",
        age: "25",
        cell: "3214568595",
        civilStatus: "soltero",
        eps: "masv",
        bloodType: "AB-",
    },
    {
        id: "2",
        name: "María Bass",
        role: "Contadora Pública",
        cc: "1244",
        email: "lacontadoramaspop@gmail.com",
        address: "cll 3 #5-78",
        age: "23",
        cell: "327855658",
        civilStatus: "soltera",
        eps: "Independiente",
        bloodType: "O+",
    },
    {
        id: "3",
        name: "Campo Elias",
        role: "seguridad",
        cc: "6669",
        email: "smd@gmail.com",
        address: "cll 3 #5-78",
        age: "42",
        cell: "3004578965",
        civilStatus: "casado",
        eps: "nuevaM",
        bloodType: "O-",
    },
    {
        id: "4",
        name: "Yanela Muñoz",
        role: "Vendedora principal",
        cc: "7530",
        email: "soloFisioloks@gmail.com",
        address: "cll falsa 123  #5-78",
        age: "24",
        cell: "7202020",
        civilStatus: "soltera",
        eps: "emmsana",
        bloodType: "AB+",
    }
];
app.get('/workers', function (request, response) {
    response.json(workersAB);
    //resource information is consulted here
});
app.get('/workers/:id', function (request, response) {
    var id = request.params.id;
    var result = workersAB.filter(function (item) { return item.id === id; });
    response.json(result);
    //resource information is consulted here
});
app.post('/workers', function (request, response) {
    var body = request.body;
    workersAB.push(body);
    response.send('El trabajador se ha guardado con exito');
    //create a new resource here
});
app.put('/trabajadores/:id', function (request, response) {
    var id = request.params.id;
    var body = request.body;
    var workerindex = workersAB.findIndex(function (item) { return item.id === id; });
    workersAB[workerindex] = body;
    response.send('trabajador actualizado con exito');
    //an existing resource is modified here
});
app.delete('/workers', function (request, response) {
    var id = request.params.id;
    var result = workersAB.filter(function (item) { return item.id !== id; });
    workersAB = result;
    response.send('trabajador eliminado');
    //delete a resource or object
});
app.listen(PORT, function () {
    console.log("la app se esta ejecutando de https//localhost: ", +PORT);
    //here the app listens
});
