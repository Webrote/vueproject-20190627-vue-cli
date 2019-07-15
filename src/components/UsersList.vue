<template>
  <div class="card mb-4">
    <div class="card-header">
      <div class="navbar">
        <h5>Пользователей в базе: {{ total }}</h5>
        <button type="button" class="btn btn-primary">Обновить таблицу</button>
      </div>
    </div>

    <users-itemsperpage :options="itemsPerPageOptions" v-model="itemsPerPage"></users-itemsperpage>

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
          <tr v-for="user in usersFiltered" :key="user.id">
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
import UsersItemsPerPage from '@/components/UsersItemsPerPage.vue'

export default {
  name: 'UsersList',
  components: {
    'users-pagination': UsersPagination,
    'users-itemsperpage': UsersItemsPerPage
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    currentPage: 1,
    itemsPerPageOptions: [
      {
        text: 5,
        value: 5,
        selected: false
      },
      {
        text: 15,
        value: 15,
        selected: true
      },
      {
        text: 30,
        value: 30,
        selected: false
      },
      {
        text: 'Все',
        value: Infinity,
        selected: false
      }
    ],
    itemsPerPage: 5
  }),
  computed: {
    total() {
      return this.users.length
    },
    pagesAmount() {
      return Math.ceil(this.users.length / this.itemsPerPage)
    },
    usersFiltered() {
      return this.users.slice( ( this.currentPage - 1 ) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    }
  },
  watch: {
    itemsPerPage() {
      console.log(this.itemsPerPage)
    }
  },
  methods: {
    removeUser(id) {
      this.$emit('remove', id)
    }
  }
}
</script>
