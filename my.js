console.log('JS OK!!!')

// shopping list
const listItem = ['Pere', 'Arance', 'Banane', 'Pasta', 'Zucchero', 'Sale', 'Pepe', 'Insalata', 'Pomodori']

// variables
let list = '';
let i = 0;

// shopping list while loop
while (i < listItem.length) {
    list += '<br>Articolo: ' + listItem[i];
    i++;
    console.log(listItem[i]);
}

// returns the HTML content (inner.HTML)
document.getElementById('container').innerHTML = list;
