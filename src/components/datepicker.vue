<template>
  <div>
    <input ref="calendar" class="form-control" type="text" :value="value" />
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateCalendar'
  },
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy()
    }
  },
  mounted() {
    this.initCalendar()
  },
  methods: {
    initCalendar() {
      this.fp = flatpickr(this.$refs.calendar, {
        dateFormat: 'd.m.Y',
        onChange: (_, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    updateCalendar() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    }
  }
}
</script>
