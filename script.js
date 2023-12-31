console.log('funziona');

const dati = [
    {
        id: '1' ,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Scoperta di una nuova specie di papera di gomma.',
        tag1: 'geo',
        tag2: 'tech',
        author: 'Diana Rossi',
        published: '2023-02-11',
        foto: 'rubber-duck',
    },
    {
        id: '2',
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tag1: 'viaggi',
        tag2: 'geo',
        author: 'Fabio Mari',
        published: '2023-03-14',
        foto: 'deep-sea',
    },
    {
        id: '3',
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.' ,
        tag1: 'cucina',
        tag2: '',
        author: 'Marta Bianchi',
        published: '2023-04-20',
        foto: 'kitchen-food',
    },
    {
        id: '4',
        title: 'Arte moderna: oltre i confini convenzionali',
        content: 'Un analisi delle tendenze e delle sfide nell\'arte contemporanea, con interviste a artisti emergenti.',
        tag1: 'arte',
        tag2: 'tech',
        author: 'Gabriele Neri',
        published: '2023-05-29',
        foto: 'modern-art',
    }
];

const datiSaved = []
console.log(datiSaved);

/**
 * Genera markup della card
 * @param {object} dato dato di ogni ogetto dell array
 * @returns markup della card
 */
function generateCard(dato) {

    return     `<div class="card my-3 m-auto" style="width: 42rem;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title d-flex"> ${dato.title} </h5>
                            <i class= "fa-regular fa-bookmark" id="save-${dato.id}" data-id="${dato.id}"></i>
                        </div>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Publicato da ${dato.author}</h6>
                        <h6 class="card-subtitle mb-2 text-body-secondary">In data ${dato.published}</h6>
                        <p class="card-text">${dato.content}</p>
                        <div class="">
                            <img src="./images/${dato.foto}.jpg" alt="${dato.foto}-photography">
                        </div>
                        <button type="button" class="${dato.tag1 == 'geo' ? 'btn btn-success btn-sm mt-2' : dato.tag1 == 'viaggi' ? 'btn btn-danger btn-sm mt-2' : dato.tag1 == 'cucina' ? 'btn btn-warning btn-sm mt-2' : dato.tag1 == 'arte' ? 'btn btn-dark btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${dato.tag1}</button>
                        <button type="button" class="${dato.tag2 == 'geo' ? 'btn btn-success btn-sm mt-2' : dato.tag2 == 'tech' ? 'btn btn-primary btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${dato.tag2}</button>
                    </div>
                </div>`;
}

const divCard = document.querySelector('.cardAppend');

renderCards(dati, divCard);

/**
 * stampa la lista dei dati nelle card 
 * @param {array} datiList lista degli oggetti degli array
 * @param {object} domElement dove mettere le card
 */
function renderCards(datiList, domElement) {
    datiList.forEach(dato => {
        const datoEl = generateCard(dato);
        console.log(datoEl);
        domElement.insertAdjacentHTML('beforeend', datoEl);
        insertOnClickOnTag(dato);    
    });
}

/*
Step 3: filtri
- Crea l’interfaccia dei filtri utilizzando tag di input appropriati. Recupera in JavaScript i valori
selezionati dall’utente da utilizzare nel codice per le logiche di filtraggio gli elementi.
- I filtri richiesti sono:
    ● filtro per singolo tag
    ● filtro per news salvate
*/

document.getElementById('tag_type').addEventListener('change',
    /**
     * filtra i tag della select, al click di selezione
     * @param {array} e evento
     */
    function(e){
        console.log(e.target.value);

        const filteredTags = dati.filter(dato => {

          return dato.tag1 === e.target.value  || dato.tag2 === e.target.value || e.target.value === 'all'

          // return dato.tag1[0] === e.target.value || dato.tag1[1] === e.target.value || e.target.value === 'all'


        })

        console.log(filteredTags)

        divCard.innerHTML = ""

        renderCards(filteredTags, divCard)

        for (let i = 0; i < datiSaved.length; i++)  {
            const list = datiSaved [i];
            console.log(list);
        
            for  (let index = 0; index < filteredTags.length; index++){
                const element = filteredTags[index];
                console.log(element);
                
                if (list.id === element.id) {
                    datiSaved.forEach(dato => document.getElementById('save-' + dato.id).classList = 'fa-solid fa-bookmark');
                    }
        }} 

    })

/*
- Crea su ogni componente News un pulsante per il salvataggio della News.

- Se clicchiamo l’icona bookmark, cambiamo l’aspetto dell’icona (es. da vuota a piena) e
aggiungiamo l’id della News nell’array degli id delle news salvate.

- L’id della news è un dato “nascosto” che vorrai inserire in pagina per recuperarlo in seguito
al click dell’icona bookmark. Per farlo dovresti utilizzare un data-attribute.

- In fase di stampa dell’elenco di news dovrai controllare se la news è salvata o meno per
poter dare il giusto aspetto all’icona bookmark.  */

/**
 * Al click su bookmark cambia colore e salva la news, e la aggiunge nell’array degli id delle news salvate
 * @param {array} dato 
 */
function insertOnClickOnTag(dato) {

    const save = document.getElementById('save-' + dato.id)

    save.addEventListener('click', function (e) {
        console.log('clicked');
        
        const sav = save.classList;
        //save.classList = sav.contains("fa-regular") ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'; //questo per fare deseleziona
        save.classList = 'fa-solid fa-bookmark';

        if (datiSaved.filter(datoSalvato => datoSalvato.id === dato.id)) {
        datiSaved.push(dato)
    }
    });
}

const showSave = document.getElementById('showSaved')

showsave.addEventListener('click', function (e) {
    divCard.innerHTML = "";

    if (showsave.checked) {
        renderCards(datiSaved, divCard);
        datiSaved.forEach(datoSalvato => document.getElementById('save-' + datoSalvato.id).classList = 'fa-solid fa-bookmark');
        if (datiSaved.length === 0) {
            divCard.innerHTML = "ANCORA NON HAI SALVATO NIENTE";
        }
    } else if (!showsave.checked){
        renderCards(dati, divCard)
        datiSaved.forEach(datoSalvato => document.getElementById('save-' + datoSalvato.id).classList = 'fa-solid fa-bookmark');
        } else {
            renderCards(dati, divCard)
            }
    })

