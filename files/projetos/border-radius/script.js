function BorderRadius() {
   const obj = {
      topLeft: 0,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0
   }

   this.create = () => {
      return [
         {name: 'border-radius', value: `${obj.topLeft} ${obj.topRight} ${obj.bottomRight} ${obj.bottomLeft}`},
         {name: '-moz-border-radius', value: `${obj.topLeft} ${obj.topRight} ${obj.bottomRight} ${obj.bottomLeft}`},
         {name: '-webkit-border-radius', value: `${obj.topLeft} ${obj.topRight} ${obj.bottomRight} ${obj.bottomLeft}`}
      ]
   }
   this.inner = () => {
      $('.show').html('')
      const r = this.create()
      r.forEach((e) => {
         $('.show').append(`${e.name}: ${e.value}; <br>`)
      })
   }
   this.change = function(val, prefx, id) {
      if(id == 'all') {
         for(let i in obj) {
            obj[i] = val+prefx
         }
      }
      else {
         obj[id] = val+prefx
      }
      this.view()
   }
   this.view = () => {
      const br = this.create()
      br.forEach((e) => {
         $('.show').css(e.name, e.value)
      })
   }
}

$(document).ready(function() {
   const border = new BorderRadius
   $('.range').on('input', function() {
      const id = $(this).attr('id')
      const value = $(this).val()
      const prefx = $(`#p-${id}`).val()
      $(`#v-${id}`).val(value)
      border.change(value, prefx, id)
      border.inner()
   })
})

