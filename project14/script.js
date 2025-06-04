// Get all DOM elements required
// Html5 main element for the grid
const main = document.getElementById('main');
// Select box for changing voices
const selectVoices = document.getElementById('voices');
// Toggle button to display custom box input
const toggleBtn = document.getElementById('toggle');
// Button to close the custom text div
const closeBtn = document.getElementById('close');
// Text area for custom text input
const customText = document.getElementById('text');
// Button to read the custom text input
const readBtn = document.getElementById('read');

// Array for holding all images and text to be read
const data = [
    {
        image: './img/angry.jpg',
        text: "I'm Angry"
    },
    // For Drink Image
    {
        image: './img/drink.jpg',
        text: "I'm Thirsty"
    },
    // For Food Image
    {
        image: './img/food.jpg',
        text: "I'm Hungry"
    },
    // For Grandma Image
    {
        image: './img/grandma.jpg',
        text: "I want to go to Grandma house"
    },
    // For Happy Image
    {
        image: './img/happy.jpg',
        text: "I'm Happy"
    },
    // For Home Image
    {
        image: './img/home.jpg',
        text: "I want to go home"
    },
    // For Hurt Image
    {
        image: './img/hurt.jpg',
        text: "I'm Hurt"
    },
    // For Outside Image
    {
        image: './img/outside.jpg',
        text: "I like the outside"
    },
    // For Sad Image
    {
        image: './img/sad.jpg',
        text: "I am sad"
    },
    // For Scared Image
    {
        image: './img/scared.jpg',
        text: "I'm scared"
    },
    // For School Image
    {
        image: './img/school.jpg',
        text: "I want to go to to school"
    },
    // For Tired Image
    {
        image: './img/tired.jpg',
        text: "I'm tired"
    },
];

// Array for all Web Speech API Voices
let voicesBackup = [];

// Create a box for each object in the data array
data.forEach(createBox);

// Functions
// 1. Function to create speech boxes
function createBox(imageObj) {
    // Create empty div for the image to be added to the main grid later
    const box = document.createElement('div');
    // Get the image url and text from the data array
    const { image, text } = imageObj;
    // Apply a CSS class to the new div
    box.classList.add('box');
    // Add the image inside the box
    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="imageInfo">${text}</p>
    `;
    // Add event for speaking text
    box.addEventListener('click', () => {
        setMessage(text);
        speakText();
    })
    // Add the new box to the DOM
    main.appendChild(box);
}

// Initialize speech synthesis
const message = new SpeechSynthesisUtterance();

// 2. Function to get voices from Web Speech API and put into the select box
function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
  
    let voices = speechSynthesis.getVoices();
    voicesBackup = voices;
  
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

// 3. Set the text for speech synthesis
function setMessage(text) {
    message.text = text;
}

// 4. To speak the text
function speakText() {
    speechSynthesis.speak(message);
}

// 5. Function to set the new voice
function setVoice(e) {
    console.log(e.target.value);
    message.voice = voicesBackup.find(voice => voice.name === e.target.value);
}
  
// Execute populateVoiceList function
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Event Listeners
// 1. Toggle Button
toggleBtn.addEventListener('click', () => {
    customText.classList.toggle('show');
})

// 2. Close Button in Custom Text Div
closeBtn.addEventListener('click', () => {
    customText.classList.remove('show');
})

// 3. Event Listener when changing voices
speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
voiceSelect.addEventListener('change', setVoice);

// 4. Event Listener for custom text reader
readBtn.addEventListener('click', () => {
    setMessage(customText.value);
    speakText();
})