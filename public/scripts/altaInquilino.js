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
        api.post('tenant',
           {street: document.getElementById('name').value,
           letter: document.getElementById('surname').value,
           city: document.getElementById('document').value,
           postalCode: document.getElementById('beginDate').value,
           garage: document.getElementById('property').value },
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
  