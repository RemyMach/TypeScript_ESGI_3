import {Pokemon} from '../model/pokemon';
import {Turn} from './turn';


export class Battle {


    static startAFight(pokemon1: Pokemon, pokemon2: Pokemon) {
        let pokemonWhoPlayInFirst = Turn.determineWhoAttackInFirst(pokemon1, pokemon2);
    }
}