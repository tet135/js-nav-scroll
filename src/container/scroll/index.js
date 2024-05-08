window.scrollButton.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

let isDisplay = false

setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    isDisplay = true
    //без window. теж працює
    window.scrollButton.style.display = 'flex'
    return null
    //or simply "return"
  }

  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false
    window.scrollButton.style.display = 'none'
    return
  }
}, 1000)
