<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.firstName" />
    </div>
    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="localUser.email" />
    </div>
    <div class="form-group">
      <label>URL картики</label>
      <input type="text" class="form-control" v-model="localUser.picture" />
    </div>
    <div class="form-group">
      <label>Возраст</label>
      <input type="number" class="form-control" v-model="localUser.age" />
    </div>
    <div class="form-group">
      <label>Активный</label>
      <div class="checkbox-inline"><input type="checkbox" v-model="localUser.isActive" /> Да</div>
    </div>
    <div class="form-group">
      <label>Уровень доступа</label>
      <input type="text" class="form-control" v-model="localUser.accessLevel" />
    </div>
    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="localUser.balance" />
    </div>
    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="localUser.phone" />
    </div>
    <div class="form-group">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="localUser.address" />
    </div>
    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="localUser.company" />
    </div>
    <div class="form-group">
      <label>Биография</label>
      <input type="text" class="form-control" v-model="localUser.about" />
    </div>
    <div class="form-group">
      <label>Дата регистрации</label>
      <input type="text" class="form-control" v-model="localUser.registered" />
    </div>

    <pre>USERFORM {{ localUser }}</pre>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      localUser: null
    }
  },
  watch: {
    // user: {
    //   deep: true,
    //   handler() {
    //     if (deepEqual(this.user, this.localUser)) {
    //       return
    //     }
    //     this.$emit('update', Object.assign({}, this.localUser))
    //   }
    // },
    localUser: {
      deep: true,
      handler() {
        this.$emit('input', Object.assign({}, this.localUser))
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.value)
  }
}
</script>
