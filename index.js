window.addEventListener('load', function (e) {
    const url = 'https://jsonplaceholder.typicode.com/users'

    function sendXHR(method, url, body) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest() // funksiya global

            /* GET => bu serverdan nimanidur olish ko'rish */
            /* POST => bu nimanidur yaratish yoki server ga jo'natish */
            xhr.open(method, url)

            xhr.setRequestHeader('content-type', 'application/json')

            xhr.responseType = 'json' // massivga aylantirdik

            xhr.onload = function () {
                // console.log(typeof xhr.response);  // string // json // 
                // console.log(xhr.response);
                // let asd = JSON.parse(xhr.response)
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject('Xato bor ' + xhr.status);
                }
            }

            xhr.send(JSON.stringify(body))
        })
    }

    const names = document.querySelector('.names');

    // sendXHR('GET', url).then((res) => {
    //     console.log(res);
    //     res.map((val) => {
    //         let name = document.createElement('div')
    //         name.innerHTML = val.name
    //         names.appendChild(name)
    //     })
    // }).catch((err) => {
    //     console.log(err);
    // }).finally(() => {
    //     console.log('Finnally');
    // })

    // sendXHR('GET', 'https://jsonplaceholder.typicode.com/comments').then((res) => {
    //     console.log(res);
    // })

    const user = {
        name: 'Umarjon',
        age: 15,
        job: 'Dev'
    }

    sendXHR("POST", url, user).then((res) => {
        console.log(res);
        names.innerHTML = res.id + res.name
    }).catch((err) => {
        console.log(err);
    })


});