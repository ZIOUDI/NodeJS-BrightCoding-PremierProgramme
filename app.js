
const calculator = require ('./calculate');
const path = require('path');
const myOs = require('os');
const fs = require('fs');

const EventEmitter = require('events'); // EventEmitter == Classe
const myEvent = new EventEmitter();

//    HTTP Module
const http = require('http');

const server = http.createServer( function (req , resp){
    if(req.url === './'){
        resp.write('Hello in the brightCoding nodeJs corses ! ');
        resp.end();
    }if(req.url === '/api/courses')  {
        resp.write( JSON.stringify([ 'Java','Spring Boot' , 'ReactJs', 'NodeJS'   ])  );
        resp.end();
    }
   
} );

server.on( 'connection' , () => console.log('New connexion') )

console.log('Listening on port 4000 .... .... ')
server.listen(4000);  // http://localhost:4000/



 /*    Event Arguments

  // on = recepteur
 myEvent.on('alloo' , // 1 parm => fct anonyme
  arg =>  console.log (`salam si foulen , cv ? ${arg.msg} mon num est : ${arg.num}`))

  // add params
myEvent.emit('alloo',{num : '0619181249', msg : 'Je suis Sofiane !!!'});


 //    Events Module

  //  on = recepteur  */
  /*
myEvent.on(  'alloo' ,   function(){ 
    console.log ('salam si foulen , cv ?') ;
})
// emit = emetteur
myEvent.emit('alloo');

*/



 /*    File System Module
 
 ********  mode sync   *******/
/*
const files = fs.readdir('../',  (err, files) => {
    if(err) {
        console.error ('error',err) ;
    }else {
        console.log (files) ;
    }
});  */


/* mode async
const files = fs.readdirSync('./');
console.log (files) ;  */

/*   Operating System Module

 console.log (myOs.cpus()) ; 
let totalMemory = myOs.totalmem();
let freeMemory = myOs.freemem();
console.log (`The totalMemory is ${ totalMemory } and the freeMemory is ${ freeMemory } ` ) ;  */



/*    _filename, _dirname and Path Module

 
 console.log (__filename) ;
 console.log (__dirname) ;

 console.log (path.parse(__filename)) ; */


/*    Créer un module

 calculator.add(55,15) ;  calculator.sub(55,15) ; calculator.mult(55,15) ; calculator.div(55,15) ; */

 

