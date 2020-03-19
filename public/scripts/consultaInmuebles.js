/* eslint-disable no-undef */
(function () {
  const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000
  })

  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('email')
  } else {
    location.href = 'auth.html'
  }


  function populateInformation() {
    const propertyList = document.getElementById('propertyList')
    propertyList.innerHTML = ''
    api.get('property'
      //, { headers: { token: localStorage.getItem('token') } }
    ).then(response => {
      response.data.forEach(property => {
        consultProperty(property)
      })
    })
  }

  function consultProperty(property) {
    const propertyList = document.getElementById('propertyList')
    const propertyInd = document.createElement('div')
    propertyInd.innerHTML =
      `   <div>Calle = ${property.street}</div>
            <div>Letra = ${property.letter}</div>    
            <div>Localidad = ${property.city}</div>
            <div>Código Postal = ${property.postalCode}</div>
            <div>Garaje = ${property.garage}</div>
            <div>Trastero = ${property.storageRoom}</div>
            <div>Alquiler mensual = ${property.monthlyRental}</div>`
    // <button type="button" class="btn btn-primary btn-lg" id="modificarInmueble">Modificar</button>
    // <button type="button" class="btn btn-primary btn-lg" id="delete">Delete</button>`
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = "Delete"
    buttonDelete.setAttribute("type", "button")
    buttonDelete.setAttribute("class", "btn btn-primary btn-lg")
    buttonDelete.onclick = () => {
      api.delete(`property/${property._id}`)
        .then(function (response) {
          populateInformation()
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    propertyInd.appendChild(buttonDelete)
    propertyList.appendChild(propertyInd)
  }

  populateInformation()

  // api.get('todos', { headers: { token: localStorage.getItem('token') } }).then(response => {
  //   response.data.forEach(todo => {
  //     addTodoToList(todo.task)
  //   })
  // })

})(
)