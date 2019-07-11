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

import UsersList from '@/components/UsersList.vue'

export default {
  name: 'UsersList',
  components: {
    'users-list': UsersList
  },
  data: () => ({
    users: []
  })
}
</script>
