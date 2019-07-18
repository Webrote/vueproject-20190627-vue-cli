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
      <slot name="header">
        Заголовок таблицы по умолчанию
      </slot>
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
          <tr v-for="(user, index) in usersFiltered" :key="user.id">
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
              <button type="button" class="btn btn-danger" @click="removeUser(user.id, index)">
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <slot name="footer">
        Подвал таблицы по умолчанию
      </slot>
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
    itemsPerPage: 5,
    itemsPerPageOptions: [
      {
        text: 5,
        value: 5,
        selected: true
      },
      {
        text: 15,
        value: 15,
        selected: false
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
    ]
  }),
  computed: {
    total() {
      return this.users.length
    },
    pagesAmount() {
      return Math.ceil(this.users.length / this.itemsPerPage)
    },
    newIndex() {
      return (this.currentPage - 1) * this.itemsPerPage
    },
    usersFiltered() {
      return this.users.slice(this.newIndex, this.currentPage * this.itemsPerPage)
    }
  },
  watch: {
    itemsPerPage() {
      console.log(this.itemsPerPage)
    }
  },
  methods: {
    removeUser(id, index) {
      this.users.splice(this.newIndex + index, 1)
      this.$emit('remove', id)
    }
  }
}
</script>
