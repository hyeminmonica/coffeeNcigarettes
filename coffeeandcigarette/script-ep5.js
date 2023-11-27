const container = document.querySelector('.container');
let isFlipped = false;

document.addEventListener('mousemove', (e) => {
    const xPosition = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPosition = (e.clientY / window.innerHeight - 0.5) * 2;

    if (!isFlipped) {
        container.style.transform = `rotateY(${xPosition * 45}deg) rotateX(${-yPosition * 45}deg)`;
    } else {
        container.style.transform = `rotateY(${180 + xPosition * 45}deg) rotateX(${-yPosition * 45}deg)`;
    }
});

document.addEventListener('click', () => {
    isFlipped = !isFlipped;
    container.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';

    if (isFlipped) {
        // Start typing animation for panel left
        typeText('.panel.left p span.typing-text', '우리의 특별한 인연을 소중히 여기고...날 사랑해줘요');
        // Start typing animation for panel right
        typeText('.panel.right p span.typing-text', '지금 전화번호 알려주면 너무 속 보일까요?');
    }
});

function typeText(selector, text) {
    const typingSpan = document.querySelector(selector);
    typingSpan.textContent = ''; // Clear existing content

    let index = 0;
    const typingInterval = setInterval(() => {
        typingSpan.textContent += text[index];
        index++;

        if (index === text.length) {
            clearInterval(typingInterval);
        }
    }, 200); // Adjust typing speed (milliseconds per character)
}
