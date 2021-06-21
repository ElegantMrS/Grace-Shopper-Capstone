// Justin, Joe

const { default: axios } = require('axios');

// Users //

export async function registerUser(username, password, firstName, lastName) {
    // eventually add email, but for testing purposes leave it out
    try {

        // const input = { username: username, password: password, firstName: firstName, lastName: lastName }

        const response = await axios.post(`/api/register`, { username: username, password: password, firstName: firstName, lastName: lastName })
        console.log(response)
        return response;

    } catch (error) {
        throw error;
    }
}

export async function loginUser(username, password) {
    
    try {

        const input = { username: username, password: password }

        const response = await axios.post(`/api/login`, input)

        return response;

    } catch (error) {
        throw error;
    }
}

// Merchandise //

export async function getAllMerchandise() {

    try {

        const {response, data} = await axios.get(`/api/merchandise`)
        console.log(data, 'from getAllMerchandise')
        return data;

    } catch (error) {
        throw error;
    }
}

export async function getMerchandiseByCat(category) {

    try {

        const {response, data} = await axios.get(`/api/merchandise/${category}`)
        console.log(data, 'from getMerchandiseByCat')
        return data;

    } catch (error) {
        throw error;
    }
}

/**************************************************** 6/3*/

export async function addItemToCart() {
    
}

export async function getGuestCart() {
    try {

        const {cart} = await axios.get

    } catch (error) {
        throw error;
    }
}

export async function addMerch(name, description, price, rating, cat) {
    
}