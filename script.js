// Game state and data
const steps = [
    {
        id: 'start',
        text: "I have a confession to make...",
        shayeri: "Tumhari muskurahat par shak hota hai mujhe,<br>Itni khoobsurat cheez itni aasaani se kaise mil gayi mujhe?",
        icon: '😳',
        options: [
            { text: "I'm listening... 👂", next: 1 },
            { text: "Tell me! 🙈", next: 1 }
        ]
    },
    {
        id: 1,
        text: "It started with just a name.",
        shayeri: "Naam toh sirf poocha tha tumse,<br>Dil ne usey bhi apna ghar bana liya.",
        icon: '🏠',
        options: [
            { text: "And now? ✨", next: 2 },
            { text: "Did it steal your heart? 💘", next: 2 }
        ]
    },
    {
        id: 2,
        text: "Even your silence speaks to me.",
        shayeri: "Tum baat karti ho toh lagta hai,<br>Khamoshi bhi tumse ijazat lekar bolti hai.",
        icon: '🤫',
        options: [
            { text: "I love talking to you 🗣️", next: 3 },
            { text: "Silence is beautiful �", next: 3 }
        ]
    },
    {
        id: 3,
        text: "🌸 Growing Closer...",
        shayeri: "Tum saamne hoti ho toh waqt ruk jaata hai,<br>Aur jab door hoti ho, toh waqt hi nahi chalta.",
        icon: '⏳',
        options: [
            { text: "Time stops for me too ⏳", next: 4 },
            { text: "I hate being apart 💔", next: 4 }
        ]
    },
    {
        id: 4,
        text: "You changed my world.",
        shayeri: "Maine ishq ko kitab mein padha tha,<br>Phir tum mile… aur syllabus badal gaya.",
        icon: '📚',
        options: [
            { text: "Am I a difficult subject? 🤓", next: 5 },
            { text: "Best chapter ever? �", next: 5 }
        ]
    },
    {
        id: 5,
        text: "You became my habit.",
        shayeri: "Tumhari aadat si ho gayi ho,<br>Jaise subah ki chai—kam ho toh din adhoora lagta hai.",
        icon: '☕',
        options: [
            { text: "Like your morning coffee? ☕", next: 6 },
            { text: "I need you too ☀️", next: 6 }
        ]
    },
    {
        id: 6,
        text: "💖 Almost There...",
        shayeri: "Main vaade likhne mein mahir nahi,<br>Par nibhaane mein zindagi laga doon.",
        icon: '🤞',
        options: [
            { text: "Actions speak louder 💪", next: 7 },
            { text: "I trust you 🛡️", next: 7 }
        ]
    },
    {
        id: 7,
        text: "You are my necessity.",
        shayeri: "Tum sirf pasand nahi ho,<br>Tum woh zarurat ho jiske bina dil kaam nahi karta.",
        icon: '💓',
        options: [
            { text: "I'm yours ❤️", next: 8 },
            { text: "You are my heartbeat �", next: 8 }
        ]
    },
    {
        id: 8,
        text: "Just one wish...",
        shayeri: "Agar zindagi ek safar hai,<br>Toh mujhe har mod par tumhara haath chahiye.",
        icon: '🤝',
        options: [
            { text: "Take my hand 🤝", next: 'proposal' },
            { text: "Walk with me forever 👣", next: 'proposal' }
        ]
    }
];

// Elements
const contentDiv = document.getElementById('content');

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
    contentDiv.className = 'fade-in';

    // Icon
    const iconDiv = document.createElement('div');
    iconDiv.className = 'heart-icon';
    iconDiv.innerHTML = `<div class="emoji-icon">${step.icon}</div>`;
    contentDiv.appendChild(iconDiv);

    // Shayari
    const shayari = document.createElement('div');
    shayari.className = 'shayari';
    shayari.innerHTML = `<p>"${step.shayeri}"</p>`;
    contentDiv.appendChild(shayari);

    // Text (Context)
    const title = document.createElement('h1');
    title.innerText = step.text;
    title.style.fontSize = "1.5rem";
    contentDiv.appendChild(title);

    // Options Container - updated to handle multiple options per row or stacked
    const btnContainer = document.createElement('div');
    btnContainer.className = 'buttons';

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
    contentDiv.className = 'fade-in';

    // Icon (SVG Heart)
    const iconDiv = document.createElement('div');
    iconDiv.className = 'heart-icon';
    iconDiv.innerHTML = `
        <svg class="heart-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#e63946" stroke="none" />
        </svg>
    `;
    contentDiv.appendChild(iconDiv);

    // Final Proposal Text
    const introText = document.createElement('p');
    introText.className = "question-text";
    introText.style.fontSize = "1rem";
    introText.style.marginBottom = "0.5rem";
    introText.innerHTML = "Main tumse chand, taare, vaade nahi maangta, bas itna chahta hoon&mdash;<br>Har subah tumhari muskurahat meri pehli dua ho, aur har raat tum meri aakhri soch.";
    contentDiv.appendChild(introText);

    const title = document.createElement('h1');
    title.innerHTML = "Will You Be Mine?<br><span style='font-size:1.5rem; display:block; margin-top:10px;'>Hamesha ke liye? ❤️</span>";
    contentDiv.appendChild(title);

    // Final Soulful Question
    const shayari = document.createElement('div');
    shayari.className = 'shayari';
    shayari.innerHTML = `<p>"Tum meri zindagi ka woh sach banogi,<br>jise main har janam khushi se dohraoon?"</p>`;
    contentDiv.appendChild(shayari);

    // Buttons (Row)
    const btnContainer = document.createElement('div');
    btnContainer.className = 'buttons buttons-row';

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

function moveButton() {
    const btn = document.getElementById('runawayBtn');
    if (!btn) return;

    const card = document.querySelector('.card');
    const maxX = card.clientWidth - btn.offsetWidth - 20;
    const maxY = card.clientHeight - btn.offsetHeight - 20;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    btn.style.zIndex = '100';
}

function showSuccess() {
    contentDiv.innerHTML = '';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'heart-icon';
    iconDiv.innerHTML = `<div class="emoji-icon">💍</div>`;
    contentDiv.appendChild(iconDiv);

    const title = document.createElement('h1');
    title.innerText = "Forever Us ❤️";
    contentDiv.appendChild(title);

    const sub = document.createElement('div');
    sub.className = 'shayari';
    sub.innerHTML = `<p>"Mubarak ho tumko yeh zindagani,<br>Ab shuru hoti hai hamari kahani."</p>`;
    contentDiv.appendChild(sub);

    launchConfetti();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

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
