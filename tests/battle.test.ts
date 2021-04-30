import {Turn} from "../game/turn";
import {pikachu, papilusion} from "./fixtures/pokemon";
import {Battle} from "../game/battle";
import {Pokemon} from "../model/pokemon";

describe('Determine the Battle class comportment', () => {

    describe('Determine who are going to win a fight', () => {
        let papilusion: Pokemon;
        let pikachu: Pokemon;

        beforeEach(() => {
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
            jest.setTimeout(30_000);
            expect(await Battle.startAFight(pikachu, papilusion)).toBe(pikachu);
        });

        it('Should return pikachu beacause papilusion is not stronger enough', async () => {
            jest.setTimeout(30_000);

            expect(await Battle.startAFight(papilusion, pikachu)).toBe(pikachu);
        });
    });

    describe('Determine if the function delay work well', () => {

    });
});