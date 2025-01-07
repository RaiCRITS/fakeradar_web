const s = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="1.1" stroke="#265958" stroke-width="1.8"></circle>
    <circle cx="12" cy="12" r="11" fill="#265958"></circle>
    <path d="M6.15002 12.0922L10.5773 16.2864L18.15 8.71362" stroke="#D0F6E5" stroke-width="2.56309" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
`
          , a = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="1.1" stroke="#000099" stroke-width="1.8"></circle>
    <circle cx="12" cy="12" r="11" fill="#7D363E"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.01177 6.34537C7.55153 5.88512 6.80532 5.88512 6.34507 6.34536C5.88482 6.80561 5.88481 7.55181 6.34506 8.01206L10.3343 12.0013L6.34765 15.9879C5.88741 16.4482 5.88741 17.1944 6.34765 17.6546C6.8079 18.1149 7.55411 18.1149 8.01435 17.6546L12.0009 13.668L15.9875 17.6546C16.4477 18.1149 17.1939 18.1149 17.6542 17.6546C18.1144 17.1944 18.1144 16.4482 17.6542 15.9879L13.6676 12.0013L17.6547 8.01428C18.1149 7.55403 18.1149 6.80783 17.6547 6.34758C17.1944 5.88733 16.4482 5.88733 15.988 6.34758L12.001 10.3346L8.01177 6.34537Z" fill="#FDE8EA"></path>
  </svg>
`
          , l = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm6.078-12.972a1.1 1.1 0 0 0-1.556-1.556l-5.743 5.743-3.022-2.864a1.1 1.1 0 1 0-1.514 1.597l3.8 3.6a1.1 1.1 0 0 0 1.535-.02l6.5-6.5z" fill="#0EC273"/>
  </svg>
`
          , u = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zM6.722 6.722a1.1 1.1 0 0 1 1.555 0l3.724 3.724 3.721-3.722a1.1 1.1 0 1 1 1.556 1.556L13.557 12l3.72 3.721a1.1 1.1 0 0 1-1.555 1.556L12 13.557l-3.721 3.72a1.1 1.1 0 1 1-1.556-1.555l3.721-3.72-3.723-3.724a1.1 1.1 0 0 1 0-1.556z" fill="#EB465A"/>
  </svg>
`
          , c = `
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8 12.75a8.8 8.8 0 1 1-17.6 0 8.8 8.8 0 0 1 17.6 0zm2.2 0c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11zm-11 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="#009"/>
  </svg>
`
          , d = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.3a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6zm0 2.2c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z" fill="#009"/>
  </svg>
`;


const s_1 = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12.9" y="12.9" width="2.2" height="2.2" stroke="#265958" stroke-width="1.8" fill="none"></rect>
    <rect x="2" y="2" width="24" height="24" fill="#265958"></rect>
    <path d="M7.15002 14.0922L11.5773 18.2864L19.15 10.7136" stroke="#D0F6E5" stroke-width="2.56309" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
`
          , a_1 = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12.4" y="12.4" width="2.2" height="2.2" stroke="#000099" stroke-width="1.8" fill="none"></rect>
    <rect x="2" y="2" width="24" height="24" fill="#7D363E"></rect>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.01177 7.34537C8.55153 6.88512 7.80532 6.88512 7.34507 7.34536C6.88482 7.80561 6.88481 8.55181 7.34506 9.01206L11.3343 13.0013L7.34765 16.9879C6.88741 17.4482 6.88741 18.1944 7.34765 18.6546C7.8079 19.1149 8.55411 19.1149 9.01435 18.6546L13.0009 14.668L16.9875 18.6546C17.4477 19.1149 18.1939 19.1149 18.6542 18.6546C19.1144 18.1944 19.1144 17.4482 18.6542 16.9879L14.6676 13.0013L18.6547 9.01428C19.1149 8.55403 19.1149 7.80783 18.6547 7.34758C18.1944 6.88733 17.4482 6.88733 16.988 7.34758L13.001 11.3346L9.01177 7.34537Z" fill="#FDE8EA"></path>
    </svg>
