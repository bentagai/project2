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
  
    document.getElementById('logout').addEventListener('click', () => {
      localStorage.clear()
      location.assign('index.html')
    })
  
    api.get('property',
    { headers: { token: localStorage.getItem('token') } }
    ).then(response => {
        response.data.forEach(property => {
            console.log(property)
            consultProperty(property)
        })
          })

    function consultProperty (property) {
        const propertyList = document.getElementById('propertyList')
        const propertyInd = document.createElement('option')
        propertyInd.setAttribute("value", property._id)
        propertyInd.innerText = `${property.street}  ID: ${property._id}`
        propertyList.appendChild(propertyInd)
    }  

    document.getElementById('altaInquilino').addEventListener('click', (event) => {
        api.post('tenant', 
           {name:     document.getElementById('name').value,
           surname:   document.getElementById('surname').value,
           document:  document.getElementById('document').value,
           beginDate: document.getElementById('beginDate').value,
           property:  document.getElementById('propertyList').value },
           { headers: { token: localStorage.getItem('token') } },
          )
          .then(function (response) {
            alert("Alta de Inmueble Realizada");
          })
          .catch(function (error) {
            console.log(error)
          })
    })
  })(
)
  