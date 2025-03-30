import './style.css'
import { setupCounter } from './counter.ts'
import fantasyBooks from '../json/fantasy-books.json'


function createBookCard(book: any) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-3');

    const cardBody = document.createElement('div');
    // Usamos flex para que la imagen y el texto estén uno al lado del otro
    cardBody.classList.add('card-body', 'text-center', 'd-flex', 'justify-content-between');


    // dividimos el cardBody en dos columnas
    let firstColumn = document.createElement('div');
    firstColumn.classList.add('col-6');
    cardBody.appendChild(firstColumn);

    const secondColumn = document.createElement('div');
    secondColumn.classList.add('col-6');
    cardBody.appendChild(secondColumn);

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.classList.add('card-text');
    author.textContent = `Author: ${book.authors[0].name}`;

    // revisamos si el libro tiene imagen y la agregamos si es el caso
    const imageSrc = book.formats?.['image/jpeg'];

    let image = null;

    if (imageSrc) {
        image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = imageSrc;
        image.alt = book.title;
    }

    secondColumn.appendChild(title);
    secondColumn.appendChild(author);
    cardDiv.appendChild(cardBody);
    // añadimos la imagen a la primera columna si existe
    if (image) {
        firstColumn.appendChild(image);
    }


    return cardDiv;
}

const container = document.getElementById('bookContainer');


fantasyBooks.results.forEach((book) => {
    const bookCard = createBookCard(book);
    container?.appendChild(bookCard);
});


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
