document.addEventListener('DOMContentLoaded', () => {
    // Movie Popup Functionality
    const moviePopup = document.getElementById('moviePopup');
    const closePopup = document.getElementById('closePopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupRating = document.getElementById('popupRating');
    const popupDuration = document.getElementById('popupDuration');
    const popupGenre = document.getElementById('popupGenre');
    const popupDescription = document.getElementById('popupDescription');

    // Movie data
    const movieData = {
        1: {
            title: "Titanic",
            rating: "PG-13",
            duration: "2h 15m",
            genre: "Drama, Romance",
            description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. Their passionate romance is interrupted by the ship's collision with an iceberg and the subsequent sinking."
        },
        2: {
            title: "The Avengers",
            rating: "PG-13",
            duration: "2h 23m",
            genre: "Action, Adventure, Sci-Fi",
            description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
        },
        3: {
            title: "Inception",
            rating: "PG-13",
            duration: "2h 28m",
            genre: "Action, Adventure, Sci-Fi",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
        },
        4: {
            title: "The Dark Knight",
            rating: "PG-13",
            duration: "2h 32m",
            genre: "Action, Crime, Drama",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        5: {
            title: "Interstellar",
            rating: "PG-13",
            duration: "2h 49m",
            genre: "Adventure, Drama, Sci-Fi",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival while dealing with the implications of time dilation."
        },
        6: {
            title: "The Shawshank Redemption",
            rating: "R",
            duration: "2h 22m",
            genre: "Drama",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        },
        7: {
            title: "Pulp Fiction",
            rating: "R",
            duration: "2h 34m",
            genre: "Crime, Drama",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        },
        8: {
            title: "Forrest Gump",
            rating: "PG-13",
            duration: "2h 22m",
            genre: "Drama, Romance",
            description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
        },
        9: {
            title: "The Matrix",
            rating: "R",
            duration: "2h 16m",
            genre: "Action, Sci-Fi",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        }
    };

    // Add click event to all movie cards
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.getAttribute('data-movie-id');
            if (movieData[movieId]) {
                const movie = movieData[movieId];
                popupTitle.textContent = movie.title;
                popupRating.textContent = movie.rating;
                popupDuration.textContent = movie.duration;
                popupGenre.textContent = movie.genre;
                popupDescription.textContent = movie.description;
                moviePopup.classList.add('active');
            }
        });
    });

    // Close popup
    closePopup.addEventListener('click', () => {
        moviePopup.classList.remove('active');
    });

    // Close popup when clicking outside
    moviePopup.addEventListener('click', (e) => {
        if (e.target === moviePopup) {
            moviePopup.classList.remove('active');
        }
    });

    // Carousel navigation for featured movies
    const movieSlides = document.querySelector('.movie-slides');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn && nextBtn && movieSlides) {
        prevBtn.addEventListener('click', () => {
            movieSlides.scrollBy({ left: -300, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            movieSlides.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // Mobile menu toggle functionality
    const collapseMenu = document.querySelector('.collapse-menu');
    const headerLinks = document.querySelector('.header-links');

    if (collapseMenu && headerLinks) {
        collapseMenu.addEventListener('click', () => {
            headerLinks.classList.toggle('active');
            collapseMenu.classList.toggle('active');
        });
    }

    // Timeline logic (if exists on page)
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const body = item.querySelector('.item-body');
            if (body) {
                body.classList.toggle('open');
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const movieCards = document.querySelectorAll('.movie-card');

    if (searchInput && searchBtn && movieCards.length > 0) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            
            movieCards.forEach(card => {
                const title = card.querySelector('.movie-title').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }
});
