const elDiv = document.querySelector(".append")



// const newH1 = document.createElement("h1")
// const newImg = document.createElement("img")

// newH1.setAttribute("class", "heading")
// newImg.setAttribute("src", "https://picsum.photos/200/200")

// newH1.textContent = "hello world"

// elDiv.appendChild(newH1)
// elDiv.appendChild(newImg)

const newForm = document.createElement("form")
const newDiv = document.createElement("div")
const newInput = document.createElement("input")
const newH1 = document.createElement("h1")
const newButton = document.createElement("button")


elDiv.appendChild(newForm)
newForm.appendChild(newDiv)
newDiv.appendChild(newInput)
newForm.appendChild(newH1)
newForm.appendChild(newButton)

newInput.setAttribute("type", "text")
newInput.setAttribute("name", "umidjon")
newInput.setAttribute("placeholder", "todoo..")

newH1.setAttribute("class", "result")
newH1.textContent = "Result"

newButton.textContent = "Send"
