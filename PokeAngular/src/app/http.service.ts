import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient) {
        this.getPokemon();
        this.getAbility();
        this.getPokemonWithAbility();
    }
    getAbility() {
        let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        bulbasaur.subscribe(data => {
            let ability = data.abilities[0].ability.url;
            let abilityDescription = this._http.get(`${ability}`)
            abilityDescription.subscribe(ab => console.log(ab.name))
        }))
    }

    getPokemon() {
        let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        bulbasaur.subscribe(data => {
            console.log(data.name);
        })
    }

    getPokemonWithAbility() {
        let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        bulbasaur.subscribe(data => {
            let ability = data.abilities[0].ability.url;
            let abilityDescription = this._http.get(`${ability}`)
            abilityDescription.subscribe(ab => console.log(ab.pokemon.length))
        }))
    }
}
