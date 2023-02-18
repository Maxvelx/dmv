<template>
  <div>
    <router-link v-if="this.$store.state.count > 0" :to="{name: 'order'}">
      <div class="cart_widget shadow3"><i style="font-size: 32px" class="fas fa-cart-shopping"></i><br>
        <div>{{ this.$store.state.count }}шт.</div>
      </div>
    </router-link>
    <div class="header_top home3_style dn-992" style="background:transparent;">
      <div class="container" v-if="this.$store.state.siteInfo">
        <div class="row">
          <div class="col-lg-8 col-xl-7">
            <div class="header_top_contact_opening_widget text-center text-md-start">
              <ul class="mb0">
                <li class="list-inline-item"><a :href="'tel:'+this.$store.state.siteInfo.phone">
                  <span class="flaticon-phone-call"></span>{{ this.$store.state.siteInfo.phone }}</a></li>
                <li class="list-inline-item"><a href="#" @click="this.$store.commit('menu', 4)">
                  <router-link :to="{name: 'contact'}">
                    <span
                        class="flaticon-map"></span>{{
                      this.$store.state.siteInfo.city + ', ' + this.$store.state.siteInfo.address
                    }}
                  </router-link>
                </a>
                </li>
                <li class="list-inline-item"><a href="#"><span class="flaticon-clock"></span>
                  {{ this.$store.state.siteInfo.work_hour }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-xl-5">
            <div class="header_top_social_widgets text-center text-md-end">
              <ul class="m0">
                <li class="list-inline-item"><a :href="this.$store.state.siteInfo.facebook" rel="noopener noreferrer"
                                                target="_blank"><span class="fab fa-facebook-f"></span></a></li>
                <li class="list-inline-item"><a :href="'tg://resolve?domain='+this.$store.state.siteInfo.telegram"><span
                    class="fab fa-telegram"></span> </a></li>
                <li class="list-inline-item"><a rel="noopener noreferrer"
                                                target="_blank"
                                                :href="'https://www.instagram.com/'+this.$store.state.siteInfo.instagram"><span
                    class="fab fa-instagram"></span></a></li>
                <li class="list-inline-item"><a :href="'viber://chat?number=%2B'+this.$store.state.siteInfo.viber"><span
                    class="fab fa-viber"></span></a></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ace Responsive Menu -->

    <header style="border-top: 1px solid rgba(26, 55, 96, .1);" class="col-12 row justify-content-center">
      <!-- Ace Responsive Menu -->
      <nav class="navbar navbar-expand-lg navbar-light col-10">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style="font-size: 16px;font-weight: 600">
            <img  class="logo" src="/images/logo.jpg" alt="logo"> DMV-Avto Parts
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText" style="margin-top: -20px">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item pr5">
                <router-link :to="{name: 'index'}"><a :class="{'active': this.$store.state.activeEl === 1}"
                                                      @click="this.$store.commit('menu', 1)"
                                                      class="nav-link" aria-current="page">Головна</a>
                </router-link>
              </li>
              <li class="nav-item pr5">
                <router-link :to="{name: 'shop'}"><a :class="{'active': this.$store.state.activeEl === 2}"
                                                     @click="this.$store.commit('menu', 2)"
                                                     class=" nav-link">Магазин</a>
                </router-link>
              </li>
              <li class="nav-item pr5">
                <router-link :to="{name: 'about'}"><a :class="{'active': this.$store.state.activeEl === 3}"
                                                      @click="this.$store.commit('menu', 3)"
                                                      class=" nav-link">Про нас</a>
                </router-link>
              </li>
              <li class="nav-item pr5">
                <router-link :to="{name: 'contact'}"><a :class="{'active': this.$store.state.activeEl === 4}"
                                                        @click="this.$store.commit('menu', 4)"
                                                        class=" nav-link">Контакти</a>
                </router-link>
              </li>
            </ul>
            <ul style="margin-top: 15px;padding-right: 20px">
              <a @click="menuPersonal" v-if="token !== null" href="/personal" class="link_for_cabinet">
                <img v-if="this.$store.state.userInfo && this.$store.state.userInfo.image"
                     class="user_image" alt="User Image"
                     :src="this.$store.state.userInfo.image">
                <img v-else src="/images/etc/avatar_tor.png"  class="user_image" alt="User Image">
                  Мій кабінет
              </a>
              <li v-if="token !== null" class="list-inline-item"><a class="nav-link" style="font-size: 14px"
                                                                    @click.prevent="logout"
                                                                    href="">Вихід</a></li>
              <li v-if="token === null" class="list-inline-item"><a class="nav-link" href="#" data-bs-toggle="modal"
                                                                    data-bs-target="#logInModal"
                                                                    style="font-size: 14px">Вхід</a>
              </li>
              <li v-if="token === null" class="list-inline-item"><a class="nav-link" data-bs-toggle="modal" href="#"
                                                                    data-bs-target="#logInModal2"
                                                                    style="font-size: 14px">Зареєструватися</a>
              </li>
            </ul>
            <router-link :to="{name: 'order'}">
              <i v-if="this.$store.state.cartIds.length > 0" style="font-size: 32px" class="fas fa-cart-shopping"></i>
              <span class="navbar-text" v-if="this.$store.state.cartIds.length > 0">
                {{ this.$store.state.count }} шт.
            </span>
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <!-- Modal -->
    <div class="sign_up_modal modal fade" id="logInModal" data-backdrop="static" data-keyboard="false" tabindex="1"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body container p60">
            <div class="row">
              <div class="col-lg-12">
                <ul class="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link">Увійти в особистий кабінет</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content container p0" id="myTabContent">
              <div class="row mt30 tab-pane fade show active" id="home" role="tabpanel"
                   aria-labelledby="home-tab">
                <div class="col-lg-12">
                  <div class="login_form">
                    <p>Вперше на dmvavto.shop? <a href="/register"
                    >Зареєструйтесь, </a>та зможете слідкувати за статусами замовлень,
                      додавати запчастини в обране та інші цікаві можливості.</p>
                    <form action="#">
                      <div class="mb-2 mr-sm-2">
                        <label class="form-label">Email адреса</label>
                        <input v-model="email" type="text" class="form-control" placeholder="Введіть email адресу">
                      </div>
                      <div class="form-group mb5">
                        <label class="form-label">Пароль</label>
                        <input v-model="password" type="password" class="form-control" placeholder="Введіть пароль">
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="exampleCheck3">
                        <label class="custom-control-label" for="exampleCheck3">Запам'ятати мене</label>
                        <a class="btn-fpswd float-end" href="#">Забули пароль?</a>
                      </div>
                      <button :disabled="!isDisabledLogin" @click.prevent="login" class="btn btn-log btn-thm mt5">
                        Увійти
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sign_up_modal modal fade" id="logInModal2" data-backdrop="static" data-keyboard="false" tabindex="1"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body container p60">
            <div class="row">
              <div class="col-lg-12">
                <ul class="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link">Зареєструвати особистий акаунт</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content container p0" id="myTabContent">
              <div class="row mt30 tab-pane fade show active" id="home" role="tabpanel"
                   aria-labelledby="home-tab">
                <div class="col-lg-12">
                  <div class="sign_up_form">
                    <p>Маєте акаунт на dmvavto.shop? <a href="/login"
                    >Увійти в особистий кабінет.</a></p>
                    <form action="#">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label class="form-label">Ім'я</label>
                            <input type="text" v-model="name" class="form-control">
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label class="form-label">Телефон</label>
                            <input type="tel" v-model="phone_number" id="phone1" class="form-control">
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label class="form-label">Email адреса</label>
                            <input type="email" autocomplete="new-email" v-model="email" class="form-control">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group mb20">
                            <label class="form-label">Пароль</label>
                            <input type="password" autocomplete="new-password" v-model="password" class="form-control">
                          </div>
                          <div class="text-danger pb10" v-if="password && password.length < 8">Пароль повинен бути від 8
                            символів
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group mb20">
                            <label class="form-label">Підтвердження паролю</label>
                            <input type="password" v-model="password_confirmation" class="form-control">
                          </div>
                          <div class="text-danger pb10" v-if="password_confirmation !== password">Пароль повинен
                            співпадати
                          </div>
                        </div>
                      </div>
                      <button :disabled="!isDisabledReg" type="submit" @click.prevent="registration"
                              class="btn btn-signup btn-thm mb0">Зареєструватись
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <router-view></router-view>
    <a id="button">
      <i style="font-size: 2em;line-height: 50px;" class="fas fa-arrow-up"></i>
    </a>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import api from "@/api";
import Inputmask from "inputmask";

export default {
  name: "App.vue",
  data() {
    return {
      name: null,
      password: null,
      password_confirmation: null,
      email: null,
      phone_number: null,
      avatar: null,
      token: localStorage.getItem('token'),
      modal: null,
    }
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getUser')
    }
    this.$store.dispatch('getSiteInfo')
    this.$store.commit('increment')
    Inputmask({"mask": "(999) 999-9999"}).mask(document.getElementById("phone1"))
  },
  computed: {
    isDisabledReg() {
      return this.name && this.password && this.password.length >= 8 && this.password_confirmation === this.password && this.email && this.phone_number
    },

    isDisabledLogin() {
      return this.email && this.password && this.password.length >= 8
    }
  },
  methods: {

    registration() {
      axios.post('/api/auth/register', {
        name: this.name,
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

    login() {
      axios.post('/api/auth/login', {email: this.email, password: this.password})
          .then(res => {
            localStorage.setItem('token', res.data.access_token)
            router.go()
          })
    },

    logout() {
      api.post('/api/auth/logout')
          .then(res => {
            localStorage.removeItem('token')
            router.go()
          })
    },

    menuPersonal() {
      this.$store.commit('menu', null)
      this.$store.commit('menuPersonal', 1)
    }

  },
}
$(document).on('click', function () {
  $('.navbar .collapse').collapse('hide');
});

$(document).on('ready', function () {
  const btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
  });
});
</script>

<style scoped>
#button {
  color: white;
  display: inline-block;
  background-image: linear-gradient(135deg, #FFE259, #FFA751);
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  bottom: 10px;
  right: 17px;
  transition: background-color .3s,
  opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 11;
}

@media (max-width: 568px) {
  #button {
    right: 20px;
  }
}

#button:hover {
  cursor: pointer;
  background-image: linear-gradient(135deg, #FFE259, #FFA751);
}

#button:active {
  background-image: linear-gradient(135deg, #FFE259, #FFA751);
}

#button.show {
  opacity: 1;
  visibility: visible;
}

.user_image {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
  aspect-ratio: 3/2;
  object-fit: contain;
}

.link_for_cabinet:hover {
  /*display:block;*/
  padding-block: 25px;
  border-radius: 3px;
  background-image: linear-gradient(to right bottom, #f5c34b, #f7c54a, #f8c649, #fac847, #fbca46, #fbcc48, #fccd49, #fccf4b, #fcd250, #fbd455, #fbd75a, #fbd95f);
}
</style>