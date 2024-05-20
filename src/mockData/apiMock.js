const listData = async () => {
    await fetch('data.json')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
      // Manejar los datos una vez que estén disponibles
      console.log(data); // Imprimir los datos en la consola
      // Por ejemplo, puedes acceder a la lista de usuarios
      data.dados.forEach(usuario => {
        console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}`);
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error); // Manejar errores si ocurren
    });
}
