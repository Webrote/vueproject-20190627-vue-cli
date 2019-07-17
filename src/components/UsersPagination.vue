<template>
  <div>
    <h5>Выбрана страница</h5>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>

        <router-link
          v-for="item in amount"
          :key="item"
          to="/users?page="
          tag="li"
          class="page-item"
        >
          <a class="page-link">{{ item }}</a>
        </router-link>

        <!-- <li v-for="item in amount" class="page-item" :key="item">
          <a class="page-link" href="#">{{ item }}</a>
        </li> -->

        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'UsersPagination',
  props: {
    amount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="css" scoped></style>
