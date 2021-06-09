import axios from 'axios';

export default {
    callNewAccessToken: () => {
        token = localStorage.getItem("refreshToken")

        console.log(token)
        /*axios.get('http://debug.easemedic.fr:8080/user/oauth/refresh_token', {},
        {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }.then((response) => {
            console.log('Ok')
            responseLog = {statusCode: response.status}
            return (response.data)

        })
        .catch((error) => {
            console.log('err')
            errorLog = {statusCode: error.response.status, statusText: error.response.data}
            return (errorLog)
        })
        )*/
    }
};