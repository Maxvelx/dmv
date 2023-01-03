<template>
  <div class="col-md-3 col-sm-3">
    <div class="container-fluid">
      <ul class="nav flex-column nav-pills col-sm-4 col-md-8" style="margin-left: 30px">
        <li class="nav-item">
          <router-link :to="{name: 'personal'}">
            <a :class="{'active': this.$store.state.activeElP === 1}"
               @click="this.$store.commit('menuPersonal', 1)" class="nav-link" href="">Головна</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'personal_profile'}">
            <a :class="{'active': this.$store.state.activeElP === 2}"
               @click="this.$store.commit('menuPersonal', 2)" class="nav-link" href="">Профіль</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'personal_orders'}">
            <a :class="{'active': this.$store.state.activeElP === 3}"
               @click="this.$store.commit('menuPersonal', 3)" class="nav-link" href="">Замовлення</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'personal_wishlist'}">
            <a :class="{'active': this.$store.state.activeElP === 4}"
               @click="this.$store.commit('menuPersonal', 4)" class="nav-link" href="">Обрані запчастини</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent"
}
</script>

<style scoped>

</style>