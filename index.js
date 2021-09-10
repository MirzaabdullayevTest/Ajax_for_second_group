window.addEventListener('load', function (e) {
    const url = 'https://jsonplaceholder.typicode.com/users'

    function sendXHR(method, url, body) {
        // default method GET
        return fetch(url, {
            method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                console.error('This is error', res.status);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    // sendXHR('GET', url).then(data => {
    //     data.map((val, index) => {
    //         console.log(val.name);
    //     })
    // }).catch(err => {
    //     console.log(err);
    // })

    const user = {
        name: 'Umarjon',
        age: 15,
        job: 'Dev'
    }

    sendXHR("POST", url, user).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
});



 // return new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest() // funksiya global

    //     /* GET => bu serverdan nimanidur olish ko'rish */
    //     /* POST => bu nimanidur yaratish yoki server ga jo'natish */
    //     xhr.open(method, url)

    //     xhr.setRequestHeader('content-type', 'application/json')

    //     xhr.responseType = 'json' // massivga aylantirdik

    //     xhr.onload = function () {
    //         // console.log(typeof xhr.response);  // string // json // 
    //         // console.log(xhr.response);
    //         // let asd = JSON.parse(xhr.response)
    //         if (xhr.status < 400) {
    //             resolve(xhr.response);
    //         } else {
    //             reject('Xato bor ' + xhr.status);
    //         }
    //     }

    //     xhr.send(JSON.stringify(body))
    // })