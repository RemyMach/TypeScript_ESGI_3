import {Pokemon} from '../pokemon';
describe('test Jest', () => {


    let carapuce = new Pokemon({
        name: "carapuce",
        health: 80,
        speed: 80,
        charge: 10
    });

    let pikachu = new Pokemon({
        name: "pikachu",
        health: 80,
        speed: 70,
        charge: 30
    });

    let papilusion = new Pokemon({
        name: "papilusion",
        health: 90,
        speed: 40,
        charge: 20
    });

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
        
        let other_pikachu = new Pokemon({
            name: "pikachu 2",
            health: 80,
            speed: 70,
            charge: 30
        });
        expect(determineWhoAttackInFirst(pikachu, other_pikachu)).toBe(other_pikachu);
    })
});