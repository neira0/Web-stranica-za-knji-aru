// objekat "knjige" sadrži sve podatke o knjigama koje imamo na stranici
const knjige = {
  1: {
    title: "The Secret of Secrets", //naslov
    author: "Dan Brown",  //autor
    genre: "Triler",  //zanr
    price: "15 KM",  //cijena
    image: "slike/knjiga1.png", //putanja do slike
    description:  //opis
      "Misteriozan i dinamičan triler koji spaja istoriju, simbole i tajne skrivene kroz vijekove. Radnja je puna zagonetki koje čitaoca stalno drže u neizvjesnosti.",
    audience: //publika
      "Idealno za čitaoce koji vole napete priče, tajna društva i istorijske misterije.",
    why:  //zasto poručiti
      "Zbog brzog tempa, pametnih zapleta i osjećaja da stalno otkrivaš nešto novo.",
    rating: "⭐⭐⭐⭐"  //ocjena
  },

  2: {
    title: "The Land of Sweet Forever",
    author: "Harper Lee",
    genre: "Romansa",
    price: "20 KM",
    image: "slike/knjiga2.png",
    description:
      "Topla i emotivna priča o ljubavi, sjećanjima i prolaznosti života. Roman se bavi odnosima koji nas oblikuju i emocijama koje ostaju dugo nakon čitanja.",
    audience:
      "Za čitaoce koji vole nježne, romantične i emotivne priče.",
    why:
      "Zbog snažnih emocija i likova s kojima se lako poistovjetiti.",
    rating: "⭐⭐⭐⭐"
  },

  3: {
    title: "Wreck",
    author: "Catherine Newman",
    genre: "Triler",
    price: "20 KM",
    image: "slike/knjiga3.png",
    description:
      "Mračan i napet triler pun iznenadnih preokreta i psihološke napetosti. Svaka stranica otkriva novu sumnju i drži čitaoca na ivici.",
    audience:
      "Za fanove trilera i priča koje istražuju tamniju stranu ljudske prirode.",
    why:
      "Jer konstantno drži pažnju i ne dozvoljava da knjigu spustiš prije kraja.",
    rating: "⭐⭐⭐⭐"
  },

  4: {
    title: "Mona's Eyes",
    author: "Thomas Schlesser",
    genre: "Drama",
    price: "25 KM",
    image: "slike/knjiga4.png",
    description:
      "Poetična priča o djetinjstvu, umjetnosti i načinu na koji gledamo svijet oko sebe. Knjiga nudi nježan, ali dubok pogled na život.",
    audience:
      "Za mirnije čitaoce koji vole promišljene i emotivne priče.",
    why:
      "Zbog snažne poruke i jedinstvenog načina pripovijedanja.",
    rating: "⭐⭐⭐⭐"
  },

  5: {
    title: "I Am Rebel",
    author: "Ross Montogmery",
    genre: "Drama",
    price: "15 KM",
    image: "slike/popularno1.png",
    description:
      "Inspirativna priča o hrabrosti, borbi i pronalaženju vlastitog glasa. Roman govori o otporu i snazi pojedinca.",
    audience:
      "Za čitaoce koji vole motivacione i snažne životne priče.",
    why:
      "Jer inspiriše, motiviše i ostavlja dugotrajan utisak.",
    rating: "⭐⭐⭐"
  },

  6: {
    title: "The Widow",
    author: "John Grisham",
    genre: "Triler",
    price: "20 KM",
    image: "slike/popularno2.png",
    description:
      "Psihološki triler ispunjen tajnama, sumnjama i napetim odnosima između likova. Svaka odluka vodi ka novoj misteriji.",
    audience:
      "Za ljubitelje misterija i sudskih trilera.",
    why:
      "Zbog konstantne napetosti i nepredvidive radnje.",
    rating: "⭐⭐⭐⭐"
  },

  7: {
    title: "The Correspondent",
    author: "Virginia Evans",
    genre: "Drama",
    price: "25 KM",
    image: "slike/POPULARNO3.png",
    description:
      "Neobična i emotivna priča ispričana kroz pisma koja otkrivaju živote i misli likova. Roman je tih, ali snažan.",
    audience:
      "Za čitaoce koji vole sporije, introspektivne priče.",
    why:
      "Zbog originalne strukture i emotivne dubine.",
    rating: "⭐⭐⭐⭐"
  },

  8: {
    title: "The Intruder",
    author: "Freida McFadden",
    genre: "Triler",
    price: "25 KM",
    image: "slike/popularno5.png",
    description:
      "Napet triler koji se igra s povjerenjem i tajnama. Svaka stranica donosi novi preokret i sumnju u likove.",
    audience:
      "Za fanove psiholoških trilera i nepredvidivih priča.",
    why:
      "Zbog šokantnih obrta i neočekivanog kraja.",
    rating: "⭐⭐⭐⭐"
  },

  9: {
    title: "The Housemaid",
    author: "Freida McFadden",
    genre: "Psihološki triler",
    price: "25 KM",
    image: "slike/POPULARNO4.png",
    description:
      "Psihološki snažan i izuzetno napet triler koji polako gradi osjećaj nelagode. Tajne izlaze na vidjelo kada je već kasno.",
    audience:
      "Za čitaoce koji vole mračne priče i psihološke igre.",
    why:
      "Jer se čita u jednom dahu i ostavlja snažan utisak.",
    rating: "⭐⭐⭐⭐⭐"
  }
};


// --- uzimanje id-a knjige iz url-a ---
// window.location.search vraća ?id=1 ili slično
const params = new URLSearchParams(window.location.search);
const id = params.get("id"); // uzimamo vrijednost id-a iz url-a
const book = knjige[id]; // dohvatimo objekt knjige prema id-u


if (book) {
  document.getElementById("bookTitle").textContent = book.title; // postavlja naslov knjige u h2
  document.getElementById("bookAuthor").textContent = book.author; // postavlja autora
  document.getElementById("bookGenre").textContent = book.genre; // postavlja žanr
  document.getElementById("bookDescription").textContent = book.description; // postavlja opis
  document.getElementById("bookAudience").textContent = book.audience; // za koga je knjiga
  document.getElementById("bookWhy").textContent = book.why; // zašto preporučujemo
  document.getElementById("bookRating").textContent = book.rating; // ocjena
  document.getElementById("bookImage").src = book.image; // postavlja sliku knjige
  document.getElementById("bookPrice").textContent = book.price; // prikazuje cijenu
}


// --- funkcija za dodavanje u korpu ---
function addToCart() {
  if (!book) return; // ako knjiga ne postoji, prekini funkciju

  // dohvat korpe iz localStorage ili kreiranje nove ako ne postoji
  let cart = JSON.parse(localStorage.getItem("korpa")) || [];

  // dodajemo trenutnu knjigu u korpu
  cart.push({
    id: id, // id knjige
    title: book.title, // naslov
    price: book.price, // cijena
    image: book.image // slika
  });

  // spremanje ažurirane korpe u localStorage
  localStorage.setItem("korpa", JSON.stringify(cart));

  // preusmjeri korisnika odmah na stranicu korpe
  window.location.href = "korpa.html";
}