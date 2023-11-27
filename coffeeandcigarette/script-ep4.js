const leftWords = ['아무', '정말 미쳤니?', '정말이야', '알았어.', '그만해!', '잘 생각해봐.'];
const rightWords = ['없어.', '없다니까!', '없어?', '있는 줄 알았어.','가 있으면...'];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function swapLeft() {
    const leftIndex = getRandomIndex(leftWords);
    updateSentence(leftIndex);
}

function swapRight() {
    const rightIndex = getRandomIndex(rightWords);
    updateSentence(undefined, rightIndex);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateSentence(leftIndex, rightIndex) {
    const sentenceContainer = document.getElementById('sentence-container');
    const leftSection = document.getElementById('left-section');
    const rightSection = document.getElementById('right-section');
    const middleSection = document.getElementById('middle-section');

    if (leftIndex !== undefined) {
        leftSection.innerText = leftWords[leftIndex];
        leftSection.style.color = getRandomColor();
        leftSection.classList.add('fade-in');
    }

    if (rightIndex !== undefined) {
        rightSection.innerText = rightWords[rightIndex];
        rightSection.style.color = getRandomColor();
        rightSection.classList.add('fade-in');
    }

    middleSection.style.color = getRandomColor();
    middleSection.classList.add('fade-in');

    //sentence slightly moving...
    const xOffset = Math.random() * 10 - 5; 
    const yOffset = Math.random() * 10 - 5; 
    sentenceContainer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
}

document.addEventListener('click', function () {
    swapWords();
});

function swapWords() {
    swapLeft(); 
    swapRight(); 
}
