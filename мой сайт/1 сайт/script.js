  async function meme() {


let response = await fetch('https://api.imgflip.com/get_memes')
let content = await response.json()


// for (const sector in content.data.memes) {
    console.log(content)
//   }
}
meme()