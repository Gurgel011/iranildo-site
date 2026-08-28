import './style.css'
import { animate, stagger } from 'animejs'

const career = [
  ['2017', 'Fluminense de Joinville', 'SC', 'fluminense'], ['2018', 'VOCEM', 'SP', 'vocem'], ['2019–20', 'Vilavelhense FC', 'ES', 'vilavelhense'],
  ['2022–24', 'Capixaba Sport Club', 'ES', 'capixaba'], ['2023', 'Atlético Itapemirim', 'ES', 'atletico-itapemirim'], ['2025', 'Piauí EC', 'PI', 'piaui'],
  ['2025', 'Real Noroeste', 'ES', 'real-noroeste'], ['2025', 'Picos', 'PI', 'picos'], ['2026', 'Lemense', 'SP', 'lemense']
]

document.querySelector('#timeline').innerHTML = career.map(([year, club, state, logo], index) => `
  <article class="timeline-item"><span>${String(index + 1).padStart(2, '0')}</span><img src="/assets/clubs/${logo}.webp" alt="Escudo do ${club}"><time>${year}</time><h3>${club}</h3><b>${state}</b></article>`).join('')

const videos = [
  ['n2HgEVUm2vU', 'Jogadas e fundamentos'], ['jMXHroXpZ7I', 'Melhores momentos'], ['xOdtGrWpEj8', 'Atuação em campo'],
  ['mlQnZ9UA1Cg', 'Lances da temporada'], ['0h1NtpPYwYg', 'Compacto de jogo']
]
document.querySelector('#video-track').innerHTML = videos.map(([id, title], i) => `<article class="video-card"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><small>0${i + 1}</small><h3>${title}</h3></article>`).join('')

const gallery = ['action-lemense.webp', 'action-rain.webp', 'action-white.webp', 'action-blue.webp', 'trophy-piaui.webp', 'team-piaui.webp', 'action-capixaba.webp', 'team-capixaba.webp']
const grid = document.querySelector('#gallery-grid')
grid.innerHTML = gallery.map((src, i) => `<button class="gallery-item item-${i + 1}" data-src="/assets/${src}" aria-label="Ampliar foto ${i + 1}"><img src="/assets/${src}" alt="Momento da carreira de Iranildo" loading="lazy"></button>`).join('')

const lightbox = document.querySelector('#lightbox')
grid.addEventListener('click', ({ target }) => {
  const button = target.closest('button')
  if (!button) return
  lightbox.querySelector('img').src = button.dataset.src
  lightbox.showModal()
})
lightbox.querySelector('button').addEventListener('click', () => lightbox.close())
lightbox.addEventListener('click', ({ target }) => target === lightbox && lightbox.close())

const track = document.querySelector('#video-track')
const carousel = document.querySelector('.video-carousel')
const updateArrows = () => {
  carousel.querySelector('.previous').hidden = track.scrollLeft < 8
  carousel.querySelector('.next').hidden = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8
}
carousel.addEventListener('click', ({ target }) => {
  if (!target.dataset.direction) return
  track.scrollBy({ left: Number(target.dataset.direction) * Math.min(track.clientWidth * .8, 520), behavior: 'smooth' })
})
track.addEventListener('scroll', updateArrows, { passive: true })
addEventListener('resize', updateArrows)
updateArrows()

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return
  animate(entry.target.querySelectorAll('h2, .section-kicker, .timeline-item, .title-card, .gallery-item'), { opacity: [0, 1], y: [28, 0], delay: stagger(70), duration: 700, ease: 'outExpo' })
  observer.unobserve(entry.target)
}), { threshold: .12 })
document.querySelectorAll('.section').forEach(section => observer.observe(section))
animate('.reveal', { opacity: [0, 1], y: [24, 0], delay: stagger(110, { start: 250 }), duration: 900, ease: 'outExpo' })

const preloader = document.querySelector('#preloader')
animate(preloader.querySelector('span'), { opacity: [0, 1], scale: [.65, 1], duration: 650, ease: 'outExpo' })
animate(preloader.querySelector('i'), { scaleX: [0, 1], duration: 900, ease: 'inOutQuad' })
setTimeout(() => animate(preloader, { opacity: [1, 0], scale: [1, 1.04], duration: 550, ease: 'inOutQuad', onComplete: () => preloader.remove() }), 1050)
