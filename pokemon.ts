export interface IAttack {
    name: string;
    value: number;
}

export interface IPokemon {
    name: string;
    health: number;
    speed: number;
    attack: IAttack[]; 
}

export class Pokemon implements IPokemon{

    name: string;
    health: number;
    speed: number;
    attack: IAttack[];

    constructor(props: IPokemon) {
        this.name = props.name;
        this.health = props.health;
        this.speed = props.speed;
        this.attack = props.attack;
    }

    toString(): string {
        return "le name est " + this.name;
    }
}