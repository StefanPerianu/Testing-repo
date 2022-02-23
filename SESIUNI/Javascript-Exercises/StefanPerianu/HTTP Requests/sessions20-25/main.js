const getUsersUrl = 'https://reqres.in/api/users?page=2';
let usersData = {};

async function getUsersData() {
    const response = await fetch(getUsersUrl);
    return response.json(); 
};

getUsersData().then( (res) => {
    usersData = res.data;
    console.log(usersData);
})