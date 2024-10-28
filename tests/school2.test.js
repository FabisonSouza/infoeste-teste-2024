import { expect } from 'chai';
import { evaluateStudent } from '../src/school2.js';

describe('Teste para school2', () => {
    it ('deve retornar true ao passar uma string e dois numeros inteiros Manu, 10 e 10', () => {
        const result = evaluateStudent('Manu',10,10);
        expect(result).to.be.equal("Approved");
    });
    it ('deve retornar true ao passar uma string e dois numeros qubrados Manu, 6.5 e 6.5', () => {
        const result = evaluateStudent('Manu',6.5,6.5);
        expect(result).to.be.equal("Approved");
    });
    it ('deve retornar true ao passar uma string e um numero quebrado e outro inteiro Manu, 5, 8.5', () => {
        const result = evaluateStudent('Manu',5,8.5);
        expect(result).to.be.equal("Approved");
    });
    it ('deve retornar invalid name ao passar uma algo diferente de uma string no primeiro parametro', () => {
        const result = evaluateStudent(1,5,8.5);
        expect(result).to.be.equal("Invalid name");
    });
    it ('deve retornar invalid name ao passar uma algo de tamanho menor que 3', () => {
        const result = evaluateStudent("eu",5,8.5);
        expect(result).to.be.equal("Invalid name");
    });
    it ('deve retornar invalid number quando for algo negativo', () => {
        const result = evaluateStudent("Manu",-5,8.5);
        expect(result).to.be.equal("Invalid grade");
    });
    it ('deve retornar invalid number quando for uma string', () => {
        const result = evaluateStudent("Manu","ella",8.5);
        expect(result).to.be.equal("Invalid grade");
    });
    it ('deve retornar reitaned quando for string 1 0', () => {
        const result = evaluateStudent("Manu",1,0);
        expect(result).to.be.equal("Retained");
    });
});