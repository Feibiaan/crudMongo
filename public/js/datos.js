const metodos = {
    post: {
        metodo: 'POST',
        endpoint: 'meterdatos'
    },
    get: {
        metodo: 'GET',
        endpoint: ''
    },
    put: {
        metodo: 'PUT',
        endpoint: 'modificadodatos'
    },
    delete: {
        metodo: 'DELETE',
        endpoint: 'borradodatos'
    }
}

const objetoDatos = {
    id:0,
    campos:{}
}

export { metodos, objetoDatos }