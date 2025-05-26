document.addEventListener("DOMContentLoaded", () => {
    fetch('./data/psicologia.json')
      .then(res => res.json())
      .then(data => {
        const contenedor = document.getElementById('contenedor-json');
        data.tipos_de_psicologia.forEach(tipo => {
          const div = document.createElement('div');
          div.className = 'tipo';
          div.innerHTML = `<h2>${tipo.nombre}</h2><p>${tipo.descripcion}</p>`;
          contenedor.appendChild(div);
        });
      })
      .catch(error => console.error('Error al cargar el JSON:', error));
  });
  