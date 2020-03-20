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
    api.get('tenant',
    { headers: { token: localStorage.getItem('token') } },
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
      `   <div class="container border border-secondary rounded-pill">Nombre = ${tenant.name}</div>
          <div class="container border border-secondary rounded-pill">Apellidos = ${tenant.surname}</div>    
          <div class="container border border-secondary rounded-pill">Documento = ${tenant.document}</div>
          <div class="container border border-secondary rounded-pill">Fecha inicio = ${tenant.fechaInicio}</div>
          <div class="container border border-secondary rounded-pill">Vivienda = PENDIENTE</div>`
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = "Delete"
    buttonDelete.setAttribute("type", "button")
    buttonDelete.setAttribute("class", "btn btn-primary btn-lg")
    buttonDelete.onclick = () => {
      api.delete(`tenant/${tenant._id}`,
      { headers: { token: localStorage.getItem('token') } })
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
      localStorage.setItem('tenantID', tenant._id)
      location.assign("./modificacionInquilino.html")
    }

    tenantInd.appendChild(buttonDelete)
    tenantInd.appendChild(buttonModify)
    tenantList.appendChild(tenantInd)
  }

  populateInformation()
})(
)