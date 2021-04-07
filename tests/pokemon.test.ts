import {Pokemon} from '../pokemon';
import {carapuce, pikachu, papilusion, other_pikachu} from './fixtures/pokemon';

describe('test Jest', () => {

    const determineWhoAttackInFirst = (pok1: Pokemon, pok2: Pokemon): Pokemon | null => {
        if(pok1.speed === pok2.speed) {
            const indice = Math.round(Math.random() * 1);
            return indice === 0 ? pok1 : pok2;
        }
        return pok1.speed > pok2.speed ? pok1 : pok2;
    }

    it('Should return carapuce when carapuce have 80 speed and pikachu have 70 of speed', () => {

        expect(determineWhoAttackInFirst(carapuce, pikachu)).toBe(carapuce);
    })


    it('Should return pikachu when carapuce have 80 speed and papilusion have 40 of speed now', () => {
        
        expect(determineWhoAttackInFirst(papilusion, carapuce)).toBe(carapuce);
    })

    it('Should return null when the 2 pokemon have the same speed', () => {
        
        expect(determineWhoAttackInFirst(pikachu, other_pikachu)).toBe(other_pikachu);
    })
});