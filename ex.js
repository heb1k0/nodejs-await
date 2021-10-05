let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//                                                   NIVELL 1
// Exercici 1
/* Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. Invocar-la des de fora pasandole totes
 dues funcions que imprimeixin un missatge diferent en cada cas. */

    let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let employee = employees.find(empleado => empleado['id']==id)
        if (employee) {
            resolve(employee)
        } else {
            reject('No existe el empleado en employees')
            throw new Error("Whoops!");
        }     
    }) 
} 
  let getSalario = (employe) =>{


    return new Promise((resolve, reject) =>{

        if(employe === undefined){
            reject('No existe el empleado')
        }

        let searchSalary = salaries.find(salary => salary['id'] == employe.id)

        if(searchSalary){
            resolve(searchSalary)
        }else{
            reject('No existe el empleado en salaries')
        }

    })
}
// Exercici 2
/* Creu una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla el nom de l'empleat i el seu salari */

async function getEmploye (id){
            let empleado = await getEmpleado(id);
            let salary = await getSalario(empleado);
            console.log(`El empleado ${empleado.name} cobra ${salary.salary}`)     
}
getEmploye(1); 


//                                                   NIVELL 2 Y NiIVELL 3
// Exercici 1
/* Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve amb una demora de 2 segons. 
- Exercici 1
Captura tots els errors possibles dels nivells 1 i 2.
*/



async function getDelaty(id){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                 let resultEmpleado = getEmploye(id);
                 resolve(resultEmpleado)
            }catch(err){
                 reject(err);
            }
           

        },200)
    })

}

async function getEmployeDelay(id){

    try{
        await getDelaty(id);
    } catch (err){
        console.log(err)
    }

 }

 getEmployeDelay(1); 

