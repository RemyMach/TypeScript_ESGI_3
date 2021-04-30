import {Pokemon} from "./model/pokemon";
import {Battle} from "./game/battle";

export const pikachu = new Pokemon({
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
    ]}
);

export const papilusion = new Pokemon({
    name: "papilusion",
    health: 90,
    speed: 40,
    attacks: [
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

Battle.startAFight(pikachu, papilusion);