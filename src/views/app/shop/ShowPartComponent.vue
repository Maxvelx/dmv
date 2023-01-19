<template>
  <div v-if="part === null" class="preloader"></div>
  <div v-if="part !== null">
    <NotificationComponent
        :messages="this.$store.state.messages"
    />
  <!-- Shop Single Content -->
  <section class="shop-single-content pt100 pb40 ovh bgc-f9">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="single_product_grid">
            <div class="sps_content">
              <div class="thumb">
                <div class="single_product">
                  <div class="single_item">
                    <div v-if="part.image !== 0" class="thumb"><img class="img-fluid" :src="part.image"  alt="partImage"></div>
                    <div v-if="part.image === 0" class="thumb"><img class="img-fluid" src="/images/etc/zaglushkaPart.jpg"  alt="partImage"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="shop_single_product_details p0-414">
            <h3 class="title mb50">{{part.part_name}}</h3>
            <div class="sspd_price mb30">{{part.price}}грн</div>
            <ul class="cart_btns instock_area mb30">
              <li v-if="part.qty && part.qty != 0" style="font-size: 16px" class="list-inline-item"><span class="fa fa-check-circle text-thm3 ml10 mr5 fz18"></span> {{part.qty}}шт. <span class="text-success"> у наявності</span></li>
            <li v-if="part.qty <= 0" class="text-warning" style="font-size: 16px">Під замовлення</li>
            </ul>
            <ul class="cart_btns wishlist_compare mb20">
              <li class="list-inline-item">
                <button @click.prevent="this.$store.dispatch('addToOrder',part)" type="button" class="btn btn-thm"><img class="mr10" src="/images/shop/cart-bag.svg"
                                                               alt="cart-bag.svg">Додати в замовлення
                </button>
              </li>
              <a class="favorite_icon" v-if="this.$store.state.authUser !== null" @click.prevent="this.$store.dispatch('addToWishlist',part)" href="">
                <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartBefore1.png">
                <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartAfter.png">
              </a>
              <a class="favorite_icon" v-if="this.$store.state.authUser === null" href="#" data-bs-toggle="modal"
                 data-bs-target="#logInModal">
                  <img src="/images/etc/heartBefore1.png">
              </a>
            </ul>
            <div class="col-8 row">
              <div class="col-6 fnt700">Виробник:</div><div class="col-6">{{part.part_brand}}</div>
              <div class="col-6 fnt700">Номер запчастини:</div><div class="col-6">{{part.part_number}} </div>
              <div class="col-6 fnt700">Оригінальний номер:</div><div class="col-6">{{part.part_number_oem}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <FooterComponent></FooterComponent>
  </div>

</template>

<script>
import axios from "axios";
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import NotificationComponent from "@/views/app/notification/NotificationComponent.vue";

export default {
  name: "ShowPartComponent",
  components: {NotificationComponent, FooterComponent},
  data() {
    return {
      part: null,
    }
  },
  mounted() {
    this.getSingleProduct()
  },
  methods: {
    getSingleProduct() {
      axios.get('/api/parts/show/' + this.$route.params.id)
          .then(res => {
            this.part = res.data.data
          })
    },
  }
}
</script>

<style scoped>
.fnt700{
  font-weight: 700;
}
</style>