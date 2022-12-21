
randomAuthors = [];
function Randomquote() {
    randomAuthors = [];   //to clear duplicates of author in randomAuthors

    document.getElementById('conatinerBox').style.display = 'block';
     document.getElementById('quoteDisplay').style.display = 'none';


    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let random = Math.floor(Math.random() * data.length);
            document.getElementById('randomQuote').innerHTML = (data[random].text);
            document.getElementById('authorName').innerHTML = ("---" + data[random].author);
            randomAuthors.push(data[random].author);
            randomAuthors.push(data[random - 3].author);
            randomAuthors.push(data[random - 9].author);

            let randAuthor = document.getElementById('random-authors');
            randAuthor.innerHTML = '';
            //render author value
            randomAuthors.map((x) => {
                if (x != null) {
                    let author = document.createElement('div');
                    author.classList.add('authors');
                    author.innerHTML = x;
                    author.addEventListener('click', renerRandom);
                    randAuthor.appendChild(author);
                }
            })
        });
}

Randomquote()

function renerRandom(e) {

    randomAuthors = [];
    document.getElementById('conatinerBox').style.display = 'none';

    let displayContainer = document.getElementById('quoteDisplay');
    displayContainer.style.display="block";
    displayContainer.innerHTML = '';

    let clickedAuthor = e.target.innerHTML;  // to get the targeted value

    let div1 = document.createElement('div');
    div1.classList.add('quote1');
    div1.innerHTML = clickedAuthor;
    displayContainer.appendChild(div1);

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            let random = Math.floor(Math.random() * data.length);
            document.getElementById('randomQuote').innerHTML = (data[random].text);
            document.getElementById('authorName').innerHTML = ("---" + data[random].author);
            randomAuthors.push(data[random].author);
            randomAuthors.push(data[random - 3].author);
            randomAuthors.push(data[random - 9].author);

            let randAuthor = document.getElementById('random-authors');
            randAuthor.innerHTML = '';
            //render author value
            randomAuthors.map((x) => {
                if (x != null) {
                    let author = document.createElement('div');
                    author.classList.add('authors');
                    author.innerHTML = x;
                    randAuthor.appendChild(author);
                }
            })

            reqAuthor = data.filter((x) => {
                return x.author == clickedAuthor;
            }).map((x) => {
                let div = document.createElement('div');
                div.classList.add('quote');
                div.innerHTML = x.text;
                displayContainer.appendChild(div);
            })
            // console.log(reqAuthor);
        });

    // Randomquote();
}