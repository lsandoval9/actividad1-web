export function setupCounter(element: HTMLButtonElement) {
  const orderBooks = () => {
    const container = document.getElementById('bookContainer')

    // seleccionamos todos los libros, los cuales estan dentro de un div con la clase card
    const books = container?.querySelectorAll('.card')

    // si hay al menos un libro, los ordenamos por el nombre del libro
    if (books) {
      const booksArray = Array.from(books)

      // ordenamos los libros por el nombre del libro
      booksArray.sort((a, b) => {
        const titleA = a.querySelector('.card-title')?.textContent || ''
        const titleB = b.querySelector('.card-title')?.textContent || ''
        return titleA.localeCompare(titleB)
      })
    
      // limpiamos el contenedor de libros y añadimos los libros ya ordenados
      container.innerHTML = ''
      booksArray.forEach((book) => container?.appendChild(book))
    }
  }

  // añadimos el evento al boton de ordenar libros
  element.addEventListener('click', orderBooks)
}
