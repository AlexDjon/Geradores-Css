function temas(padrao = true, tema) {
   const temas = {
      black:  { background: '#0f0f0f', color: '#d3d3d3' },
      white:  { background: '#f1f1f1', color: '#171717' },
      blue:   { background: '#3057c4', color: '#171717' },
      green:  { background: '#34c96b', color: '#171717' },
      red:    { background: '#f2392c', color: '#171717' },
      orange: { background: '#f2752c', color: '#171717' },
      purple: { background: '#a92cf2', color: '#171717' },
      yellow:  { background: '#f2eb2c', color: '#171717' }
   }
   const selecionado = !!padrao ? $('.theme-select').val() : tema
   const verificar = o => temas.hasOwnProperty(o)
   const alterar = obj => {
      $('.container').css({
         background: obj.background,
         color: obj.color
      })
   }
   if(verificar(selecionado)) {
      alterar(temas[selecionado])
   }
}

$(document).ready(function() {
   $('.theme-select').on('change', function() {
      temas()
   })
   $('.border-radius .changer input[type=text]').mask('000')
})