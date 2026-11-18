const container = document.getElementById('container')
const loading = document.getElementById('loading')
const error = document.getElementById('error')
const loadMore = document.getElementById('loadMoreBtn')

const API_URL = 'https://www.freetogame.com/api/games?platform=windows';
let currentDisplayed = 0;
let currentLimit = 8;

async function getData() {
    loading.style.display = "block";
    error.textContent = "";

    try {
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error("status" + response.status)
        }

        const data = await response.json(); 

        data.slice(currentDisplayed, currentLimit).forEach(game => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${game.title}</h3>
                <img src="${game.thumbnail}" alt="${game.title}">
                <div class="status">
                <p>Platform: ${game.platform}</p>
                <p>Publisher: ${game.publisher}</p>
                <p>Release date: ${game.release_date}</p> 
                <p>Genre: ${game.genre}</p>
                </div>
            `;
            container.appendChild(card)
        });

        currentDisplayed = currentLimit;
        currentLimit += 8;
        if (currentDisplayed >= data.length) {
            loadMore.style.display = "none";
        }

    } catch (err) {
        error.textContent = "Error... Gagal memuat data " + err.message;
    } finally {
        loading.style.display = "none";
    }
}

loadMore.addEventListener('click', getData);

getData()



