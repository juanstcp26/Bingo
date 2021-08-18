function getBingoCard() {
    // Crear arreglo con subarreglo para cada columna necesaria
    var columnas = [
        [], // b (1-15)
        [], // i (16-30)
        [], // n (31-45)
        [], // g (46-60)
        []  // o (51-75)
    ];
    // Llenar cada subarreglo
    for(var i = 0; i < columnas.length; i++) {
        // Asignar máximo y mínimo de acuerdo a posición
        var min = (i * 15) + 1;
        var max = min + 15;
        // Este ciclo termina cuando el subarreglo tenga 5 elementos
        while(columnas[i].length < 5) {
            var num = Math.floor(Math.random() * (max - min)) + min;
            // Evitar que se repitan números
			if (!columnas[i].includes(num))
			{
                columnas[i].push(num);
            }
        }
        // Ordenar
        columnas[i].sort((a,b) => a - b);
    }
    // El centro es espacio en blanco
    columnas[2][2] = 'FREE';
    return columnas;
}