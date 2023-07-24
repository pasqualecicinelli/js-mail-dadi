const boxUser = document.getElementById('box-user');
const boxPc = document.getElementById('box-pc');
const boxResult = document.getElementById('result');

let randomUser = Math.floor(Math.random() * 6) + 1;

console.log(randomUser);

boxUser.innerHTML = randomUser + ' Utente';



let randomComputer = Math.floor(Math.random() * 6) + 1;

console.log(randomComputer);

boxPc.innerHTML = randomComputer + ' Computer';

if (randomUser > randomComputer) {

    console.log('L\'utente ha il punteggio più alto');

    boxResult.innerHTML = ('L\'utente ha il punteggio più alto');

} else if (randomUser < randomComputer) {

    console.log('Il computer ha il punteggio più alto');

    boxResult.innerHTML = ('Il computer ha il punteggio più alto');

} else if (randomUser == randomComputer) {

    console.log('Avete lo stesso punteggio, quindi avete pareggiato');

    boxResult.innerHTML = ('Avete lo stesso punteggio, quindi avete pareggiato');
}