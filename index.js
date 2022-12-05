let books;

// Retrieves data from local storage
const dataBase = JSON.parse(localStorage.getItem('books'))

// dataBase = []

if (dataBase !== null){
    // Checks to see if the data is an array
    books = dataBase
}

else {
        // If data is not an array, resolves to default array
     books = [
        { 
            title : 'tarzan',
            pages: 211,
            author: 'Diana'
        },
        {
            title : 'Jungle Book',
            pages: 540,
            author: 'Julian'
        },
        {
            title : 'Windell and Wild',
            pages: 650,
            author: 'Kat'
        },
        {
            title : 'Windell and Wild',
            pages: 650,
            author: 'Kat'
        }
        
    
    ];
}
function displayBooks() {

        // To clear the input fields after every entry
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#page").value = ''

        books.forEach((book) => {  
            const card = document.querySelector('.card')
        const innerCard = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.value = 'value'
        innerCard.classList = 'list-item'
        innerCard.innerHTML += `
        <p class="bookTitle">"${book.title}" by </p>
        <p class="bookAuthor">${book.author}</p>
        <p class="bookPages">${book.pages}</p>
        <button class="remove">X</button>`
        innerCard.appendChild(checkbox)
        card.appendChild(innerCard) 
        });      
    }