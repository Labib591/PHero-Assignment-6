function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
  .then((response) => response.json())
  .then((data) => {
    displayLessons(data.data);   
  });
}

function displayLessons(lessons) {
    const learn = document.getElementById("learn");

    

    for (let i of lessons) {
      const lessonButtons = document.createElement("button");
      lessonButtons.innerHTML = `
            <button
            id="lesson-${i.level_no}"
            onclick="loadWords(${i.level_no})"
            class="flex group items-center border-solid border-[#422AD5] border-2 rounded-lg p-4 cursor-pointer text-[#422AD5] font-semibold gap-2 hover:bg-[#422AD5] hover:text-white"
          >
            <img id="book" class="transition-all group-hover:brightness-0 group-hover:invert" src="assets/fa-book-open.png" alt="" />
            Lesson - ${i.level_no}
          </button>`;
          
      learn.append(lessonButtons);
    }
}

loadCategories();
