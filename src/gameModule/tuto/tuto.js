import swiper from 'swiper'

export default class Tuto {
  constructor() {
    this.swiperContainer = document.createElement('div')
    this.swiperContainer.classList.add('swiper-container')

    this.swiperWrapper = document.createElement('div')
    this.swiperWrapper.classList.add('swiper-wrapper')

    this.swiperPagination = document.createElement('div')
    this.swiperPagination.classList.add('swiper-pagination')

    this.swiperContainer.appendChild(this.swiperWrapper)
    this.swiperContainer.appendChild(this.swiperPagination)
  }

  createSlide(html) {
    let slide = document.createElement('div')
    slide.classList.add('swiper-slide')
    slide.innerHTML = html
    this.swiperWrapper.appendChild(slide)
  }

  initSlider() {
    this.swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30
    })
  }

  destroySlider() {
    this.swiper.destroy()
  }

  get html() {
    return this.swiperContainer
  }
}
