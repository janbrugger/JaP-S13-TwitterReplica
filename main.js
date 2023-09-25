const url = "https://my-json-server.typicode.com/janbrugger/twitter/posts"
const tweets = document.getElementById("tweets")

document.addEventListener("DOMContentLoaded") {
    fetch (url) 
.then (response => response.json())
.then (data => showData(data))
.try(showData())
.catch("error", console.log("error"))

}


function showData(data) {
    data.forEach(element => {
        tweets.innerHTML += ` <div class="profile-pic"><img src="https://picsum.photos/10" /></div>
    <div class="content">
      <div class="names">
        <p class="full-name">${element.name}</p>
        <p class="user-name">@full_name</p>
        <p class="time"> 27mins</p>
      </div>
    </div>
    <div class="tweet-content">
      <p>${element.text}</p>
    </div>
    <div class="tweet-icons">
      <i class="fa fa-comment" aria-hidden="true"></i>
      <i class="fa fa-heart" aria-hidden="true"></i>
      <i class="fa fa-retweet" aria-hidden="true"></i>
    </div>`

    });
}
    