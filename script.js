// Game state and data
const steps = [
    {
        id: 'start',
        text: "I have a serious confession...",
        shayeri: "Kuch baatein chupaayi nahi jaati,<br>Aur ab mujhse yeh baat dabaayi nahi jaati.",
        icon: '🤐',
        options: [
            { text: "What happened? 😨", next: 1 },
            { text: "Did you break something? 🤨", next: 1 },
            { text: "Spill the tea! ☕", next: 1 },
            { text: "Im listening... 👂", next: 1 }
        ]
    },
    {
        id: 1,
        text: "I think I'm falling for someone...",
        shayeri: "Dil par ab mera zor nahi chalta,<br>Koi hai jo ise apne hisaab se chalata hai.",
        icon: '💘',
        options: [
            { text: "Who is she? 🤨", next: 2 },
            { text: "Is she pretty? 😒", next: 2 },
            { text: "Do I know her? 🤔", next: 2 },
            { text: "Show me! 😤", next: 2 }
        ]
    },
    {
        id: 2,
        text: "She is extremely beautiful... prettier than you! 🫣",
        shayeri: "Uski aankhon mein ek alag sa jaadu hai,<br>Jo mujhe har waqt deewana banata hai.",
        icon: '😍',
        options: [
            { text: "Excuse me?! 😤", next: 3 },
            { text: "I doubt that! 💅", next: 3 },
            { text: "Whatever. 🙄", next: 3 },
            { text: "So rude! 👊", next: 3 }
        ]
    },
    {
        id: 3,
        text: "And she is a bit annoying too... 🤏",
        shayeri: "Thodi ziddi hai, thodi nadaan hai,<br>Par sach kahoon toh wahi meri jaan hai.",
        icon: '🤪',
        options: [
            { text: "Okay, stop it! ✋", next: 4 },
            { text: "Who is this girl?! 😡", next: 4 },
            { text: "Im leaving! 🏃‍♀️", next: 4 },
            { text: "Tell me NOW! 🔫", next: 4 }
        ]
    },
    {
        id: 4,
        text: "Do you want to see her?",
        shayeri: "Woh abhi yahan mere saath maujood hai,<br>Aur iss waqt yeh message padh rahi hai.",
        icon: '🫣',
        options: [
            { text: "Wait... what? 😳", next: 5 },
            { text: "Is it me? 🙈", next: 5 },
            { text: "Check your mirror? 🪞", next: 5 },
            { text: "No way... 😱", next: 5 }
        ]
    },
    {
        id: 5,
        text: "Yes, it's YOU! My Dumbo! ❤️",
        shayeri: "Duniya mein laakhon chehre honge,<br>Par mere dil ko sirf tumhara chehra pasand hai.",
        icon: '🫵',
        options: [
            { text: "I knew it! 😂", next: 6 },
            { text: "You scared me! 👊", next: 6 },
            { text: "I hate you! 😤❤️", next: 6 },
            { text: "Awww! 🥰", next: 6 }
        ]
    },
    {
        id: 6,
        text: "Ready for the main question now?",
        shayeri: "Mazaak bohot hua, ab sach sun lo,<br>Zindagi bhar ke liye mujhe apna chun lo.",
        icon: '💍',
        options: [
            { text: "I'm ready... 💓", next: 'proposal' },
            { text: "Go ahead... 🥰", next: 'proposal' },
            { text: "Ask me! 🎤", next: 'proposal' },
            { text: "Finally! 🙄", next: 'proposal' }
        ]
    }
];

// Elements
const contentDiv = document.getElementById('content');

// Helper to Create Animated Elements with Staggered Delay
function createAnimatedElement(tag, className, content, delay) {
    const el = document.createElement(tag);
    el.className = className + ' slide-in-up';
    el.style.animationDelay = delay + 's';
    // Removed explicit opacity: 0 to fallback to CSS visibility
    if (content) el.innerHTML = content;
    return el;
}

// Render function
function renderStep(stepIndex) {
    let step;

    if (stepIndex === 'proposal') {
        renderProposal();
        return;
    }

    // Find step by index (or ID for start)
    if (stepIndex === 'start') step = steps[0];
    else step = steps[stepIndex];

    // Clear content
    contentDiv.innerHTML = '';

    // 1. Icon (Immediate)
    const iconDiv = createAnimatedElement('div', 'heart-icon', `<div class="emoji-icon">${step.icon}</div>`, 0.0);
    contentDiv.appendChild(iconDiv);

    // 2. Shayari (0.1s delay)
    const shayari = createAnimatedElement('div', 'shayari', `<p>"${step.shayeri}"</p>`, 0.1);
    contentDiv.appendChild(shayari);

    // 3. Text (0.2s delay)
    const title = createAnimatedElement('h1', '', step.text, 0.2);
    contentDiv.appendChild(title);

    // 4. Options Container (0.3s delay)
    const btnContainer = createAnimatedElement('div', 'buttons', '', 0.3);

    step.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.innerText = opt.text;
        btn.onclick = () => renderStep(opt.next);
        btnContainer.appendChild(btn);
    });

    contentDiv.appendChild(btnContainer);
}

