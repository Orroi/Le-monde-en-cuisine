const IP = "http://debug.easemedic.fr:8080";
import axios from 'axios';
import callNewAccessToken from "./gestionToken.js"
import moment from 'moment'

export default {
	getUser: (token, resultCallback = undefined, errorCallback = undefined) =>
	{
        /*var date = new Date()
        var nbr = parseInt(localStorage.getItem("accessTokenExp"))* 1000;
        if (date.getTime() >= nbr) {
            //console.log(data)
            //localStorage.setItem("accessToken", data.accessToken)
            //localStorage.setItem("refreshToken", data.refreshToken)
            //localStorage.setItem("accessTokenExp", data.accessTokenExp)
            token = localStorage.getItem("accessToken")
        }*/
        axios.get('http://debug.easemedic.fr:8080/user/me', {
            headers: {
                'Authorization': 'Bearer ' + token
            }        
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
