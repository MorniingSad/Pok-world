document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript carregado e DOM pronto.");

    // Seleção de Pokémon
    const pokemonSelector = document.getElementById('pokemon-selector');
    const carousels = document.querySelectorAll('.carousel-container');

    if (pokemonSelector && carousels.length > 0) {
        console.log("Elementos encontrados:", pokemonSelector, carousels);

        pokemonSelector.addEventListener('change', function () {
            const selectedPokemon = this.value;
            console.log("Pokémon selecionado:", selectedPokemon);

            // Esconder todos os carrosséis
            carousels.forEach(carousel => {
                carousel.style.display = 'none';
                console.log("Escondendo carrossel:", carousel);
            });

            // Mostrar o carrossel do Pokémon selecionado
            const selectedCarousel = document.getElementById(selectedPokemon + '-evolution');
            if (selectedCarousel) {
                selectedCarousel.style.display = 'block';
                console.log("Mostrando carrossel:", selectedCarousel);
            } else {
                console.log("Carrossel para o Pokémon selecionado não encontrado.");
            }
        });

        // Exibir o carrossel do primeiro Pokémon por padrão
        const defaultPokemon = pokemonSelector.value;
        document.getElementById(defaultPokemon + '-evolution').style.display = 'block';
        console.log("Carrossel inicial exibido:", defaultPokemon + '-evolution');
    } else {
        console.log("Elementos não encontrados. Verifique os IDs e classes.");
    }

    // Carrossel
    const carouselsTrack = document.querySelectorAll('.carousel-track');
    
    carouselsTrack.forEach(track => {
        const items = Array.from(track.children);
        const prevButton = track.parentElement.querySelector('.carousel-control.prev');
        const nextButton = track.parentElement.querySelector('.carousel-control.next');
        const itemWidth = items[0].getBoundingClientRect().width;
        let index = 0;

        function moveToItem(index) {
            track.style.transform = 'translateX(-' + itemWidth * index + 'px)';
        }

        function updateIndex(newIndex) {
            index = (newIndex + items.length) % items.length;
            moveToItem(index);
        }

        nextButton.addEventListener('click', function () {
            updateIndex(index + 1);
        });

        prevButton.addEventListener('click', function () {
            updateIndex(index - 1);
        });

        // Configuração inicial
        moveToItem(index);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript carregado e DOM pronto.");

    const carouselsTrack = document.querySelectorAll('.pokedex-carousel-track');

    carouselsTrack.forEach(track => {
        const items = Array.from(track.children);
        const prevButton = track.parentElement.querySelector('.carousel-control.prev');
        const nextButton = track.parentElement.querySelector('.carousel-control.next');
        const itemWidth = items[0].getBoundingClientRect().width;
        let index = 0;

        function moveToItem(index) {
            track.style.transform = 'translateX(-' + itemWidth * index + 'px)';
        }

        function updateIndex(newIndex) {
            index = (newIndex + items.length) % items.length;
            moveToItem(index);
        }

        nextButton.addEventListener('click', function () {
            updateIndex(index + 1);
        });

        prevButton.addEventListener('click', function () {
            updateIndex(index - 1);
        });

        // Configuração inicial
        moveToItem(index);
    });
});
