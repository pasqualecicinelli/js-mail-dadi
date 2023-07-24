let randomUser = Math.floor(Math.random() * 6) + 1;

console.log(randomUser);


let randomComputer = Math.floor(Math.random() * 6) + 1;

console.log(randomComputer);

if (randomUser > randomComputer) {

    console.log('L\'utente ha il punteggio più alto');

} else if (randomUser < randomComputer) {

    console.log('Il computer ha il punteggio più alto');

} else if(randomUser == randomComputer) {

    console.log('Avete lo stesso punteggio, quindi avete pareggiato');
}