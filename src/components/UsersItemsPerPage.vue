<template>
    <div class="p-3">
      <div class="row">
        <div class="col-2">
          <div class="form-group">
            <select class="form-control" v-model="selectValue">
              <option v-for="item in options" 
                      :key="item.value" 
                      :value="item.value">
                      {{ item.text}}
              </option>
            </select>
          </div>
        </div>
      </div>
      Выбранно элементов на страницу:
    </div>
</template>

<script>
export default {
  name: 'UsersItemsPerPage',
  model: {
   prop: 'selectValue',
   event: 'change'   
  },
  props: {
      options: {
          type: Array,
          requred: true
      }
  },
  data: ()=>({
    selectValue: ''
  }),
  created() {
    this.options.forEach(item => {
      if (item.selected) {
        this.selectValue = item.value
      }
      
    });
  },
  watch: {
      selectValue() {
        this.$emit('change', this.selectValue)
      }
  }
        
}
</script>
