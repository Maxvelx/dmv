<template>
  <div v-if="orders === null" class="preloader"></div>
  <!-- Our Dashbord -->
  <section>
    <div class="col-md-12 col-sm-12 row">
      <MenuComponent></MenuComponent>
      <div class="col-md-10 col-sm-10 center-all">
        <div class="col-lg-12">
          <div class="row">
            <div v-for="order in orders" style="border: 1px solid #EAEAEA;" class="card1 zoom">
              <pre class="font_size_18" v-if="!isEdit(order.id)" @click.prevent="nameForOrder(order.id, order.label)"><i
                  class="fas fa-signature"></i> {{ order.label ? order.label : 'Додати свою назву замовленню' }}</pre>
              <div v-if="isEdit(order.id)" class="row" style="width: 390px;position: relative;padding-bottom: 20px;">
                <input style="border-radius: 20em; border: 1px solid #EAEAEA;height: 50px;
    width: 60%;" placeholder="Ваша назва для замовлення" v-model="label">
                <button @click.prevent="addNewLabel(order.id, order.label)" :disabled="label && label.length > 30"
                        class="icon-btn add-btn">
                  <div class="add-icon"></div>
                  <div class="btn-txt">Додати</div>
                </button>
              </div>
              <pre v-if="isEdit(order.id) && label && label.length > 30" class="text-danger">Не більше 30 символів</pre>
              <pre class="font_size_18"><i class="fas fa-barcode"></i> <span> №{{ order.order_number }}</span></pre>
              <pre class="font_size_18"><i class="fas fa-list-ol"></i>  Кількість деталей:{{ order.parts.length }}</pre>
              <pre class="font_size_18"><i class="fas fa-calendar"></i> {{ order.time }}</pre>
              <button @click.prevent="getModal(order)" class="card-button">Детальніше</button>
            </div>

            <div class="col-lg-12">
              <div class="row" v-if="paginate && paginate.total > 6">
                <div class="col-lg-12">
                  <div class="mbp_pagination py-3 px-3">
                    <ul class="page_navigation">
                      <li v-if="paginate.current_page !== 1" class="page-item">
                        <a @click.prevent="getUserOrders(paginate.current_page -1)" class="page-link" href=""
                           tabindex="-1">
                          <span class="fa fa-arrow-left"></span></a></li>
                      <li v-for="link in paginate.links" :class="link.active ? 'active' : ''" class="page-item"
                          aria-current="page">
                        <template v-if="Number(link.label)">
                          <a @click.prevent="getUserOrders(link.label)" class="page-link" href="">{{ link.label }}
                            <span
                                class="sr-only"></span></a>
                        </template>
                      </li>
                      <li v-if="paginate.current_page !== paginate.last_page" class="page-item">
                        <a class="page-link" href="" @click.prevent="getUserOrders(paginate.current_page +1)">
                          <span class="fa fa-arrow-right"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="modal-container">
      <div class="modal-background center-all">
        <div v-if="order" class="modal modal-responsive">
          <div class="row">
            <div style="text-align: left" class="col-md-6 col-sm-12 align-content-lg-start">
              <p style="font-size: 20px;font-weight: 500">
                <i class="fas fa-calendar"></i> Дата проплати: {{ order.time }} р.
                <br>
                <i class="fas fa-credit-card"></i> Разом до сплати:
                <span style="font-weight: 700;">{{ totalUSD ? totalUSD : '' }}</span><span
                  style="color: #329d01;">{{ totalUSD ? '$ ' : '' }} </span>
                <span style="font-weight: 700">{{ totalEURO ? totalEURO : '' }}</span><span
                  style="color: #0633de;">{{ totalEURO ? '€ ' : '' }} </span>
                <span style="font-weight: 700">{{ totalUAH ? totalUAH : '' }}</span><span
                  style="color: #a28a00;">{{ totalUAH ? '₴' : '' }} </span>
              </p>
            </div>
            <div style="text-align: right" class="col-md-6 col-sm-12 align-content-lg-end">
              <p style="font-size: 20px;font-weight: 500"><i class="fa fa-briefcase"></i>
                Замовлення №: <span style="font-weight: 700">{{ order.order_number }}</span>
                  <br>
          <i class="fas fa-calendar"></i> Створенний: {{ order.time }} р.<br>
              </p>
            </div>

          </div>
          <h2>
            <table>
              <thead>
              <tr>
                <th>Номер та назва запчастини</th>
                <th>Ціна</th>
                <th>Кількість</th>
                <th>Сума</th>
              </tr>
              </thead>
              <tbody class="table_body">
              <tr v-for="part in order.parts">
                <td>
                  <a href=""
                     @click.prevent="this.$store.dispatch('getPartSingle',part)">
                  <li class="list-inline-item" style="font-weight: 700;font-size: 16px">{{ part.number }}</li>
                  <br>
                  <li class="list-inline-item">
                   {{ part.name }}
                  </li>
                  </a>
                </td>
                <td>{{ part.price }}{{ part.currency }}</td>
                <td>{{ part.qty }} од.</td>
                <td>{{ Math.ceil(part.price * part.qty) }}{{ part.currency }}</td>
              </tr>
              </tbody>
            </table>
          </h2>
          {{ getTotal }}
          <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
               preserveAspectRatio="none">
            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import MenuComponent from "@/views/app/personal/MenuComponent.vue";

