let bookmarkStorage = [];

function setup(){
    //get data fro0m local storage and write it into bookmark array
    bookmarkStorage = JSON.parse(localStorage.getItem("bookmarkStorage"));
    //display all bookmarks
    if ( bookmarkStorage != null){
        const container = document.getElementById("bookmarks_container");
        container.innerHTML = "";
        bookmarkStorage.forEach( bookmark =>{
            displayBookmark(bookmark)   
        });
    } else {
        bookmarkStorage = [];
    }

    const form = document.getElementById("form");
    const urlDom = document.getElementById("url");
    const titleDom = document.getElementById("title");
    const descriptionDom = document.getElementById("description");
    form.addEventListener("submit",(event) => {
        event.preventDefault();
        const url = urlDom.value;
        const title = titleDom.value;
        const description = descriptionDom.value;
        const bookmark = {
            url: url,
            title: title,
            description: description,
            date: new Date()
        }
        bookmarkStorage.push(bookmark);
        //add bookmark array to local storage after new bookmark added
        localStorage.setItem("bookmarkStorage", JSON.stringify(bookmarkStorage));
        //display all bookmarks

        const container = document.getElementById("bookmarks_container");
        container.innerHTML = "";
        bookmarkStorage.forEach( bookmark =>{
            displayBookmark(bookmark)   
        });
    })
}

function displayBookmark(bookmark){
    const div = document.createElement("div");
    div.classList = "bookmark_card";
    const h1 = document.createElement("h1");
    div.appendChild(h1);
    const a =document.createElement("a");
    a.href = bookmark.url;
    a.textContent = bookmark.title;
    h1.appendChild(a);
    const pDescription = document.createElement("p");
    div.appendChild(pDescription);
    pDescription.textContent = bookmark.description;
    const pDate = document.createElement("p");
    pDate.textContent = "Bookmark created: "+bookmark.date;
    div.appendChild(pDate);
    
    const container = document.getElementById("bookmarks_container");
    container.appendChild(div);
}


window.onload = setup;