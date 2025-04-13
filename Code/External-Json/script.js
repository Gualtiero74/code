    // recupero i dati da un file json in locale e li poggio su una variabile
        let data = fetch(`data.json`)
            .then(response => response.json())
            .then(data => {
            console.log(typeof data)
            console.log(data)
        })
        
        .catch(error => console.error(`Errore Lettura File Json:`, error));


    // passo l'array ottenuto dalla funzione fetch in modo da ottenere degli oggetti
        data.forEach(movie => createMovie(movie))

function createMovie(movie){

    // assegno le variabili dell'oggetto    
        let video = movie.video;
        let user = movie.user;
        let description = movie.description;
        let audio = movie.audio;
        let source = movie.source;

    // assegno contenitore globale
        let container = document.querySelector(`.app-container`);

    //creo il contenitore per le scene
        let clipContainer = document.createElement(`div`)
        clipContainer.classList.add(`screen`)

    // creo il tag video ed assegno i video    
        let clip = document.createElement(`video`);
        clip.classList.add(`video`);
        clip.src = source;    
    
    // section Info
        let info = document.createElement(`div`);
        info.classList.add(`info`);
        
        let infoUser = document.createElement(`p`);
        infoUser.innerHTML = user;
        
        let infoDescription = document.createElement(`p`);
        infoDescription.innerHTML = description;
        
        let infoAudio = document.createElement(`p`);
        infoAudio.innerHTML = audio;
    
    // section Icons
        let icons = document.createElement(`div`);
        icons.classList.add(`icons`);
        
        let iconHeart = document.createElement(`i`)
        iconHeart.classList.add(`fa-solid`, `fa-heart`, `icons-color-white`)
        
        let iconComment = document.createElement(`i`)
        iconComment.classList.add(`fa-solid`, `fa-comment`, `icons-color-white`)
        
        let iconMuted = document.createElement(`i`)
        iconMuted.classList.add(`fa-solid`, `fa-volume-xmark`, `icons-color-white`)
        
    // colloco tutti gli elementi
        container.append(clipContainer);
        clipContainer.append(clip);
        info.append(infoUser);
        info.append(infoDescription);
        info.append(infoAudio);
        clipContainer.append(info);
        icons.append(iconHeart);
        icons.append(iconComment);
        icons.append(iconMuted);
        clipContainer.append(icons);




    // Gestisco il "like" del visitatore
    // todo: mandare bit al backend per set    
        iconHeart.addEventListener(`click`, () => {iconHeart.classList.toggle(`icons-color-red`)});

    
}


