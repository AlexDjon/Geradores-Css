function BoxShadow() {
  const obj = {
     x: -4,
     y: -3,
     blur: 5,
     spread: 0,
     color: {
       r: 10,
       g: 10,
       b: 10
     },
     opacity: 1
  }

  this.isMobile = () => {
    if($(window).width() <= 800) return true
    else return false
  }

  this.render = (value) => {
    $('.block p').html(value)
  }

  this.toRGB = hex => {
    const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
    const result = hex.match(regex)
    console.log(result)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  this.changeValue = elem => {
    const id = elem.id.split('-')[1]
    let value = elem.value
    let valueHtml = ''

    if(id === 'color') {
      const rgb = this.toRGB(value)
      value = {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b
      }
      valueHtml = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    }
    else if (id === 'opacity') {
      value /= 100
      valueHtml = value
    }
    else {
      valueHtml = `${value}px`
    }

    $(`#v-${id}`).html(valueHtml)

    obj[id] = value
    this.createBox()
  }

  this.createBox = () => {
    const { x, y, blur, spread, color, opacity } = obj
    let rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`
    const valueBox = `${x}px ${y}px ${blur}px ${spread}px ${rgbaColor}`
    const props = ['box-shadow', '-webkit-box-shadow', '-moz-box-shadow']
    const mobile = this.isMobile()

    const generate = props.map((v, i) => {
      const temp = mobile ? valueBox : `${v}: ${valueBox};`
      $('.block').css(v, valueBox)

      return temp
    })
    

    this.render(generate[0])
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

