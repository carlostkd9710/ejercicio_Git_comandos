let nombrePlanetas = ['Tierra', 'Marte', 'jupiter']
let distancia = [5, 2,9, '67']
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

console.log('foreach')

nombrePlanetas.forEach((value, index,array) => {
    console.log('planeta',index,value)
});

console.log('MAP')

nombrePlanetas.map((planetas,index)=>{
    return(
        console.log(`Èl planeta ${planetas} tiene el tamaño de: ${tamanio[index]}`)
    )
})

console.log('MapEnVariable')

let resultadoMap = nombrePlanetas.map((planetas,index)=>{
    return(`Èl planeta ${planetas} tiene el tamaño de: ${tamanio[index]}`)
})
console.log(resultadoMap)