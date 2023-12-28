console.log('funziona');

const dati = [
    {
        id: 1 ,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Scoperta di una nuova specie di papera di gomma.',
        tags: 'geo, tech',
        author: 'Diana Rossi',
        published: '2023-02-11',
        foto: 'https://picsum.photos/id/237/300/200'
    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tags: 'viaggi, geo',
        author: 'Fabio Mari',
        published: '2023-03-14',
    },
    {
        id: 3,
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.' ,
        tags: 'cucina',
        author: 'Marta Bianchi',
        published: '2023-04-20',
    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        content: 'Un analisi delle tendenze e delle sfide nell\'arte contemporanea, con interviste a artisti emergenti.',
        tags: 'arte, tech',
        author: 'Gabriele Neri',
        published: '2023-05-29',
    }
]

console.log(dati);


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

    return     `<div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title d-flex"> ${dato.title} </h5>
                        <div>
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Publicato da ${dato.author}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">In data ${dato.published}</h6>
                    <p class="card-text">${dato.content}</p>
                    <div class="">
                        <img src="${dato.foto}" alt="${dato.descrizione}">
                    </div>
                    <a href="#" class="card-link">${dato.tags}</a>
                    <a href="#" class="card-link">${dato.tags}</a>
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




