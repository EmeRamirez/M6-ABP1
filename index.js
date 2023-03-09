
let preguntas = ['Ingrese una fecha de inicio \n' , 'Ingrese una fecha de término \n'];
let respuestas = [];

function preguntar(indice){
    process.stdout.write(preguntas[indice])
}

function calcularHorasLaborales(fechainicio,fechatermino,dias){
    let acumusemana = 0;
        let acumusabado = 0;
        let horassemana = 0;
        let horassabado = 0;
        let sueldodiario = 0;

        dias.forEach(dia => {
            if (dia == 1 || dia == 3 || dia == 5){
                sueldodiario = 7 * 7100;
                acumusemana = acumusemana + sueldodiario;
                horassemana = horassemana + 7;
            } else if (dia == 2 || dia == 4){
                sueldodiario = 8 * 7100;
                acumusemana = acumusemana + sueldodiario;
                horassemana = horassemana + 8;
            } else if (dia == 6) {
                sueldodiario = 5 * 12300;
                acumusabado = acumusabado + sueldodiario;
                horassabado = horassabado + 5;
            }
        })

        console.log(`FECHA INICIO: ${fechainicio}`);
        console.log(`FECHA TÉRMINO: ${fechatermino}\n`);

        console.log(`CANTIDAD HORAS LU-VI: ${horassemana}`);
        console.log("VALOR HORA: $7100");
        console.log(`SUBTOTAL LU-VI $${acumusemana}\n`);

        console.log(`CANTIDAD HORAS SA: ${horassabado}`);
        console.log("VALOR HORA: $12300");
        console.log(`SUBTOTAL SA: $${acumusabado}\n`);

        console.log(`TOTAL: ${acumusemana} + ${acumusabado} = $${acumusemana+acumusabado}\n`);
}

let fechainicio = "";              
let fechatermino = "";
let dias = [];

process.stdin.on('data', (data)=>{
    respuestas.push(data.toString().trim()) 
    if(respuestas.length < preguntas.length){
        preguntar(respuestas.length);
    }else{

        if (respuestas[0]) {
            fechainicio = new Date(respuestas[0]);
        }
    
        if (respuestas[1]){
            fechatermino = new Date(respuestas[1]);
        }

        const dias = [];

        process.stdout.write('\n')

        let fechaactual = fechainicio;
        while (fechaactual <= fechatermino){
            console.log(fechaactual);
            dias.push(fechaactual.getDay(fechaactual)); 
            fechaactual = new Date(fechaactual.setDate(fechaactual.getDate() +1));
        }

        console.log('\n');
        console.log(dias)
        console.log('\n');

        calcularHorasLaborales(fechainicio,fechatermino,dias);

        process.exit();
    } 

})

preguntar(0);






