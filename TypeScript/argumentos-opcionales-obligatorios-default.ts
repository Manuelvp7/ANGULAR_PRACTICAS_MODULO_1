(function() {

    const batisenal = function(quien:string, cuando?:string, que:string = 'batiseñal' ) {

        if (cuando) {
            console.log(`${ quien } activo la ${ que } en la ${ cuando }`);
        }else{
            console.log(`${ quien } activo la ${ que }`);
        }

    }


    console.log( batisenal('Gordon', 'en la tarde'));


}
)();