`
          , l_1 = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm6.078-12.972a1.1 1.1 0 0 0-1.556-1.556l-5.743 5.743-3.022-2.864a1.1 1.1 0 1 0-1.514 1.597l3.8 3.6a1.1 1.1 0 0 0 1.535-.02l6.5-6.5z" fill="#0EC273"/>
  </svg>
`
          , u_1 = `
    <svg width="28" height="29" viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h20v20H4z" fill="#009"></path>
    </svg>
`
          , c_1 = `
    <svg width="28" height="29" viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h20v20H4z" fill="#009"></path>
    </svg>
`
          , d_1 = `
    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h20v20H4z" fill="none" stroke="#009" stroke-width="2"></path>
    </svg>
`;




function renderIcon(ind,flag) {
    if (flag){
        switch (ind) {
            case "correct":
                return s_1;
            case "wrong":
                return a_1;
            case "selected":
                return c_1;
            default:
                return d_1
            }
    }
    else {
        switch (ind) {
            case "correct":
                return s;
            case "wrong":
                return a;
            case "selected":
                return c;
            default:
                return d
            }
    }
};


function updateIcon(answerElement, iconType, flag) {
    // Trova l'elemento SVG esistente (se c'è)
    
    const iconSVG = answerElement.querySelector('svg');
    if (flag) {
        switch (iconType) {
            case "correct":
                iconSVG.setAttribute("width", "28");
                iconSVG.setAttribute("height", "28");
                iconSVG.setAttribute("viewBox", "0 0 28 28");
                iconSVG.setAttribute("fill", "none");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconSVG.innerHTML = `
                    <rect x="12.9" y="12.9" width="2.2" height="2.2" stroke="#265958" stroke-width="1.8" fill="none"></rect>
                    <rect x="2" y="2" width="24" height="24" fill="#265958"></rect>
                    <path d="M7.15002 14.0922L11.5773 18.2864L19.15 10.7136" stroke="#D0F6E5" stroke-width="2.56309" stroke-linecap="round" stroke-linejoin="round"></path>
                `;
                break;
            case "wrong":
                iconSVG.setAttribute("width", "28");
                iconSVG.setAttribute("height", "28");
                iconSVG.setAttribute("viewBox", "0 0 28 28");
                iconSVG.setAttribute("fill", "none");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconSVG.innerHTML = `
                    <rect x="12.4" y="12.4" width="2.2" height="2.2" stroke="#000099" stroke-width="1.8" fill="none"></rect>
                    <rect x="2" y="2" width="24" height="24" fill="#7D363E"></rect>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.01177 7.34537C8.55153 6.88512 7.80532 6.88512 7.34507 7.34536C6.88482 7.80561 6.88481 8.55181 7.34506 9.01206L11.3343 13.0013L7.34765 16.9879C6.88741 17.4482 6.88741 18.1944 7.34765 18.6546C7.8079 19.1149 8.55411 19.1149 9.01435 18.6546L13.0009 14.668L16.9875 18.6546C17.4477 19.1149 18.1939 19.1149 18.6542 18.6546C19.1144 18.1944 19.1144 17.4482 18.6542 16.9879L14.6676 13.0013L18.6547 9.01428C19.1149 8.55403 19.1149 7.80783 18.6547 7.34758C18.1944 6.88733 17.4482 6.88733 16.988 7.34758L13.001 11.3346L9.01177 7.34537Z" fill="#FDE8EA"></path>
                `;
                break;
            case "selected":
                //console.log(1);
                iconSVG.setAttribute("width", "28");
                iconSVG.setAttribute("height", "28");
                iconSVG.setAttribute("viewBox", "0 0 28 28");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconSVG.innerHTML = `<path d="M4 4h20v20H4z" fill="#009"></path>`
                console.log(iconSVG.innerHTML);
                break;

            case "not-answered":
                iconSVG.setAttribute("width", "28");
                iconSVG.setAttribute("height", "28");
                iconSVG.setAttribute("viewBox", "0 0 28 28");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconSVG.innerHTML = `<path d="M4 4h20v20H4z"></path>`
                break
            default:
                iconSVG.setAttribute("width", "28");
                iconSVG.setAttribute("height", "29");
                iconSVG.setAttribute("viewBox", "0 0 28 29");
                //iconSVG.setAttribute("fill", "none");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    
                iconSVG.innerHTML = `<path d="M4 4h20v20H4z" fill="none" stroke="#009" stroke-width="2"></path>`
      
                break;
        }
    }
    else {
        switch (iconType) {
            case "correct":
                iconSVG.setAttribute("width", "24");
                iconSVG.setAttribute("height", "24");
                iconSVG.setAttribute("viewBox", "0 0 24 24");
                iconSVG.setAttribute("fill", "none");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconSVG.innerHTML = `
                    <circle cx="12" cy="12" r="1.1" stroke="#265958" stroke-width="1.8"></circle>
                    <circle cx="12" cy="12" r="11" fill="#265958"></circle>
                    <path d="M6.15002 12.0922L10.5773 16.2864L18.15 8.71362" stroke="#D0F6E5" stroke-width="2.56309" stroke-linecap="round" stroke-linejoin="round"></path>
                `;
                break;
            case "wrong":
                iconSVG.setAttribute("width", "24");
                iconSVG.setAttribute("height", "24");
                iconSVG.setAttribute("viewBox", "0 0 24 24");
                iconSVG.setAttribute("fill", "none");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconSVG.innerHTML = `
                    <circle cx="12" cy="12" r="1.1" stroke="#000099" stroke-width="1.8"></circle>
                    <circle cx="12" cy="12" r="11" fill="#7D363E"></circle>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.01177 6.34537C7.55153 5.88512 6.80532 5.88512 6.34507 6.34536C5.88482 6.80561 5.88481 7.55181 6.34506 8.01206L10.3343 12.0013L6.34765 15.9879C5.88741 16.4482 5.88741 17.1944 6.34765 17.6546C6.8079 18.1149 7.55411 18.1149 8.01435 17.6546L12.0009 13.668L15.9875 17.6546C16.4477 18.1149 17.1939 18.1149 17.6542 17.6546C18.1144 17.1944 18.1144 16.4482 17.6542 15.9879L13.6676 12.0013L17.6547 8.01428C18.1149 7.55403 18.1149 6.80783 17.6547 6.34758C17.1944 5.88733 16.4482 5.88733 15.988 6.34758L12.001 10.3346L8.01177 6.34537Z" fill="#FDE8EA"></path>
                `;
                break;
            case "selected":
                console.log(1);
                iconSVG.setAttribute("width", "24");
                iconSVG.setAttribute("height", "25");
                iconSVG.setAttribute("viewBox", "0 0 24 25");
                iconSVG.setAttribute("fill", "none");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconSVG.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8 12.75a8.8 8.8 0 1 1-17.6 0 8.8 8.8 0 0 1 17.6 0zm2.2 0c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11zm-11 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="#009"/>`
                console.log(iconSVG.innerHTML);
                break;
            default:
                iconSVG.setAttribute("width", "24");
                iconSVG.setAttribute("height", "24");
                iconSVG.setAttribute("viewBox", "0 0 24 24");
                iconSVG.setAttribute("fill", "none");
                iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    
                iconSVG.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.3a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6zm0 2.2c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z" fill="#009">`
      
                break;
        }

    }

}




