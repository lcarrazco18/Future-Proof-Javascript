// Notification Tutorial Start
var notify = document.querySelector('.notify')
var albums = document.querySelectorAll('.album')
var itemsTotal = document.querySelector('.items-total')
var savBtn = document.querySelector('.button')

var albumsSelected = []
var i = 0

while (i < albums.length) {
    albums[i].onclick = function (e) {
        var albumTitle = this.querySelector('.title').textContent
        if (this.classList.contains('selected') !== true) {
            this.classList.add('selected')
            albumsSelected.push(albumTitle)
        } else {
            this.classList.remove('selected')
            albumsSelected = albumsSelected.filter(function(item) {
                return item !== albumTitle
            })
        }
        console.log(albumsSelected)

    }
    i++
}



// click album


// show user he selected an album so we add a class selected to the album div


// create an array and then add the album title we selected to the array


// find out the total of albums selected 


// save button is clicked then when its clicked show notification with saved items total