<template>
  <!-- Our Register -->
  <section class="our-log bgc-f9">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-5">
          <div class="login_form mt60-sm">
            <h2 class="title">Зареєструватися</h2>
            <p>Маєте акаунт на dmvavto.shop?
              <router-link :to="{name: 'login'}"><a href="">Увійти в особистий кабінет</a></router-link>
            </p>
            <form action="#">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-label">Ім'я</label>
                    <input type="text" v-model="name" class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-label">По батькові</label>
                    <input type="text" v-model="patronymic" class="form-control">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label class="form-label">Телефон</label>
                    <input type="tel" v-model="phone_number" class="form-control">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label class="form-label">Email адреса</label>
                    <input type="email" v-model="email" autocomplete="new-email" class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb20">
                    <label class="form-label">Пароль</label>
                    <input type="password" v-model="password" autocomplete="new-password" class="form-control">
                  </div>
                  <div class="text-danger pb10" v-if="password && password.length < 8">Пароль повинен бути від 8 символів</div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb20">
                    <label class="form-label">Підтвердження паролю</label>
                    <input type="password" v-model="password_confirmation" class="form-control">
                  </div>
                  <div class="text-danger pb10" v-if="password_confirmation !== password">Пароль повинен співпадати</div>
                </div>
              </div>
              <button :disabled="!isDisabledReg" type="submit" @click.prevent="registration" class="btn btn-signup btn-thm mb0">Зареєструватись</button>
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
  name: "RegisterComponent",
  components: {FooterComponent},
  data() {
    return {
      img: null,
      name: null,
      patronymic: null,
      password: null,
      password_confirmation: null,
      email: null,
      phone_number: null,
    }
  },
  methods: {
    registration() {
      axios.post('/api/auth/register', {
        name: this.name,
        patronymic: this.patronymic,
        password: this.password,
        password_confirmation: this.password_confirmation,
        email: this.email,
        phone_number: this.phone_number,
      })
          .then(res => {
            localStorage.setItem('token', res.data.access_token)
            router.go()
          })
    },
  },
  computed: {
    isDisabledReg(){
      return this.name && this.patronymic && this.password && this.password.length >= 8 && this.password_confirmation === this.password && this.email && this.phone_number
    },
  },
}
</script>

<style scoped>

</style>