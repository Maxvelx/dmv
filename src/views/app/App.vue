<template>
  <div>
    <router-link v-if="this.$store.state.count > 0" :to="{name: 'order'}">
      <div class="cart_widget"><i style="font-size: 32px" class="fas fa-cart-shopping"></i><br>
        <div style="color: white">{{ this.$store.state.count }}шт.</div>
        <div style="color: white">на суму: <br>{{ this.$store.state.totalPrice }}грн</div>
      </div>
    </router-link>
    <div class="header_top home3_style dn-992" style="background:#fff;">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-7">
            <div class="header_top_contact_opening_widget text-center text-md-start">
              <ul class="mb0">
                <li class="list-inline-item"><a href="#"><span class="flaticon-phone-call"></span>093 123 33 22</a></li>
                <li class="list-inline-item"><a href="#"><span class="flaticon-map"></span>м. Київ, вул. Київська, 4</a>
                </li>
                <li class="list-inline-item"><a href="#"><span class="flaticon-clock"></span>Понеділок - П'ятниця 8:00 -
                  18:00</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-xl-5">
            <div class="header_top_social_widgets text-center text-md-end">
              <ul class="m0">
                <li class="list-inline-item"><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                <li class="list-inline-item"><a href="#"><span class="fab fa-telegram"></span></a></li>
                <li class="list-inline-item"><a href="#"><span class="fab fa-instagram"></span></a></li>
                <li class="list-inline-item"><a href="#"><span class="fab fa-viber"></span></a></li>
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
          <a class="navbar-brand" href="#"><img src="/images/header-logo2.svg" alt="logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link :to="{name: 'index'}"><a :class="{'active': this.$store.state.activeEl === 1}"
                                                      @click="this.$store.commit('menu', 1)"
                                                      class="nav-link" aria-current="page">Головна</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'shop'}"><a :class="{'active': this.$store.state.activeEl === 2}"
                                                     @click="this.$store.commit('menu', 2)"
                                                     class=" nav-link">Магазин</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'about'}"><a :class="{'active': this.$store.state.activeEl === 3}"
                                                      @click="this.$store.commit('menu', 3)"
                                                      class=" nav-link">Про нас</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'contact'}"><a :class="{'active': this.$store.state.activeEl === 4}"
                                                        @click="this.$store.commit('menu', 4)"
                                                        class=" nav-link">Контакти</a>
                </router-link>
              </li>
            </ul>
            <ul style="margin-top: 15px;padding-right: 20px">
              <li v-if="token !== null" class="list-inline-item">
                <router-link :to="{name: 'personal'}" style="font-size: 14px"><a class="nav-link">Мій кабінет</a>
                </router-link>
              </li>
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
            <i v-if="this.$store.state.cartIds.length > 0" style="font-size: 32px" class="fas fa-cart-shopping"></i>
            <span class="navbar-text" v-if="this.$store.state.cartIds.length > 0">
              <router-link :to="{name: 'order'}">
                {{ this.$store.state.count }} шт.
                <br>на суму {{ this.$store.state.totalPrice }}грн
              </router-link>
            </span>
          </div>
        </div>
      </nav>
    </header>
    <!-- Sidebar Panel Start -->
    <div class="listing_sidebar">
      <div class="siderbar_left_home pt20">
        <a class="sidebar_switch sidebar_close_btn float-end" href="#">X</a>
        <div class="footer_contact_widget mt100">
          <h3 class="title">Quick contact info</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
            massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur.</p>
        </div>
        <div class="footer_contact_widget">
          <h5 class="title">CONTACT</h5>
          <div class="footer_phone">+1 670 936 46 70</div>
          <p>hello@voiture.com</p>
        </div>
        <div class="footer_about_widget">
          <h5 class="title">OFFICE</h5>
          <p>Germany —<br>329 Queensberry Street,<br>North Melbourne VIC 3051</p>
        </div>
        <div class="footer_contact_widget">
          <h5 class="title">OPENING HOURS</h5>
          <p>Monday – Friday: 09:00AM – 09:00PM<br>Saturday: 09:00AM – 07:00PM<br>Sunday: Closed</p>
        </div>
      </div>
    </div>
    <!-- Sidebar Panel End -->
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
                    <a class="nav-link">Увійти до вашого аккаунту</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content container p0" id="myTabContent">
              <div class="row mt30 tab-pane fade show active" id="home" role="tabpanel"
                   aria-labelledby="home-tab">
                <div class="col-lg-12">
                  <div class="login_form">
                    <!--                    <p>Вперше на dmvavto.shop? <a data-bs-toggle="modal" href=""-->
                    <!--                                                  data-bs-target="#logInModal2">Зареєструватися.</a></p>-->
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
                      <button :disabled="!isDisabledLogin" @click.prevent="login" class="btn btn-log btn-thm mt5">Увійти</button>
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
                    <a class="nav-link">Зареєструвати новий аккаунт</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content container p0" id="myTabContent">
              <div class="row mt30 tab-pane fade show active" id="home" role="tabpanel"
                   aria-labelledby="home-tab">
                <div class="col-lg-12">
                  <div class="sign_up_form">
                    <!--                    <p>Маєте аккаунт на dmvavto.shop? <a data-bs-toggle="modal" href=""-->
                    <!--                                                         data-bs-target="#logInModal">Вхід.</a></p>-->
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
                            <input type="email" v-model="email" class="form-control">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group mb20">
                            <label class="form-label">Пароль</label>
                            <input type="password" v-model="password" class="form-control">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <router-view></router-view>
    <a id="button"><i style="font-weight: normal;font-style: normal;font-size: 2em;line-height: 50px;color: #fff;"
                      class="fas fa-arrow-up"></i></a>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import api from "@/api";

export default {
  name: "App.vue",
  data() {
    return {
      name: null,
      patronymic: null,
      password: null,
      password_confirmation: null,
      email: null,
      phone_number: null,
      token: localStorage.getItem('token'),
      modal: null,
    }
  },
  mounted() {
    this.$store.commit('increment')
  },
  computed:{
    isDisabledReg(){
      return this.name && this.patronymic && this.password.length >= 8 && this.password_confirmation === this.password && this.email && this.phone_number
    },
    isDisabledLogin(){
      return this.email && this.password.length >= 8
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
.cart_widget {
  position: fixed;
  top: 80%;
  right: 5px;
  z-index: 11;
  background: darkgreen;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background: rgba(25, 135, 84, 0.4);
}

.cart_widget:hover {
  background: rgba(25, 135, 84, 1);
}

#button {
  display: inline-block;
  background-color: #f5c34b;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: background-color .3s,
  opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}

#button:hover {
  cursor: pointer;
  background-color: #333;
}

#button:active {
  background-color: #555;
}

#button.show {
  opacity: 1;
  visibility: visible;
}

</style>