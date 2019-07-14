<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Fixed navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" to="/" exact>
            <a class="nav-link">Главная</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/users">
            <a class="nav-link">Список пользователей</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/add">
            <a class="nav-link">Добавление пользователя</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view />
    </main>

    <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
