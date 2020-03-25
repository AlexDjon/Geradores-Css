function BorderRadius() {
   const obj = {
      tL: 0,
      tR: 0,
      bR: 0,
      bL: 0
   }

   this.getValues = id => {
      const rangeValue = $(`#${id}`).val()
      const inputValue = $(`#v-${id}`).val()
      let finalValue = ''

      if(inputValue > 100) {
         finalValue = inputValue
      } else {
         finalValue = rangeValue
      }

      return {
         id_r: id,
         prefix: $(`#p-${id}`).val(),
         value: finalValue
      }
   }
   
   this.changeInput = id => {
      let changer = '';

      // Change range of id = input else change input
      if(id.length > 2 && id != 'all') {
         const id_cut = id.substring(2)
         changer = $(`#v-${id_cut}`).val()
         $(`#${id_cut}`).val(changer)

         return this.getValues(id_cut)

      } else {
         changer = $(`#${id}`).val()
         $(`#v-${id}`).val(changer)

         return this.getValues(id)
      }
   }

   this.change = id => {
      const { prefix, value, id_r } = this.changeInput(id)  

      if(id_r == 'all') {
         for(let i in obj) {
            obj[i] = value+prefix
         }
      }
      else {
         obj[id_r] = value+prefix
      }
      
      this.inner()
      this.view()
   }

   this.prepare = () => {
      const values = Object.values(obj)
      let prepare = ''
      if(values.equal()) {
         prepare = values[0]
      }
      else {
         prepare = values.join(' ')
      }
      return prepare
   }

   this.create = () => {
      const medidas = this.prepare()
      return [
         {name: 'border-radius', value: medidas },
         {name: '-moz-border-radius', value: medidas },
         {name: '-webkit-border-radius', value: medidas }
      ]
   }

   this.inner = () => {
      $('.show p').html('')
      const r = this.create()
      r.forEach((e) => {
         $('.show p').append(`${e.name}: ${e.value};<br>`)
      })
   }

   this.view = () => {
      const br = this.create()
      br.forEach((e) => {
         $('.show').css(e.name, e.value)
      })
   }

   this.addPrefix = () => {
      const prefix = [ 'px', '%', 'em', 'rem', 'ch' ]
      for(let v of prefix) {
         let html = `<option value='${v}'>${v.capitalize()}</option>`
         $('.prefix').append(html)
      }
   }

}

$(document).ready(function() {
   const border = new BorderRadius
   border.addPrefix()
   // Range input
   $('.range').on('input', function() {
      const id = $(this).attr('id')
      border.change(id)
   })
   // Text Value
   $('.textValue').on('change', function() {
      const id = $(this).attr('id')
      border.change(id)
   })
   // Prefix change
   $('.prefix').on('change', function() {
      const id = $(this).attr('id')
      border.change(id)
   })
})

