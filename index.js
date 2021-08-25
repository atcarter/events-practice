const newComment = document.getElementById('new-comment')
const submitButton = document.getElementById('submit-button')

const commentsContainer = document.getElementById('comments-container')
const form = document.getElementById('comment-form')

let buttonEvent = (event) => {
    event.preventDefault()
    // debugger    
    if (newComment.value != ""){
      commentsContainer.innerHTML += `<div>${newComment.value}</div>`
      newComment.value = "" 
    }
}

form.addEventListener('click', buttonEvent)

