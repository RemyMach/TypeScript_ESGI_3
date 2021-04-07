export interface IPokemon {
    name: string;
    health: number;
    speed: number;
    charge: number;
}

export class Pokemon implements IPokemon{

    name: string;
    health: number;
    speed: number;
    charge: number;

    constructor(props: IPokemon) {
        this.name = props.name;
        this.health = props.health;
        this.speed = props.speed;
        this.charge = props.charge;
    }

    toString(): string {
        return "le name est " + this.name;
    }

    attaque(): void {

    }
}