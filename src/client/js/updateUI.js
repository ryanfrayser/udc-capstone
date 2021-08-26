export function updateUI (data) {

console.log(data)
document.querySelector('#results').classList.remove("noDisplay")


//Set Photo
let photo = data.photoUrl

document.getElementById('pix').setAttribute('src',photo)


}