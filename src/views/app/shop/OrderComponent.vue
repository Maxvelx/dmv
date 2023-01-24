<template>
  <div v-if="parts !== null">
    <div v-if="parts.length < 1">
      {{ getTotal }}
      <div class="container-fluid  pt100 pb130">
        <div class="row">
          <div class="col-md-12">
            <div class="card-body cart">
              <div class="col-sm-12 empty-cart-cls text-center">
                <img src="/images/etc/emptycart.jpg" width="130" height="130" class="img-fluid mb-4 mr-3">
                <h3><strong>Зараз у вас немає запчастин у замовленні</strong></h3>
                <h4>Але це легко виправити :)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="parts.length > 0">
      <!-- Inner Page Breadcrumb -->
      <section class="inner_page_breadcrumb style2 bgc-f9 bt1 inner_page_section_spacing">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb_content style2">
                <h2 class="breadcrumb_title">Замовлення</h2>
                <p class="subtitle">Список запчастин</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Shop Checkouts Content -->
      <section class="shop-cart bgc-f9 pt0">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-8 col-xl-8">
                  <div class="shopping_cart_tabs ovyh">
                    <div class="shopping_cart_table">
                      <table>
                        <thead>
                        <tr>
                          <th>Номер та назва запчастини</th>
                          <th>Ціна</th>
                          <th>Кількість</th>
                          <th>Сума</th>
                          <th>Дія</th>
                        </tr>
                        </thead>
                        <tbody class="table_body">
                        <tr v-for="part in parts">
                          <td>
                            <li class="list-inline-item" style="font-weight: 700;font-size: 16px">{{ part.number }}</li>
                            <br>
                            <li class="list-inline-item">
                              <a href=""
                                 @click.prevent="this.$store.dispatch('getPartSingle',part)">{{ part.name }}
                              </a>
                            </li>
                          </td>
                          <td>{{ part.price }}{{ part.currency }}</td>
                          <td><input class="cart_count text-center" v-model="part.qty" type="number"></td>
                          <td>{{ Math.ceil(part.price * part.qty) }}{{ part.currency }}</td>
                          <td><a @click.prevent="removePart(part.id)" href="#"><i style="font-size: 30px"
                                                                                  class="far fa-times"></i></a></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                  <div class="order_sidebar_widget style2">
                    <h4 class="title">Замовлення</h4>
                    <ul class="mb15">
                      <li style="font-size: 13px;font-weight: 700; overflow: hidden;">Доставка по Україні
                        <p class="float-end" style="overflow: hidden;">За тарифами перевізника</p>
                      </li>
                      <li style="font-size: 13px;font-weight: 700; overflow: hidden;">Доставка з-за кордону
                        <p class="float-end" style="overflow: hidden;">Прораховує менеджер</p>
                      </li>
                    </ul>
                    <ul>{{getTotal }}
                      <li v-if="totalUAH" class="subtitle"><p>Разом до сплати в грн.
                        <span class="float-end totals color-orose">{{ Math.ceil(totalUAH) }} грн</span>
                      </p>
                      </li>
                      <li v-if="totalUSD" class="subtitle"><p>Разом до сплати в USD
                        <span class="float-end totals color-orose">{{ Math.ceil(totalUSD) }} usd</span>
                      </p>
                      </li>
                      <li v-if="totalEURO" class="subtitle"><p>Разом до сплати в EURO
                        <span class="float-end totals color-orose">{{ Math.ceil(totalEURO) }} euro</span>
                      </p>
                      </li>
                    </ul>
                    <div class="ui_kit_button payment_widget_btn">
                      <router-link :to="{name: 'order_confirm'}">
                        <button type="button" class="btn btn-thm btn-block">Продовжити
                          оформлення
                        </button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import router from "@/router";

export default {
  name: "OrderComponent",
  components: {FooterComponent},
  data() {
    return {
      parts: JSON.parse(localStorage.getItem('order')),
      totalEURO: null,
      totalUSD: null,
      totalUAH: null,
    }
  },
  mounted() {
    this.parts === null ? router.push('/') : ''
    this.$watch('parts', (value) => localStorage.setItem('order', JSON.stringify(value)), {deep: true})
  },
  methods: {
    removePart(id) {
      this.parts = this.parts.filter(parts => {
        return parts.id !== id
      })
    },
  },
  computed: {
    getTotal() {
      let totalUSD = null
      let totalEURO = null
      let totalUAH = null
      if (this.parts) {
        this.parts.forEach(part => {
          if (part.currency === 'usd') {
            totalUSD += part.price * part.qty
          }
          if (part.currency === 'euro') {
            totalEURO += part.price * part.qty
          }
          if (part.currency === 'грн') {
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

<style scoped lang="scss">
// sets

$gl-ms: "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs: "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm: "screen and (max-width: 48em)"; // max 768px
$gl-md: "screen and (max-width: 64em)"; // max 1024px
$gl-lg: "screen and (max-width: 80em)"; // max 1280px

// table style

table {
  border-spacing: 1px;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  * {
    position: relative
  }

  td, th {
    padding-left: 18px;
    padding-right: 18px;

  }

  td {
    height: 100px;
  }

  thead tr {
    height: 60px;
    background: #f5c34b;
    font-size: 16px;
  }

  tbody tr {
    height: 48px;
    border-bottom: 1px solid #E3F1D5;

    &:last-child {
      border: 0;
    }
  }

  td, th {
    text-align: left;

    &.l {
      text-align: right
    }

    &.c {
      text-align: center
    }

    &.r {
      text-align: center
    }
  }
}


@media #{$gl-xs}              {

  table {
    display: block;

    > *, tr, td, th {
      display: block
    }

    thead {
      display: none
    }

    tbody tr {
      height: auto;
      padding: 8px 0;

      td {
        padding-left: 45%;
        margin-bottom: 12px;
        height: 100%;

        &:last-child {
          margin-bottom: 30px
        }

        &:before {
          position: absolute;
          font-weight: 700;
          width: 40%;
          left: 10px;
          top: 0
        }

        &:nth-child(1):before {
          content: "Номер та назва запчастини";
        }

        &:nth-child(2):before {
          content: "Ціна";
        }

        &:nth-child(3):before {
          content: "Кількість";
        }

        &:nth-child(4):before {
          content: "Сума";
        }

        &:nth-child(5):before {
          content: "Дія";
        }
      }
    }
  }
}


// body style

body {
  background: #9BC86A;
  font: 400 14px 'Calibri', 'Arial';
  padding: 20px;
}

blockquote {
  color: white;
  text-align: center;
}
</style>