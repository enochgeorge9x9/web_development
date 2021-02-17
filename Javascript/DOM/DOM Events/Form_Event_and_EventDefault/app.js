const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

const addTweet = (username, tweet) =>{
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`- ${tweet}`)
    tweetContainer.append(newTweet)
    console.log("Submitted")
}

tweetForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = ''
    tweetInput.value = ''   
})

tweetContainer.addEventListener('click', (evt) =>{
    evt.target.remove()
})