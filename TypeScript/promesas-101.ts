(
    () => {

        console.log('INICIO');

        const prom1 = new Promise((resolve, reject) => {

            setTimeout(() => {
                reject('se terminó el timeout');
            }, 1000);

        });


        prom1
            .then(mesage => console.log(mesage))
            .catch(error => console.warn(error));

        console.log('FIN');




    }
)();