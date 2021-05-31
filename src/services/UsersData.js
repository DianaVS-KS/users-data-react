const REQUEST_URL = 'https://reqres.in/api/users'

export const fetchUsers = async () => {
    return fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => data['results'])
    .catch(function(){
        console.log("ERROR");
    });
};