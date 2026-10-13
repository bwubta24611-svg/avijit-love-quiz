// =============================================
// A LITTLE WORLD FOR AVIJIT ❤️
// Made with love, from Singage
// =============================================

// Get HTML elements
const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const letter = document.getElementById("letter");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const letterBtn = document.getElementById("letter-btn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionCount = document.getElementById("question-count");
const progress = document.getElementById("progress");

const sweetNote = document.getElementById("sweet-note");
const sweetNoteText = document.getElementById("sweet-note-text");

// =============================================
// 20 QUESTIONS
// =============================================

const questions = [
    {
        question: "What's your favourite colour? 🎨",
        options: ["Black 🖤", "Blue 💙", "Pink 🩷", "White 🤍"],
        category: "Fun"
    },
    {
        question: "What's your favourite food? 🍕",
        options: ["Pizza 🍕", "Biryani 🍛", "Momos 🥟", "Chocolate 🍫"],
        category: "Fun"
    },
    {
        question: "What's your favourite season? 🌦️",
        options: ["Winter ❄️", "Summer ☀️", "Monsoon 🌧️", "Spring 🌷"],
        category: "Fun"
    },
    {
        question: "Where would you love to travel? ✈️",
        options: [
            "Mountains 🏔️",
            "Beach 🌊",
            "Paris 🗼",
            "Somewhere peaceful 🌿"
        ],
        category: "Fun"
    },
    {
        question: "What's your ideal date? 💗",
        options: [
            "Long walk 🌙",
            "Movie night 🎬",
            "Dinner date 🍽️",
            "Just talking together 💌"
        ],
        category: "Romance"
    },
    {
        question: "What's your love language? 🫶",
        options: [
            "Sweet words 💬",
            "Quality time ⏳",
            "Thoughtful gifts 🎁",
            "Acts of care 🤍"
        ],
        category: "Romance"
    },
    {
        question: "What makes you smile instantly? 😊",
        options: [
            "Cute messages 💌",
            "Funny memes 😂",
            "Good food 🍜",
            "Someone remembering details 🥹"
        ],
        category: "Romance"
    },
    {
        question: "What's your perfect weekend? 🌈",
        options: [
            "Going out 🥳",
            "Staying home 🛋️",
            "Exploring somewhere new 🚆",
            "Spending time with someone special 💗"
        ],
        category: "Lifestyle"
    },
    {
        question: "What matters most in a relationship? ❤️",
        options: [
            "Trust 🤝",
            "Communication 💬",
            "Loyalty 🔐",
            "Understanding 🫶"
        ],
        category: "Values"
    },
    {
        question: "What do you appreciate most in a partner? 🌹",
        options: [
            "Kindness 🌷",
            "Honesty 🪞",
            "Humour 😂",
            "Emotional support 🫂"
        ],
        category: "Values"
    },
    {
        question: "When you're sad, what helps you most? 🫂",
        options: [
            "Someone listening 👂",
            "Some personal space 🌙",
            "A comforting hug 🤍",
            "A little laughter 😂"
        ],
        category: "Care"
    },
    {
        question: "How do you prefer to solve disagreements? 💭",
        options: [
            "Talk calmly 🗣️",
            "Take a short break 🌿",
            "Write down my feelings ✍️",
            "Find a solution together 🤝"
        ],
        category: "Care"
    },
    {
        question: "What's your biggest dream? 🚀",
        options: [
            "Career success 💼",
            "Travelling the world 🌍",
            "A peaceful life 🏡",
            "Learning new things 🧠"
        ],
        category: "Dreams"
    },
    {
        question: "What kind of surprise would you love? 🎁",
        options: [
            "A handwritten letter 💌",
            "A planned date 🌹",
            "A thoughtful gift 🎁",
            "An unexpected message 💗"
        ],
        category: "Romance"
    },
    {
        question: "What do you value most in a friendship? 🫶",
        options: [
            "Trust 🤝",
            "Honesty 🪞",
            "Fun and laughter 😂",
            "Being there for each other ❤️"
        ],
        category: "Values"
    },
    {
        question: "What do you wish people understood about you? 💭",
        options: [
            "My feelings ❤️",
            "My ambitions 🚀",
            "My quiet side 🌙",
            "My way of showing love 💌"
        ],
        category: "Care"
    },
    {
        question: "What would make a memory special? ✨",
        options: [
            "A beautiful place 🌅",
            "A meaningful conversation 💬",
            "Laughing together 😂",
            "A simple moment together 🤍"
        ],
        category: "Romance"
    },
    {
        question: "What would you like to learn or try? 🌟",
        options: [
            "A new skill 🧠",
            "An adventure 🏔️",
            "A creative hobby 🎨",
            "Something completely different 🚀"
        ],
        category: "Dreams"
    },
    {
        question: "What does feeling safe with someone mean to you? 🫂",
        options: [
            "Being heard 👂",
            "Being accepted 🤍",
            "Being able to trust them 🔐",
            "Being myself without fear 🌷"
        ],
        category: "Care"
    },
    {
        question: "What's one thing you'd love to do with someone special? 💞",
        options: [
            "Watch the stars 🌌",
            "Travel somewhere new ✈️",
            "Cook together 🍳",
            "Build beautiful memories ❤️"
        ],
        category: "Dreams"
    }
];

// =============================================
// SWEET NOTES FROM SINGAGE 💌
// =============================================

const sweetNotes = [
    "Tumhara favourite colour koi bhi ho, tum toh har colour mein achhe lagte ho. Meri nazron mein tum hamesha special ho. ❤️",

    "Tumhari favourite dish jo bhi ho, kabhi saath mein khayenge. Tumhare saath simple moments bhi special ho sakte hain. 🍕💗",

    "Season koi bhi ho, I hope tumhari life mein hamesha warmth aur happiness rahe. Tumhari smile har season mein achhi lagegi. ☀️❤️",

    "Duniya mein kahin bhi ghoomo, I hope tumhe hamesha ek aisi jagah mile jahan tum peaceful aur happy feel karo. 🌍💌",

    "Date fancy ho ya simple, mere liye sabse important company hoti hai. Tum comfortable aur happy raho, bas. 🌹",

    "Tum pyaar jis tarah se express karte ho, woh tumhari apni beautiful way hai. Tumhe samajhne ki koshish karna bhi mere liye special hai. 🫶",

    "Tumhari smile ki wajah kuch bhi ho, I hope tumhe roz muskurane ki koi na koi reason mile. Aur kabhi-kabhi meri wajah se bhi. 😊❤️",

    "Weekend adventurous ho ya lazy, I hope tumhe woh time mile jo tumhe genuinely khush kare. You deserve peaceful moments too. 🌷",

    "Relationship mein trust, respect aur understanding bahut matter karte hain. I hope tum apni feelings share karne mein safe feel karo. 🤝❤️",

    "Tumhari kindness ho, humour ho ya tumhara caring side, tumhari qualities tumhe special banati hain. Never underestimate yourself. 💗",

    "Jab tum sad ho, tumhe har baar strong banne ki zaroorat nahi. Kabhi-kabhi bas apni feelings feel karna bhi okay hai. 🫂",

    "Har disagreement ka matlab ye nahi ki care kam ho gayi. Patience aur understanding se hum ek-doosre ko aur achhe se jaan sakte hain. ❤️",

    "Tumhare dreams important hain. I hope tum apne goals ki taraf confidence se badho aur apni progress par proud feel karo. 🚀",

    "Surprise chhota ho ya bada, uske peeche ki thoughtfulness use special banati hai. Tum bhi thoughtful gestures deserve karte ho. 💌",

    "Ek achha bond wahi hai jahan trust ke saath laughter bhi ho aur difficult days mein understanding bhi. 🫶",

    "Har kisi ko tumhari poori story samajh aaye, zaroori nahi. But tumhari feelings matter karti hain, aur tumhe samjha jaana deserve hai. 🤍",

    "Kabhi-kabhi sabse beautiful memories simple moments se banti hain. I hope tumhari life mein aise moments bahut aayein. 🌅",

    "Nayi cheezein try karte rehna, chahe dheere-dheere hi sahi. Tumhe apni growth aur efforts par proud feel karna chahiye. ✨",

    "Tumhe kisi ke saamne perfect banne ki zaroorat nahi. I hope tum un logon ke saath raho jinke saamne tum freely apne aap ho sako. 🫂",

    "Future mein kya hoga, koi nahi jaanta. But I hope tumhari life mein love, respect, laughter aur beautiful memories hon. Agar tum allow karo, toh main bhi unmein se kuch ka hissa banna chahta hoon. ❤️"
];

// =============================================
// SINGAGE'S SAMPLE ANSWERS
// Change these to your own answers.
// =============================================

const singageAnswers = [
    "Black 🖤",
    "Pizza 🍕",
    "Winter ❄️",
    "Mountains 🏔️",
    "Long walk 🌙",
    "Quality time ⏳",
    "Cute messages 💌",
    "Staying home 🛋️",
    "Trust 🤝",
    "Emotional support 🫂",
    "Someone listening 👂",
    "Talk calmly 🗣️",
    "Career success 💼",
    "A handwritten letter 💌",
    "Trust 🤝",
    "My feelings ❤️",
    "A simple moment together 🤍",
    "A new skill 🧠",
    "Being myself without fear 🌷",
    "Watch the stars 🌌"
];

// =============================================
// QUIZ STATE
// =============================================

let currentQuestion = 0;
let selectedAnswer = null;
const avijitAnswers = [];

// =============================================
// START QUIZ
// =============================================

startBtn.addEventListener("click", function () {
    welcome.classList.add("hidden");
    quiz.classList.remove("hidden");
    result.classList.add("hidden");
    letter.classList.add("hidden");

    currentQuestion = 0;
    selectedAnswer = null;
    avijitAnswers.length = 0;

    showQuestion();
});

// =============================================
// SHOW QUESTION
// =============================================

function showQuestion() {
    selectedAnswer = null;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    progress.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    optionsElement.innerHTML = "";

    // Hide the previous sweet note
    if (sweetNote && sweetNoteText) {
        sweetNote.classList.add("hidden");
        sweetNoteText.textContent = "";
    }

    // Create answer buttons
    current.options.forEach(function (option) {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");
        button.type = "button";

        button.addEventListener("click", function () {
            selectedAnswer = option;

            document.querySelectorAll(".option").forEach(function (item) {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            // Display sweet note for this question
            if (sweetNote && sweetNoteText) {
                sweetNoteText.textContent = sweetNotes[currentQuestion];
                sweetNote.classList.remove("hidden");
            }
        });

        optionsElement.appendChild(button);
    });

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Reveal Our Result 💗"
            : "Next ❤️";
}

// =============================================
// NEXT QUESTION
// =============================================

nextBtn.addEventListener("click", function () {
    if (selectedAnswer === null) {
        alert("Choose an answer first, Avijit! 💗");
        return;
    }

    avijitAnswers[currentQuestion] = selectedAnswer;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        calculateCompatibility();
    }
});

// =============================================
// COMPATIBILITY CALCULATOR
// =============================================

function calculateCompatibility() {
    let totalMatches = 0;
    const categories = {};

    questions.forEach(function (question, index) {
        const category = question.category;

        if (!categories[category]) {
            categories[category] = {
                matches: 0,
                total: 0
            };
        }

        categories[category].total++;

        if (avijitAnswers[index] === singageAnswers[index]) {
            totalMatches++;
            categories[category].matches++;
        }
    });

    const percentage = Math.round(
        (totalMatches / questions.length) * 100
    );

    quiz.classList.add("hidden");
    result.classList.remove("hidden");

    progress.style.width = "100%";

    document.getElementById("compatibility-score").textContent =
        percentage + "%";

    let message;

    if (percentage >= 80) {
        message =
            "So many little things in common! ✨ " +
            "Keep discovering each other, one day at a time. ❤️";
    } else if (percentage >= 60) {
        message =
            "You share some lovely similarities! 💗 " +
            "There is still so much to learn about each other.";
    } else if (percentage >= 40) {
        message =
            "Some similarities, some differences! 🌷 " +
            "You can keep learning about each other together.";
    } else {
        message =
            "Every person is unique! 💞 " +
            "Different answers can lead to wonderful conversations.";
    }

    let categoryText = "";

    Object.keys(categories).forEach(function (category) {
        const data = categories[category];

        const categoryPercentage = Math.round(
            (data.matches / data.total) * 100
        );

        categoryText +=
            `${category}: ${categoryPercentage}% match\n`;
    });

    document.getElementById("result-message").textContent =
        message + "\n\n" + categoryText;
}

// =============================================
// OPEN LOVE LETTER
// =============================================

letterBtn.addEventListener("click", function () {
    result.classList.add("hidden");
    letter.classList.remove("hidden");
});

// =============================================
// FLOATING HEARTS ❤️
// Works if the hearts container exists in HTML.
// =============================================

const heartsContainer = document.getElementById("hearts-container");

const heartSymbols = ["❤️", "💗", "💕", "💖", "💘", "💓"];

function createFloatingHeart() {
    if (!heartsContainer) {
        return;
    }

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    const duration = 7 + Math.random() * 6;

    heart.style.animationDuration = duration + "s";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, duration * 1000);
}

// Start floating hearts if the container exists
if (heartsContainer) {
    setInterval(createFloatingHeart, 700);

    for (let i = 0; i < 8; i++) {
        setTimeout(createFloatingHeart, i * 300);
    }
}