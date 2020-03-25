function BoxShadow() {
  const obj = {
     x: -4,
     y: -3,
     blur: 5,
     spread: 0,
     color: '#404040'
  }

  this.isMobile = () => {
    if($(window).width() <= 800) return true
    else return false
  }

  this.render = (value) => {
    $('.block p').html(value)
  }

  this.changeValue = elem => {
    const id = elem.id.split('-')[1]
    const value = elem.value
    const valueHtml = !isNaN(parseInt(value)) ? `${value}px` : value

    $(`#v-${id}`).html(valueHtml)
    obj[id] = value
    this.createBox()
  }

  this.createBox = () => {
    const { x, y, blur, spread, color } = obj
    const valueBox = `${x}px ${y}px ${blur}px ${spread}px ${color}`
    const props = ['box-shadow', '-webkit-box-shadow', '-moz-box-shadow']
    const mobile = this.isMobile()

    const generate = props.map((v, i) => {
      const temp = mobile ? valueBox : `${v}: ${valueBox};`
      $('.block').css(v, valueBox)

      return temp
    })
    

    this.render(mobile ? generate[0] : generate.join('<br>'))
  }
}

$(document).ready(function() {
  const box = new BoxShadow
  box.createBox()

  $('input[type=range]').on('input', function() {
    box.changeValue(this)
  })

  $('input[type=color]').on('change', function() {
    box.changeValue(this)
  })
})

