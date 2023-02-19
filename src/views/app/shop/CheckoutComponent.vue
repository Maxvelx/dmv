<template>
  <div v-if="parts !== null">
    <div class="preloader" v-if="pageLoad === null"></div>
    <CompleteOrderComponent v-if="order !== null"></CompleteOrderComponent>
    <div v-if="order === null">
      <div>
        <section style="background: transparent; border-top: 0"
                 class="inner_page_breadcrumb style2 bt1 inner_page_section_spacing">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div v-if="user === null" class="breadcrumb_content style2">
                  <h2 class="breadcrumb_title">Оформлення замовлення</h2>
                  <p class="subtitle">Реєстрація нового клієнта</p>
                </div>
                <div v-if="user !== null" class="breadcrumb_content style2">
                  <h2 class="breadcrumb_title">Вітаємо
                    {{ user.name ? user.name : '' }}{{ user.patronymic ? ' ' + user.patronymic : '' }}!</h2>
                  <p class="subtitle">Підтвердження замовлення</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Shop Checkouts Content -->
        <section class="shop-checkouts pt0  pb100">
          <div class="container">
            <form @submit.prevent="completeOrder" class="form2" id="coupon_form" name="contact_form">
              <div class="row col-lg-12">
                <div class="col-lg-8">
                  <div class="checkout_form style2">
                    <h4 class="title mb30">Контактна інформація</h4>
                    <div class="checkout_coupon ui_kit_button">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Телефон *</label>
                            <input v-model="phone_number" id="phone2" class="form-control form_control" type="text"
                                   required placeholder="формат: 093 123 45 67">
                          </div>
                        </div>
                        <div v-if="user === null" class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Ваша електронна адреса *</label>
                            <input v-model="email" autocomplete="new-email" class="form-control form_control"
                                   required type="email"
                                   placeholder="формат: mymail@gmail.com">
                          </div>
                        </div>
                        <div v-if="user === null" class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Пароль *</label>
                            <input v-model="password" autocomplete="new-password" class="form-control form_control"
                                   required type="password"
                                   placeholder="Введіть пароль">
                          </div>
                        </div>
                        <div v-if="user === null" class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Підтвердження паролю *</label>
                            <input v-model="password_confirmation" class="form-control form_control" type="password"
                                   required placeholder="Введіть пароль ще раз">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Ім'я *</label>
                            <input v-model="name" class="form-control form_control" type="text"
                                   required placeholder="Ваше ім'я">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Фамілія *</label>
                            <input v-model="lastName" class="form-control form_control" type="text"
                                   required placeholder="Фамілія">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">По батькові *</label>
                            <input v-model="patronymic" class="form-control form_control" type="text"
                                   required placeholder="По батькові">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Адреса доставки *</label>
                            <input v-model="address" class="form-control form_control mb10" type="text"
                                   required placeholder="формат: Відділення №1, м. Київ">
                          </div>
                        </div>
                        <div v-if="user === null" class="col-sm-6">
                        </div>
                        <div class="col-sm-6">
                          <label class="form-label">Виберіть перевізника *</label>
                          <select style="font-size: 14px;height: 50px;" required :selected="delivery_company"
                                  v-model="delivery_company" class="form-select form-select-lg mb-3">
                            <option v-for="company in deliveryCompanies" :value="company.id">
                              {{ company.title }}
                            </option>
                          </select>
                        </div>
                        <div class="col-sm-12">
                          <div class="mb30 mb0">
                            <h4 class="mb15">Додаткова інформація</h4>
                            <label class="form-label ai_title">Вкажіть додаткову інформацію для наших менеджерів
                              (за
                              потреби)</label>
                            <textarea v-model="message_order" name="form_message" class="form-control" rows="12"
                                      placeholder=""></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="order_sidebar_widget mb30">
                    <h4 class="title">Ваше замовлення</h4>
                    <ul>
                      <li class="subtitle"><p>Запчастини <span class="float-end">Сума</span></p></li>
                      <li class="display_grid" v-for="part in parts"><p class="product_name_qnt">{{ part.name }} <span
                          style="font-weight: bold;font-size: 15px;padding-left: 10px">x{{ part.qty }}</span> <span
                          style="float: right;font-size: 15px;font-weight: bold">{{
                          Math.ceil(part.price * part.qty)
                        }}{{ part.currency }}</span></p></li>
                      <li class="subtitle mt30" style="border-top: 1px solid #E7E7EC;"><p>Доставка <span
                          class="float-end totals">за тарифами перевізника</span></p></li>
                      <br>
                      <li class="subtitle"><p>Доставка з-за кордону <span
                          class="float-end totals">уточнює менеджер</span>
                      </p>
                        <br>
                      </li>
                      <li v-if="totalUAH" class="subtitle" style="border-top: 1px solid #E7E7EC;"><p>Всього
                        грн.
                        <span class="float-end totals color-orose">{{ Math.ceil(totalUAH) }} ₴</span>
                      </p>
                      </li>
                      <li v-if="totalUSD" class="subtitle"><p>Всього USD
                        <span class="float-end totals color-orose">{{ Math.ceil(totalUSD) }} $</span>
                      </p>
                      </li>
                      <li v-if="totalEURO" class="subtitle"><p>Всього EURO
                        <span class="float-end totals color-orose">{{ Math.ceil(totalEURO) }} €</span>
                      </p>
                      </li>
                      <li class="subtitle" style="border-top: 1px solid #E7E7EC;"><p>Разом:
                        <span class="float-end totals color-orose">{{
                            totalUAH ? Math.ceil(totalUAH) + ' ₴' : ''
                          }}{{ totalUAH && totalUSD ? ' та ' : '' }}{{
                            totalUSD ? Math.ceil(totalUSD) + ' $' : ''
                          }}{{ totalUAH && totalEURO || totalUSD && totalEURO ? ' та ' : '' }}{{
                            totalEURO ? +Math.ceil(totalEURO) + ' €' : ''
                          }}</span>
                      </p>
                      </li>
                    </ul>
                  </div>
                  <div class="ui_kit_button payment_widget_btn">
                    <button type="submit" class="btn btn-thm btn-block">Підтвердити
                      замовлення
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
  {{ getTotal }}
  <FooterComponent></FooterComponent>
