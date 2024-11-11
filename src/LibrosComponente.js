import React from "react";


let libros = [
    { nombre: "El Susurro de las Sombras", autor: "Luna Morgana", editorial: "Fantasía Mística", edicion: "Primera" },
    { nombre: "El Laberinto de Cristal", autor: "Raúl Espejo", editorial: "Espejismos Editores", edicion: "Segunda" },
    { nombre: "Cazadores de Tempestades", autor: "Violeta Marino", editorial: "Náutica Literaria", edicion: "Tercera" },
    { nombre: "La Ciudad de los Susurros", autor: "Pedro Noche", editorial: "Editorial Crepúsculo", edicion: "Primera" },
    { nombre: "El Jardín de los Secretos", autor: "Rosa Amada", editorial: "Flor de Papel", edicion: "Cuarta" },
    { nombre: "Los Viajeros del Tiempo", autor: "Hugo Reloj", editorial: "CronoBooks", edicion: "Primera" },
    { nombre: "Las Puertas del Infinito", autor: "Estela del Mar", editorial: "Horizonte Azul", edicion: "Segunda" },
    { nombre: "El Códice Perdido", autor: "Daniel Misterio", editorial: "Arcano Editores", edicion: "Primera" },
    { nombre: "Voces de la Aurora", autor: "Alba Despertar", editorial: "Luz y Sombra", edicion: "Tercera" },
    { nombre: "Encrucijada de Destinos", autor: "Fabián Camino", editorial: "Destino Infinito", edicion: "Primera" }
  ];

  const ListadeLibros=()=>{

  return(
    <div>
    <h1>Información de libros:</h1>
    <ul>
        {libros.map((libro, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {libro.nombre} <br />
            <strong>Autor:</strong> {libro.autor} <br />
            <strong>Editorial:</strong> {libro.editorial} <br />
            <strong>Edición:</strong> {libro.edicion}
            <hr />
          </li>
        ))}
    </ul>
    </div>
)
}
export default ListadeLibros;