var datos = [42, true, function() {return 'El significado de la vida es: '}];

if (datos[1]){
    console.log(datos[2]() + ' ' + datos[0]);
}