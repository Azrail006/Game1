//   async function meme() {


// let response = await fetch('https://api.imgflip.com/get_memes')
// let content = await response.json()


//  for (const sector in content.data.memes) {
//     console.log(content)
//    }
// }
// meme()


const generatorMemeBtn = document.querySelector(".btn");
const memeImage = document.querySelector(".img")
const memeTitle = document.querySelector(".title");
const memeAuthor = document.querySelector(".header__img");

let memes = [];

fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      memes = data.data.memes;
    });
      

generatorMemeBtn.addEventListener("click", () => generator(memes));


const generator = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  updateDetalis(array[randomIndex].url)
}  

const updateDetalis = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};
