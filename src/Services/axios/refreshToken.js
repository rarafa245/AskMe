import axios from 'axios'

async function axiosRefreshToken(props) {

   const response = await axios.get("http://192.168.0.23:5000/refresh", {
                        headers: {
                            'Authorization': localStorage.getItem('AWT'),
                            'UID': localStorage.getItem('UID')
                        }
                    })
        .then(res => { 
            if (res.data.status)
                localStorage.setItem('AWT', res.data.token)
        })
        .catch(error => {
            alert('Session Expired! Timeout!')
            props.history.push("/")  
        })

}

export default axiosRefreshToken