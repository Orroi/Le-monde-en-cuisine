const IP = "http://debug.easemedic.fr:8080";
import axios from 'axios';

export default {
	LoginPharmacies: (username, password, resultCallback = undefined, errorCallback = undefined) =>
	{
        const token = btoa(`${username}:${password}`)
        const authHeader = `Basic ${token}`;
        axios.post('http://debug.easemedic.fr:8080/pharmacies/signin', {}, {
            headers: { 
                'Authorization': authHeader
              },
        })
        .then((response) => {
            if  (resultCallback)
                resultCallback(response)
            return (response)
        }).catch(( error ) => {
            if (errorCallback)
                errorCallback(error.response);
            return(error.response)
        })
    },
    RegisterPharmacies: (firstName, lastName, phone, address, mail, password, resultCallback = undefined, errorCallback = undefined) =>
	{
        const token = btoa(`${mail}:${password}`)
        const authHeader = `Basic ${token}`;

        axios.post('http://debug.easemedic.fr:8080/pharmacies/signup',
        {
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phone,
            "addressPharma": "10 PL DU MARCHE 177 56 MORBIHAN",
        },
        {
            headers: {'Authorization': authHeader}
        })
        .then((response) => {
            if  (resultCallback)
                resultCallback(response)
            return (response)
        }).catch(( error ) => {
            if (errorCallback)
                errorCallback(error.response);
            return(error.response)
        })
    },
	LoginUser: (username, password, resultCallback = undefined, errorCallback = undefined) =>
	{
        const token = btoa(`${username}:${password}`)
        const authHeader = `Basic ${token}`;
        axios.post('http://debug.easemedic.fr:8080/user/signin', {}, {
            headers: { 
                'Authorization': authHeader
            },
        })
        .then((response) => {
            if  (resultCallback)
                resultCallback(response)
            return (response)
        }).catch(( error ) => {
            if (errorCallback)
                errorCallback(error.response);
            return(error.response)
        })
    },
    RegisterUser: (firstName, lastName, mail, password, type, resultCallback = undefined, errorCallback = undefined) =>
	{
        const token = btoa(`${mail}:${password}`)
        const authHeader = `Basic ${token}`;

        axios.post('http://debug.easemedic.fr:8080/user/signup',
        {
            "firstName": firstName,
            "lastName": lastName,
            "email": mail,
            "type": type
        },
        {
            headers: {'Authorization': authHeader}
        })
        .then((response) => {
            if  (resultCallback)
                resultCallback(response)
            return (response)
        }).catch(( error ) => {
            if (errorCallback)
                errorCallback(error.response);
            return(error.response)
        })
    }
};