function getBingoCard() {
    // Crear arreglo con subarreglo para cada columna necesaria
    var espacios = [
        [], // b (1-15)
        [], // i (16-30)
        [], // n (31-45)
        [], // g (46-60)
        []  // o (51-75)
    ];
    // Llenar cada subarreglo
    for(var i = 0; i < espacios.length; i++) {
        // Asignar máximo y mínimo de acuerdo a posición
        var min = (i * 15) + 1;
        var max = min + 15;
        // Este ciclo termina cuando el subarreglo tenga 5 elementos
        while(espacios[i].length < 5) {
            var num = Math.floor(Math.random() * (max - min)) + min;
            // Evitar que se repitan números
			if (!espacios[i].includes(num))
			{
                espacios[i].push(num);
            }
        }
        // Ordenar
        espacios[i].sort((a,b) => a - b);
    }
    // El centro es espacio en blanco
    espacios[2][2] = 'FREE';
    return espacios;
}

function cartones() {
   return [
       getBingoCard(),
       getBingoCard(),
       getBingoCard(),
       getBingoCard(),
       getBingoCard(),
       getBingoCard()
   ] 
}

var cards = cartones();
var html = '';
cards.forEach(card => {
    html += `
      <table>
		<thead>
			<tr>
				<th>B</th>
				<th>I</th>
				<th>N</th>
				<th>G</th>
				<th>O</th>
			</tr>
		</thead>
      <tbody>`;
    for(var i = 0; i < 5; i++) {
        html += `
			<tr>
				<td>${card[0][i]}</td>
				<td>${card[1][i]}</td>
				<td>${card[2][i]}</td>
				<td>${card[3][i]}</td>
				<td>${card[4][i]}</td>
			</tr>
        `;
    }
    html += '</tbody></table>';
});
document.querySelector('#bingo-cards').innerHTML=html;