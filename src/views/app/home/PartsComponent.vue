<template>
  <NotificationComponent
      :messages="this.$store.state.messages"
  />
  <div v-if="parts === null" class="preloader"></div>
  <!-- Featured Product  -->
  <section class="featured-product pt0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="main-title text-center">
            <h2>Рекомендовані товари</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="popular_listing_sliders row">
            <!-- Nav tabs -->
            <div class="nav nav-tabs col-lg-12 justify-content-center" role="tablist">
              <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                ТО комплекти
              </button>
              <button class="nav-link active" id="nav-shopping-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-shopping" role="tab" aria-controls="nav-shopping"
                      aria-selected="false">Нові надходження
              </button>

            </div>
            <!-- Tab panes -->
            <div class="tab-content col-lg-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                 id="nav-tabContent">
              <div class="tab-pane fade" id="nav-home" role="tabpanel"
                   aria-labelledby="nav-home-tab">
                <div class="row justify-content-center container_hover">
                  <div v-for="part in parts_kit" class="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl zoom item_for_container_hover">
                    <div class="car-listing border">
                      <div class="thumb">
                        <div class="tag">Новинка</div>
                        <img style="aspect-ratio:3/2;object-fit: contain;height: 200px"
                             :src="part.image ? part.image :'/images/etc/zaglushkaPart.jpg'" alt="1.jpg">
                        <div class="thmb_cntnt2">
                          <ul class="mb0">
                          </ul>
                        </div>
                      </div>
                      <div class="details">
                        <div class="wrapper">
                          <h5 class="price list-inline-item">{{ part.price }} {{part.currency}}</h5><a class="list-inline-item"
                                                                                                       href=""></a>
                          <h5 class="float-end" style="margin-top: -10px;">
                            <a v-if="!this.$store.state.cartIds.includes(part.id)"
                               @click.prevent="this.$store.dispatch('addToOrder',part)" href="">
                              <img src="/images/etc/beforeCart.png">
                            </a>
                            <router-link v-if="this.$store.state.cartIds.includes(part.id)"
                                         :to="{name: 'order'}">
                              <img src="/images/etc/afterCart2.png">
                            </router-link>
                          </h5>
                          <h5 class="float-end" style="margin-top: -10px;margin-right: 15px">
                            <a v-if="this.$store.state.authUser !== null"
                               @click.prevent="this.$store.dispatch('addToWishlist',part)" href="">
                              <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                                   src="/images/etc/heartBefore.png">
                              <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                                   src="/images/etc/heartAfter.png">
                            </a>
                            <a v-if="this.$store.state.authUser === null" href="#" data-bs-toggle="modal"
                               data-bs-target="#logInModal">
                              <img src="/images/etc/heartBefore.png">
                            </a>
                          </h5>
                          <h6 class="title cuttedText2Line" @click.prevent="this.$store.dispatch('getPartSingle',part)" style="height: 50px"><a href="">{{ part.part_name }}</a></h6>
                          <div class="listign_review">
                            <ul class="mb0">
                              <li class="list-inline-item">Номер: {{ part.part_number }}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="listing_footer" style="margin-bottom: -10px">
                          <ul class="mb0">
                            <li class="list-inline-item">Виробник: {{ part.part_brand }}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade show active" id="nav-shopping" role="tabpanel"
                   aria-labelledby="nav-shopping-tab">
                <div class="row justify-content-center container_hover">
                  <div v-for="part in parts" class="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl zoom item_for_container_hover">
                    <div class="car-listing border">
                      <div class="thumb">
                        <div class="tag">Новинка</div>
                        <img style="aspect-ratio:3/2;object-fit: contain;height: 200px"
                             :src="part.image ? part.image :'/images/etc/zaglushkaPart.jpg'" alt="1.jpg">
                        <div class="thmb_cntnt2">
                          <ul class="mb0">
                          </ul>
                        </div>
                      </div>
                      <div class="details">
                        <div class="wrapper">
                          <h5 class="price list-inline-item">{{ part.price }} {{part.currency}}</h5><a class="list-inline-item"
                                                                                        href=""></a>
                          <h5 class="float-end" style="margin-top: -10px;">
                            <a v-if="!this.$store.state.cartIds.includes(part.id)"
                                                                               @click.prevent="this.$store.dispatch('addToOrder',part)" href="">
                            <img src="/images/etc/beforeCart.png">
                          </a>
                            <router-link v-if="this.$store.state.cartIds.includes(part.id)"
                                         :to="{name: 'order'}">
                              <img src="/images/etc/afterCart2.png">
                            </router-link>
                          </h5>
                          <h5 class="float-end" style="margin-top: -10px;margin-right: 15px">
                            <a v-if="this.$store.state.authUser !== null"
                               @click.prevent="this.$store.dispatch('addToWishlist',part)" href="">
                              <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                                   src="/images/etc/heartBefore.png">
                              <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                                   src="/images/etc/heartAfter.png">
                            </a>
                            <a v-if="this.$store.state.authUser === null" href="#" data-bs-toggle="modal"
                               data-bs-target="#logInModal">
                                <img src="/images/etc/heartBefore.png">
                            </a>
                          </h5>
                          <h6 class="title cuttedText2Line" @click.prevent="this.$store.dispatch('getPartSingle',part)" style="height: 50px"><a href="">{{ part.part_name }}</a></h6>
                          <div class="listign_review">
                            <ul class="mb0">
                              <li class="list-inline-item">Номер: {{ part.part_number }}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="listing_footer" style="margin-bottom: -10px">
                          <ul class="mb0">
                            <li class="list-inline-item">Виробник: {{ part.part_brand }}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane " id="nav-hotels" role="tabpanel" aria-labelledby="nav-hotels-tab">
                <div class="row">
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
import NotificationComponent from "@/views/app/notification/NotificationComponent.vue";

export default {
  name: "PartsComponent",
  components: {NotificationComponent},
  data() {
    return {
      parts: null,
      parts_kit: null,
    }
  },
  mounted() {
    this.getProduct()
    this.$store.dispatch('getWishlist')
  },
  methods: {
    getProduct() {
      this.axios.get('/api/parts')
          .then(res => {
            this.parts = res.data.data
            this.parts_kit = res.data.parts_kit
          })
    },
  },
}
</script>

<style>

</style>