import axios from "axios";
const URL: string ='https://rickandmortyapi.com/api'
interface Personaje {
   gender: string;
   name: string;
   species: string;
   image: string;
   status: string;
}
interface Episodio {
    id: number
    name: string
    air_date: string
    episode: string
}
interface Locacion{
    id: number
    name: string
    type: string
    dimension: string
}
export function listEpisodios(temporada:string){
    console.log(temporada);
}
export async function endpoints() {
    try {
        const personajesResponse = await axios.get<{ results: Personaje[] }>(`${URL}/character`);
        const LocacionResponse = await axios.get<{results: Locacion []} >(`${URL}/location`);
        const episodiosResponse = await axios.get<{results: Episodio []}>(`${URL}/episode`);
        const personajes_T = personajesResponse.data.results;
        console.log('Personajes: ',personajes_T);
        const locaciones_T = LocacionResponse.data.results;
        console.log('Locaciones: ',locaciones_T);
        const episode_T = episodiosResponse.data.results;
        console.log('Episodios: ',episode_T);
        return{personajes_T, episode_T}
    }
    catch(error){
        console.log('Hay une error',error);
    }
}
endpoints()