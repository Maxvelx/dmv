<template>
  <div v-if="user === null" class="preloader"></div>
  <!-- Our Dashbord -->

  <section v-if="user !== null" class="our-dashbord dashbord">
    <div class="col-md-12 col-sm-12 col-xs-12 row">
      <MenuComponent></MenuComponent>
      <div  class="col-md-10 col-sm-10 col-xs-10 pt60 center-all">
<!--        <div class="row">-->
<!--          <div class="breadcrumb_content mb50 pl30">-->
<!--            <h2 class="breadcrumb_title">Вітаємо, {{ this.user.name + ' ' + this.user.patronymic }}!</h2>-->
<!--            <p>Раді Вас бачити!</p>-->
<!--          </div>-->
<!--        </div>-->
        А тут будет еще что то, не прям тут, а выше, ближе к меню, типа как в Про нас
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <div class="ff_one float less_transparent">
              <div class="icon"><i style="font-size: 32px" class="fa fa-briefcase"></i></div>
              <div class="detais text-end">
                <div class="timer">9999</div>
                <p class="para">Кількість замовлень</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="ff_one float less_transparent">
              <div class="icon"><i style="font-size: 32px" class="fa fa-car"></i></div>
              <div class="detais text-end">
                <div class="timer">9999</div>
                <p class="para">Кількість доданих авто</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="ff_one float less_transparent">
              <div class="icon"><i style="font-size: 32px" class="fa fa-star"></i></div>
              <div class="detais text-end">
                <div class="timer">9999</div>
                <p class="para">Кількість бажаних запчастин</p>
              </div>
            </div>
          </div>
        </div>

        А тут шо то еще будет
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

<style scoped>

</style>