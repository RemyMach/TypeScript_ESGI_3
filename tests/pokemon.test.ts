import {Pokemon} from '../pokemon';
import {carapuce, pikachu, papilusion, other_pikachu} from './fixtures/pokemon';

describe('Determine who are going to attack in first', () => {

    const determineWhoAttackInFirst = (pok1: Pokemon, pok2: Pokemon, randomPokemon = Math.random): Pokemon | null => {
        if(pok1.speed === pok2.speed) {
            return randomPokemon() > 0.5 ? pok1 : pok2;
        }
        return pok1.speed > pok2.speed ? pok1 : pok2;
    }

    describe('when the pokemons haven\'t got the same speed', () => {

        it('Should return carapuce when carapuce have 80 speed and pikachu have 70 of speed', () => {

            expect(determineWhoAttackInFirst(carapuce, pikachu)).toBe(carapuce);
        })
    
    
        it('Should return pikachu when carapuce have 80 speed and papilusion have 40 of speed now', () => {
            
            expect(determineWhoAttackInFirst(papilusion, carapuce)).toBe(carapuce);
        })
    });

    describe('when the pokemons haven\'t got the same speed', () => {


        it('Should return an aleatory pokemon', () => {
            
            expect(determineWhoAttackInFirst(pikachu, other_pikachu, () => 0.6)).toBe(pikachu);
        })

        it('Should return an aleatory pokemon', () => {
        
            expect(determineWhoAttackInFirst(pikachu, other_pikachu, () => 0.4)).toBe(other_pikachu);
        })
    });
});

describe('Determine The attack scenario', () => {

    const determineTheAttack = (pokemon: Pokemon, randomAttack = Math.random): number => {
        return Math.round(randomAttack() * 3);
    }

    it('Should return the indice 0 of the attack when the randomNumber generated is 0.1', () => {
            
        expect(determineTheAttack(pikachu, () => 0.1)).toBe(0);
    })

    it('Should return the first indice of the attack when the randomNumber generated is 0.3', () => {
    
        expect(determineTheAttack(pikachu, () => 0.3)).toBe(1);
    })

    it('Should return the secund indice of the attack when the randomNumber generated is 0.6', () => {
    
        expect(determineTheAttack(pikachu, () => 0.6)).toBe(2);
    })

    it('Should return the third indice of the attack when the randomNumber generated is 0.9', () => {
    
        expect(determineTheAttack(pikachu, () => 0.9)).toBe(3);
    })
});