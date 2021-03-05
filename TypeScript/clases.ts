(
    () => {

        // class Avenger{

        //     nombre: string;
        //     equipo: string;
        //     nombreReal: string;

        //     puedePelear: boolean;
        //     peleasGanadas: string;




        //     constructor(nombre: string, equipo: string,nombreReal: string, puedePelear: boolean, peleasGanadas: string){
        //         this.nombre = nombre;
        //         this.equipo = equipo;
        //         this.nombreReal = nombreReal;
        //         this.puedePelear = puedePelear;
        //         this.peleasGanadas = peleasGanadas;

        //     }
        // }


        class Avenger {
            constructor(
                private nombre: string,
                private equipo: string,
                private nombreReal?: string,
                private puedePelear: boolean = true,
                private peleasGanadas: number = 0
            ) { }
        }


        var antman = new Avenger('Antman', 'Iron Man');

        console.log(antman);

    }
)();