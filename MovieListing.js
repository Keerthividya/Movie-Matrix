const cardsData = [
  {
    title: "777 CHARLIE",
    text: "Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.",
    imageUrl: "images/charlie2.jpeg",
    imageBg:"images/charlie.jpg",
    year:"2022 • 2h 44m",
    genre:"Adventure | Comedy | Drama"
    
  },
  {
    title: "AVATAR",
    text: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    imageUrl: "images/avatar.jpg",
    imageBg:"images/avatarbg.jpg",
    year:"2022 • 3h 12m",
    genre:"Sci-fi | Action"
  },
  {
    title: "K.G.F:CHAPTER 2",
    text: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order.",
    imageUrl: "images/kgf.jpg",
    imageBg: "images/kgf-bg.jpg",
    year:"2022 • 2h 48m",
    genre:"Action | Drama"
  },
  {
    title: "SITA RAMAM",
    text: "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen school girls and murders them brutally.",
    imageUrl: "images/sitaraman.jpg",
    imageBg: "images/st-bg.jpg",
    year:"2022 • 2h 43m",
    genre:"Romance | Historical drama"
  },
  {
    title: "PONNIYIN SELVAN I",
    text: "Vandiyathevan sets out to cross the Chola land to deliver a message from the Crown Prince Aditha Karikalan. ",
    imageUrl: "images/ps.jpg",
    imageBg: "images/ps-bg.jpg",
    year:"2022 • 2h 50m",
    genre:"Action | Drama"
  },
  {
    title: "VIKRAM",
    text: "A high-octane action film where a special investigator is assigned a case of serial Killings",
    imageUrl: "images/vikram.jpg",
    imageBg: "images/vikram-bg.jpg",
    year:"2022 • 2h 50m",
    genre:"Action | Drama"
  },
  {
    title: "THANI ORUVAN",
    text: "Siddharth Abimanyu, an influential scientist, is involved in various illegal medical practices. Mithran, an efficient IPS officer, decides to expose him.",
    imageUrl: "images/to.jpg",
    imageBg: "images/to-bg.jpg",
    year:"2022 • 2h 50m",
    genre:"Action | Drama"
  },
  {
    title: "KAITHI",
    text: "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
    imageUrl: "images/kaithi.jpg",
    imageBg: "images/kaithi-bg.jpg",
    year:"2022 • 2h 50m",
    genre:"Action | Drama"
  },
  {
    title: "96",
    text: "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.",
    imageUrl: "images/96.jpg",
    imageBg: "images/96-bg.jpg",
    year:"2018 • 2h 50m",
    genre:"Romance | Drama"
  },
  {
    title: "DADA",
    text: "A couple in love, accidentally become teenage parents. Unpleasant situations make them fall apart and bringing Sindhu back into his life.",
    imageUrl: "images/dada.jpg",
    imageBg: "images/dada-bg.jpg",
    year:"2023 • 2h 15m",
    genre:"Action | Drama"
  },
  {
    title: "RRR",
    text: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    imageUrl: "images/rrr.jpg",
    imageBg: "images/rrr-bg.jpg",
    year:"2022 • 3h 2m",
    genre:"Action | Drama"
  },
  {
    title: "BEAST",
    text: "After a shopping mall in Chennai had been hijacked by terrorists who held the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
    imageUrl: "images/beast.jpg",
    imageBg: "images/beast-bg.jpg",
    year:"2022 • 2h 36m",
    genre:"Action | Crime"
  }
];

function createCard(title, text, imageUrl,i) {
  const card = `
    <div class="card col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12">
      <img src="${imageUrl}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
      </div>
      <div class="card-footer card-icons">
        <button type="button" data-toggle="modal" data-target="#movieModalCenter" class="btn btn-link float-left" data-id=${i}>Explore</button>
        <button type="button" class="btn btn-light  float-left"><i class="material-icons">arrow_forward</i></button>
        <button type="button" class="btn btn-light float-right"><i class="material-icons">delete</i></button>
        <button type="button" class="btn btn-light float-right"><i class="material-icons">edit_square</i></button>
      </div>
    </div>
  `;

  
  return card;
 
}


// add cards to the page
const div = document.getElementById("my-div");
let cardsHTML = '';

for (let i = 0; i < cardsData.length; i++) {
  const cardData = cardsData[i];
  const card = createCard(cardData.title, cardData.text, cardData.imageUrl,i);
  cardsHTML += card;
}

div.innerHTML = cardsHTML;

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener('click', function() {
    card.classList.toggle('selected');
  
  });
}

$(document).ready(function() {
  $('#movieModalCenter').on('show.bs.modal', function (event) {
    var a = $(event.relatedTarget) 
    var movieId = a.data('id')
    $('.modal-title').text(cardsData[movieId].title)
    $('.modal-plot').text(cardsData[movieId].text)
    $('.modal-year').text(cardsData[movieId].year)
    $('.modal-genre').text(cardsData[movieId].genre)
    $('.modal-img').attr("src", cardsData[movieId].imageBg);
  
  })
});



