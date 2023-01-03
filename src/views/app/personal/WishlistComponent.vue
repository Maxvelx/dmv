<template>
  <div v-if="parts === null" class="preloader"></div>
  <!-- Our Dashbord -->
  <section class="our-dashbord dashbord">
    <div class="col-md-12 col-sm-12 row">
      <MenuComponent></MenuComponent>
      <div class="col-md-9 col-sm-9 bgc-f9-1">
      <div class="row">
          <div class="col-xl-8">
            <div class="col-lg-12 mb50">
              <div class="breadcrumb_content">
                <h2 class="breadcrumb_title">Обрані запчастини</h2>
                <p>Тут знаходяться ваші обрані запчастини</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="dashboard_favorites_contents p10-520">
              <div class="row">
                <div v-for="part in parts" class="col-sm-6 col-xl-12 col-xxl-6">
                  <div class="car-listing list_style">
                    <div class="thumb">
                      <div class="tag">Новинка</div>
                      <img class="img-fluid" :src="part.image" alt="">
                      <div class="thmb_cntnt2">
                      </div>
                    </div>
                    <div class="details">
                      <div class="wrapper">
                        <div class="mb0">
                        <h5 class="price">{{ part.price }}грн
                          <span style="float: right; margin-top: -10px">
                          <a @click.prevent="addToWishlist(part)" style="padding-right: 10px" href=""><img src="/images/etc/heartBefore.png"></a>
                          <a @click.prevent="addToOrder(part)" href=""><img src="/images/etc/beforeCart.png"></a>
                          </span>
                        </h5>
                        </div>
                        <h6 class="title"><a href="">{{ part.part_name }}</a></h6>
                        <div class="listign_review">
                          <ul class="mb0">
                            <li class="list-inline-item">Виробник: {{ part.part_brand }}</li>
                          </ul>
                        </div>
                      </div>
                      <div class="listing_footer">
                        <ul class="mb0">
                          <li class="list-inline-item"><a href="#">Номер запчастини: {{ part.part_number }}</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="row" v-if="paginate !== null && paginate.total > 6">
                    <div class="col-lg-12">
                      <div class="mbp_pagination py-3 px-3">
                        <ul class="page_navigation">
                          <li v-if="paginate.current_page !== 1" class="page-item">
                            <a @click.prevent="getUserWishlist(paginate.current_page -1)" class="page-link" href=""
                               tabindex="-1">
                              <span class="fa fa-arrow-left"></span></a></li>
                          <li v-for="link in paginate.links" :class="link.active ? 'active' : ''" class="page-item"
                              aria-current="page">
                            <template v-if="Number(link.label)">
                              <a @click.prevent="getUserWishlist(link.label)" class="page-link" href="">{{ link.label }}
                                <span
                                    class="sr-only"></span></a>
                            </template>
                          </li>
                          <li v-if="paginate.current_page !== paginate.last_page" class="page-item">
                            <a class="page-link" href="" @click.prevent="getUserWishlist(paginate.current_page +1)">
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
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import MenuComponent from "@/views/app/personal/MenuComponent.vue";

export default {
  name: "WishlistComponent",
  components: {MenuComponent},
  data() {
    return {
      user: null,
      parts: null,
      paginate: null,
    }
  },
  mounted() {
    this.getUserWishlist()
  },
  methods: {
    getUserWishlist(page = 1) {
      api.post('/api/getWishlist' + '?page=' + page)
          .then(res => {
            this.parts = res.data.data
            this.paginate = res.data.meta
          })
    },
    addToWishlist(part) {
      api.post('/api/wishlist/' + part.id)
          .then(res => {
            this.getUserWishlist()
          })
    },
    addToOrder(part) {
      let order = localStorage.getItem('order')
      let newAddOrder = [
        {
          'id': part.id,
          'image': part.image,
          'name': part.part_name,
          'number': part.part_number,
          'price': part.price,
          'qty': 1,
        }
      ]
      if (!order) {
        localStorage.setItem('order', JSON.stringify(newAddOrder))
      } else {
        order = JSON.parse(order)

        order.forEach(partsInOder => {
          if (partsInOder.id === part.id) {
            partsInOder.qty = Number(partsInOder.qty) + 1
            newAddOrder = null
          }
        })

        Array.prototype.push.apply(order, newAddOrder)
        localStorage.setItem('order', JSON.stringify(order))
      }
    },

  }

}
</script>

<style scoped>

</style>