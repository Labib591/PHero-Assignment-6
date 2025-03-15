const minus = document.querySelectorAll("#minus");
const plus = document.querySelectorAll("#plus");
const answer = document.querySelectorAll("#answer");

for (let i = 0; i < plus.length; i++) {
    
    plus[i].addEventListener("click", () => {
        for (let j = 0; j < answer.length; j++) {
            for (let j = 0; j < answer.length; j++) {
                answer[j].classList.add("hidden");
                plus[j].classList.remove("hidden");
                minus[j].classList.add("hidden");
            }
        }
        answer[i].classList.remove("hidden");
        plus[i].classList.add("hidden");
        minus[i].classList.remove("hidden");
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        
        answer[i].classList.add("hidden");
        plus[i].classList.remove("hidden");
        minus[i].classList.add("hidden");
    })
}