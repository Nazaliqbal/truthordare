function fetchTruth() {
    const loader = document.getElementById('loader');
    const questionElement = document.getElementById('question');

    // Show the loader
    loader.style.display = 'grid';
    questionElement.innerText = '';

    fetch('https://api.truthordarebot.xyz/v1/truth')
        .then(response => response.json())
        .then(data => {
            // Simulate a delay of 2.5 seconds
            setTimeout(() => {
                // Hide the loader
                loader.style.display = 'none';

                // Display the question in the HTML
                questionElement.innerText = data.question;
            }, 1500);
        })
        .catch(error => {
            console.log('An error occurred:', error);
            // Hide the loader in case of an error
            loader.style.display = 'none';
        });
}

function fetchDare() {
    const loader = document.getElementById('loader');
    const questionElement = document.getElementById('question');

    // Show the loader
    loader.style.display = 'grid';
    questionElement.innerText = '';

    fetch('https://api.truthordarebot.xyz/api/dare')
        .then(response => response.json())
        .then(data => {
            // Simulate a delay of 2.5 seconds
            setTimeout(() => {
                // Hide the loader
                loader.style.display = 'none';

                // Display the question in the HTML
                questionElement.innerText = data.question;
            }, 1500);
        })
        .catch(error => {
            console.log('An error occurred:', error);
            // Hide the loader in case of an error
            loader.style.display = 'none';
        });
}

function fetchTruthOrDare() {
    const loader = document.getElementById('loader');
    const questionElement = document.getElementById('question');

    // Show the loader
    loader.style.display = 'grid';
    questionElement.innerText = '';

    // Generate a random number to decide whether to fetch truth or dare
    const random = Math.random();
    const apiUrl = random < 0.5 ? 'https://api.truthordarebot.xyz/v1/truth' : 'https://api.truthordarebot.xyz/api/dare';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Simulate a delay of 2.5 seconds
            setTimeout(() => {
                // Hide the loader
                loader.style.display = 'none';

                // Display the question or dare in the HTML
                questionElement.innerText = data.question || data.dare;
            }, 1500);
        })
        .catch(error => {
            console.log('An error occurred:', error);
            // Hide the loader in case of an error
            loader.style.display = 'none';
        });
}
