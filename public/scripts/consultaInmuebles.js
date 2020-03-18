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

    api.get('property'
    //, { headers: { token: localStorage.getItem('token') } }
    ).then(response => {
        response.data.forEach(property => {
            console.log(property)
            consultProperty(property)
        })
          })

    function consultProperty (property) {
        const propertyList = document.getElementById('propertyList')
        const propertyInd = document.createElement('table')
        propertyInd.innerHTML = 
        `<table>
            <tr>Calle = ${property.street}</tr>
            <tr>Letra = ${property.letter}</tr>    
            <tr>Localidad = ${property.city}</tr>
            <tr>Código Postal = ${property.postalCode}</tr>
            <tr>Garaje = ${property.garage}</tr>
            <tr>Trastero = ${property.storageRoom}</tr>
            <tr>Alquiler mensual = ${property.monthlyRental}</tr>
        </table>`
        propertyList.appendChild(propertyInd)
    }

  
    // api.get('todos', { headers: { token: localStorage.getItem('token') } }).then(response => {
    //   response.data.forEach(todo => {
    //     addTodoToList(todo.task)
    //   })
    // })
  })(
  )