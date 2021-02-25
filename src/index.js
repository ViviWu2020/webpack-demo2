import x from './x.js'
import png from './assets/1.png'


const div = document.getElementById('app')
div.innerHTML = `
  <img src ="${png}">
`
const button = document.createElement('button')
div.appendChild(button)
button.innerText = '懒加载'
button.click = () => {
  const promise = import('./lazy')
  promise.then((module) => {
    const fn = module.default
    fn()
  }), () => { }
}