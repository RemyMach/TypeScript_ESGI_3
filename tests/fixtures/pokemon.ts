import {Pokemon} from '../../model/pokemon';

export const carapuce = new Pokemon({
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
            value: 20
        },
        {
            name: "cru-aile",
            value: 20
        },
        {
            name: "charge",
            value: 5
        },
    ]}
);

export const other_pikachu = new Pokemon({
    name: "pikachu 2",
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