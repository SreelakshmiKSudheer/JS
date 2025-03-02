// Variables
let btn = document.getElementById('new-quote'); // Corrected ID name
let quote = document.querySelector('.quote');  // Fixed typo
let person = document.querySelector('.person');

let mood = "motivation";
let motivation = document.getElementById('motivation');
let happiness = document.getElementById('happiness');
let determination = document.getElementById('determination');
let hardwork = document.getElementById('hard-work');
let smartwork = document.getElementById('smart-work');
let sadness = document.getElementById('sadness');
let reality = document.getElementById('reality');
let acceptance = document.getElementById('acceptance');
let romance = document.getElementById('romance');

const quotes = {
    "motivation": [
        { quote: "Hard work is worthless for those that don’t believe in themselves.", character: "Naruto Uzumaki", source: "Naruto Shippuden" },
        { quote: "Even if I can’t do it now, I’ll get stronger and stronger until I can!", character: "Asta", source: "Black Clover" },
        { quote: "Heroes are made by the path they choose, not the powers they are graced with.", character: "Tony Stark", source: "MCU" },
        { quote: "I have no limits!", character: "Asta", source: "Black Clover" },
        { quote: "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something.", character: "Edward Elric", source: "Fullmetal Alchemist" },
        { quote: "Power comes in response to a need, not a desire. You have to create that need.", character: "Goku", source: "Dragon Ball Z" },
        { quote: "It’s not the face that makes someone a monster; it’s the choices they make with their lives.", character: "Naruto Uzumaki", source: "Naruto" },
        { quote: "A real hero isn’t the strongest, but the bravest.", character: "All Might", source: "My Hero Academia" },
        { quote: "No matter how many times we fall, we must get back up.", character: "Tony Stark", source: "MCU" },
        { quote: "I choose to believe in myself.", character: "Asta", source: "Black Clover" }  
    ],
    "happiness": [
        { quote: "When you give joy to other people, you get more joy in return.", character: "Naruto Uzumaki", source: "Naruto Shippuden" },
        { quote: "Surpass your limits! Right here, right now!", character: "Asta", source: "Black Clover" },
        { quote: "I’m always smiling because I never know what life will throw at me next!", character: "Goku", source: "Dragon Ball Z" },
        { quote: "I love being a hero because it makes people smile!", character: "All Might", source: "My Hero Academia" },
        { quote: "We have to move forward with a smile, no matter how painful it is!", character: "Hinata Hyuga", source: "Naruto" },
        { quote: "Part of the journey is the end. Cherish every moment.", character: "Tony Stark", source: "MCU" },
        { quote: "Even if I can’t become the Wizard King, I’ll still be happy as long as I protect everyone!", character: "Asta", source: "Black Clover" },
        { quote: "A hero is someone who smiles, no matter how tough things get.", character: "Spider-Man", source: "MCU" },
        { quote: "Happiness is found in the little things, like ramen and good friends.", character: "Naruto Uzumaki", source: "Naruto" },
        { quote: "You don’t need a reason to keep going. Just keep smiling and move forward!", character: "Luffy", source: "One Piece" }
    ],
    "determination" : [
        { quote: "I never go back on my word. That’s my ninja way!", character: "Naruto Uzumaki", source: "Naruto" },
        { quote: "Hard work is worthless for those that don’t believe in themselves.", character: "Naruto Uzumaki", source: "Naruto Shippuden" },
        { quote: "Surpass your limits! Right here, right now!", character: "Asta", source: "Black Clover" },
        { quote: "I’m not gonna run away, I never go back on my word. That’s my ninja way!", character: "Naruto Uzumaki", source: "Naruto" },
        { quote: "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something.", character: "Edward Elric", source: "Fullmetal Alchemist: Brotherhood" },
        { quote: "Fear is not evil. It tells you what your weaknesses are. And once you know your weaknesses, you can become stronger and kinder.", character: "Gildarts Clive", source: "Fairy Tail" },
        { quote: "You may have knocked me down, but I will get up every time.", character: "Steve Rogers", source: "MCU" },
        { quote: "I can do this all day.", character: "Steve Rogers", source: "MCU" },
        { quote: "Heroes are made by the path they choose, not the powers they are graced with.", character: "Tony Stark", source: "MCU" },
        { quote: "No matter how hard or impossible it seems, never lose sight of your goal.", character: "Monkey D. Luffy", source: "One Piece" }
    ],
    "dedication" : [
        { quote: "A real shinobi doesn’t set out to seek glory. They protect from the shadows. That’s the mark of a true ninja.", character: "Kakashi Hatake", source: "Naruto" },
        { quote: "It’s not the face that makes someone a monster; it’s the choices they make with their lives.", character: "Naruto Uzumaki", source: "Naruto Shippuden" },
        { quote: "My magic is never giving up!", character: "Asta", source: "Black Clover" },
        { quote: "I don’t quit. I don’t run.", character: "Naruto Uzumaki", source: "Naruto" },
        { quote: "Giving up isn’t an option for me.", character: "Itachi Uchiha", source: "Naruto Shippuden" },
        { quote: "Even if I can’t do it now, I’ll get stronger and stronger until I can.", character: "Asta", source: "Black Clover" },
        { quote: "It’s not about how much we lost. It’s about how much we have left.", character: "Tony Stark", source: "MCU" },
        { quote: "I am Iron Man.", character: "Tony Stark", source: "MCU" },
        { quote: "We may not win, but we’ll fight to the end.", character: "Steve Rogers", source: "MCU" },
        { quote: "Whatever it takes.", character: "Steve Rogers", source: "MCU" }
    ],
    "hardWork" : [
        { quote: "Hard work is worthless for those that don’t believe in themselves.", character: "Naruto Uzumaki", source: "Naruto Shippuden" },
        { quote: "A genius, huh? What does that mean? 'Genius'? So I was not born with a whole lot of natural talent, not gifted like Neji. But I work hard and I never give up!", character: "Rock Lee", source: "Naruto" },
        { quote: "Power comes in response to a need, not a desire. You have to create that need.", character: "Goku", source: "Dragon Ball Z" },  
        { quote: "I wasn’t born a prodigy, but I refuse to be outworked.", character: "Asta", source: "Black Clover" },
        { quote: "I may not have magic, but I will work harder than anyone else!", character: "Asta", source: "Black Clover" },
        { quote: "It's not about being the strongest. It's about never giving up.", character: "Yami Sukehiro", source: "Black Clover" },
        { quote: "You can’t just pretend to be strong. You have to work at it.", character: "Captain America", source: "MCU" },
        { quote: "Heroes are made by the paths they choose, not the powers they are graced with.", character: "Tony Stark", source: "MCU" },
        { quote: "I know in my heart that it’s right.", character: "Steve Rogers", source: "MCU" },
        { quote: "No amount of money ever bought a second of time.", character: "Tony Stark", source: "MCU" }
    ],
    "smartWork" : [
        { quote: "A lesson learned from failure is a lesson learned forever.", character: "Jiraiya", source: "Naruto Shippuden" },
        { quote: "A shinobi must see the hidden meanings within meanings.", character: "Itachi Uchiha", source: "Naruto Shippuden" },
        { quote: "It is not the face that makes someone a monster; it is the choices they make with their lives.", character: "Naruto Uzumaki", source: "Naruto Shippuden" },
        { quote: "Magic is about making the impossible possible.", character: "Julius Novachrono", source: "Black Clover" },
        { quote: "Surpass your limits. Right here, right now.", character: "Yami Sukehiro", source: "Black Clover" },
        { quote: "We have to be smarter. We have to be faster.", character: "Tony Stark", source: "MCU" },
        { quote: "The measure of a person, of a hero, is how well they succeed at being who they are.", character: "Thor", source: "MCU" },
        { quote: "The world has changed, and none of us can go back. All we can do is our best.", character: "Steve Rogers", source: "MCU" },
        { quote: "The hardest choices require the strongest wills.", character: "Thanos", source: "MCU" },
        { quote: "Part of the journey is the end.", character: "Tony Stark", source: "MCU" }
    ],
    "sadness" : [
        { quote: "It's not the face that makes someone a monster; it's the choices they make with their lives.", character: "Naruto Uzumaki", source: "Naruto Shippuden" },
        { quote: "Loneliness is this world’s worst kind of pain.", character: "Naruto Uzumaki", source: "Naruto" },
        { quote: "When a man learns to love, he must bear the risk of hatred.", character: "Madara Uchiha", source: "Naruto Shippuden" },
        { quote: "You and I are flesh and blood. I’m always going to be there for you, even if it’s only as an obstacle for you to overcome.", character: "Itachi Uchiha", source: "Naruto Shippuden" },
        { quote: "Those who do not understand true pain can never understand true peace.", character: "Pain (Nagato)", source: "Naruto Shippuden" },
        { quote: "No one knows what the future holds. That’s why its potential is infinite.", character: "Roxas", source: "Black Clover" },
        { quote: "People become strong because they have things they cannot forget.", character: "Fuegoleon Vermillion", source: "Black Clover" },
        { quote: "You can’t hold on to everything. That’s how it is.", character: "Julius Novachrono", source: "Black Clover" },
        { quote: "I lost everyone. My father, my mother, my best friend.", character: "Tony Stark", source: "MCU" },
        { quote: "I have nothing left but memories.", character: "Bucky Barnes", source: "MCU" },
        { quote: "I love you 3000.", character: "Tony Stark", source: "MCU" },
        { quote: "A thing isn’t beautiful because it lasts.", character: "Vision", source: "MCU" },
        { quote: "You could not live with your own failure. And where did that bring you? Back to me.", character: "Thanos", source: "MCU" },
        { quote: "I used to have nothing. But then I got this. This job, this family.", character: "Natasha Romanoff", source: "MCU" }
    ],
    "reality" : [
        { quote: "In this world, wherever there is light – there are also shadows.", character: "Madara Uchiha", source: "Naruto Shippuden" },
        { quote: "Power is not will, it is the phenomenon of physically making things happen.", character: "Madara Uchiha", source: "Naruto Shippuden" },
        { quote: "It’s human nature not to realize the true value of something, unless they lose it.", character: "Orochimaru", source: "Naruto" },
        { quote: "You think you get it, which is not the same as actually getting it.", character: "Kakashi Hatake", source: "Naruto" },
        { quote: "A lesson learned without pain is meaningless.", character: "Asta", source: "Black Clover" },
        { quote: "If you don’t give up, you’ll get through.", character: "Yami Sukehiro", source: "Black Clover" },
        { quote: "The world isn’t just made up of good people.", character: "Nozel Silva", source: "Black Clover" },
        { quote: "The hardest choices require the strongest wills.", character: "Thanos", source: "MCU" },
        { quote: "The world has changed. None of us can go back.", character: "Steve Rogers", source: "MCU" },
        { quote: "Reality is often disappointing.", character: "Thanos", source: "MCU" },
        { quote: "The world isn’t fair, but you deal with it.", character: "Nick Fury", source: "MCU" },
        { quote: "No amount of money ever bought a second of time.", character: "Tony Stark", source: "MCU" },
        { quote: "The price of freedom is high. It always has been.", character: "Steve Rogers", source: "MCU" }
    ],
    "acceptance" : [
        { quote: "A person grows up when he has to. When he ceases to whine and starts doing things on his own.", character: "Jiraiya", source: "Naruto" },
        { quote: "When a person learns to love, he must bear the risk of hatred.", character: "Madara Uchiha", source: "Naruto Shippuden" },
        { quote: "Rejection is a part of any man’s life. If you can’t accept and move past rejection, or at least use it as writing material, you’re not a real man.", character: "Jiraiya", source: "Naruto" },
        { quote: "People cannot win against their loneliness.", character: "Gaara", source: "Naruto" },
        { quote: "No matter how much of a loser you are, the hard times you go through are what will make you stronger.", character: "Asta", source: "Black Clover" },
        { quote: "Even if you're weak, there are miracles you can seize with your hands if you fight on to the very end!", character: "Yami Sukehiro", source: "Black Clover" },
        { quote: "People are born into this world to make mistakes.", character: "Julius Novachrono", source: "Black Clover" },
        { quote: "I know I said no more surprises, but I was really hoping to pull off one last one.", character: "Tony Stark", source: "MCU" },
        { quote: "We don’t get to choose our time.", character: "The Ancient One", source: "MCU" },
        { quote: "Sometimes you gotta run before you can walk.", character: "Tony Stark", source: "MCU" },
        { quote: "Part of the journey is the end.", character: "Tony Stark", source: "MCU" },
        { quote: "The world is in our hands. We gotta do something with it.", character: "Steve Rogers", source: "MCU" }
    ],
    "romance" : [
        { quote: "When a man learns to love, he must bear the risk of hatred.", character: "Madara Uchiha", source: "Naruto Shippuden" },
        { quote: "I have long since closed my eyes... My only goal is in the darkness.", character: "Uchiha Sasuke", source: "Naruto Shippuden" },
        { quote: "Even I can tell that hatred is spreading. I wanted to do something about it... but I don’t know what.", character: "Hinata Hyuga", source: "Naruto Shippuden" },
        { quote: "I always knew you were meant for great things, but I never thought I'd be the one to watch you reach them.", character: "Hinata Hyuga", source: "Naruto Shippuden" },
        { quote: "No matter what happens, I'll be by your side.", character: "Hinata Hyuga", source: "Naruto Shippuden" },
        { quote: "I was finally able to smile, from the bottom of my heart.", character: "Hinata Hyuga", source: "Naruto Shippuden" },
        { quote: "I will not let you lay a finger on the woman I love.", character: "Asta", source: "Black Clover" },
        { quote: "No matter how many times you push me away, I will always be there for you.", character: "Noelle Silva", source: "Black Clover" },
        { quote: "A world without you would be meaningless.", character: "Julius Novachrono", source: "Black Clover" },
        { quote: "I love you 3000.", character: "Tony Stark", source: "MCU" },
        { quote: "You are my mission. You are everything to me.", character: "Bucky Barnes", source: "MCU" },
        { quote: "Even in death, I still love you.", character: "Vision", source: "MCU" },
        { quote: "You're the one who could make even my worst days feel okay.", character: "Peter Parker", source: "MCU" },
        { quote: "I just want to be with the one I love. Is that so much to ask?", character: "Loki", source: "MCU" }
    ]
};

function generateQuote() {
    let quoteArray = quotes[mood];
    let randomIndex = Math.floor(Math.random() * quoteArray.length);
    
    // Update the UI
    quote.textContent = `"${quoteArray[randomIndex].quote}"`;
    person.textContent = `- ${quoteArray[randomIndex].character} (${quoteArray[randomIndex].source})`;
}

// Event Delegation for mood buttons
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("mood-button")) {
        
        mood = event.target.id; 
        alert(mood);
        generateQuote();
    }
});

// Event listener for new quote button
btn.addEventListener('click', generateQuote);

// Initialize first quote
generateQuote();