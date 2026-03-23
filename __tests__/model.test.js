const {
    distancia,
    newCord 
} = require("../src/services/touristPoints/model.js");

describe("Testes da função newCord", () => {
    test("deve retornar uma string com 4 coordenadas", () => {
        const result = newCord(-23.5505, -46.6333);

        expect(typeof result).toBe("string");

        const partes = result.split(",");
        expect(partes).toHaveLength(4);
    });
});