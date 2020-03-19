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

        api.get('payment',
        { headers: { token: localStorage.getItem('token') } })
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


})(
)