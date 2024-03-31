let touches = document.querySelectorAll('.getValue');
let screen = document.querySelector('#screen');
let operation;
let calcul = '';
let ecran;
let longueur;
function buttonValue (touche) {
    console.log(touche);

    switch (touche){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
        case ',':
            screen.innerHTML += touche;

                calcul += touche;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            screen.innerHTML += touche;
            operation = touche;
            calcul += touche;
            break;
        case '=':
        case 'Enter' :
            screen.innerHTML = '';
            screen.innerHTML = calculer(calcul, operation);
            break;

        case 'Backspace':
            longueur = calcul.length;
            ecran = screen.innerHTML;
            ecran = ecran.substring(0, longueur-1);
            screen.innerHTML = ecran;
            console.log(longueur);
            calcul = calcul.substring(0, longueur-1);
            if (calcul.endsWith(operation)) {
                operation = '';
                screen.innerHTML = calcul;
            }
            break
        case 'c':
        case 'C':
            screen.innerHTML = '';
            calcul = '';
            operation = '';

            break
        default:
            break;
    }
}

function calculer (nombre, operateur) {
    if (nombre === 'clear'){
        nb1 = '';
        nb2 = '';
        operation = '';
        rangOperation = 0;
    }else {
        let rangOperation = nombre.indexOf(operateur);

        let nb1 = nombre.substring(0, rangOperation);
        let nb2 = nombre.substring(rangOperation + 1);

        let operation = nombre.substring(rangOperation, rangOperation + 1);

        console.log(nb1, '  ', nb2, '  ', rangOperation, '  ', operation);

        nb1 = parseFloat(nb1);
        nb2 = parseFloat(nb2);

        switch (operation) {
            case '+':
                return nb1 + nb2;
            case '-':
                return nb1 - nb2;
            case '*':
                return nb1 * nb2;
            case '/':
                return nb1 / nb2;
        }
    }
}

for (let touche of touches){
    touche.addEventListener('click', function (){
        buttonValue(touche.value);
    })
}

document.addEventListener('keydown', function (event) {
    event.preventDefault();
    buttonValue(event.key);
})
