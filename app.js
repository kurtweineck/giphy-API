console.log("Let's get this party started!");

const userEntry = document.querySelector('#search-form');
const gifArea = document.querySelector('#gif-area');

function postGif(url) {
    let gifArea = document.querySelector('#gif-area');
    let img = document.createElement('img')
    img.src = url;
    gifArea.appendChild(img);

}

userEntry.addEventListener('submit', async function(e) {
    e.preventDefault();

    let searchTermInput = document.querySelector('#search-field');
    let searchTerm = searchTermInput.value;

    try {

    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }});
    const gifUrl = response.data.data[0].images.original.url;

    postGif(gifUrl);

    searchTermInput.value = '';

} catch (error) {
    alert(`Error Fetching GIF: ${error}`);
}

})

function removeGifs() {
    while (gifArea.firstChild) {
        gifArea.removeChild(gifArea.firstChild);
    }
}

const rmvBtn = document.querySelector('#remove-btn');

rmvBtn.addEventListener('click', function() {
    removeGifs();
})
