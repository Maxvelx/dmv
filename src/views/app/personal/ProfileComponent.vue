<template>
  <div v-if="loader === null" class="preloader"></div>
  <section class="our-dashbord dashbord">
    <div class="container-fluid">
      <div class="row">
        <MenuComponent></MenuComponent>
        <div class="col-md-7 col-sm-7 pt60 center-all">
          <div class="row">
            <div class="col-lg-12">
              <div class="new_property_form mb30 float">
                <h4 class="title mb30">Ваш профіль</h4>
                <div class="dp_user_thumb_content">
                  <div class="mb25">
                    <img src="/images/testimonial/1.png">
                    <label for="image1" class="labelBrowse">
                      <span class="browseButton">Browse</span>
                    </label>
                    <small class="file_title">Max file size is 1MB</small>
                  </div>
                </div>
                <div v-if="message" class="text-success">{{ message }}</div>
                <form class="contact_form" name="contact_form" action="#" method="post" novalidate="">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb20">
                            <label class="labelProfile">Ваше ім'я</label>
                            <input name="form_name" class="form-control form_control" v-model="name" type="text"
                                   placeholder="Ваше ім'я">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <label class="labelProfile">Фамілія</label>
                            <input name="form_name" class="form-control form_control" v-model="lastName" type="text"
                                   placeholder="Фамілія">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <label class="labelProfile">По батькові</label>
                            <input name="form_name" class="form-control form_control" v-model="patronymic" type="text"
                                   placeholder="По батькові">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb20">
                            <label class="labelProfile">Телефон</label>
                            <input name="form_name" class="form-control form_control" v-model="phone_number" type="text"
                                   placeholder="Телефон">
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="mb20">
                            <label class="labelProfile">Адреса для доставки</label>
                            <input name="form_name" class="form-control form_control" v-model="address" type="text"
                                   placeholder="формат: Відділення №1, м. Київ">
                          </div>
                        </div>
                        <div class="mb20">
                          <label class="form-label">Виберіть перевізника *</label>
                          <select style="font-size: 14px;height: 50px;" :selected="delivery_company" required v-model="delivery_company" class="form-select form-select-lg mb-3">
                            <option v-for="company in deliveryCompanies" :value="company.id">
                              {{company.title }}
                            </option>
                          </select>
                        </div>
                        <div class="col-lg-12">
                          <div class="new_propertyform_btn">
                            <a href="" @click.prevent="editUser" class="btn btn-thm ad_flor_btn">Редагувати</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="new_property_form float">
                <div class="row">
                  <div class="col-lg-12">
                    <h4 class="title mb30">Змінити пароль</h4>
                  </div>
                  <div class="col-sm-6 col-lg-7">
                    <div class="mb20">
                      <input name="form_name" class="form-control form_control" v-model="passwordOld" type="text"
                             placeholder="Поточний пароль">
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-7">
                    <div class="mb20">
                      <input name="form_name" class="form-control form_control" type="text" v-model="password"
                             placeholder="Новий пароль">
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-7">
                    <div class="mb20">
                      <input name="form_name" class="form-control form_control mb20" type="text"
                             placeholder="Підтвердження нового паролю" v-model="password_confirmation">
                      <button href="#" :disabled="!editUserIsDisable" class="btn btn-thm ad_flor_btn">Змінити</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MenuComponent from "@/views/app/personal/MenuComponent.vue";
import api from "@/api";
import axios from "axios";

export default {
  name: "ProfileComponent",
  components: {MenuComponent},
  data() {
    return {
      message: null,
      loader: null,
      name: null,
      lastName: null,
      patronymic: null,
      phone_number: null,
      address: null,
      passwordOld: null,
      password: null,
      password_confirmation: null,
      delivery_company: null,
      deliveryCompanies: null,

    }
  },
  mounted() {
    this.getUser()
    this.getDeliveryCompany()
  },
  methods: {

    getUser() {
      api.post('/api/auth/me')
          .then(res => {
            let user = res.data.data
            this.lastName = user.lastName
            this.name = user.name
            this.patronymic = user.patronymic
            this.phone_number = user.phone
            this.address = user.address
            this.loader = 1
            this.delivery_company = user.delivery_company
          })
    },

    editUser() {
      this.loader = null
      api.post('/api/auth/edit', {
        name: this.name,
        lastName: this.lastName,
        patronymic: this.patronymic,
        phone_number: this.phone_number,
        address: this.address,
        delivery_company: this.delivery_company
      })
          .then(res => {
            this.message = res.data.message
            this.loader = 1
          })
    },

    getDeliveryCompany() {
      axios.get('api/delivery_companies')
          .then(res => {
            this.deliveryCompanies = res.data
          })
    },

  },
  computed: {

    editUserIsDisable() {
      return this.password && this.password.length >= 8 && this.password_confirmation === this.password && this.passwordOld
    },

  },
}
</script>

<style scoped>
.labelBrowse {
  padding: 20px;
}

.labelBrowse .browseButton {
  background-color: #0A2357;
  border: 1px solid #0A2357;
  border-radius: 8px;
  color: #fff;
  display: block;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  right: 0;
  top: 20px;
  text-align: center;
  width: 160px;
}

@media (max-width: 568px) {
  .labelBrowse {
    display: block;
    padding: 30px;
    right: 90%;
  }
}
</style>