async function axiosUserPicture (){

    const response = await fetch("http://localhost:5000/profilepic",{
                                method: "GET",
                                headers: new Headers({
                                    'Authorization': localStorage.getItem('AWT'),
                                    'UID': localStorage.getItem('UID'),
                                    'Cache-control': 'no-cache'
                                })
                            })
        .then(res => res.blob())
        .then(res => {
            const image = URL.createObjectURL(res)
            return {
                userPicture: image
            }
        })
    
    return response
}

export default axiosUserPicture