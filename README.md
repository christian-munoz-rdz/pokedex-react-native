# Pokedex App

### indice 

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Pantalla de inicio](#pantalla-de-inicio)
- [Detalles de un Pokemon](#detalles-de-un-pokemon)
- [Buscar Pokemon](#buscar-pokemon)

## Descripción

Exta es una aplicación para android desarrollada con react native que permite visualizar la información de diferentes pokemones utilizando la API de [PokeApi](https://pokeapi.co/). Podemos visualizar la lista completa de pokemones en la pantalla de inicio, revisar detalles de cada uno de ellos y buscar pokemones por nombre o id.

## Tecnologías

<div style="display: flex; justify-content: center;">
<table>
   <thead>
      <tr>
         <th>Tecnologías</th>
         <th></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><a href="https://reactnative.dev/">React Native</a></td>
         <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=50></td>
      </tr>
      <tr>
         <td><a href="https://reactnavigation.org/">React Navigation</a></td>
         <td><img src="https://avatars.githubusercontent.com/u/29647600?s=280&v=4" width=50></td>
      </tr>
      <tr>
         <td><a href="https://reactnativepaper.com/">React Native Paper</a></td>
         <td><img src="https://raw.githubusercontent.com/callstack/react-native-paper/HEAD/docs/static/images/paper-logo.svg?sanitize=true" height=50></td>
      </tr>
      <tr>
         <td><a href="https://axios-http.com/">Axios</a></td>
         <td><img src="https://axios-http.com/assets/logo.svg" width=120></td>
      </tr>
      <tr>
         <td><a href="https://tanstack.com/query/latest">TanStack Query</a></td>
         <td><img src="https://tanstack.com/_build/assets/logo-color-600w-Bx4vtR8J.png" width=50></td>
      </tr>
      <tr>
         <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
         <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width=50></td>
      </tr>
   </tbody>
</table>
</div>

## Pantalla de inicio

En la pantalla de inicio se muestra una lista de pokemones con su nombre, id, tipo y su avatar. Los Pokemones están ordenados por id de forma ascendente, según la generación en la que fueron introducidos. Se utiliza una `flatlist` para mostrar los pokemones y una tarjeta de [react native paper](https://reactnativepaper.com/)  como `render item`. Cada tarjeta se colorea según los pixeles del avatar utilizando la librería [react native image colors](https://www.npmjs.com/package/react-native-image-colors).

<div style="display: flex; justify-content: space-between;"> 
   <img src="screenshots/Home_Screen_01.png" height="400">
   <img src="screenshots/Home_Screen_02.png" height="400">
   <img src="screenshots/Home_Screen_03.png" height="400">
</div>

## Detalles de un Pokemon

Al hacer click en una tarjeta de pokemon se abre una pantalla con los detalles del pokemon seleccionado. En esta pantalla se muestra el avatar del pokemon, su nombre, id, tipo, habilidades, stats, movimientos y los juegos en los que ha aparecido. Además se muestra una colección de sprites del pokemon. También se adapta el color de la pantalla según los pixeles del avatar del pokemon.

<div style="display: flex; justify-content: space-between;"> 
   <img src="screenshots/Details_01.png" height="400">
   <img src="screenshots/Details_02.png" height="400">
   <img src="screenshots/Details_03.png" height="400">
</div>

## Buscar Pokemon

Esta pantalla muestra las tarjetas en el mismo estilo que la pantalla de inicio, pero solo muestra los pokemones que coinciden con el texto ingresado en el campo de búsqueda según su nombre o id. Se utiliza un `TextInput` para ingresar el texto de búsqueda y un `flatlist` para mostrar los pokemones. Además se manejan debounces para evitar realizar peticiones a la API en cada cambio de texto.

<div style="display: flex; justify-content: space-between;"> 
   <img src="screenshots/Search_Screen_01.png" height="400">
   <img src="screenshots/Search_Screen_02.png" height="400">
   <img src="screenshots/Search_Screen_03.png" height="400">
</div>