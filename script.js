let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});



document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


let pause_btn = document.querySelector("#pause_btn")
pause_btn.onclick = () => {
    window.speechSynthesis.pause()
}
let resume_btn = document.querySelector("#resume_btn")
resume_btn.onclick = () => {
    window.speechSynthesis.resume()
}
let reset_btn = document.querySelector("#reset_btn")
reset_btn.onclick = () => {
    window.speechSynthesis.cancel()
    document.querySelector("textarea").value = ""
    
}

speed_range.oninput = ()=>{
    speech.rate = speed_range.value;
}
pitch_range.oninput = ()=>{
    speech.pitch = pitch_range.value;
}
volume_range.oninput = ()=>{
    speech.volume = volume_range.value;
}