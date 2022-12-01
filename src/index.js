// Function getters
const quotesUl = () => document.getElementById("quote-list")

// Callbacks

const displayQuote = (quoteObj) => { 
    const myLi = document.createElement("li")
    myLi.classList.add('quote-card')
    myLi.innerHTML = `
        <li class='quote-card'>
            <blockquote class="blockquote">
                <p class="mb-0">${quoteObj.quote}</p>
                <footer class="blockquote-footer">${quoteObj.author}</footer>
                <br>
                <button class='btn-success'>Likes: <span>${quoteObj.likes.length}</span></button>
                <button class='btn-danger'>Delete</button>
            </blockquote>
        </li>
    `
    quotesUl().appendChild(myLi)
    const btnSuccess = document.querySelector(".btn-success")
    btnSuccess.addEventListener("click")
    // const myBlockQuote = document.createElement("blockquote")
    // myBlockQuote.classList.add('blockquote')
    // const myPar = document.createElement("p")
    // myPar.classList.add('mb-0')
    // myPar.innerText = quoteObj.quote
    // const myFooter = document.createElement("footer")
    // myFooter.classList.add('blockquote-footer')
    // myFooter.innerText = quoteObj.author
    // const myLineBreaker = document.createElement("br")
    // const myLikeBtn = document.createElement("button")
    // myLikeBtn.classList.add("btn-success")
    // myLikeBtn.innerText = "Likes: "
    // const mySpan = document.createElement("span")
    // mySpan.innerText = quoteObj.likes.length
    // const myDeleteBtn = document.createElement("button")
    // myDeleteBtn.classList.add("btn-danger")
    // myDeleteBtn.innerText = "Delete"

}

// Fetching data 

const fetchData = () => {
    fetch("http://localhost:3000/quotes?_embed=likes")
    .then(response => response.json())
    .then(quotes => quotes.forEach(displayQuote))
    .catch(error => alert(error))
}


fetchData()