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
  
    document.getElementById('altaInmueble').addEventListener('click', (event) => {
        api.post('property',
        { headers: { token: localStorage.getItem('token') } },
           {street: document.getElementById('street').value,
           letter: document.getElementById('letter').value,
           city: document.getElementById('city').value,
           postalCode: document.getElementById('postalCode').value,
           garage: document.getElementById('garage').value,
           storageRoom: document.getElementById('storageRoom').value,
           monthlyRental: document.getElementById('monthlyRental').value },
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
  