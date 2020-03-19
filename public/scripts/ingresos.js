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
        /* api.get('payment'
             //, { headers: { token: localStorage.getItem('token') } }
         )
             .then(response => {
                 const paymentArray = response.data
                 paymentArraySort = paymentArray.sort((a, b) => (a.property > b.property) ? 1 : -1)
                 console.log(paymentArraySort)
             })*/

        api.get('payment')
            .then(response => {
                response.data.forEach( elem => {
                    displayTable(elem.property.stret)
                    displayPayment(elem)
                })
            })
            .catch()
    }

    function displayTable(street) {
        const table = document.getElementById('tableId')
        const row = document.createElement('tr')
        const street = document.createElement('th')
        
        const mJanuary = document.createElement('td')
        const inputJanuary = document.createElement('input')
        inputJanuary.setAttribute('type', 'text')
        mJanuary.appendChild(inputJanuary)
    }

    function displayPayment(elem) {
        const street = elem.property.street
        const amount = elem.amount
        const year = elem.year
        const month = elem.month

        const table = document.getElementById('tableId')
        const myStreet = document.createElement('th')
        myStreet.innerText = myStreet


    }


    // function consultpayment(payment) {
    //   const paymentList = document.getElementById('paymentList')
    //   const paymentInd = document.createElement('div')
    //   paymentInd.innerHTML =
    //     `   <div>Calle = ${payment.street}</div>
    //           <div>Letra = ${payment.letter}</div>    
    //           <div>Localidad = ${payment.city}</div>
    //           <div>Código Postal = ${payment.postalCode}</div>
    //           <div>Garaje = ${payment.garage}</div>
    //           <div>Trastero = ${payment.storageRoom}</div>
    //           <div>Alquiler mensual = ${payment.monthlyRental}</div>`
    //   // <button type="button" class="btn btn-primary btn-lg" id="modificarInmueble">Modificar</button>
    //   // <button type="button" class="btn btn-primary btn-lg" id="delete">Delete</button>`
    //   const buttonDelete = document.createElement('button')
    //   buttonDelete.innerText = "Delete"
    //   buttonDelete.setAttribute("type", "button")
    //   buttonDelete.setAttribute("class", "btn btn-primary btn-lg")
    //   buttonDelete.onclick = () => {
    //     api.delete(`payment/${payment._id}`)
    //       .then(function (response) {
    //         populateInformation()
    //       })
    //       .catch(function (error) {
    //         console.log(error)
    //       })
    //   }
    //   const buttonModify = document.createElement('button')
    //   buttonModify.innerText = "Modify"
    //   buttonModify.setAttribute("type", "button")
    //   buttonModify.setAttribute("class", "btn btn-primary btn-lg")
    //   buttonModify.onclick = () => {
    //     localStorage.setItem('paymentID', payment._id)
    //     location.assign("./modificacionInmueble.html")
    //   }

    //   paymentInd.appendChild(buttonDelete)
    //   paymentInd.appendChild(buttonModify)
    //   paymentList.appendChild(paymentInd)
    // }

    populateInformation()

    // api.get('todos', { headers: { token: localStorage.getItem('token') } }).then(response => {
    //   response.data.forEach(todo => {
    //     addTodoToList(todo.task)
    //   })
    // })

})(
)