import { expect } from 'chai';
import { isApproved } from '../src/school.js';

describe(' Teste na função isApproved: ', ()=> {
    it(' deve retornar true ao passar notas 10 e 10', () => {
        const result = isApproved(10,10);
        expect(result).to.be.true;
    })
    it(' deve retornar false ao passar notas 0 e 0', () => {
        const result = isApproved(0,0);
        expect(result).to.be.false;
    })
    it(' deve retornar true ao passar notas 6.5 e 6.5', () => {
        const result = isApproved(6.5,6.5);
        expect(result).to.be.true;
    })
    it('deve retornar true a media exata de 6', () => {
        const result = isApproved(6,6);
        expect(result).to.be.true;
    })
    it('deve retornar false a passsar 5.5 5.5', () => {
        const result = isApproved(5.5,5.5);
        expect(result).to.be.false;
    })
    it('deve retornar false em enviar valores negativos', ()=> {
        const result = isApproved(-1,-2);
        expect(result).to.be.false;
    })
    it('deve retornar false em enviar um numero e um carctere', ()=> {
        const result = isApproved(10, 'A');
        expect(result).to.be.false;
    })

});