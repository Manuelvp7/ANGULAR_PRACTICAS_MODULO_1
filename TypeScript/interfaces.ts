(
    () => {


        interface Xmen {
            nombre: string,
            edad: number,
            poder?: string
        }


        const enviarMision = (xmen: Xmen) => {
            console.log(`Enviando a ${xmen.nombre} a misión `);
        }

        const retornarCuartel = (xmen: Xmen) => {
            console.log(`Retornando a ${xmen.nombre} al cuartel`)
        }

        var xmen: Xmen = {
            nombre: 'Logan',
            edad: 30
        }

        enviarMision(xmen);
        retornarCuartel(xmen);


    }
)();