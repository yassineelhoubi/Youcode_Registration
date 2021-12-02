class Quiz {
    obj = [{
            question: "Quelle organisation définit les standards Web?",
            correct_answer: "World Wide Web Consortium",
            incorrect_answers: [
                "Microsoft Corporation",
                "IBM Corporation",
                "Apple Inc"
            ]
        },
        {
            question: "HTML est considéré comme ______ ?",
            correct_answer: "Langage de balisage",
            incorrect_answers: [
                "Langage POO",
                "Langage de programmation",
                "Langage de haut niveau"
            ]
        },
        {
            question: "HTML a été proposé pour la première fois l’année ___.",
            correct_answer: "1990",
            incorrect_answers: [
                "1995",
                "1980",
                "2000"
            ]
        },
        {
            question: "Une liste ordonnée peut être représentée par ______.",
            correct_answer: "<ol>",
            incorrect_answers: [
                "<ul>",
                "<li>",
                "<el>"
            ]
        },
        {
            question: "Lequel des sélecteurs CSS suivants sélectionne un élément qui ne possède pas des sous-élément ?",
            correct_answer: ":empty",
            incorrect_answers: [
                ":inheritance",
                ":nochild",
                ":no-child"
            ]
        },
        {
            question: "En css, qu’est-ce que h1 peut être appelé comme ______",
            correct_answer: "Sélecteur",
            incorrect_answers: [
                "Attribut",
                "Valeur",
                "Label"
            ]
        },
        {
            question: "Quel est le bon endroit pour insérer un code JavaScript?",
            correct_answer: "Les deux sections <head> et <body> sont correctes",
            incorrect_answers: [
                "La section <head>",
                "La section <body>",
                "Aucune de ces réponses n’est vraie."
            ]
        },
        {
            question: "Tous les mots-clés dans C sont en ______?",
            correct_answer: "lettres minuscules",
            incorrect_answers: [
                "lettres majuscules",
                "lettres CamelCase",
                "Aucun de ces réponses"
            ]
        },

    ]
    Randomquiz() {
        let shuffeledArr = this.obj

        for (let i = shuffeledArr.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1))
            let temp = shuffeledArr[rand]

            shuffeledArr[rand] = shuffeledArr[i]
            shuffeledArr[i] = temp
        }
        let final = shuffeledArr.splice(0, 7);
        return final;
    }
}
const qest = new Quiz();
const question = qest.Randomquiz();
const qz = document.getElementById('quiz');
console.log(question)

function getquiz() {
    for (var i = 0; i < question.length; i++) {
        qz.innerHTML = `<div class="card border-info mb-4 ">

        <div class="d-flex justify-content-between align-items-center card-header bg-info text-white" id="h1">
            <span>I> Serious Game</span>
            <button type="button" data-toggle="collapse" data-target="#q1" aria-expanded="false"
                aria-controls="q1" class="btn btn-outline-light"><svg width="1em" height="1em"
                    viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>
        <div id="q1" class="collapse show" aria-labelledby="h1">
            <div class="card-body">
        
            </div>
        
        </div>
        </div>`
    };
}