</template>

<script>
import CompleteOrderComponent from "@/views/app/shop/CompleteOrderComponent.vue";
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import api from "@/api";
import router from "@/router";
import axios from "axios";
import Inputmask from "inputmask";

export default {
  name: "CheckoutComponent",
  components: {FooterComponent, CompleteOrderComponent},
  data() {
    return {
      parts: JSON.parse(localStorage.getItem('order')),
      pageLoad: null,
      user: null,
      order: null,
      name: null,
      phone_number: null,
      email: null,
      password: null,
      password_confirmation: null,
      address: null,
      lastName: null,
      patronymic: null,
      totalEURO: null,
      totalUSD: null,
      totalUAH: null,
      deliveryCompanies: null,
      delivery_company: null,
      message_order: null,
    }
  },
  methods: {

    completeOrder() {
      api.post('/api/order', {
        total: [
          this.totalUAH ? this.totalUAH + ' ₴' : '',
          this.totalUSD ? this.totalUSD + ' ₴' : '',
          this.totalEURO ? this.totalEURO + ' €' : '',
        ],
        parts: this.parts,
        name: this.name,
        phone_number: this.phone_number,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        address: this.address,
        lastName: this.lastName,
        patronymic: this.patronymic,
        delivery_company: this.delivery_company,
        message_order: this.message_order,
      })
          .then(res => {
            if (res.status === 201) {
              this.order = res.data.data
              localStorage.removeItem('order')
            }
          })
    },

    getUser() {
      api.post('/api/auth/me')
          .then(res => {
            this.user = res.data.data
            this.name = this.user.name
            this.phone_number = this.user.phone
            this.email = this.user.email
            this.address = this.user.address
            this.lastName = this.user.lastName
            this.patronymic = this.user.patronymic
            this.delivery_company = this.user.delivery_company
            this.pageLoad = 1
          })
    },

    getDeliveryCompany() {
      axios.get('api/delivery_companies')
          .then(res => {
            this.deliveryCompanies = res.data
          })
    },

  },
  mounted() {
    if (localStorage.getItem('token') !== null) {
      this.getUser()
    } else {
      this.pageLoad = 1
    }
    if (this.parts === null) {
      router.push('/')
    }
    this.getDeliveryCompany()
    Inputmask({"mask": "(999) 999-9999"}).mask(document.getElementById("phone2"))

  },
  computed: {

    getTotal() {
      let totalUSD = null
      let totalEURO = null
      let totalUAH = null
      if (this.parts) {
        this.parts.forEach(part => {
          if (part.currency == '$') {
            totalUSD += part.price * part.qty
          }
          if (part.currency == '€') {
            totalEURO += part.price * part.qty
          }
          if (part.currency == '₴') {
            totalUAH += part.price * part.qty
          }
        })
        this.$store.commit('increment')
      }
      this.totalEURO = totalEURO
      this.totalUSD = totalUSD
      this.totalUAH = totalUAH
    },

  },
}
</script>

<style scoped>


</style>