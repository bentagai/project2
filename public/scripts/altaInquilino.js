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
        const propertyInd = document.createElement('option')
        propertyInd.innerHTML = `<option>${property.street}  ID: ${property._id}</option>`
        propertyList.appendChild(propertyInd)
    }  

    document.getElementById('altaInquilino').addEventListener('click', (event) => {
        api.post('tenant',
           {name: document.getElementById('name').value,
           surname: document.getElementById('surname').value,
           document: document.getElementById('document').value,
           beginDate: document.getElementById('beginDate').value,
           property: document.getElementById('property').value },
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
  