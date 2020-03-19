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

    const tenantToModify = localStorage.getItem('tenantID')

    function populateInformation() {
        api.get('tenant',
            { headers: { token: localStorage.getItem('token') } }
        ).then(response => {
            response.data.forEach(tenant => {
                modifyTenant(tenant)
            })
        })
    }

    function modifyTenant(tenant) {
        if (tenant._id == tenantToModify) {
            const modifyTenant = document.getElementById('modifyTenant')
            const tenantInd = document.createElement('form')
            tenantInd.innerHTML =
            `<div class="form-group">
            <input class="form-control" id="name" value="${tenant.name}">
          </div>
          <div class="form-group">
              <input class="form-control" id="surname" value="${tenant.surname}">
          </div>
          <div class="form-group">
              <input class="form-control" id="document" value="${tenant.document}">
          </div>
          <div class="form-group">
              <input class="form-control" id="beginDate" value="${tenant.beginDate}">
          </div>
          <div class="form-group">
              <input class="form-control" id="property" value="${tenant.property}">
          </div>`
            modifyTenant.appendChild(tenantInd)
        }
    }

    document.getElementById('modificarInquilino').addEventListener('click', (event) => {
        api.put(`tenant/${tenantToModify}`, 
            {
                name: document.getElementById('name').value,
                surname: document.getElementById('surname').value,
                document: document.getElementById('document').value,
                beginDate: document.getElementById('beginDate').value,
                property: document.getElementById('property').value
            },
            { headers: { token: localStorage.getItem('token') } }
        )
            .then((response) => alert("Modificación Realizada"))
            .catch((error) => console.log(error))
    })

    populateInformation()

})(
)