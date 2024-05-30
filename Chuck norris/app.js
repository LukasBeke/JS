// Dom elements
const categorySelect = document.getElementById('category');
const queryInput = document.getElementById('query');
const searchButton = document.getElementById('searchButton');
const jokesContainer = document.getElementById('jokes');
const savedJokesContainer = document.getElementById('savedJokes');
const homePage = document.getElementById('homePage');
const jokeListPage = document.getElementById('jokeListPage');
const homeLink = document.getElementById('homeLink');
const jokeListLink = document.getElementById('jokeListLink');

// API
const apiUrl = 'https://api.chucknorris.io/jokes/';

// Categories
async function getCategories() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Klaida su kategorijomis', error);
    }
}

// Get joke
async function getJokes(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Klaida gaunant juoką:', error);
    }
}

// Show joke
async function showJokes(jokes) {
    jokesContainer.innerHTML = '';
    jokes.forEach(joke => {
        const jokeDiv = document.createElement('div');
        jokeDiv.classList.add('joke');
        jokeDiv.innerHTML = `<p>${joke.value}</p>
                            <button class="saveButton">Saugoti</button>`;
        jokeDiv.querySelector('.saveButton').addEventListener('click', () => {
            saveJoke(joke);
        });
        jokesContainer.appendChild(jokeDiv);
    });
}

// Save joke
function saveJoke(joke) {
    let savedJokes = JSON.parse(localStorage.getItem('savedJokes')) || [];
    savedJokes.push(joke);
    localStorage.setItem('savedJokes', JSON.stringify(savedJokes));
    renderSavedJokes();
}

// Show saved jokes
function renderSavedJokes() {
    savedJokesContainer.innerHTML = '';
    let savedJokes = JSON.parse(localStorage.getItem('savedJokes')) || [];
    savedJokes.forEach(joke => {
        const jokeDiv = document.createElement('div');
        jokeDiv.classList.add('joke');
        jokeDiv.innerHTML = `<p>${joke.value}</p>`;
        savedJokesContainer.appendChild(jokeDiv);
    });
}

// Search listener
searchButton.addEventListener('click', async () => {
    let url = '';
    if (categorySelect.value) {
        url = `https://api.chucknorris.io/jokes/random?category=${categorySelect.value}`;
    } else if (queryInput.value) {
        url = `https://api.chucknorris.io/jokes/random?category=${queryInput.value}`;
    } else {
        alert('Iveskite zodi arba pasirinkite kategorija');
        return;
    }
    try {
        const jokes = await getJokes(url);
        showJokes(jokes.result || [jokes]);
    } catch (error) {
        alert('Klaida');
    }
});


//categories n search

categorySelect.addEventListener('change', () => {
    if(categorySelect.value){
        queryInput.disabled = true;
        queryInput.value='';
    } else {
        queryInput.disabled = false;
    }
});

queryInput.addEventListener('input', () =>{
    if(queryInput.value){
        categorySelect.disabled = true;
        categorySelect.value= '';
    } else {
        categorySelect.disabled = false;
    }
})


// Home listener
homeLink.addEventListener('click', () => {
    homePage.style.display = 'block';
    jokeListPage.style.display = 'none';
});

// Joke listener
jokeListLink.addEventListener('click', () => {
    homePage.style.display = 'none';
    jokeListPage.style.display = 'block';
    renderSavedJokes();
});

// Initialize program
(async () => {
    try {
        const categories = await getCategories();
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    } catch (error) {
        alert('Klaida su kategorijomis');
    }
})();
