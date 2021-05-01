import {Turn} from "../game/turn";
import {pikachu, papilusion} from "./fixtures/pokemon";
import {Battle} from "../game/battle";
import {Pokemon} from "../model/pokemon";

describe('Determine the Battle class comportment', () => {

    describe('Determine who are going to win a fight', () => {
        let papilusion: Pokemon;
        let pikachu: Pokemon;

        beforeEach(() => {
            jest.setTimeout(30_000);
             papilusion = new Pokemon({
                name: "papilusion",
                health: 90,
                speed: 20,
                attacks: [
                    {
                        name: "charge",
                        value: 5
                    },
                    {
                        name: "cru-aile",
                        value: 30
                    },
                    {
                        name: "charge",
                        value: 5
                    },
                    {
                        name: "cru-aile",
                        value: 30
                    },
                ]}
            );

             pikachu = new Pokemon({
                name: "pikachu",
                health: 80,
                speed: 70,
                attacks: [
                    {
                        name: "eclair",
                        value: 30
                    },
                    {
                        name: "charge",
                        value: 30
                    },
                    {
                        name: "eclair",
                        value: 30
                    },
                    {
                        name: "charge",
                        value: 30
                    },
                ]
            });
        });

        it('Should return pikachu beacause pipulsion is not stronger enough', async () => {
            expect(await Battle.startAFight(pikachu, papilusion)).toBe(pikachu);
        });

        it('Should return pikachu beacause papilusion is not stronger enough', async () => {
            expect(await Battle.startAFight(papilusion, pikachu)).toBe(pikachu);
        });

        it('Should return papilusion when pikachu have 0 life', async () => {
            pikachu.health = 0;
            expect(await Battle.startAFight(papilusion, pikachu)).toBe(papilusion);
        });

        it('Should return error when papilusion and pikachu have both 0 life',   async () => {
            pikachu.health = 0;
            papilusion.health = 0;
            expect.assertions(1);
            try {
                await Battle.startAFight(papilusion, pikachu)
            }catch(e) {
                expect(e).toEqual({name:'PokemonsNoLifeException',message: "Pokemon can't figth because they are dead"});
            }
        });

        it('Should return pikachu when the 2 pikachu have the same speed and stat but random is set to 0.2 so pikachu attack in first because it\'s the second arg and Math.random is set < 0.5',  async () => {
            const pikachu2 = new Pokemon({
                name: "pikachu2",
                health: 80,
                speed: 70,
                attacks: [
                    {
                        name: "eclair",
                        value: 30
                    },
                    {
                        name: "charge",
                        value: 30
                    },
                    {
                        name: "eclair",
                        value: 30
                    },
                    {
                        name: "charge",
                        value: 30
                    },
                ]
            });
            const spy = jest.spyOn(Math, 'random').mockImplementation(() => 0.2);

            expect(await Battle.startAFight(pikachu2, pikachu)).toBe(pikachu);
            expect(spy).toHaveBeenCalled();
            spy.mockRestore();
        });
    });
});
