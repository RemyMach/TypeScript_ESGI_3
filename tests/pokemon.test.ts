import {IAttack, Pokemon} from '../model/pokemon';
import {carapuce, pikachu, papilusion, other_pikachu} from './fixtures/pokemon';
import {Turn} from '../game/turn';

describe('Determine a toString() function for a pokemon', () => {

    it('Should return a description for carapuce with name and attack', () => {
        const description = "le name est pikachu il a 80 point de vie";
        expect(pikachu.toString()).toBe(description);
    });
})

describe('Determine who are going to attack in first', () => {

    describe('when the pokemons haven\'t got the same speed', () => {

        it('Should return carapuce when carapuce have 80 speed and pikachu have 70 of speed', () => {

            expect(Turn.determineWhoAttackInFirst(carapuce, pikachu)).toBe(carapuce);
        });
    
    
        it('Should return pikachu when carapuce have 80 speed and papilusion have 40 of speed now', () => {
            
            expect(Turn.determineWhoAttackInFirst(papilusion, carapuce)).toBe(carapuce);
        });
    });

    describe('when the pokemons have the same speed', () => {


        it('Should return an aleatory pokemon', () => {
            
            expect(Turn.determineWhoAttackInFirst(pikachu, other_pikachu, () => 0.6)).toBe(pikachu);
        });

        it('Should return an aleatory pokemon', () => {
        
            expect(Turn.determineWhoAttackInFirst(pikachu, other_pikachu, () => 0.4)).toBe(other_pikachu);
        });
    });
});

describe('Determine The pokemon attack', () => {

    it('Should return the attack 0 when the randomNumber generated is 0.1', () => {
            
        expect(pikachu.determineTheAttack(() => 0.1)).toBe(pikachu.attacks[0]);
    });

    it('Should return the first attaque when the randomNumber generated is 0.3', () => {
    
        expect(pikachu.determineTheAttack(() => 0.3)).toBe(pikachu.attacks[1]);
    });

    it('Should return the secund attaque when the randomNumber generated is 0.6', () => {
    
        expect(pikachu.determineTheAttack(() => 0.6)).toBe(pikachu.attacks[2]);
    });

    it('Should return the third indice when the randomNumber generated is 0.9', () => {
    
        expect(pikachu.determineTheAttack(() => 0.9)).toBe(pikachu.attacks[3]);
    });
});

describe('the effect of the attack from a Pokemon on another', () => {
    let carapuce_unchanged: Pokemon;
    let pikachu_unchanged: Pokemon;

    beforeEach(() => {
        carapuce_unchanged = new Pokemon({
            name: "carapuce",
            health: 80,
            speed: 80,
            attacks: [
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
        
        pikachu_unchanged = new Pokemon({
            name: "pikachu",
            health: 80,
            speed: 70,
            attacks: [
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
    });

    it('When Pikachu attack carapuce with his first attack', () => {

        const intial_health: number = carapuce_unchanged.health;
        const attack: IAttack = pikachu.determineTheAttack(() => 0.1);


        pikachu_unchanged.executeAnAttack(attack, carapuce_unchanged);

        
        expect(carapuce_unchanged.health).toBe(intial_health - attack.value);
    })

});
