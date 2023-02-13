<template>
  <div v-if="part === null" class="preloader"></div>
  <div v-if="part !== null">
    <NotificationComponent
        :messages="this.$store.state.messages"
    />
    <!-- Shop Single Content -->
    <div class="row container-fluid" style="display:flex;justify-content: center;padding: 3%">
      <div class="col-lg-5 col-md-5 col-xl-5 pb50">
        <img style="border-radius: 20px"
             v-if="part.image !== 0" class="shadow3"
             :src="part.image" alt="partImage">
        <div style="border-radius: 20px;height: auto;overflow: hidden" v-if="part.image === 0" class="shadow3">
          <img class="zoom2" style="border-radius: 20px"
               :src="image ? image :'/images/etc/zaglushkaPart.jpg'"
               alt="partImage">
        </div>
      </div>
      <div class="col-lg-5 col-md-7 col-xl-4 pb30">
        <div class="shop_single_product_details">
          <h3 class="title mb40">{{ part.part_name }}</h3>
          <div class="sspd_price mb20">{{ part.price }}{{ part.currency }}</div>
          <ul class="cart_btns instock_area mb30">
            <li v-if="part.qty && part.qty > '0'" style="font-size: 15px" class="list-inline-item fw-bold"><span
                class="fa fa-check-circle text-success mr5 fz18"></span> {{ part.qty }} од. <span
                class="text-success"> у наявності</span>
            </li>
            <li class="list-inline-item">
              <p v-if="part.qty > '0'" style="font-size: 15px" class="text-success mr5 fz18 fw-bold">
                {{
                  part.time !== null ? '| На складі через: ' + part.time : '| Готово до видачі'
                }} </p>
            </li>
            <li style="margin-left: -5px" class="list-inline-item" v-if="part.qty <= '0'">
              <span class="text-warning mr5 fz16">Під замовлення</span>
            </li>
            <li class="list-inline-item">
              <p style="font-size: 15px" class="text-dark mr5 fz16"
                 v-if="part.time !== null && part.qty <= '0'">
                | Через {{ part.time }} на складі</p>
              <p style="font-size: 15px" class="text-dark mr5 fz16"
                 v-if="part.time === null && part.qty <= '0'">
                | Має варіанти доставки</p>
            </li>
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
            <div v-if="part.part_number_oem && part.part_number_oem != 'null'" class="col-6 fnt700">Оригінальний
              номер:
            </div>
            <div v-if="part.part_number_oem" class="col-6">{{
                part.part_number_oem && part.part_number_oem != 'null' ? part.part_number_oem : ''
              }}
            </div>
          </div>
        </div>
      </div>
      <div style="position:relative" class="col-lg-10 col-md-10 col-xl-3">
        <div v-if="oem_parts && oem_parts.length > 0">
          <h4 class="pb10">Усі ціни виробника: {{ part.part_brand }}</h4>
          <div class="row" style="width: 350px;padding-bottom: 20px">
            <div class="col-4">Ціна</div>
            <div class="col-5">Термін</div>
            <div class="col-3">Замовити</div>
          </div>
          <div v-for="same_part in oem_parts">
            <div style="display:none;visibility: hidden;left: -9999px">
              {{ same_part.image !== 0 ? image = same_part.image : '' }}
            </div>
            <div class="row border-bottom" style="width: 350px">
              <p class="price_nw col-4">{{ same_part.price }} {{ same_part.currency }}</p>
              <div class="time_delivery col-6" style="padding-top: 10px">
                <p class="can_order" v-if="same_part.qty <= '0'">Під замовлення</p>
                <p class="ready_to_pick" v-if="same_part.qty > '0'"><span
                    style="color: rgba(128.61, 133.95, 147.69, 1)">{{
                    same_part.qty
                  }} од. у наявності </span></p>
                <p class="ready_to_pick" v-if="same_part.qty > '0'">
                  {{
                    same_part.time !== null ? 'На складі через: ' + same_part.time : 'Готово до видачі'
                  }}
                </p>
                <p class="ready_to_pick" style="color: rgba(128.61, 133.95, 147.69, 1)"
                   v-if="same_part.time !== null && same_part.qty <= '0'">
                  Через {{ same_part.time }} на складі
                </p>
                <p class="ready_to_pick" v-if="same_part.time === null && same_part.qty <= '0'"
                   style="color: rgba(128.61, 133.95, 147.69, 1)">
                  Має варіанти доставки
                </p>
              </div>
              <div class="cart_add_button col-2">
                <a v-if="!this.$store.state.cartIds.includes(same_part.id)"
                   @click.prevent="this.$store.dispatch('addToOrder',same_part)" href="">
                  <img src="/images/etc/beforeCart.png">
                </a>
                <router-link v-if="this.$store.state.cartIds.includes(same_part.id)"
                             :to="{name: 'order'}">
                  <img src="/images/etc/afterCart2.png">
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-if="kit_parts && kit_parts.length > 0">
          <h4 class="pb10">Перелік запчастин у комплекті: {{ part.part_brand }}</h4>
          <div class="row" style="width: 350px;padding-bottom: 20px">
            <div class="col-3">Номер</div>
            <div class="col-4">Назва</div>
            <div class="col-3">Виробник</div>
            <div class="col-2">Кількість</div>
          </div>
          <div v-for="kit_part in kit_parts">
            <div class="row border-bottom" style="width: 350px;display: flex;align-items: center">
              <p class="col-3" style="padding-top: 10px">{{ kit_part.part_number }}</p>
              <div class="col-4" style="font-weight: 700">
              {{kit_part.part_name}}
              </div>
              <div class="col-3">
                {{kit_part.part_brand}}
              </div>
              <div class="col-2">
                {{kit_part.total}} од.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding: 3%;margin-top: -50px" v-if="kit_parts && kit_parts.length > 0">
      <h3>Запчастини які входять до комплекту {{ part.part_name }}:</h3>
      <div style="display: flex;flex-wrap: wrap">
        <div v-for="kit_part in kit_parts" class="zoom">
          <div class="car-listing border" style="width: 230px;">
            <div class="total_widget">
                x{{ kit_part.total }}
            </div>
            <div class="thumb">
              <div class="tag"
                   style="background-color: #069191;
                   margin-left: -5px;
                   margin-top: -10px;
                   border-radius: 8px">
                Входить до цього комплекту
              </div>
              <img style="aspect-ratio:3/2;object-fit: contain;height: 200px"
                   :src="kit_part.image ? kit_part.image :'/images/etc/zaglushkaPart.jpg'" alt="1.jpg">
              <div class="thmb_cntnt2">
                <ul class="mb0">
                </ul>
              </div>
            </div>
            <div class="details">
              <div class="wrapper">
                <h5 class="price list-inline-item">{{ kit_part.price }} {{ kit_part.currency }}</h5><a
                  class="list-inline-item"
                  href=""></a>
                <h5 class="float-end" style="margin-top: -10px;">
                  <a v-if="!this.$store.state.cartIds.includes(kit_part.id)"
                     @click.prevent="this.$store.dispatch('addToOrder',kit_part)" href="">
                    <img src="/images/etc/beforeCart.png">
                  </a>
                  <router-link v-if="this.$store.state.cartIds.includes(kit_part.id)"
                               :to="{name: 'order'}">
                    <img src="/images/etc/afterCart2.png">
                  </router-link>
                </h5>
                <h5 class="float-end addToWish">
                  <a v-if="this.$store.state.authUser !== null"
                     @click.prevent="this.$store.dispatch('addToWishlist',kit_part)" href="">
                    <img v-if="!this.$store.state.wishlistIds.includes(kit_part.id)"
                         src="/images/etc/heartBefore.png">
                    <img v-if="this.$store.state.wishlistIds.includes(kit_part.id)"
                         src="/images/etc/heartAfter.png">
                  </a>
                  <a v-if="this.$store.state.authUser === null">
                    <router-link to="/">
                      <img src="/images/etc/heartBefore.png">
                    </router-link>
                  </a>
                </h5>
                <h6 class="title cuttedText2Line" @click.prevent="this.$store.dispatch('getPartSingle',kit_part)"
                    style="height: 50px"><a href="">{{ kit_part.part_name }}</a></h6>
                <div class="listign_review">
                  <ul class="mb0">
                    <li class="list-inline-item">Номер: {{ kit_part.part_number }}</li>
                  </ul>
                </div>
              </div>
              <div class="listing_footer" style="margin-bottom: -10px">
                <ul class="mb0">
                  <li class="list-inline-item">Виробник: {{ kit_part.part_brand }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt20 mt20" style="padding: 3%" v-if="replace_parts && replace_parts.length > 0">
      <h3>Замінники для цієї запчастини</h3>
      <div style="display: flex;flex-wrap: wrap">
        <div v-for="replace_part in replace_parts" class="zoom">
          <div class="car-listing border" style="width: 230px;">
            <div class="thumb">
              <div class="tag" style="background-color: #0d638f">Замінник</div>
              <img style="aspect-ratio:3/2;object-fit: contain;height: 200px"
                   :src="replace_part.image ? replace_part.image :'/images/etc/zaglushkaPart.jpg'" alt="1.jpg">
              <div class="thmb_cntnt2">
                <ul class="mb0">
                </ul>
              </div>
            </div>
            <div class="details">
              <div class="wrapper">
                <h5 class="price list-inline-item">{{ replace_part.price }} {{ replace_part.currency }}</h5><a
                  class="list-inline-item"
                  href=""></a>
                <h5 class="float-end" style="margin-top: -10px;">
                  <a v-if="!this.$store.state.cartIds.includes(replace_part.id)"
                     @click.prevent="this.$store.dispatch('addToOrder',replace_part)" href="">
                    <img src="/images/etc/beforeCart.png">
                  </a>
                  <router-link v-if="this.$store.state.cartIds.includes(replace_part.id)"
                               :to="{name: 'order'}">
                    <img src="/images/etc/afterCart2.png">
                  </router-link>
                </h5>
                <h5 class="float-end" style="margin-top: -10px;margin-right: 15px">
                  <a v-if="this.$store.state.authUser !== null"
                     @click.prevent="this.$store.dispatch('addToWishlist',replace_part)" href="">
                    <img v-if="!this.$store.state.wishlistIds.includes(replace_part.id)"
                         src="/images/etc/heartBefore.png">
                    <img v-if="this.$store.state.wishlistIds.includes(replace_part.id)"
                         src="/images/etc/heartAfter.png">
                  </a>
                  <a v-if="this.$store.state.authUser === null">
                    <router-link to="/">
                      <img src="/images/etc/heartBefore.png">
                    </router-link>
                  </a>
                </h5>
                <h6 class="title cuttedText2Line" @click.prevent="this.$store.dispatch('getPartSingle',replace_part)"
                    style="height: 50px"><a href="">{{ replace_part.part_name }}</a></h6>
                <div class="listign_review">
                  <ul class="mb0">
                    <li class="list-inline-item">Номер: {{ replace_part.part_number }}</li>
                  </ul>
                </div>
              </div>
              <div class="listing_footer" style="margin-bottom: -10px">
                <ul class="mb0">
                  <li class="list-inline-item">Виробник: {{ replace_part.part_brand }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      replaceShow: false,
      oem_parts: null,
      kit_parts: null,
    }
  },
  mounted() {
    this.getSingleProduct()
    this.$store.dispatch('getWishlist')
  },
  watch: {
    '$route'(to, from) {
      if (to !== from) {
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
            this.kit_parts = res.data.parts_on_kit
            this.oem_parts = res.data.parts_oem
            this.replace_parts = res.data.replace
          })
    },
  }
}
</script>

<style scoped>

.total_widget {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  left: 187px;
  top: 3px;
  z-index: 2;
  position: absolute;
  background-color: #069191;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}



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
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #14b14f;
}

.can_order {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: rgba(204, 146.88, 0, 1);
}

.time_delivery {
  text-align: left;
  margin-bottom: 0;
  font-weight: 700;
  line-height: 100%;
  color: rgba(117, 117, 117, 1);
}

.cart_add_button {
  display: flex;
  align-items: center;
  float: right;
}

</style>