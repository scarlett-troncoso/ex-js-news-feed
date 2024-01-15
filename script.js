console.log('funziona');
const divCard = document.querySelector('.cardAppend');

const dati = [
    {
        id: 1,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Scoperta di una nuova specie di papera di gomma.',
        tags: ['geo', 'tech'],
        author: 'Diana Rossi',
        published: '2023-02-11',
        foto: 'rubber-duck',
    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tags: ['viaggi', 'geo'],
        author: 'Fabio Mari',
        published: '2023-03-14',
        foto: 'deep-sea',
    },
    {
        id: 3,
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.' ,
        tags: ['cucina', ''],
        author: 'Marta Bianchi',
        published: '2023-04-20',
        foto: 'kitchen-food',
    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        content: 'Un analisi delle tendenze e delle sfide nell\'arte contemporanea, con interviste a artisti emergenti.',
        tags: ['arte', 'tech'],
        author: 'Gabriele Neri',
        published: '2023-05-29',
        foto: 'modern-art',
    }
];

const datiSaved = []
console.log(datiSaved);

/**
 * Genera markup della card della new
 * @param {object} dati dato di ogni ogetto dell array
 * @returns markup della card
 */
function renderCards(dati) {
    divCard.innerHTML = '';

    dati.forEach(function (dato) {
        const {id, title, content, tags, author, published, foto} = dato; 
        
            divCard.innerHTML +=
                        `<div class="card my-3 m-auto" style="width: 42rem;">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between cont-bookMark">
                                        <h5 class="card-title d-flex"> ${title} </h5>
                                        <i class= "${isSaved(dato) ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'}" id="save" data-id="${id}"></i>
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Publicato da ${author}</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">In data ${published}</h6>
                                    <p class="card-text">${content}</p>
                                    <div class="">
                                        <img src="./images/${foto}.jpg" alt="${foto}-photography">
                                    </div>
                                    <button type="button" class="${tags[0] == 'geo' ? 'btn btn-success btn-sm mt-2' : tags[0] == 'viaggi' ? 'btn btn-danger btn-sm mt-2' : tags[0] == 'cucina' ? 'btn btn-warning btn-sm mt-2' : tags[0] == 'arte' ? 'btn btn-dark btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${tags[0]}</button>
                                    <button type="button" class="${tags[1] == 'geo' ? 'btn btn-success btn-sm mt-2' : tags[1] == 'tech' ? 'btn btn-primary btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${tags[1]}</button>
                                </div>
                            </div>`;
                }); 
    }

renderCards(dati);
insertOnClickOnTag()

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

          return dato.tags[0] === e.target.value  || dato.tags[1] === e.target.value || e.target.value === 'all'

        })

        console.log(filteredTags)

        divCard.innerHTML = ""

        renderCards(filteredTags, divCard)


        const list =  datiSaved.forEach(dat => {
            dat.id 
        })

        const element = filteredTags.forEach(filt =>  {
            filt.id
        })

        if (list === element) {
            datiSaved.forEach(dato => document.getElementById('save-' + dato.id).classList = 'fa-solid fa-bookmark');
        }

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
 * Verifica se un id é incluso nelle id di datiSaved
 * @param {object} dato 
 * @returns true se quelli id sono inclusi in datiSaved
 */
function isSaved(dato) {
    return datiSaved.includes(dato.id);
}


/**
 * Al click su bookmark cambia colore, salva la news, e aggiunge il suo id in datiSaved
 * @param {array} dato 
 */
function insertOnClickOnTag() {
    const save = document.querySelectorAll('div.cont-bookMark > i')
    save.forEach((sav) => {
        sav.addEventListener('click', function (e) {
            if (isSaved(sav)) return; 
            const idSave = Number(sav.dataset.id);
            datiSaved.push(idSave)
            console.log('saved', datiSaved);
            sav.classList = 'fa-solid fa-bookmark';           
        })
    });
}

const showSave = document.getElementById('showsave')

showSave.addEventListener('click', function (e) {
    divCard.innerHTML = "";

    if (showSave.checked) {
        renderCards(datiSaved, divCard);
        datiSaved.forEach(datoSalvato => document.getElementById('save-' + datoSalvato.id).classList = 'fa-solid fa-bookmark');
        if (datiSaved.length === 0) {
            divCard.innerHTML = `<div class="noNews">
                                    <h1 class="text-center my-3">You haven't saved anything yet</h1>
                                </div>`;
        }
    } else if (!showSave.checked){
        renderCards(dati, divCard)
        datiSaved.forEach(datoSalvato => document.getElementById('save-' + datoSalvato.id).classList = 'fa-solid fa-bookmark');
        } else {
            renderCards(dati, divCard)
            }
    })

