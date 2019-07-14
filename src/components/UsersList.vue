<template>
  <div class="card mb-4">
    <div class="card-header">
      <div class="navbar">
        <h5>Пользователей в базе: {{ total }}</h5>
        <button type="button" class="btn btn-primary">Обновить таблицу</button>
      </div>
    </div>

    <div class="p-3">
      <div class="row">
        <div class="col-2">
          <div class="form-group">
            <select class="form-control">
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
      Выбранно элементов на страницу
    </div>

    <div class="p-3">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Активен</th>
            <th>Баланс</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Зарегистрирован</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>
              <router-link :to="'/users/' + user.id"> #{{ user.id }} </router-link>
            </td>
            <td>
              {{ user.firstName }}
            </td>
            <td>
              {{ user.lastName }}
            </td>
            <td>
              {{ user.isActive }}
            </td>
            <td>
              {{ user.balance }}
            </td>
            <td>
              {{ user.email }}
            </td>
            <td>
              {{ user.phone }}
            </td>
            <td>
              {{ user.registered }}
            </td>
            <td>
              <button class="btn btn-danger" @click="removeUser(user.id)">X</button>
            </td>
          </tr>
        </tbody>
      </table>

      <users-pagination :amount="pagesAmount"></users-pagination>
    </div>
  </div>
</template>

<script>
import UsersPagination from '@/components/UsersPagination.vue'

export default {
  name: 'UsersList',
  components: {
    'users-pagination': UsersPagination
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    currentPage: 1
  }),
  computed: {
    total() {
      return this.users.length
    },
    pagesAmount() {
      return Math.ceil(this.users.length / 5)
    }
  },
  methods: {
    removeUser(id) {
      this.$emit('remove', id)
    }
  }
}
</script>
