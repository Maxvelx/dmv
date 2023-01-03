<template>
  <div v-if="user === null" class="preloader"></div>
  <!-- Our Dashbord -->
  <section v-if="user !== null" class="our-dashbord dashbord">
    <div class="col-md-12 col-sm-12 row">
      <MenuComponent></MenuComponent>
      <div class="col-md-9 col-sm-9 bgc-f9-1">
        <div class="row">
          <div class="breadcrumb_content mb50">
            <h2 class="breadcrumb_title">Вітаємо, {{ this.user.name + ' ' + this.user.patronymic }}!</h2>
            <p>Раді Вас бачити!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <div class="ff_one">
              <div class="icon"><span class="flaticon-list"></span></div>
              <div class="detais text-end">
                <div class="timer">1260</div>
                <p class="para">Total Listing</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="ff_one style2">
              <div class="icon"><span class="flaticon-message"></span></div>
              <div class="detais text-end">
                <div class="timer">74</div>
                <p class="para">Messages</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="ff_one style3">
              <div class="icon"><span class="flaticon-heart"></span></div>
              <div class="detais text-end">
                <div class="timer">20</div>
                <p class="para">Favorites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import MenuComponent from "@/views/app/personal/MenuComponent.vue";

export default {
  name: "Personal",
  components: {MenuComponent},
  data() {
    return {
      user: null,
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      api.post('/api/auth/me')
          .then(res => {
            this.user = res.data.data
          })
    },
  }
}
</script>

<style>
</style>