// Variabile globale per tracciare lo stato delle domande
let questionStates = {}; 
let questions = [];


// Funzione per leggere il file CSV
async function fetchCSV(file) {
    const response = await fetch(file);
    const text = await response.text();
    return text;  // Restituisce il contenuto del CSV come stringa
}

function transformData(data) {
    return data.map(item => {
        const toList = value => value ? value.split('|') : []; // Trasforma in lista di stringhe
        const toIndexList = value => value ? value.split('|').map(val => parseInt(val, 10) - 1) : []; // Trasforma in lista di numeri (interi) e decresce di 1

        return {
            ...item,
            media: toList(item.media),
            answer: toIndexList(item.answer),
            mediaExplanation: toList(item["media explanation"]),
        };
    });
}

// Funzione per convertire il CSV in un array di oggetti
function parseCSV(csv) {
    const rows = csv.split("\n").filter(row => row.trim() !== "");
    const headers = rows[0].split(",").map(header => header.trim());
    
    return rows.slice(1).map(row => {
        const values = [];
        let value = "";
        let insideQuotes = false;
        
        // Itera su ogni carattere della riga per gestire correttamente le virgole dentro le virgolette
        for (let i = 0; i < row.length; i++) {
            const char = row[i];
            
            if (char === '"' && (i === 0 || row[i - 1] !== "\\")) {
                // Toggle `insideQuotes` se incontriamo una virgolette non preceduta da backslash
                insideQuotes = !insideQuotes;
            } else if (char === "," && !insideQuotes) {
                // Se siamo fuori dalle virgolette e incontriamo una virgola, la trattiamo come separatore
                values.push(value.trim());
                value = "";
            } else {
                // Altrimenti, aggiungiamo il carattere al valore corrente
                value += char;
            }
        }
        // Aggiungi l'ultimo valore
        values.push(value.trim());
        
        // Associa i valori con le intestazioni
        return headers.reduce((acc, header, index) => {
            acc[header] = values[index] || "";
            return acc;
        }, {});
    });
}


