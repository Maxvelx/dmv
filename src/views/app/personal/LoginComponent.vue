<template>

  <!-- Our SigIn -->
  <section class="our-log bgc-f9">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-5">
          <div class="login_form mt60-sm">
            <h2 class="title">Увійти в особистий кабінет</h2>
            <p>Вперше на dmvauto.shop?
              <router-link :to="{name: 'register'}"><a href="">Зареєструйтеся,</a></router-link>
              та зможете слідкувати за статусами замовлень,
              додавати запчастини в обране та інші цікаві можливості.
            </p>
            <form action="#">
              <div class="mb-2 mr-sm-2">
                <label class="form-label">Email адреса *</label>
                <input v-model="email" autocomplete="new-email" type="email" class="form-control">
              </div>
              <div class="form-group mb5">
                <label class="form-label">Пароль *</label>
                <input v-model="password" type="password" autocomplete="new-password" class="form-control">
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="exampleCheck3">
                <label class="custom-control-label" for="exampleCheck3">Запам'ятати мене</label>
<!--                                <a class="btn-fpswd float-end" href="#">Lost your password?</a>-->
              </div>
              <button :disabled="!isDisabledLogin" type="submit" @click.prevent="loginPage"
                      class="btn btn-log btn-thm mt5">Увійти
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 offset-xl-1 col-xl-5 offset-xl-2">
          <h4 class="pb30 text-center">Зручний інтерфейс для ще більшої інформативності</h4>
          <div class="row col-md-12 pb25">
            <a class="col-md-6" style="cursor: zoom-in" href="" data-bs-toggle="modal" @click.prevent="img = 'personal1'" data-bs-target="#exampleModalToggle">
              <img src="/images/personal/personal1.png">
            </a>
            <a class="col-md-6" style="cursor: zoom-in" href="" data-bs-toggle="modal" @click.prevent="img = 'personal2'" data-bs-target="#exampleModalToggle">
            <img src="/images/personal/personal2.png">
            </a>
          </div>
          <div class="row col-md-12">
            <a class="col-md-6" style="cursor: zoom-in" href="" data-bs-toggle="modal" @click.prevent="img = 'personal3'" data-bs-target="#exampleModalToggle">
              <img src="/images/personal/personal3.png">
            </a>
            <a class="col-md-6" style="cursor: zoom-in" href="" data-bs-toggle="modal" @click.prevent="img = 'personal1'" data-bs-target="#exampleModalToggle">
              <img src="/images/personal/personal1.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
       tabindex="-1" style="background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="'/images/personal/'+img+'.png'">
        </div>
      </div>
    </div>
  </div>
  <FooterComponent></FooterComponent>

</template>

<script>
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import axios from "axios";
import router from "@/router";

export default {
  name: "LoginComponent",
  components: {FooterComponent},
  data() {
    return {
      email: null,
      password: null,
      img: null,
    }
  },
  methods: {
    loginPage() {
      axios.post('/api/auth/login', {email: this.email, password: this.password})
          .then(res => {
            localStorage.setItem('token', res.data.access_token)
            router.go()
          })
    },
  },
  computed: {
    isDisabledLogin() {
      return this.email && this.password
    }
  },
}

</script>

<style scoped>

</style>