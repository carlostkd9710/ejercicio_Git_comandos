let nombrePlanetas = ['Tierra', 'Marte']
let distancia = [5, 3, '67']
const tamanio = []

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamanio);

let i = 0;
while (i <= nombrePlanetas.length - 1) {
    console.log(i);
    console.log(nombrePlanetas[i])
    i += 1;
}
for (let index = 0; index < nombrePlanetas.length; index++) {
    console.log(nombrePlanetas[index])
}
for(const key in nombrePlanetas){
    console.log(nombrePlanetas[key])
}
for(const planeta of nombrePlanetas){
    console.log(planeta)
}

for(const key in distancia){
    if(distancia[key]=='5'){
        console.log("Se ecnontro la distancia")
    }else{
        console.log("No se ecnontro la distancia")
    }
}