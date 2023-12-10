const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const detail = document.getElementById('presenter')
const name = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1000)

function getData() {
  title.innerHTML = 'Art Gallery Project'
  excerpt.innerHTML =
    'The idea of this project is to allow user to comment and view on my art work.'
  detail.innerHTML = 'Project present to you by:'
  name.innerHTML = 'Hang Biao Li'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}