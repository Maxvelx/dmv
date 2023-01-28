<template>

  <div class="row" style="padding-top: 50px">
    <div class="col-lg-12 m-auto">
      <div class="home_content_home7_slider">
        <div class="home_content_home7">
          <div v-if="isActive !== null" class="wow bounceInLeft center" data-wow-duration="1s"
               style="visibility: visible; animation-duration: 1s;">
            <h2 class="title">Запит по Vin номеру</h2>
            <form @submit.prevent="sendVinRequest">
              <div class="row pb20">
                <div class="form_wrapper col-md-6">
                  <input v-model="vin_number" required type="text" class="form-control form-control-border col-md-5"
                         placeholder="Введіть VIN номер автомобіля">
                  <div v-if="vin_number && vin_number.length !== 17" class="text-danger">VIN номер має бути 17
                    символів
                  </div>

                </div>
                <div class="form_wrapper col-md-6">
                  <input v-model="name" required type="text" class="form-control form-control-border col-md-5"
                         placeholder="Як до Вас звертатись?">
                </div>
              </div>
              <div class="row pb20">
                <div class="form_wrapper col-md-6">
                  <input v-model="phone_number" required type="text" class="form-control form-control-border col-md-5"
                         placeholder="Ваш номер телефону">
                </div>
                <div class="form_wrapper col-md-6">
                  <input v-model="email" required type="email" class="form-control form-control-border col-md-5"
                         placeholder="Ваша email адреса">
                </div>
              </div>
              <div class="row pb20">
                <div class="form_wrapper col-md-12">
              <textarea v-model="request_parts" required type="text" class="form-control form-control-border col-md-5"
                        placeholder="Перелік потрібних запчастин" style="height: 150px"></textarea>
                </div>
              </div>
              <div class="wrapper text-center">
                <div class="d-flex justify-content-center">
                  <button :disabled="vin_number && vin_number.length !== 17" type="submit"
                          class="btn btn1 btn-thm2 mr20" href="">Надіслати запит
                  </button>
                  <a class="btn btn2 btn-thm" href="" @click.prevent="isActive = null">Повернутись</a>
                </div>
              </div>
            </form>
          </div>
          <div v-if="isActive === null" class="wow bounceInLeft center" data-wow-duration="1s"
               style="visibility: visible; animation-duration: 1s;">
            <div class="wrapper text-center">
              <div v-if="message" class="text-success pb30">{{message}}</div>
              <div class="d-flex justify-content-center">
                <a class="btn btn1 btn-thm2 mr20" href="" @click.prevent="isActive = 1">Запит по Vin</a>
                <router-link :to="{name: 'shop'}"><a class="btn btn2 btn-thm" href="">Магазин</a></router-link>
              </div>
            </div>
            <div class="thumb">
              <img class="img-fluid" src="/images/home/slider.webp"
                   alt="home_image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPartComponent from "@/views/app/home/SearchPartComponent.vue";
import axios from "axios";
import api from "@/api";

export default {
  name: "SliderComponent",
  components: {SearchPartComponent},
  data() {
    return {
      isActive: null,
      vin_number: null,
      name: null,
      phone_number: null,
      email: null,
      request_parts: null,
      message: null,
      id:null,
    }
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.getUser()
    }
  },
  methods: {

    getUser(){
      api.post('api/auth/me')
          .then(res =>{
            this.name = res.data.data.name
            this.phone_number = res.data.data.phone
            this.email = res.data.data.email
            this.id = res.data.data.id
          })
    },

    sendVinRequest() {
      axios.post('api/vin_request', {
        vin_number: this.vin_number,
        name: this.name,
        phone_number: this.phone_number,
        email: this.email,
        request_parts: this.request_parts,
        user_id: this.id
      })
          .then(res => {
            if (res.status === 200){
              this.isActive = null,
              this.message = 'Дякуемо, Ви успішно відправили запит! Наш менеджер найближчим часом зв\'яжеться з Вами.'
            }
          })
    }
  },
}
</script>

<style scoped>

</style>