import './index.css';

import {getUsers} from './api/userApi';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console


//Populate table of users via API call.
getUsers().then(result =>{
    let usersBody = "";

    result.forEach(user => {
        usersBody+= `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = usersBody;
});
