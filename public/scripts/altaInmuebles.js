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
           {street: document.getElementById('street').value,
           letter: document.getElementById('letter').value,
           city: document.getElementById('city').value,
           postalCode: document.getElementById('postalCode').value,
           garage: document.getElementById('garage').value,
           storageRoom: document.getElementById('storageRoom').value,
           monthlyRental: document.getElementById('monthlyRental').value },
          //{ headers: { token: localStorage.getItem('token') } }
          )
          .then(function (response) {console.log("hola")
          })
          .catch(function (error) {
            console.log(error)
          })
    })
  
    // function addTodoToList (todo) {
    //   const todosUL = document.getElementById('todosUL')
    //   const todoLI = document.createElement('li')
    //   todoLI.innerHTML = `<input type="checkbox"> ${todo}`
    //   todosUL.appendChild(todoLI)
    // }
  
    // api.get('todos', { headers: { token: localStorage.getItem('token') } }).then(response => {
    //   response.data.forEach(todo => {
    //     addTodoToList(todo.task)
    //   })
    // })
  })(
)
  