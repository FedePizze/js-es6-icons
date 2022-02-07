const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'facebook-square',
		prefix: 'fa-',
		type: 'social',
		family: 'fab',
		color: 'green'
	}
	,
	{
		name: 'instagram-square',
		prefix: 'fa-',
		type: 'social',
		family: 'fab',
		color: 'green'
	}
	,
	{
		name: 'twitter-square',
		prefix: 'fa-',
		type: 'social',
		family: 'fab',
		color: 'green'
	}
	,
	{
		name: 'whatsapp-square',
		prefix: 'fa-',
		type: 'social',
		family: 'fab',
		color: 'green'
	}
];



//DICHIARO I TRE ESADECIMALI RANDOM
const colore1 = randomColor();
const colore2 = randomColor();
const colore3 = randomColor();
const colore4 = randomColor();


//CHIAMO ELEMENTO CONTAINER
const container = document.getElementById('icons-container');
iconeNuove(container, icons)


//FUNZIONE CREA ICONE
function iconeNuove(container, icons) {

    //CONTENUTO VUOTO
    let content = '';
	

    //RIEMPIO CONTENUTO CON ICONE USANDO UN FOR EACH
    icons.forEach(oggetto => {


        //RANDOM COLOR
        if (oggetto.type == 'animal') {

            oggetto.color = colore1

    
        } else if (oggetto.type == 'vegetable') {
    
            oggetto.color = colore2
    
        } else if (oggetto.type == 'user') {
    
            oggetto.color = colore3
        } else {

			oggetto.color = colore4

		}

        content += `<div class="icon">
                        <i style="color:${oggetto.color}" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
                        <h4>${oggetto.name}</h4>
                    </div>`;
    });
    
    //INSERISCO LE ICONE NELL'HTML
    container.innerHTML =  content;
    
}


//-----------------------------------------------------------------------------


//MI RICHIAMO IL SELECT
const selector = document.getElementById('type-filter');

//METTO UN ASCOLTATORE DI EVENTI CHE PREVEDE UN CAMBIAMNTO IN BASE ALL'OPZIONE DEL SELECT SELEZIONATA
selector.addEventListener('change', function() {

    let selection = this.value;

    if (selection == '') {

        iconeNuove(container, icons);

    } else {

        const categorie = icons.filter(icon => {

            if (icon.type == selection ) {
                return true;
            }
    
            return false;
    
        });
    
        iconeNuove(container, categorie);
    }
});



//CHIAMO L'ELEMENTO SELECT
const select = document.getElementById('type-filter');
selectType(select)

//FACCIO LA FUNZIONE PER RENDERE SELCT DINAMICI
function selectType(select) {

	//CREO UN ARRY CON I TIPI
	for(let i = 0; i < icons.length; i++){

		var tipo = []
	
		icons.forEach(oggetto => {
			tipo.push(oggetto.type)
		});
	}
	
	//FILTRO L'ARREY PER TOGLIERE I DOPPIONI
	const filteredTipo = tipo.filter(function(ele , pos){
		return tipo.indexOf(ele) == pos;
	}) 
	
	//AGGIUNGO ALL'INIZIO DELL'ARREY L'ELEMENTO VUOTO
	filteredTipo.unshift("")
	
	//DICHIARO OPTION
	option = ''
	
	//CREO IL CILO PER AGGIUNGERE GLI ELEMENTI OPTION NELL'HTML
	for(let i = 0; i < filteredTipo.length; i++) {
	
		if(i == 0){
		option += `<option value="${filteredTipo[i]}">tutti</option>`;
		} else {
		option += `<option value="${filteredTipo[i]}">${filteredTipo[i]}</option>`;
		}
		select.innerHTML =  option;
	}

}


//-----------------------------------------------------------------------------


//CREO LA FUNZIONE ESADECIMALE RANDOM
function randomColor(){

    //DICHIARO L'ESADECIMALE CON L'ASTERISCO
    let esadecimale = '#'

    for (let i = 0; i < 6; i++) {
        //NUMERO RANDOM
        let colore = Math.floor(Math.random()*10)

        //LETTERA RANDOM
        let elemento = Math.floor(Math.random()*6)

        let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f']
        let lettera = alfabeto[elemento]

        //ARREY DI LETTERA + NUMERO
        let caso = [lettera, colore]

        //CREAZIONE DELL'ESADECIMALE
        const random = caso[Math.floor(Math.random() * 2)];
        esadecimale += random
    }

    return esadecimale
}