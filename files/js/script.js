String.prototype.capitalize = function() {
   return this.charAt(0).toUpperCase() + this.slice(1)
}
Array.prototype.equal = function() {
   let count = 0
   this.reduce((ac, vl) => {
      if(ac == vl) {
         count++
      }
      return ac
   })
   
   if(count == this.length-1) {
      return true
   } else {
      return false
   }
}

function Temas() {
   this.temas = {
      default: { background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(60,44,99,1) 27%, rgba(15,15,15,1) 100%)', color: '#d3d3d3' },
      black:   { background: '#0f0f0f', color: '#d3d3d3' },
      white:   { background: '#f1f1f1', color: '#171717' },
      blue:    { background: '#3057c4', color: '#171717' },
      green:   { background: '#34c96b', color: '#171717' },
      red:     { background: '#f2392c', color: '#171717' },
      orange:  { background: '#f2752c', color: '#171717' },
      purple:  { background: '#a92cf2', color: '#171717' },
      yellow:  { background: '#f2eb2c', color: '#171717' }
   }
   this.inSelect = () => {
      const temas = this.temas
      for(let i in temas) {
         let select = i == 'default' ? ' selected' : ''
         let html = `<option value="${i}"${select}>${i.capitalize()} Theme</option>`
         $('.theme-select').append(html)
      }
   }
   
   this.verificar = o => this.temas.hasOwnProperty(o)
   this.alterar = tema => {
      if(this.verificar(tema)) {
         $('.container').css({
            background: this.temas[tema].background,
            color: this.temas[tema].color
         })
      }
   }
}

$(document).ready(function() {
   const tema = new Temas
   tema.inSelect()
   $('.theme-select').on('change', function() {
      tema.alterar($(this).val())
   })
   $('.border-radius .changer input[type=text]').mask('000')
})