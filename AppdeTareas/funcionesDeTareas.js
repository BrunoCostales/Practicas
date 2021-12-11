const funcionDeTareas = () => {
    const { argv } = require("process");
    const fs = require("fs");
    let argumento = process.argv[2];


    let jsonParseado = JSON.parse(fs.readFileSync("./tareas.json"))



    switch (argumento) {
        case 'listar':
            jsonParseado.forEach((tarea, i) => {
                let dia = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
                dia.push('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes');
                dia.push('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes');





                let oficio = tarea.Tarea + ' el dia ' + dia[i] + ' ' + (i + 1) + ' ' + tarea.Estado;
                let dia2 = []
                dia2.push(dia[i])

                i >


                    console.log(oficio);


            })

            break;
        case undefined:
            console.log('Atencion Tienes que pasar una accion');
            break;
        case 'escribir':
            const escribirJson = (tareas) => {
                let tareaNueva = {
                    Tarea: tareas,
                    Estado: 'Pendientee'
                }
                
                jsonParseado.push(tareaNueva);

                fs.writeFileSync("./tareas.json", JSON.stringify(tareas))



            }
            escribirJson(process.argv[3])
            break;




        default:
            console.log('No entiendo que quieres hacer');
            break;
    }
}
module.exports = funcionDeTareas;
