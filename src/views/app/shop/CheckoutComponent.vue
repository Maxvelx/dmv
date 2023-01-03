<template>
  <div v-if="parts !== null">
    <div class="preloader" v-if="pageLoad === null"></div>
    <CompleteOrderComponent v-if="order !== null"></CompleteOrderComponent>
    <div v-if="order === null">
      <!-- Inner Page Breadcrumb -->
      <div v-if="user !== null">
        <section class="inner_page_breadcrumb style2 bgc-f9 bt1 inner_page_section_spacing">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="breadcrumb_content style2">
                  <h2 class="breadcrumb_title">Вітаємо {{ user.name + ' ' + user.patronymic }}!</h2>
                  <p class="subtitle">Підтвердження замовлення</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Shop Checkouts Content -->
        <section class="shop-checkouts pt0 bgc-f9 pb100">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="checkout_form style2">
                  <h4 class="title mb30">Контактна інформація</h4>
                  <div class="checkout_coupon ui_kit_button">
                    Ваш тел: {{ user.phone }}
                    <div>
                      Адреса для відправки замовлення: {{ user.address }}
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 pt60">
                  <div class="mb30 mb0">
                    <h4 class="mb15">Додаткова інформація</h4>
                    <label class="form-label ai_title">Вкажіть додаткову інформацію для наших менеджерів
                      (за
                      потреби)</label>
                    <textarea name="form_message" class="form-control" rows="12"
                              placeholder=""></textarea>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="order_sidebar_widget mb30">
                  <h4 class="title">Ваше замовлення</h4>
                  <ul>
                    <li class="subtitle"><p>Запчастини <span class="float-end">Сума</span></p></li>
                    <li><p class="product_name_qnt" v-for="part in parts">{{ part.name }} x{{ part.qty }} <span
                        class="float-end">{{ part.price * part.qty }}грн</span></p></li>
                    <li class="subtitle"><p>Доставка <span
                        class="float-end totals">за тарифами перевізника</span></p></li>
                    <li class="subtitle"><p>Доставка з-за кордону <span
                        class="float-end totals">уточнює менеджер</span>
                    </p>
                    </li>
                    <li class="subtitle"><p>Сума замовлення <span class="float-end totals">{{
                        getTotal
                      }}грн</span></p></li>
                  </ul>
                </div>
                <div class="payment_widget">
                  <div class="wrapper">
                    <div class="ui_kit_radiobox">
                      <div class="radio">
                        <input id="radio_one" name="card" type="radio" checked="">
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_one"><span class="radio-label"></span> Оплата на картку</label>
                      </div>
                      <div class="radio">
                        <input id="radio_two" name="post_pay" type="radio">
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_two"><span class="radio-label"></span> Післяплата при
                          отриманні</label>
                      </div>
                      <div class="bt_details">
                        <p>При умові якщо позиція у наявності, та знаходиться на основному складі</p>
                      </div>
                      <div class="radio">
                        <input id="radio_three" name="pre_pay_card" type="radio">
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_three"><span class="radio-label"></span> Передоплата на картку</label>
                      </div>
                      <div class="radio">
                        <input id="radio_four" name="pre_pay_cash" type="radio">
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_four"><span class="radio-label"></span> Передоплата готівкою</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ui_kit_button payment_widget_btn">
                  <button type="button" @click.prevent="completeOrder" class="btn btn-thm btn-block">Підтвердити
                    замовлення
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div v-if="user === null">
        <section class="inner_page_breadcrumb style2 bgc-f9 bt1 inner_page_section_spacing">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="breadcrumb_content style2">
                  <h2 class="breadcrumb_title">Оформлення замовлення</h2>
                  <p class="subtitle">Реєстрація нового клієнта</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Shop Checkouts Content -->
        <section class="shop-checkouts pt0 bgc-f9 pb100">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="checkout_form style2">
                  <h4 class="title mb30">Контактна інформація</h4>
                  <div class="checkout_coupon ui_kit_button">
                    <form class="form2" id="coupon_form" name="contact_form" action="#" method="post">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Телефон *</label>
                            <input v-model="phone_number" class="form-control form_control" type="text"
                                   placeholder="формат: 093 123 45 67">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Ваша електронна адреса *</label>
                            <input v-model="email" class="form-control form_control" type="email"
                                   placeholder="формат: mymail@gmail.com">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Пароль *</label>
                            <input v-model="password" class="form-control form_control" type="password"
                                   placeholder="Введіть пароль">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Підтвердження паролю *</label>
                            <input v-model="password_confirmation" class="form-control form_control" type="password"
                                   placeholder="Введіть пароль ще раз">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Ім'я *</label>
                            <input v-model="name" class="form-control form_control" type="text"
                                   placeholder="Ваше ім'я">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">Фамілія *</label>
                            <input v-model="lastName" class="form-control form_control" type="text"
                                   placeholder="Фамілія">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <label class="form-label">По батькові *</label>
                            <input v-model="patronymic" class="form-control form_control" type="text"
                                   placeholder="По батькові">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb30">
                            <!--                        <label class="form-label">Адреса доставки для посилок до 30кг (Нова пошта, Міст Експрес,-->
                            <!--                          Диачель)-->
                            <!--                          *</label>-->
                            <!--                        <input class="form-control form_control mb10" type="text"-->
                            <!--                               placeholder="формат: Відділення №8 НП, м. Київ, якщо одержувач інша особа - вкажіть її також">-->
                            <label class="form-label">Адреса доставки (Нова пошта, Міст Експрес) *</label>
                            <input v-model="address" class="form-control form_control mb10" type="text"
                                   placeholder="формат: Відділення №1 НП, м. Київ">
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="mb30 mb0">
                            <h4 class="mb15">Додаткова інформація</h4>
                            <label class="form-label ai_title">Вкажіть додаткову інформацію для наших менеджерів
                              (за
                              потреби)</label>
                            <textarea name="form_message" class="form-control" rows="12"
                                      placeholder=""></textarea>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="order_sidebar_widget mb30">
                  <h4 class="title">Ваше замовлення</h4>
                  <ul>
                    <li class="subtitle"><p>Запчастини <span class="float-end">Сума</span></p></li>
                    <li><p class="product_name_qnt" v-for="part in parts">{{ part.name }} x{{ part.qty }} <span
                        class="float-end">{{ part.price * part.qty }}грн</span></p></li>
                    <li class="subtitle"><p>Доставка <span
                        class="float-end totals">за тарифами перевізника</span></p></li>
                    <li class="subtitle"><p>Доставка з-за кордону <span
                        class="float-end totals">уточнює менеджер</span>
                    </p>
                    </li>
                    <li class="subtitle">
                      <p>Сума замовлення <span class="float-end totals">{{ getTotal }}грн</span></p>
                    </li>
                  </ul>
                </div>
                <div class="payment_widget">
                  <div class="wrapper">
                    <div class="ui_kit_radiobox">
                      <div class="radio">
                        <input id="radio_one" name="card" type="radio" checked>
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_one"><span class="radio-label"></span> Оплата на картку</label>
                      </div>
                      <div class="radio">
                        <input id="radio_two" name="post_pay" type="radio">
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_two"><span class="radio-label"></span> Післяплата при
                          отриманні</label>
                      </div>
                      <div class="bt_details">
                        <p>При умові якщо позиція у наявності, та знаходиться на основному складі</p>
                      </div>
                      <div class="radio">
                        <input id="radio_three" name="pre_pay_card" type="radio">
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_three"><span class="radio-label"></span> Передоплата на картку</label>
                      </div>
                      <div class="radio">
                        <input id="radio_four" name="pre_pay_cash" type="radio">
                        <label style="color: #1A3760;font-size: 15px;font-style: normal;font-weight: 600;"
                               for="radio_four"><span class="radio-label"></span> Передоплата готівкою</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ui_kit_button payment_widget_btn">
                  <button type="button" @click.prevent="completeOrder" class="btn btn-thm btn-block">Підтвердити
                    замовлення
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import CompleteOrderComponent from "@/views/app/shop/CompleteOrderComponent.vue";
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import api from "@/api";
import router from "@/router";

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
    }
  },
  methods: {
    completeOrder() {
      api.post('/api/order', {
        'parts': this.parts,
        'total_price': this.getTotal,
        'name': this.name,
        'phone_number': this.phone_number,
        'email': this.email,
        'password': this.password,
        'password_confirmation': this.password_confirmation,
        'address': this.address,
        'lastName': this.lastName,
        'patronymic': this.patronymic,
      })
          .then(res => {
            this.order = res.data.data
            localStorage.removeItem('order')
          })
    },
    getUser() {
      api.post('/api/auth/me')
          .then(res => {
            this.user = res.data.data
            this.pageLoad = 1
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
  },
  computed: {
    getTotal() {
      let total = null
      this.parts.forEach(part => {
        total += part.price * part.qty
      })
      return total
    },
  },
}
</script>

<style scoped>

</style>