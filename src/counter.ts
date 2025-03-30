export function setupCounter(element: HTMLButtonElement) {
  const orderBooks = () => {
    const container = document.getElementById('bookContainer')

    const books = container?.querySelectorAll('.card')

    if (books) {
      const booksArray = Array.from(books)
      booksArray.sort((a, b) => {
        const titleA = a.querySelector('.card-title')?.textContent || ''
        const titleB = b.querySelector('.card-title')?.textContent || ''
        return titleA.localeCompare(titleB)
      })
      container.innerHTML = ''
      booksArray.forEach((book) => container?.appendChild(book))
    }
  }
  element.addEventListener('click', orderBooks)
}
