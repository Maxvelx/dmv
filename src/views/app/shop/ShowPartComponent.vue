<template>
  <div v-if="part === null" class="preloader"></div>
  <div v-if="part !== null">
    <NotificationComponent
        :messages="this.$store.state.messages"
    />
    <!-- Shop Single Content -->
    <section class="pt100 pb40 ovh px-5">
      <div class="">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-xl-5 pb50">
            <div>
              <div>
                <div style="border-radius: 20px;height: 100%;overflow: hidden" v-if="part.image !== 0"
                     class="shadow3">
                  <img class="zoom2" style="border-radius: 20px" :src="part.image" alt="partImage">
                </div>
                <div style="border-radius: 20px;height: 100%;overflow: hidden" v-if="part.image === 0" class="shadow3">
                  <img class="zoom2" style="border-radius: 20px"
                       :src="image ? image :'/images/etc/zaglushkaPart.jpg'"
                       alt="partImage"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-xl-7">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-xl-7 pb30">
                <div class="shop_single_product_details p0-414">
                  <h3 class="title mb40">{{ part.part_name }}</h3>
                  <div class="sspd_price mb20">{{ part.price }}{{ part.currency }}</div>
                  <ul class="cart_btns instock_area mb30">
                    <li v-if="part.qty && part.qty != 0" style="font-size: 16px" class="list-inline-item"><span
                        class="fa fa-check-circle text-success mr5 fz18"></span> {{ part.qty }} од. <span
                        class="text-success"> у наявності</span></li>
                    <li v-if="part.qty <= 0" style="font-size: 16px"><span class="text-warning">Під замовлення</span> |
                      <span>{{ part.time }}</span></li>
                  </ul>
                  <ul class="mb40">
                    <li class="list-inline-item pb20">
                      <button @click.prevent="this.$store.dispatch('addToOrder',part)" type="button"
                              class="button3">
                        Додати в замовлення
                      </button>
                    </li>
                    <button class="button4" v-if="this.$store.state.authUser !== null"
                            @click.prevent="this.$store.dispatch('addToWishlist',part)" href="">
                      <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                           src="/images/etc/heartBefore.png">
                      <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                           src="/images/etc/heartAfter.png">
                    </button>
                    <button class="button4 list-inline-item" v-if="this.$store.state.authUser === null" href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#logInModal">
                      <img src="/images/etc/heartBefore.png">
                    </button>
                  </ul>
                  <div class="col-12 row">
                    <div class="col-6 fnt700">Виробник:</div>
                    <div class="col-6">{{ part.part_brand }}</div>
                    <div class="col-6 fnt700">Номер запчастини:</div>
                    <div class="col-6">{{ part.part_number }}</div>
                    <div v-if="part.part_number_oem" class="col-6 fnt700">Оригінальний номер:</div>
                    <div v-if="part.part_number_oem" class="col-6">{{
                        part.part_number_oem ? part.part_number_oem : ''
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-xl-5">
                <h4 class="pb10">Інші ціни виробника: {{ part.part_brand }}</h4>
                <div v-for="replace_part in replace_parts">
                  <div v-if="replace_part.id !== part.id && replace_part.part_number === part.part_number"
                       style="width: 312px; height: 144px; background-color: white; position: relative;">
                    <div class="widget_same">
                      <div style="display:none;visibility: hidden;left: -9999px">
                        {{ replace_part.image !== 0 ? image = replace_part.image : '' }}
                      </div>
                      <a href="" @click.prevent="this.$store.dispatch('addToOrder',replace_part)">
                        <img v-if="!this.$store.state.cartIds.includes(replace_part.id)" class="cart_add_button"
                             src="/images/etc/shop_single_add.png"/>
                        <img v-if="this.$store.state.cartIds.includes(replace_part.id)" class="cart_add_button"
                             src="/images/etc/shop_single_added.png"/>
                      </a>
                      <p class="price_nw">{{ replace_part.price }} {{ replace_part.currency }}</p>
                      <p v-if="replace_part.qty <= 0" class="can_order">Під замовлення<br/><br/></p>
                      <p v-if="replace_part.qty > 0" class="can_order"><span style="color: black">{{
                          replace_part.qty
                        }} од. в наявності</span><br/><br/></p>
                      <p v-if="replace_part.qty > 0" class="ready_to_pick">
                        {{
                          replace_part.time !== null ? 'На складі через: ' + replace_part.time : 'Готово до видачі'
                        }} </p>
                      <a href="" v-if="this.$store.state.authUser !== null"
                         @click.prevent="this.$store.dispatch('addToWishlist',replace_part)">
                        <img v-if="!this.$store.state.wishlistIds.includes(replace_part.id)" class="heart_wishlist"
                             src="/images/etc/heartBefore.png"/>
                        <img v-if="this.$store.state.wishlistIds.includes(replace_part.id)" class="heart_wishlist"
                             src="/images/etc/heartAfter.png"/>
                      </a>
                      <a v-if="this.$store.state.authUser === null"
                         href="#" data-bs-toggle="modal"
                         data-bs-target="#logInModal">
                        <img class="heart_wishlist" src="/images/etc/heartBefore.png"/>
                      </a>
                    </div>
                    <p v-if="replace_part.time !== null && replace_part.qty <= 0" class="time_delivery">
                      Через {{ replace_part.time }} на складі</p>
                    <p v-if="replace_part.time === null && replace_part.qty <= 0" style="margin-bottom: 10px"
                       class="time_delivery">
                      Має варіанти доставки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt20 mt20">
            <h3>Аналоги</h3>
            <div style="display:flex;flex-wrap: wrap">
              <div v-for="replace_part in replace_parts">
                <div class="widget_replace_start"
                     v-if="replace_part.id !== part.id && replace_part.part_number !== part.part_number">
                  <div class="widget_replace">
                    <a href="" @click.prevent="this.$store.dispatch('addToOrder',replace_part)">
                      <img v-if="!this.$store.state.cartIds.includes(replace_part.id)" class="replace_cart_add"
                           src="/images/etc/shop_single_add.png"/>
                      <img v-if="this.$store.state.cartIds.includes(replace_part.id)" class="replace_cart_add"
                           src="/images/etc/shop_single_added.png"/>
                    </a>
                    <p class="price_replace_widget">{{ replace_part.price }} {{ replace_part.currency }}</p>
                    <p v-if="replace_part.qty > 0" class="replace_widget_ready_to_pick">
                      {{
                        replace_part.time !== null ? 'На складі через: ' + replace_part.time : 'Готово до видачі'
                      }} </p>
                    <p v-if="replace_part.time !== null && replace_part.qty <= 0" class="replace_widget_ready_to_pick">
                      Через {{ replace_part.time }} на складі</p>
                    <p v-if="replace_part.time === null && replace_part.qty <= 0"
                       class="replace_widget_ready_to_pick" style="color: rgba(128.61, 133.95, 147.69, 1)">
                      Має варіанти доставки</p>
                    <p v-if="replace_part.qty <= 0" class="replace_widget_can_order">
                      Під замовлення<br/><br/></p>
                    <p v-if="replace_part.qty > 0" class="replace_widget_can_order"><span
                        style="color: rgba(128.61, 133.95, 147.69, 1)">{{
                        replace_part.qty
                      }} од. в наявності</span><br/><br/></p>
                    <a href="" v-if="this.$store.state.authUser !== null"
                       @click.prevent="this.$store.dispatch('addToWishlist',replace_part)">
                      <img v-if="!this.$store.state.wishlistIds.includes(replace_part.id)"
                           class="replace_heart_wishlist"
                           src="/images/etc/heartBefore.png"/>
                      <img v-if="this.$store.state.wishlistIds.includes(replace_part.id)" class="replace_heart_wishlist"
                           src="/images/etc/heartAfter.png"/>
                    </a>
                    <a v-if="this.$store.state.authUser === null"
                       href="#" data-bs-toggle="modal"
                       data-bs-target="#logInModal">
                      <img class="replace_heart_wishlist" src="/images/etc/heartBefore.png"/>
                    </a>
                    <p class="brand_replace_widget">Бренд: {{ replace_part.part_brand }}</p>
                    <p class="number_part_replace_widget">
                      <a href="" @click.prevent="this.$store.dispatch('getPartSingle',replace_part)">
                        Номер: {{ replace_part.part_number }}
                      </a>
                    </p>
                  </div>
                </div>
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
      image: null,
      replace_parts: null,
    }
  },
  mounted() {
    this.getSingleProduct()
    this.$store.dispatch('getWishlist')
  },
  watch:{
    '$route' (to, from) {
      if(to !== from ) {
        this.part = null
        this.getSingleProduct()
        this.$store.dispatch('getWishlist')
      }
    }
  },
  methods: {
    getSingleProduct() {
      axios.get('/api/parts/show/' + this.$route.params.id)
          .then(res => {
            this.part = res.data.data
            this.replace_parts = res.data.replace
          })
    },
  }
}
</script>

<style scoped>

.fnt700 {
  font-weight: 700;
}

.button3 {
  padding: 1.3em 2em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button3:hover {
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

.button3:active {
  transform: translateY(-1px);
}

.button4 {
  padding: 0.8em 1.5em;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button4:hover {
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

.button4:active {
  transform: translateY(-1px);
}

.ready_to_pick {
  width: 177px;
  height: 38px;
  left: 13px;
  top: 83px;
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #98C900;
}


.heart_wishlist {
  width: 38px;
  height: 38px;
  left: 233px;
  top: 13px;
  position: absolute;
}

.can_order {
  width: 177px;
  height: 38px;
  left: 13px;
  top: 61px;
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: rgba(204, 146.88, 0, 1);
}

.time_delivery {
  width: 177px;
  height: 38px;
  left: 27px;
  top: 93px;
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: rgba(117, 117, 117, 1);
}

.cart_add_button {
  width: 45px;
  height: 45px;
  left: 230px;
  top: 58px;
  position: absolute;
}

</style>