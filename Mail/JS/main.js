const mailArray = ["Admin@gmail.com", "Employer@gmail.com", "Supervisor@gmail.com"];

const emailUser = prompt("Inserisci l'email per accedere");

let valid = false;

for (let i = 0; i < mailArray.length; i++) {


    if (emailUser == mailArray[i]) {

        valid = true;

        console.log('corretto ' + emailUser);


    } else {

        console.log('sbagliata ' + emailUser);
    }

}



if (valid) {

    alert('Accesso consentito');

} else {

    alert('Accesso non consentito prova con un\'altra email');
}

