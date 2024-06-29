const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) { //Para poder utilizar await es importante utilizar async 
  // juntos para escribir código asíncrono de manera más clara y manejable, haciendo que el código sea más fácil de leer y mantener.

  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //Aqui se esta utilizando el metodo await
  
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);