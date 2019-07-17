<template>
  <div>
    <div v-if="!user">
      Загрузка...
    </div>

    <div v-else>
      <h2>Редактирование пользователя #{{ user.id }}</h2>
      <user-form v-model="user" />
      <button type="button" class="btn btn-primary" @click="save()">
        Save
      </button>
      <button type="button" class="btn btn-danger" @click="remove()">
        Remove user
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `http://localhost:3004/users/${this.id}`
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => response.data)
        .then(user => (this.user = user))
        .catch(error => console.error(error))
    },
    save() {
      axios
        .patch(this.url, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },
    remove() {
      axios
        .delete(this.url)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    }
  }
}
</script>
