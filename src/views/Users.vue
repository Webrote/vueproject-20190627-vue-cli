<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else :users="users"></users-list>
  </div>
</template>

<script>
import axios from 'axios'
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'UsersList',
  components: {
    'users-list': UsersList
  },
  data: () => ({
    users: []
  }),
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      let url = 'http://localhost:3004/users'
      axios
        .get(url)
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
