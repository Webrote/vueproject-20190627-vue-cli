<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="loading" class="alert alert-warning">
      Загрузка...
    </div>
    <div v-else-if="!users.length" class="alert alert-warning">
      Пользователей в базе нет..
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
    loading: true,
    users: [],
    urlBase: 'http://localhost:3004/users'
  }),
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get(this.urlBase)
        .then(response => response.data)
        .then(users => {
          this.users = users
          this.loading = false
          console.log(this.users)
        })
        .catch(error => console.error(error))
    },
    remove(id) {
      axios
        .delete(this.urlBase + '/' + id)
        .then()
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