function determineCorrectness(l1, l2) {
    // Controlla se le lunghezze sono diverse, in tal caso restituisci false
    if (l1.length !== l2.length) {
        return false;
    }

    // Ordina entrambe le liste
    l1.sort();
    l2.sort();

    // Confronta gli elementi uno per uno
    for (let i = 0; i < l1.length; i++) {
        if (l1[i] !== l2[i]) {
            return false;
        }
    }

    // Se tutte le verifiche passano, le liste sono uguali
    return true;
}


function determineOptionState(questionIndex, optionIndex) {
    const answeredState = questionStates.hasOwnProperty(questionIndex) ? questionStates[questionIndex] : null;
    console.log(questionStates[questionIndex]);
    console.log(optionIndex);
    if (answeredState) {
        
        if (questions[questionIndex]["answer"].includes(optionIndex)) return "correct"
        else {
            if (questionStates[questionIndex].includes(optionIndex)) return "wrong"
            else {
                return "not-answered"
            }
        }
    }
    else {
        const question = document.querySelector(`#question-${questionIndex + 1}`);
        // console.log(question);
        
        if (!question) {
            return "";
        }
        
        let selectedAnswers = question.dataset.selectedAnswers ? JSON.parse(question.dataset.selectedAnswers) : [];
        if (optionIndex in selectedAnswers) {
            return "selected";
        } else {
            return "";
        }        

    }
}


