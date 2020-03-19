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
      `   <div class="container border border-secondary rounded-pill">Calle = ${property.street}</div>
          <div class="container border border-secondary rounded-pill">Letra = ${property.letter}</div>    
          <div class="container border border-secondary rounded-pill">Localidad = ${property.city}</div>
          <div class="container border border-secondary rounded-pill">Código Postal = ${property.postalCode}</div>
          <div class="container border border-secondary rounded-pill">Garaje = ${property.garage}</div>
          <div class="container border border-secondary rounded-pill">Trastero = ${property.storageRoom}</div>
          <div class="container border border-secondary rounded-pill">Alquiler mensual = ${property.monthlyRental}</div>`
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
    const buttonModify = document.createElement('button')
    buttonModify.innerText = "Modify"
    buttonModify.setAttribute("type", "button")
    buttonModify.setAttribute("class", "btn btn-primary btn-lg")
    buttonModify.onclick = () => {
      localStorage.setItem('propertyID', property._id)
      location.assign("./modificacionInmueble.html")
    }

    propertyInd.appendChild(buttonDelete)
    propertyInd.appendChild(buttonModify)
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