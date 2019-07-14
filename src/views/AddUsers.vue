<template>
  <div>
    <user-form v-model="user" />

    <button type="button" class="btn btn-primary" @click="addUser()">
      Add user
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'AddUsers',
  components: {
    UserForm
  },
  data: () => ({
    user: {}
  }),
  computed: {
    url() {
      return 'http://localhost:3004/users/'
    },
    stringifyUser() {
      return JSON.stringify(this.user)
    }
  },
  methods: {
    addUser() {
      console.log(this.user)
      axios
        .post(this.url, this.user)
        .then(response => {
          console.log(response)
        })
        .then(() => this.$router.push('/users'))
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
