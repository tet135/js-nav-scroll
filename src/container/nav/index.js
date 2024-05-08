class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #back = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return location.reload()
  }
  // функція для переходу на сторінку (буде в home, go, і де ще потрібно)
  static #changePage = (href) => {
    return location.assign(String(href))
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static #go = () => {
    try {
      const url = new URL(input.value)
      return this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну URL адресу')
      console.error(e)
    }
    const url = input.value
    return this.#changePage(url)
  }

  static init = () => {
    // якщо використовується не стрілкова функція, а звичайний метод, то треба обов'язково bind, інакше губиться прив'язка this
    // window.back.onclick = this.#back.bind(this)
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()
