<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <div v-else>
      <users-list :users="users" @remove="remove"></users-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'Users',
  components: {
    'users-list': UsersList
  },
  data: () => ({
    users: []
  }),
  mounted() {
    this.loadUsers()
    console.log(this.users)
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
        .catch(error => console.error(error))
    },
    remove(id) {
      axios
        .delete(`http://localhost:3004/users/${id}`)
        .then(() => this.loadUsers())
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
