export interface IAttack {
    name: string;
    value: number;
}

export interface IPokemon {
    name: string;
    health: number;
    speed: number;
    attacks: IAttack[]; 
}

export class Pokemon implements IPokemon{

    name: string;
    health: number;
    speed: number;
    attacks: IAttack[];

    constructor(props: IPokemon) {
        this.name = props.name;
        this.health = props.health;
        this.speed = props.speed;
        this.attacks = props.attacks;
    }

    toString(): string {
        const stringName =  this.name !== "" ? this.name : "non renseigné";
        return "le name est " + stringName
            + " il a " + this.health + " point de vie";
    }

    determineTheAttack(randomAttack = Math.random): IAttack {
        return this.attacks[Math.round(randomAttack() * 3)];
    }

    executeAnAttack(attack: IAttack, pokemon: Pokemon): void {

        pokemon.health -= attack.value;
    }
}