// Funzione per verificare la risposta
function verifyAnswer(questionIndex) {
    const question = document.querySelector(`#question-${questionIndex + 1}`);

    let flag = questions[questionIndex]["answer"].length > 1;
    //const button = question.querySelector('button.primary');
    // Seleziona il div con la classe 'question__button-container'
    const buttonContainer = question.querySelector('.question__button-container');

    console.log(buttonContainer);
    // Rimuovi il div se esiste
    if (buttonContainer) {
        buttonContainer.remove();
    }

    question.classList.add("complete");

    

    let selectedAnswers = question.dataset.selectedAnswers ? JSON.parse(question.dataset.selectedAnswers) : [];
    questionStates[questionIndex] = selectedAnswers;

    const options = question ? question.querySelectorAll('.answer') : null;

    if (options) {
        options.forEach((option, optionIndex) => {
            
            let optionState = determineOptionState(questionIndex,optionIndex);
            updateIcon(option, optionState, flag);

            option.removeAttribute('onclick');
            option.style.cursor = 'default';

            // Trova la label con la classe specifica all'interno del div
            const label = option.querySelector('.form-control.answer__content__title');

            if (label) {
            // Disabilita la label aggiungendo un attributo "disabled"
            label.setAttribute('disabled', 'true');

            // Imposta il cursore su "default"
            label.style.cursor = 'default';
            }

            // Scorri tutte le classi dell'elemento
            Array.from(option.classList).forEach(className => {
                // Rimuovi la classe solo se non è 'answer'
                if (className !== 'answer') {
                    option.classList.remove(className);
                }
            });

            option.classList.add(optionState);

            if (optionState === "correct") {
                // Seleziona il div con la classe 'answer__content' dentro 'option'
                let answerContent = option.querySelector('.answer__content');

                // Crea il nuovo div con la classe 'answer__content__explanation' e il contenuto
                let explanationDiv = document.createElement('div');
                explanationDiv.classList.add('answer__content__explanation');
                explanationDiv.style.cursor = 'default';
                explanationDiv.innerHTML = questions[questionIndex]['explanation'];
                // Appendi il nuovo div dentro 'answer__content'
                answerContent.appendChild(explanationDiv);

                // Aggiungi il codice che deve eseguire quando l'opzione è corretta
            } else if (optionState === "not answered") {
                option.setAttribute('aria-hidden', 'true');

            } else {
                option.setAttribute('aria-hidden', 'true');
            }

        });

      }
}


