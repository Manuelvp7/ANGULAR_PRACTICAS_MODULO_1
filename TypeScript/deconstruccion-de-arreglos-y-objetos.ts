(
    () => {

        const anArray: string[] = ['Lunes', 'Martes', 'Miercoles'];

        const anObject: Object = {
            nombre: 'Juan',
            banda: 'MARCEL GOODMAN',
            edad: 24
        }

        const extraerArray = function ([dia1, dia2, dia3]: string[]) {
            console.log(dia1);
            console.log(dia2);
            console.log(dia3);

        }

        const extraerObjeto = function (object: any) {
            const { nombre, edad } = object;
            console.log(nombre);
            console.log(edad);
        }

        extraerArray(anArray);
        extraerObjeto(anObject);




    }
)();