
const divCard = document.querySelector('.cardAppend');
const showSave = document.getElementById('showsave');
const idSelect = document.getElementById('tag_type');

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
        tags: ['cucina'],
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

const datiSaved = [];
console.log(datiSaved);

// Inserire tutti i tag in un array
const tagOfMap = []
dati.map(dato => tagOfMap.push(dato.tags[0], dato.tags[1]));
const tags = [...new Set(tagOfMap)];
console.log(tags); 


// Prova per filtro con button
function buttonTagsFilter() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((butt) => {
        butt.classList = '';
        console.log(butt);
        });
    };

/**
 * Cambia il format della data a dd-mm-yyyy
 * @param {published} string 
 * @returns data in formato dd-mm-yyyy
 */
function convertDateFormat(string) {
    const dataFormat = string.split('-').reverse().join('-');
    return dataFormat;
}


// verifica se un id é incluso in datiSaved 
/**
 * Verifica se un id é incluso nelle id di datiSaved
 * @param {object} dato 
 * @returns true se quelli id sono inclusi in datiSaved
 */
function isSaved(dato) {
    return datiSaved.includes(dato.id);
}


// filtro per singolo tag
/**
 * Verifica se é incluso nelle array tags o no
 * @param {array} arrayDati dati
 * @param {string} tag 
 * @returns se non é uguale a tag ci da tutti gli array dei dati, altrimenti ci da i dati di cui tag é incluso nelle array tags
 */
function filterByTag(arrayDati, tag) {
    if (!tag) return arrayDati;
    return arrayDati.filter((dato) => dato.tags.includes(tag)); //dacci i dato che includono quello tag
}

// filtro per singolo elemento salvato
function filterOnlySaved(arrayDati) { // filtra gli array di cui id inclusi in datiSaved
    return arrayDati.filter((dato) => datiSaved.includes(dato.id)); // ogetto che ha l'id incluso in datiSaved
}


function applyFilters() {
    const tag = idSelect.value;

    let filteredNews;
    filteredNews = filterByTag(dati, tag); //dacci i dato che includono quello tag selezionato della select

    if (showSave.checked){
    filteredNews = filterOnlySaved(filteredNews); //id dei tag selezionati e anche dei id delle news salvate
    }

    if (filteredNews.length > 0) {
        renderCards(filteredNews);
        insertOnClickOnTag();
    } else {
        noNews();
    }
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

/**
 * Stampa in pagina messagio di noNews
 */
function noNews() {
    divCard.innerHTML = `<div class="noNews">
                            <h1 class="text-center my-3">No news</h1>
                        </div>`;
}


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
                                    <h6 class="card-subtitle mb-2 text-body-secondary">In data ${convertDateFormat(published)}</h6>
                                    <p class="card-text">${content}</p>
                                    <div class="">
                                        <img src="./images/${foto}.jpg" alt="${foto}-photography">
                                    </div>
                                    <button onclick="${buttonTagsFilter()}" class="${tags[0] == 'geo' ? 'btn btn-success btn-sm mt-2' : tags[0] == 'viaggi' ? 'btn btn-danger btn-sm mt-2' : tags[0] == 'cucina' ? 'btn btn-warning btn-sm mt-2' : tags[0] == 'arte' ? 'btn btn-dark btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${tags[0]}</button>
                                    <button onclick="${buttonTagsFilter()}" class="${tags[1] == 'geo' ? 'btn btn-success btn-sm mt-2' : tags[1] == 'tech' ? 'btn btn-primary btn-sm mt-2' : 'btn btn-light btn-sm mt-2'}">${tags[1]}</button>
                                </div>
                            </div>`;
                }); 
    }

    

idSelect.addEventListener('change', applyFilters)
showSave.addEventListener('change', applyFilters)

renderCards(dati);
insertOnClickOnTag()

//