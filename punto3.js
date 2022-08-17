
/**
 * 
 * @param {Daye} fecha 
 * @param {Number} id 
 * @returns {Number} 
 * @Author: Johan Gomez <johang0297@gmail.com>
 * 
 */
const estaEnHorario = (fecha, id) => {
    const horarios = {
        1: {
            dias: [1,5],
            horarioMañana:[8,13],
            horarioTarde:[15,18]
        },
        2: {
            dias: [1,4],
            horarioMañana:[9,15]
        },
        3: {
            dias: [6],
            horarioMañana:[8,12],
        }
    }

    if(id === 3){
        if(fecha.getDay() === horarios[id].dias[0] && fecha.getHours() >= horarios[id].horarioMañana[0] && fecha.getHours() <= horarios[id].horarioMañana[1]){
            return 1;
        }
        return 0;
    }

    if(fecha.getDay() >= horarios[id].dias[0] && fecha.getDay() <= horarios[id].dias[1]){
       
        if(fecha.getHours() >= horarios[id].horarioMañana[0] && fecha.getHours() <= horarios[id].horarioMañana[1]){
            return 1;
        }
        if(fecha.getHours() >= horarios[id].horarioTarde[0] && fecha.getHours() <= horarios[id].horarioTarde[1]){
            return 1;
        }
    }
    return 0;
}

console.log(estaEnHorario(new Date(), 1));