function handleAnswerSelection(event, questionIndex, optionIndex) {
    //event.stopPropagation(); // Impedisce la propagazione dell'evento 
    const target = event.target; 
    //console.log(target);

    
    

    if (true) {
    
        let flag = questions[questionIndex]["answer"].length > 1;

        const question = document.querySelector(`#question-${questionIndex + 1}`);
        // console.log(3);
        const answers = question ? question.querySelectorAll('.answer') : null;
        

        console.log(3);

        // Se answers è null, esci dalla funzione senza fare nulla
        if (!answers) {
            return;
        }

        const selectedAnswer = answers[optionIndex];

        // Ottieni la lista delle risposte selezionate dalla domanda
        let selectedAnswers = question.dataset.selectedAnswers ? JSON.parse(question.dataset.selectedAnswers) : [];

        // Se la risposta è già selezionata, deselezionarla, altrimenti aggiungerla alla lista
        const answerIndex = selectedAnswers.indexOf(optionIndex);


        if (answerIndex === -1) {
            // Aggiungi la risposta alla lista se non è già selezionata


            if (questions[questionIndex]["answer"].length === 1) {
                // Svuota selectedAnswers se right_answers ha un solo elemento
                selectedAnswers = [];

                answers.forEach(answer => {
                    answer.classList.remove('selected');
                    updateIcon(answer, '', flag); // Reset dell'icona
                });
                // Rimuovi la classe 'selected' da tutte le risposte precedenti
            }
        
            selectedAnswers.push(optionIndex);
            selectedAnswer.classList.add('selected');
            updateIcon(selectedAnswer, 'selected',flag);
        } else {
            // Rimuovi la risposta dalla lista se è già selezionata
            selectedAnswers.splice(answerIndex, 1);
            selectedAnswer.classList.remove('selected');
            updateIcon(selectedAnswer, '',flag);
        }


        const button = question.querySelector('button.primary');
        if (selectedAnswers.length === 0) {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
        

        // Aggiorna il dataset con le risposte selezionate
        question.dataset.selectedAnswers = JSON.stringify(selectedAnswers);

        // Log delle risposte selezionate per il debug (opzionale)
        console.log(`Risposte selezionate per la domanda ${questionIndex + 1}:`, selectedAnswers);

    }
}


function renderQuestions(questions, mediaData) {
    let questions_html = questions.map((question, index) => {

        // Recupero dello stato della domanda
        const answeredState = questionStates.hasOwnProperty(index) ? questionStates[index] : null;

        // Classe aggiuntiva per lo stato della domanda
        const questionClass = answeredState === true
            ? "complete"
            : "";

        // Creiamo un array di opzioni non vuote
        let options = [
            question["option 1"],
            question["option 2"],
            question["option 3"],
            question["option 4"],
            question["option 5"],
            question["option 6"]
        ].filter(option => option !== ""); // Filtriamo solo le opzioni non vuote

        // Funzione per rendere i media
        const renderMedia = (mediaFiles) => {
            if (!mediaFiles || mediaFiles.length === 0) {
                return ''; // Se non ci sono media, ritorna una stringa vuota
            }

            return `
                <div class="question__media-container">
                    ${mediaFiles.map((mediaFile, mediaIndex) => {
                        const mediaPath = `./quiz_data/media/${mediaFile}`;
                        const fileExtension = mediaFile.split('.').pop().toLowerCase();

                        // Verifica tipo di media e aggiunge il relativo elemento
                        if (fileExtension === 'mp4' || fileExtension === 'webm') {
                            return `
                                <video class="question__media" controls>
                                    <source src="${mediaPath}" type="video/${fileExtension}">
                                    Your browser does not support the video tag.
                                </video>
                            `;
                        } else if (fileExtension === 'mp3' || fileExtension === 'wav' || fileExtension === 'ogg') {
                            return `
                                <audio class="question__media" controls>
                                    <source src="${mediaPath}" type="audio/${fileExtension}">
                                    Your browser does not support the audio tag.
                                </audio>
                            `;
                        } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
                            return `<img class="question__media" src="${mediaPath}" alt="media image" />`;
                        }
                    }).join('')}
                </div>
            `;
        };

        // Recupera i media per questa domanda
        const mediaFiles = question.media ? question.media : [];

        // Renderizziamo la domanda con le opzioni
        return `
        <fieldset tabindex="0" class="question ${questionClass}" id="question-${index + 1}">
            <h4 class="question__number">DOMANDA ${index + 1} DI ${questions.length}</h4>
            <legend class="question__title">
                <span class="font-zero">Domanda ${index + 1} di ${questions.length}</span>
                <span class="text">${question.question}</span>
            </legend>

            <!-- Media -->
            ${renderMedia(mediaFiles)}

            <div class="answers">
                ${options.map((option, optionIndex) => {
                    const optionId = `radio-${index + 1}-${optionIndex + 1}`;
                    let answer_state = determineOptionState(index,optionIndex);
                    return `
                    <div class="answer" id="answer-${index + 1}-${optionIndex + 1}" onclick="handleAnswerSelection(event, ${index}, ${optionIndex})">
                        ${renderIcon(answer_state)}
                        <div class="answer__content">
                            <input type="radio" name="answer-${index + 1}" id="${optionId}" disabled>
                            <label class="form-control answer__content__title" for="${optionId}">
                                ${option}
                            </label>
                        </div>
                    </div>`;
                }).join('')}
            </div>

            <div class="question__button-container">
                <button class="primary" onclick="verifyAnswer(${index})" disabled>
                    Verifica
                </button>
            </div>
            
        </fieldset>`;
    }).join('');

    document.getElementById('question-container').innerHTML = questions_html;
}









// Inizializzazione
async function init() {
    try {
        const csvData = await fetchCSV("quiz_data/questions.csv"); // Percorso al file CSV
        questions = parseCSV(csvData); // Parse CSV data
        console.log(questions);
        questions = transformData(questions);
        renderQuestions(questions); // Rendering delle domande
    } catch (error) {
        console.error("Errore nel caricamento delle domande:", error);
    }
}

init();




