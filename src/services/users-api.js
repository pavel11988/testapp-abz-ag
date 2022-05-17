

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
const axios = require('axios');

let token;

async function getNewToken() {
    await axios.get(`${BASE_URL}/token`)
    .then(function(response) { 
        token = response.data.token;
        return token; 
    }) 
    .catch(function(error) { 
        console.log(error)
        return error;
    });
        
}

async function getUsers(page) {
    try {
        const response = await axios.get(
            `${BASE_URL}/users?page=${page}&count=6`
        )
        const pages = response.data.total_pages;
        const users = response.data.users.map(({photo,email,id,name,phone,position,position_id,registration_timestamp}) => {
            return {
                email: email,
                id: id,
                name: name,
                phone: phone,
                position: position,
                photo: photo,
                position_id: position_id,
                registration_timestamp: registration_timestamp,
            };
          });
        return {users: users, pages:pages}; 

    } catch(error){
        return error;
    }
}


async function getPositions() {
    try{
        const response = await axios.get(
            `${BASE_URL}/positions`
        )
        const positions = response.data.positions;

        return positions; 
    } catch(error){
        return error;
    }
}

async function addNewUser(userFormData) {
    let result = {};
    await getNewToken();
    await axios({
        method: "post",
        url: `${BASE_URL}/users`,
        data: userFormData,
        headers: { "Token": token },
      })
        .then(function (response) {
            result = response.data;
            return result;
        })
        .catch(function (response) {
            result = response.response.data;
            return result;
            
        });
    return result;
}


export {
    getNewToken,
    getUsers,
    getPositions,
    addNewUser,
    // getPages
}