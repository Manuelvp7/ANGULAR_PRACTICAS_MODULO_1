(
    () => {


        const templateLiteral = (quien: string, que: string, cuando: string) => `${quien} activo la ${que} en ${cuando}`;

        console.log(templateLiteral('alfred', 'batiseñal', 'en la tarde'));


    }
)();