function renderProposal() {
    contentDiv.innerHTML = '';

    // 1. Icon (SVG Heart) (0.0s)
    const iconContent = `
        <svg class="heart-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#e63946" stroke="none" />
        </svg>
    `;
    const iconDiv = createAnimatedElement('div', 'heart-icon', iconContent, 0.0);
    contentDiv.appendChild(iconDiv);

    // 2. Intro Text (0.1s)
    const introText = createAnimatedElement('p', 'question-text',
        "Main tumse chand, taare, vaade nahi maangta, bas itna chahta hoon&mdash;<br>Har subah tumhari muskurahat meri pehli dua ho, aur har raat tum meri aakhri soch.", 0.1);
    contentDiv.appendChild(introText);

    // 3. Main Title (0.2s)
    const title = createAnimatedElement('h1', '',
        "Will You Be Mine?<br><span style='font-size:1.5rem; display:block; margin-top:10px;'>Hamesha ke liye? ❤️</span>", 0.2);
    contentDiv.appendChild(title);

    // 4. Final Question (0.3s)
    const shayari = createAnimatedElement('div', 'shayari',
        `<p>"Tum meri zindagi ka woh sach banogi,<br>jise main har janam khushi se dohraoon?"</p>`, 0.3);
    contentDiv.appendChild(shayari);

    // 5. Buttons (0.4s)
    const btnContainer = createAnimatedElement('div', 'buttons buttons-row', '', 0.4);

    const yesBtn = document.createElement('button');
    yesBtn.className = 'btn btn-primary';
    yesBtn.innerText = "Yes, Hamesha! ❤️";
    yesBtn.onclick = showSuccess;
    btnContainer.appendChild(yesBtn);

    const noBtn = document.createElement('button');
    noBtn.className = 'btn btn-secondary btn-runaway';
    noBtn.id = 'runawayBtn';
    noBtn.innerText = "No";

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });
    noBtn.addEventListener('click', (e) => { e.preventDefault(); moveButton(); });

    btnContainer.appendChild(noBtn);
    contentDiv.appendChild(btnContainer);
}

// Teasing logic for the runaway button
const teasingPhrases = [
    "No?", "Try Again! 😜", "Too slow! 🏃‍♂️", "Ops! 🤷‍♂️", "Missed me! 👻",
    "Not an option! 🚫", "Really? 🥺", "Catch me! 🏎️", "Nope! 😂",
    "So rude! 😤", "Dream on! 😴", "Not today! 💅", "Nice try! 😉",
    "Cannot catch me! 🚄", "Button 404! 🤖", "I am fast! ⚡", "Don't do it! 🙅",
    "Say YES! 💖", "Error! ❌", "Why? 😭"
];

function moveButton() {
    const btn = document.getElementById('runawayBtn');
    if (!btn) return;

    const card = document.querySelector('.card');

    // FIX: Move button to card directly so it positions relative to the full card
    if (btn.parentNode !== card) {
        card.appendChild(btn);
    }

    // Add teasing text
    const randomPhrase = teasingPhrases[Math.floor(Math.random() * teasingPhrases.length)];
    btn.innerText = randomPhrase;

    // Make the move smoother and slower (0.6s)
    btn.style.transition = "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";

    // Calculate boundaries
    const maxX = card.clientWidth - btn.offsetWidth - 20;
    const maxY = card.clientHeight - btn.offsetHeight - 20;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;

    // Random rotation for chaos
    const rot = Math.random() * 20 - 10;
    btn.style.transform = `rotate(${rot}deg)`;

    btn.style.zIndex = '100';
}

function showSuccess() {
    contentDiv.innerHTML = '';

    // 1. Ring Icon (0.1s)
    const iconDiv = createAnimatedElement('div', 'heart-icon', `<div class="emoji-icon">💍</div>`, 0.1);
    contentDiv.appendChild(iconDiv);

    // 2. Title (0.3s)
    const title = createAnimatedElement('h1', '', "Forever Us ❤️", 0.3);
    contentDiv.appendChild(title);

    // 3. Final Verse (0.5s)
    const sub = createAnimatedElement('div', 'shayari',
        `<p>"Mubarak ho tumko yeh zindagani,<br>Ab shuru hoti hai hamari kahani."</p>`, 0.5);
    contentDiv.appendChild(sub);

    launchConfetti();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

// Start Game
renderStep('start');
