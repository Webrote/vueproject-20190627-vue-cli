<template>
  <div>
    <user-form v-model="user" />

    <button type="button" class="btn btn-primary" @click="addUser">
      Add user
    </button>
    <button type="button" class="btn btn-success" @click="goBack">
      Back to list
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
    user: {
      firstName: '',
      lastName: '',
      email: '',
      picture: '',
      age: '',
      isActive: '',
      accessLevel: '',
      balance: '',
      phone: '',
      address: '',
      company: '',
      about: '',
      registered: ''
    }
  }),
  computed: {
    url() {
      return 'http://localhost:3004/users/'
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
        .then(() => this.routerPush('/users'))
        .catch(error => {
          console.log(error)
        })
    },
    goBack() {
      this.routerPush('/users')
    },
    routerPush(url) {
      this.$router.push(url)
    }
  }
}
</script>
