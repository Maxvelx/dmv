<template>
  <!-- Shop Checkouts Content -->
  <section class="shop-cart bgc-f9 mt50-lg inner_page_section_spacing">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="shopping_cart_tabs">
            <div class="tab-content" id="myTabContent">
              <div class="row justify-content-center">
                <div class="col-lg-6">
                  <div class="order_complete_message text-center">
                    <div class="icon"><i class="fa fa-check text-white" style="padding-top: 23px"></i></div>
                    <h2 class="title">Ви успішно оформили замовлення!</h2>
                    <p class="para">Дякуємо! Протягом найближчого часу наш менеджер зв'яжеться з Вами.</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-7 m-auto">
                  <div class="shop_order_box">
                    <div class="order_list_raw text-center">
                      <ul>
                        <li class="list-inline-item">
                          <p>Номер замовлення</p>
                          <h5>{{order.order_number}}</h5>
                        </li>
                        <li class="list-inline-item">
                          <p>Дата створення</p>
                          <h5>{{ order.time }}</h5>
                        </li>
                        <li class="list-inline-item">
                          <p>Всього запчастин</p>
                          <h5>{{order.parts.length}} од.</h5>
                        </li>
<!--                        <li class="list-inline-item">-->
<!--                          <p>Статус оплати</p>-->
<!--                          <h5>Тут статус оплати</h5>-->
<!--                        </li>-->
                      </ul>
                    </div>
                    <div class="order_details">
                      <h4 class="title mb40">Деталі замовлення</h4>
                      <div class="od_content">
                        <ul>
                          <li class="subtitle bb1 mb20 pb5"><p>Запчастини <span class="float-end">Всього</span></p>
                          </li>
                          <template v-for="part in order.parts">
                          <li class="display_grid"><p class="product_name_qnt">{{part.number}} {{part.name}} <span class="float-end">{{ part.price }}{{ part.currency }}</span></p></li>
                          </template>
                          <li class="subtitle  mt30"><p>Доставка <span
                              class="float-end fwn_bd_color">За тарифами міжнародного перевізника</span></p></li>
                          <br>
                          <li class="subtitle  mb15 mt20"><p>Разом:
                            <span class="float-end totals color-orose">{{
                                totalUAH ? Math.ceil(totalUAH) + ' ₴' : ''
                              }}{{totalUAH && totalUSD ? ' та ': ''}}{{
                                totalUSD ? Math.ceil(totalUSD) + ' $' : ''
                              }}{{totalUAH && totalEURO || totalUSD && totalEURO ? ' та ':''}}{{ totalEURO ? + Math.ceil(totalEURO) + ' €' : '' }}</span>
                          </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{getTotal}}
  </section>
</template>

<script>

export default {
  name: "CompleteOrderComponent",
  data() {
    return {
      order: this.$parent.order,
      parts: this.$parent.order.parts,
      totalEURO: null,
      totalUSD: null,
      totalUAH: null,
    }
  },
  mounted() {
    this.$store.commit('increment')
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