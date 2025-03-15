const loadDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((response) => response.json())
    .then((data) => {
      displayDetails(data.data);
    });
};

const displayDetails = (data) => {
  console.log(data);
  const details = document.getElementById("word_details");
  details.showModal();

  const wordDetailsBox = document.getElementById("word-details-box");
  wordDetailsBox.innerHTML = "";

  const wordDetail = document.createElement("div");

  const array = data.synonyms;

  const synonymContainer = document.createElement("div");
  synonymContainer.classList.add("flex", "gap-2");

  if (data.synonyms && data.synonyms.length > 0) {
    data.synonyms.forEach((synonym) => {
      const synonymElement = document.createElement("p");
      synonymElement.classList.add(
        "text-xl",
        "text-[#00000080]",
        "bg-[#EDF7FF]",
        "rounded-lg",
        "p-3",
        "text-center",
        "items-center"
      );
      synonymElement.textContent = synonym;
      synonymContainer.appendChild(synonymElement);
    });
  } else {
    synonymContainer.innerHTML = `
        <p class="text-xl text-[#00000080] bg-[#EDF7FF] rounded-lg p-3 text-center items-center">No Synonym Found</p>
        `;
  }

  const meaning = data.meaning ? data.meaning : "No Meaning Found";
  wordDetail.innerHTML = `
        <div class="flex flex-col gap-4 border-solid border-[1px] border-black p-4 rounded-xl"><div>
                <h1 class="text-3xl font-bold flex gap-3">${data.word}( <img src="assets/Vector (1).png" alt=""> : ${data.pronunciation}) )
                </h1>
              </div>
              <div>
                <p class="text-2xl font-semibold font-['Poppins']">Meaning</p>
              <p class="text-2xl font-medium hind-siliguri-medium">${meaning}</p>
              </div>
              <div>
                <p class="text-2xl font-semibold font-['Poppins']">Example</p>
              <p class="text-2xl text-[#00000080] font-['Poppins']">${data.sentence}</p>
              </div>
              <div>
                <p class="text-2xl font-semibold hind-siliguri-medium">সমার্থক শব্দ গুলো</p>
                ${synonymContainer.outerHTML}
              </div>
    `;

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");

  const button = document.createElement("button");
  button.textContent = "Complete Learning";
  button.classList.add(
    "bg-[#422AD5]",
    "text-white",
    "cursor-pointer",
    "p-4",
    "rounded-lg",
    "mt-5"
  );

  
  button.addEventListener("click", (event) => {
    event.preventDefault(); 
    details.close(); 
  });

  form.appendChild(button);
  wordDetail.appendChild(form);

  wordDetailsBox.append(wordDetail);
};
