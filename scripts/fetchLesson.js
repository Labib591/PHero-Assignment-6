function removerActive() {
    const active = document.getElementsByClassName("active");
    for(let btn of active){
        btn.classList.remove("active");
    }
}

function loadWords(id) {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then((response) => response.json())
        .then((data) => {
            removerActive();
            const clickedLesson = document.getElementById(`lesson-${id}`); 
            clickedLesson.classList.add("active");
            displayWords(data.data);
        });
}

const displayWords = (words) => {
    const wordsDiv = document.getElementById("words");
    wordsDiv.innerHTML = "";

    if(words.length == 0) {
        wordsDiv.innerHTML = `
        <div class="flex flex-col gap-4 items-center justify-centers text-center col-span-full py-20">
                <img src="assets/alert-error.png" alt="">
                <p class="text-xs text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h1 class="text-4xl font-medium">নেক্সট Lesson এ যান</h1>
            </div>`
        return;
    }
    
    words.forEach((word) => {

        const meaning = word.meaning? word.meaning : "No Meaning Found";

        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
            <div class="bg-white px-8 py-4 col-span-1 text-center rounded-lg flex flex-col gap-5">
                <h1 class="text-3xl font-bold">${word.word}</h1>
                <p class="text-xl font-medium">Meaning/Pronunciation</p>
                <h1 class="text-xl font-semibold">${meaning}/${word.pronunciation}</h1>
                <div class="flex justify-between mt-5 mb-4">
                    <button onclick="loadDetails('${word.id}')" class="cursor-pointer"><img src="assets/fi-sr-info.png" alt=""></button>
                    <button class="cursor-pointer"><img src="assets/fi-sr-volume.png" alt=""></button>
                </div>
            </div>
        `;
        wordsDiv.appendChild(wordDiv);
    });
};

loadWords();