export default {
  name: "OrdersComponent",
  components: {MenuComponent},
  data() {
    return {
      user: null,
      parts: null,
      orders: null,
      paginate: null,
      order: null,
      orderId: null,
      label: null,
      totalEURO: null,
      totalUSD: null,
      totalUAH: null,
    }
  },
  mounted() {
    this.getUserOrders()
  },
  methods: {

    getUserOrders(page = 1) {
      api.post('/api/orders' + '?page=' + page)
          .then(res => {
            this.orders = res.data.data
            this.paginate = res.data.meta
          })
    },

    getModal(order) {
      $('#modal-container').removeAttr('class').addClass('one');
      $('body').addClass('modal-active');

      $('#modal-container').click(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
      });
      this.order = order
    },

    addNewLabel(id, label) {
      if (this.label !== label) {
        api.post('/api/orders/edit/' + id, {
          'label': this.label,
        })
            .then(res => {
              this.getUserOrders()
            })
      }
      this.orderId = null
    },

    nameForOrder(id, label) {
      this.label = label
      this.orderId = id
    },

    isEdit(id) {
      return this.orderId === id
    }

  },
  computed: {

    getTotal() {
      let totalUSD = null
      let totalEURO = null
      let totalUAH = null
      if (this.order.parts) {
        this.order.parts.forEach(part => {
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

<style scoped lang="scss">
.font_forPrice {
  font-weight: 700;
  color: #0c4128;
}

.font_size_18 {
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

#modal-container {
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 100;

  &.one {
    transform: scaleY(.01) scaleX(0);
    animation: unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

    .modal-background {
      .modal {
        transform: scale(0);
        animation: zoomIn .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }

    &.out {
      transform: scale(1);
      animation: unfoldOut 1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

      .modal-background {
        .modal {
          animation: zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
    }
  }

  .modal-background {
    display: table-cell;
    background: rgba(0, 0, 0, .8);
    text-align: center;
    vertical-align: middle;

    .modal {
      background: white;
      padding: 20px;
      display: inline-block;
      border-radius: 3px;
      font-weight: 300;
      position: relative;
      overflow-y: auto;

      h2 {
        font-size: 14px;

      }

      p {

      }

      .modal-svg {
        position: fixed;
        top: 40%;
        left: 40%;
        height: 100%;
        width: 100%;
        border-radius: 3px;
        z-index: 1;

        rect {
          stroke: #fff;
          stroke-width: 2px;
          stroke-dasharray: 778;
          stroke-dashoffset: 778;
        }
      }
    }
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes zoomOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes unfoldIn {
  0% {
    transform: scaleY(.005) scaleX(0);
  }
  50% {
    transform: scaleY(.005) scaleX(1);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}

@keyframes unfoldOut {
  0% {
    transform: scaleY(1) scaleX(1);
  }
  50% {
    transform: scaleY(.005) scaleX(1);
  }
  100% {
    transform: scaleY(.005) scaleX(0);
  }
}


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
  margin: 0 auto;
  width: 100%;
  position: relative;

  * {
    position: relative
  }

  td, th {
    padding-left: 18px;
    padding-right: 18px;

  }

  td {
    height: 50px;
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


@media #{$gl-xs} {

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
      }
    }
  }
}


// body style

blockquote {
  color: white;
  text-align: center;
}

</style>