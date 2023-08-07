
// Fonction d'affichage de mes question
function affiche(){

    // ma variable d'affichage
    const contenus = document.querySelector(".contenu_general");
    //condition de verification
    if(contenus){
        contenus.style.display= 'block';
        //setTimeout  permet de me rediriger vers la phase initiale
     
    }
}

document.getElementById("mon_affiche").onclick = affiche;

// Je ne place que la variable de mes questions
let questions = [

    
    {
        num: 1,
        question: "Que signifie HTML ?",
        reponse: "Hyper Text Markup Language",
        commentaire: "C'est exacte!Hyper Text Markup Language est la bonne reponse",
        option: [
            "Hyper Text for Eat",
            "Hyper Text but to understand",
            "Hyper Text Markup Language",
            "Hyper Text for Loock",
        ]
    },

    {
        num: 2,
        question: "Que signifie le DOM en JavaScript?",
        reponse: "Document Object Model",
        commentaire: "C'est exacte!Document Object Model est la bonne reponse",

        option: [
            "Document Object Model",
            "cpgt Text but to understand",
            "Nulle Text ",
            "Wait is a Text for Loock",
        ]
    },

    {
        num: 3,
        question: "Que signifie CSS ?",
        reponse: "Cascading Style Sheets ou feuille de style en cascade ",
        commentaire: "C'est exacte!Cascading Style Sheets ou feuille de style en cascade est la bonne reponse",

        option: [
            "Feuille Text dans la case",
            "Feuilles de style en cascode",
            "Cascading Style Sheets ou feuille de style en cascade ",
            "Cascading for sheets",
        ]
    },

    {
        num: 4,
        question: "Pourquoi y a-t-il de l'injustice dans le monde ?",
        reponse: "Personne ne croient en Dieu et le jour de l'interrogation",
        commentaire: "C'est exacte!Personne ne croient en Dieu et le jour de l'interrogation est la bonne reponse",

        option: [
            " La corruption",
            "Personne ne croient en Dieu et le jour de l'interrogation",
            "La force détenue par les gens injustes ",
            "Un des signes de la fin du monde",
        ]
    },

    {
        num: 5,
        question: "C'est quoi la croyance en Allah ?",
        reponse: "Montrer son unicité sans l'associer",
        commentaire: "C'est exacte!Montrer son unicité sans l'associer est la bonne reponse",
        option: [
            "Manger boire et dormir",
            "Montrer son unicité sans l'associer",
            "Créer des paroles glorieuses par nos propres gréts",
            "Augmenter sa puissance et sa gratitude",
        ]
    },

    {
        num: 6,
        question: "Pourquoi les éléves sont nuls en Maths ?",
        reponse: "Pas d'amour en la matière et manque d'effort",
        commentaire: "C'est exacte!Pas d'amour en la matière et manque d'effort est la bonne reponse",
        option: [
            "Complexité de la matière",
            "La paresse des élèves",
            "Le niveau d'explication et de compréhension",
            "Pas d'amour en la matière et manque d'effort",
        ]
    },


]

let currentQuestion = 0;
let score = 0;
let timer;
const questionContainer = document.querySelector('.mes_questions');
const progressBar = document.getElementById('bar_progress');

function renderQuestion() {
    const question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        displayResult();
        return;
    }

    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
        <h2>Question: ${question.num}</h2>
        <p>${question.question}</p>
        ${question.option.map((opt, index) => `
            <input type="radio" name="q${question.num}" value="${opt}" onclick="checkAnswer(${index})">${opt}<br>
        `).join('')}
    `;

    questionContainer.innerHTML = '';
    questionContainer.appendChild(questionElement);

    startTimer();
}

function startTimer() {
    let timeLeft = 8;
    progressBar.style.width = '0';

    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            progressBar.style.width = `${(8 - timeLeft) * 12.5}%`; // 100 % divisé par 8 secondes
        } else {
            clearInterval(timer);
            checkAnswer(-1); // Le temps est écoulé, aucune option sélectionnée (-1)
        }
    }, 1000);
}

function displayResult() {
    const resultatDiv = document.querySelector('.resultat');
    const percentage = (score / questions.length) * 100;
    let message = "";

    if (percentage === 100) {
        message = "Excellent travail! 💯👍😃";
    } else if (percentage >= 90 && percentage < 100) {
        message = "Très bon travail! 💖 🧑‍🎓😃😃";
    } else if (percentage >= 70 && percentage < 90) {
        message = "Bon travail! 👏😃";
    } else if (percentage >= 50 && percentage < 70) {
        message = "Bonne continuation! 👍";
    } else if (percentage >= 30 && percentage < 50) {
        message = "Du courage! 😥";
    } else {
        message = "Vous n'êtes pas humain? 😅";
    }

    resultatDiv.innerHTML = `Votre score final 😎: ${percentage.toFixed(2)}%<br>${message}`;
    progressBar.style.width = '100%'; // Remplit complètement la barre de progression

    // Réinitialiser le quiz pour de futures tentatives
    currentQuestion = 0;
    score = 0;
}


// Appele à rendre les questions pour démarrer le quiz
renderQuestion();

function checkAnswer(selectedIndex) {
    clearInterval(timer);

    const question = questions[currentQuestion];
    const selectedOption = question.option[selectedIndex];
    const correctOption = question.reponse;
    const commentaireDiv = document.querySelector('.commentaire_reponse');

    if (selectedIndex === -1) {
        commentaireDiv.textContent = "Temps écoulé !";
    } else if (selectedOption === correctOption) {
        commentaireDiv.textContent = question.commentaire;
        score++;
    } else {
        commentaireDiv.textContent = "Mauvaise réponse!";
    }

    currentQuestion++;
    setTimeout(renderQuestion, 1000); //Attendez 1 seconde avant de passer à la question suivante
}


// Fonction pour masquer le commentaire après 2 secondes
function hideCommentaire() {
    const commentaireDiv = document.querySelector('.commentaire_reponse');
    commentaireDiv.textContent = ''; // Effacer le commentaire
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);

    const question = questions[currentQuestion];
    const selectedOption = question.option[selectedIndex];
    const correctOption = question.reponse;
    const commentaireDiv = document.querySelector('.commentaire_reponse');

    if (selectedIndex === -1) {
        commentaireDiv.textContent = "Temps écoulé !";
    } else if (selectedOption === correctOption) {
        commentaireDiv.textContent = question.commentaire;
        score++;
    } else {
        commentaireDiv.textContent = "Mauvaise réponse!";
    }

    setTimeout(() => {
        hideCommentaire(); // Appeler la fonction pour masquer le commentaire après 2 secondes
        currentQuestion++;
        renderQuestion();
    }, 1000);
}


