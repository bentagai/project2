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

    const propertyToModify = localStorage.getItem('propertyID')

    function populateInformation() {
        api.get('property'
            //, { headers: { token: localStorage.getItem('token') } }
        ).then(response => {
            response.data.forEach(property => {
                modifyProperty(property)
            })
        })
    }

    function modifyProperty(property) {
        if (property._id == propertyToModify) {
            const modifyProperty = document.getElementById('modifyProperty')
            const propertyInd = document.createElement('form')
            propertyInd.innerHTML =
                `<div class="form-group">
                <input class="form-control" id="street" value="${property.street}">
            </div>
            <div class="form-group">
                <input class="form-control" id="letter" value="${property.letter}">
            </div>
            <div class="form-group">
                <input class="form-control" id="city" value="${property.city}">
            </div>
            <div class="form-group">
                <input class="form-control" id="postalCode" value="${property.postalCode}">
            </div>
            <div class="form-group">
                <input class="form-control" id="garage" value="${property.garage}">
            </div>
            <div class="form-group">
                <input class="form-control" id="storageRoom" value="${property.storageRoom}">
            </div>
            <div class="form-group">
                <input class="form-control" id="monthlyRental" value="${property.monthlyRental}">
            </div>`
            modifyProperty.appendChild(propertyInd)
        }
    }

    document.getElementById('modificarInmueble').addEventListener('click', (event) => {
        api.put(`property/${propertyToModify}`,
            {
                street: document.getElementById('street').value,
                letter: document.getElementById('letter').value,
                city: document.getElementById('city').value,
                postalCode: document.getElementById('postalCode').value,
                garage: document.getElementById('garage').value,
                storageRoom: document.getElementById('storageRoom').value,
                monthlyRental: document.getElementById('monthlyRental').value
            },
            //{ headers: { token: localStorage.getItem('token') } }
        )
            .then((response) => console.log("hola"))
            .catch((error) => console.log(error))
    })

    populateInformation()

    // api.get('todos', { headers: { token: localStorage.getItem('token') } }).then(response => {
    //   response.data.forEach(todo => {
    //     addTodoToList(todo.task)
    //   })
    // })

})(
)