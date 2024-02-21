<script lang="ts">
    import ImageSeason1 from "$lib/assets/t1.webp";
    import ImageSeason2 from "$lib/assets/t2.webp";
    import ImageSeason3 from "$lib/assets/t3.webp";
    import ImageSeason4 from "$lib/assets/t4.webp";
    import ImageSeason5 from "$lib/assets/t5.webp";
    import ImageSeason6 from "$lib/assets/t6.webp";
    import ImageSeason7 from "$lib/assets/t7.webp";
    import Nav from "./navbar.svelte";
    import Busca from "./Buscador.svelte";
    import { endpoints, listEpisodios } from "./main";
    import { onMount } from "svelte";
    let datos: any;
    onMount(async () => {
        try {
            datos = await endpoints();

            console.log(datos);
        } catch (error) {
            console.error(error);
        }
    });
</script>

<svelte:head>
</svelte:head>
<h1 class="primer-color">Welcome to the RickPedia</h1>
<Busca />
<h2 class="segundo-color h2-with-triangle">
    <span class="triangulo"></span>Seasons
</h2>
<div class="img-container">
    <figure>
        <img class="position-img" alt="temporada1" src={ImageSeason1} />
        <div class="capa">
            <h3 class="info">Temporada 1</h3>
            <p class="info">
                La Primera Temporada es la Temporada 1 de Rick y Morty. La
                temporada consta de once episodios. La temporada se estrenó el 2
                de diciembre de 2013 y terminó el 14 de abril de 2014.
            </p>

            <button on:click={() => listEpisodios("Temporada 1")}
                >Ver episodios</button
            >
        </div>
    </figure>
    <figure>
        <img class="position-img" alt="temporada2" src={ImageSeason2} />
        <div class="capa">
            <h3 class="info">Temporada 2</h3>
            <p class="info">
                La temporada consta de diez episodios. Se anunció en enero de
                2014 y se estrenó el 26 de julio de 2015 y finalizó el 4 de
                octubre de 2015.
            </p>
            <button on:click={() => listEpisodios("Temporada 2")}
                >Ver episodios</button
            >
        </div>
    </figure>
    <figure>
        <img class="position-img" alt="temporada3" src={ImageSeason3} />
        <div class="capa">
            <h3 class="info">Temporada 3</h3>
            <p class="info">
                La temporada consta de 10 episodios.Se estrenó sin previo aviso
                el 1 de abril de 2017, como un truco del día de los Inocentes.
                El primer episodio se repitió durante toda la noche en su
                primera emisión en el canal.
            </p>
            <button on:click={()=> listEpisodios('Temporada 3')}>Ver episodios</button>
        </div>
    </figure>
    <figure>
        <img class="position-img" alt="temporada4" src={ImageSeason4} />
        <div class="capa">
            <h3 class="info">Temporada 4</h3>
            <p class="info">
                Se estrenó el 10 de noviembre de 2019 y finalizó el 31 de mayo
                de 2020. Esta temporada consta de 10 episodios.
            </p>
            <button on:click={() => listEpisodios("Temporada 4")}
                >Ver episodios</button
            >
        </div>
    </figure>
    <figure>
        <img class="position-img" alt="temporada5" src={ImageSeason5} />
        <div class="capa">
            <h3 class="info">Temporada 5</h3>
            <p class="info">
                La temporada 5 constó de 10 episodios. La temporada 5 tuvo al
                menos 5 episodios. La producción de la temporada se confirmó en
                julio de 2019, se estrenó el 20 de junio de 2021 y finalizó el 5
                de septiembre.
            </p>
            <button on:click={() => listEpisodios("Temporada 5")}
                >Ver episodios</button
            >
        </div>
    </figure>
    <figure>
        <img class="position-img" alt="temporada6" src={ImageSeason6} />
        <div class="capa">
            <h3 class="info">Temporada 6</h3>
            <p class="info">
                Se estrenó el 4 de septiembre de 2022 y finalizó el 11 de
                diciembre.Esta temporada contiene 10 episodios, similar a las
                temporadas anteriores.
            </p>
            <button on:click={() => listEpisodios("Temporada 6")}
                >Ver episodios</button
            >
        </div>
    </figure>
    <figure>
        <img class="position-img" alt="temporada6" src={ImageSeason7} />
        <div class="capa">
            <h3 class="info">Temporada 7</h3>
            <p class="info">
                Su estreno está previsto para el 15 de octubre de 2023 en Adult
                Swim y constará de 10 episodios. A partir de esta temporada, los
                papeles de Roiland serán interpretados por actores de doblaje.
            </p>
            <button on:click={() => listEpisodios("Temporada 7")}
                >Ver episodios</button
            >
        </div>
    </figure>
</div>
<!-- <h2 class="tercer-color h2-with-triangle">
    <span class="triangulo"></span>Characters
</h2>
{#if datos && datos.personajes_T}
    <div class="div-p">
        {#each datos.personajes_T as personaje}
            <div class="contenedor-personaje">
                <img class="personajes" alt="imagen" src={personaje.image} />
                <span class="nombres-p">{personaje.name}</span>
            </div>
        {/each}
    </div>
{:else}
    <p>No hay datos de personajes disponibles.</p>
{/if} -->
<!--
<h2 class="cuarto-color h2-with-triangle">
    <span class="triangulo"></span>Locations
</h2>
{#if datos && datos.locaciones_T}
    <ul>
        {#each datos.locaciones_T as personaje}
            <li>{personaje.name}</li>
        {/each}
    </ul>
{:else}
    <p>No hay datos de Locaciones disponibles.</p>
{/if}
 -->
