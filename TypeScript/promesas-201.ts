(
    () => {


        const retirarDinero = (monto: number): Promise<number> => {

            let montoDisponible = 1000;

            return new Promise((resolve, reject) => {
                if (monto <= montoDisponible) {
                    montoDisponible -= monto;
                    resolve(montoDisponible);
                } else {
                    reject(` No hay suficientes fondos`)
                }
            });

        }


        retirarDinero(1500)
            .then(montoDisponible => console.log(`Monto restante ${montoDisponible} `))
            .catch(error => console.warn(error));




    }
)();