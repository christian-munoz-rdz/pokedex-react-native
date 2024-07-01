import { Pokemon } from "../../domain/entieties/pokemon";
import { PokeAPIPokemon } from "../interfaces/pokeApi.interfaces";



export class PokemonMapper {

    static pokeApiPokemonToEntity( data: PokeAPIPokemon): Pokemon {

        const sprites = PokemonMapper.getSprites(data);
        const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
        
        return {
            id: data.id,
            name: data.name,
            avatar: avatar,
            sprites: sprites,
            types: data.types.map( type => type.type.name)    
        }

    }

    static getSprites(data: PokeAPIPokemon): string[] {
        const sprites: string[] = [
          data.sprites.front_default,
          data.sprites.back_default,
          data.sprites.front_shiny,
          data.sprites.back_shiny,
        ];
    
        if (data.sprites.other?.home.front_default)
          sprites.push(data.sprites.other?.home.front_default);
        if (data.sprites.other?.['official-artwork'].front_default)
          sprites.push(data.sprites.other?.['official-artwork'].front_default);
        if (data.sprites.other?.['official-artwork'].front_shiny)
          sprites.push(data.sprites.other?.['official-artwork'].front_shiny);
        if (data.sprites.other?.showdown.front_default)
          sprites.push(data.sprites.other?.showdown.front_default);
        if (data.sprites.other?.showdown.back_default)
          sprites.push(data.sprites.other?.showdown.back_default);
    
        return sprites;
      }
}