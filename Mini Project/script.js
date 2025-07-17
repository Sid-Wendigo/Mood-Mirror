console.log("Mood Mirror script loaded");
const moodtext = document.getElementById('mood');
const quotetext = document.getElementById('quote');
const allbuttons = document.querySelectorAll('.button');

const moodbuttons = {
    happy: {
        mood: "Happy",
        color: "#fff4b3",
        quote: "Keep smiling, it makes people wonder what you're up to."
    },
    sad: {
        mood: "Sad",
        color: "#a7c7e7",
        quote: "It's okay to feel not okay."
    },
    angry: {
        mood: "Angry",
        color: "#ff8a80",
        quote: "Take a deep breath and let it go."
    },
    tired: {
        mood: "Tired",
        color: "#cfcfcf",
        quote: "Rest if you must, but don't quit."
    },
    excited: {
        mood: "Excited",
        color: "#e1a7f0",
        quote: "Let your excitement be louder than your fears."
    }
};
Object.keys(moodbuttons).forEach(id => {
    const btn = document.getElementById(id);
    const data = moodbuttons[id];
    btn.addEventListener('click', () => {
        allbuttons.forEach(button => {
            button.style.backgroundColor = '#ececec';
        });
        document.body.style.backgroundColor = data.color;
        moodtext.innerText = data.mood;
        quotetext.innerText = `"${data.quote}"`;
        btn.style.backgroundColor = data.color;
    });
});
