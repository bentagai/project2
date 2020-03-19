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

    document.getElementById('gastos').addEventListener('click', (event) => {
        api.post('expenses',
           {property: document.getElementById('propertyList').value,    
           type:      document.getElementById('type').value,
           reference: document.getElementById('reference').value,
           date:      document.getElementById('date').value,
           amount:    document.getElementById('amount').value },
           { headers: { token: localStorage.getItem('token') } }
          )
          .then(function (response) {
            alert("Gasto Introducido");
          })
          .catch(function (error) {
            console.log(error)
          })
    })
  
  })(
)
