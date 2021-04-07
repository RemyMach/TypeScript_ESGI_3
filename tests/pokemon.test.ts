import {Pokemon} from '../pokemon';
describe('test Jest', () => {


    let carapuce = new Pokemon({
        name: "carapuce",
        health: 80,
        speed: 80,
        attack: [
            {
                name: "charge",
                value: 10
            },
            {
                name: "pisotlet à eau",
                value: 30
            },
            {
                name: "ecume",
                value: 35
            },
            {
                name: "trempette",
                value: 5
            },
        ]}
    );

    let pikachu = new Pokemon({
        name: "pikachu",
        health: 80,
        speed: 70,
        attack: [
            {
                name: "charge",
                value: 10
            },
            {
                name: "eclair",
                value: 30
            },
            {
                name: "fatal Tonerre",
                value: 35
            },
            {
                name: "griffe",
                value: 5
            },
        ]}
    );

    let papilusion = new Pokemon({
        name: "papilusion",
        health: 90,
        speed: 40,
        attack: [
            {
                name: "vol",
                value: 10
            },
            {
                name: "poudre dodo",
                value: 30
            },
            {
                name: "cru-aile",
                value: 35
            },
            {
                name: "charge",
                value: 5
            },
        ]}
    );

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
            attack: [
                {
                    name: "charge",
                    value: 10
                },
                {
                    name: "eclair",
                    value: 30
                },
                {
                    name: "fatal Tonerre",
                    value: 35
                },
                {
                    name: "griffe",
                    value: 5
                },
            ]
        });
        expect(determineWhoAttackInFirst(pikachu, other_pikachu)).toBe(other_pikachu);
    })
});