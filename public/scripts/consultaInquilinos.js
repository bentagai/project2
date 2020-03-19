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
    const tenantList = document.getElementById('tenantList')
    tenantList.innerHTML = ''
    api.get('tenant'
      //, { headers: { token: localStorage.getItem('token') } }
    ).then(response => {
      response.data.forEach(tenant => {
        consultTenant(tenant)
      })
    })
  }

  function consultTenant(tenant) {
    const tenantList = document.getElementById('tenantList')
    const tenantInd = document.createElement('div')
    tenantInd.innerHTML =
      `   <div>Nombre = ${tenant.name}</div>
            <div>Apellidos = ${tenant.surname}</div>    
            <div>Documento = ${tenant.document}</div>
            <div>Fecha inicio = ${tenant.fechaInicio}</div>
            <div>Vivienda = PENDIENTE</div>`
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = "Delete"
    buttonDelete.setAttribute("type", "button")
    buttonDelete.setAttribute("class", "btn btn-primary btn-lg")
    buttonDelete.onclick = () => {
      api.delete(`tenant/${tenant._id}`)
        .then(function (response) {
          populateInformation()
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    tenantInd.appendChild(buttonDelete)
    tenantList.appendChild(tenantInd)
  }

  populateInformation()

  // api.get('todos', { headers: { token: localStorage.getItem('token') } }).then(response => {
  //   response.data.forEach(todo => {
  //     addTodoToList(todo.task)
  //   })
  // })

})(
)