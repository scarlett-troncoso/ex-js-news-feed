console.log('funziona');

const dati = [
    {
        id: 1 ,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Scoperta di una nuova specie di papera di gomma.',
        tag1: 'geo',
        tag2: 'tech',
        author: 'Diana Rossi',
        published: '2023-02-11',
        foto: 'https://picsum.photos/id/910/300/200',
        description: 'Fotografía cane'
    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tag1: 'viaggi',
        tag2: 'geo',
        author: 'Fabio Mari',
        published: '2023-03-14',
        foto: 'https://picsum.photos/id/210/300/200',
        description: 'Fotografía cane'
    },
    {
        id: 3,
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.' ,
        tag1: 'cucina',
        tag2: '',
        author: 'Marta Bianchi',
        published: '2023-04-20',
        foto: 'https://picsum.photos/id/606/300/200',
        description: 'Fotografía cane'
    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        content: 'Un analisi delle tendenze e delle sfide nell\'arte contemporanea, con interviste a artisti emergenti.',
        tag1: 'arte',
        tag2: 'tech',
        author: 'Gabriele Neri',
        published: '2023-05-29',
        foto: 'https://picsum.photos/id/293/300/200',
        description: 'Fotografía cane'
    }
]


//TAGS ARRAY

const tagsArrayMap = dati.map(dato => dato.tag1)
console.log(tagsArrayMap); // tutti i tags di ogni oggetto in un array

//TAGS OBJECT
function mapTags(listTagsMap) {
    listTagsMap.map(el => {
        console.log({el}); // ogni tag separatamente come un oggeto ogni uno
    })
}

const objectTags = mapTags(tagsArrayMap)


//TAGS ARRAY ↓↓↓↓↓↓↓↓↓↓
/*function solotags(datiList) {
    datiList.forEach(dato => {
        console.log([dato.tags]);
    })
}

const arrayTags = solotags(dati)

console.log(dati);*/


//PROVA FUNCTION
/*dato = generateCard( { //questo serve momentaneamente per vedere in console, visto che ancora non ho definito 'dato'
    id: 4,
    title: 'Arte moderna: oltre i confini convenzionali',
    content: 'Un analisi delle tendenze e delle sfide nell\'arte contemporanea, con interviste a artisti emergenti.',
    tags: 'arte, tech',
    author: 'Gabriele Neri',
    published: '2023-05-29',
})

console.log(dato);*/


/**
 * Genera markup della card
 * @param {object} dato dato di ogni ogetto dell array
 * @returns markup della card
 */
function generateCard(dato) {


    return     `<div class="card my-3 m-auto" style="width: 40rem;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title d-flex"> ${dato.title} </h5>
                            <button class="fa-regular fa-bookmark" id="save"></button>
                        </div>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Publicato da ${dato.author}</h6>
                        <h6 class="card-subtitle mb-2 text-body-secondary">In data ${dato.published}</h6>
                        <p class="card-text">${dato.content}</p>
                        <div class="">
                            <img src="${dato.foto}" alt="${dato.descrizione}">
                        </div>
                        <button type="button" class="${dato.tag1 == 'geo' ? 'btn btn-success btn-sm mt-2' : dato.tag1 == 'viaggi' ? 'btn btn-danger btn-sm mt-2' : dato.tag1 == 'cucina' ? 'btn btn-warning btn-sm mt-2' : dato.tag1 == 'arte' ? 'btn btn-dark btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${dato.tag1}</button>
                        <button type="button" class="${dato.tag2 == 'geo' ? 'btn btn-success btn-sm mt-2' : dato.tag2 == 'tech' ? 'btn btn-primary btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${dato.tag2}</button>
                    </div>
                </div>`
}

const divCard = document.querySelector('.cardAppend')

renderCards(dati, divCard) //quindi la funzione funzionera con dati inziche datiList e divCard anziche domElement

/**
 * stampa la lista dei dati nelle card 
 * @param {array} datiList lista degli oggetti degli array
 * @param {object} domElement dove mettere le card
 */
function renderCards(datiList, domElement) {
        datiList.forEach(dato => {

        const datoEl = generateCard(dato)
        console.log(datoEl);
    
        domElement.insertAdjacentHTML('beforeend', datoEl)
    })
}

// se quello card é selezionata quindi (se l'icone del button e pieno) allora stampare quella card, forse con la funzione renderCards
/* QUALCOSA COSI ↓
function cardSalvata() {
    if (document.getElementById('save').className === 'fa-solid fa-bookmark') {
        renderCards(, divCard)
    }
}*/


document.getElementById('tag_type').addEventListener('change',
/**
 * filtra i tag della select, cl click di selezione
 * @param {array} e evento
 */
function(e){
    console.log(e);
    // log to the consolore the option selected by the user

    console.log(e.target.value);
    //console.log(this);

    const filteredTags = dati.filter(dato => {
        return dato.tag1 === e.target.value  || dato.tag2 === e.target.value || e.target.value === 'all'
    })

    console.log(filteredTags);

    divCard.innerHTML = ""

    renderCards(filteredTags, divCard)
})

/*
Crea su ogni componente News un pulsante per il salvataggio della News.
Se clicchiamo l’icona bookmark, cambiamo l’aspetto dell’icona (es. da vuota a piena) e
aggiungiamo l’id della News nell’array degli id delle news salvate.
L’id della news è un dato “nascosto” che vorrai inserire in pagina per recuperarlo in seguito
al click dell’icona bookmark. Per farlo dovresti utilizzare un data-attribute.
In fase di stampa dell’elenco di news dovrai controllare se la news è salvata o meno per
poter dare il giusto aspetto all’icona bookmark.  */

/*
- che l'icona sia dentro un button, ma l'evento di background sia su licona 
- aggiungere l'id della news salvata 
- si se lleva a cabo la funcion entonces estampa esa news (id )
*/

const idNews = dati.filter(dato => dato.id) // ARRAY CON oggeti di TUTTI ID
console.log(idNews);

const idNewsMap = dati.map(dato => dato.id) // ARRAY CON TUTTI ID
console.log(idNewsMap);


document.getElementById('save').addEventListener('click',

function(e){
    console.log(e);
   
    console.log(this);

    const save = document.getElementById('save').className = 'fa-solid fa-bookmark'

    // si se ha seleccionado 'salva' de ese id,(no existe salva de ese id porq ambos no tienen relacion )
    // entonces stampare esa news che tiene ese id
    // para cada card si salvare.className === 'fa-solid fa-bookmark' allora: stampa dati.dato.id
    // dati.dato.id

})

// 



