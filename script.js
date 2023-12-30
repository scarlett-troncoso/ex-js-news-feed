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

//TAGS OBJECT

const tagsArrayMap = dati.map(dato => dato.tag1)
console.log(tagsArrayMap); // tutti i tags di ogni oggetto in un array

function mapTags(listTagsMap) {
    listTagsMap.map(el => {
        console.log({el});
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
                            <i class="fa-regular fa-bookmark" id="save" type="submit"></i>
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

const salvare = document.getElementById('save')

salvare.addEventListener('click', function(e){

    console.log(this);
    salvare.className = 'fa-solid fa-bookmark';
    
    })






