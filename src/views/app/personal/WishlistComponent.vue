<template>
  <div v-if="parts === null" class="preloader"></div>
  <!-- Our Dashbord -->
  <section class="our-dashbord dashbord">
    <div class="col-md-12 col-sm-12 col-lg-12 row">
      <MenuComponent></MenuComponent>
      <div class="col-md-10 col-sm-10 col-lg-10 pt40 center-all">
        <div class="row">
          <div v-for="part in parts" class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-4">
            <div class="car-listing list_style border zoom">
              <div class="thumb">
                <img style="aspect-ratio:16/9;object-fit: contain;height: 200px;margin-top: -30px"
                     :src="part.image ? part.image :'/images/etc/zaglushkaPart.jpg'" alt="">
              </div>
              <div class="details">
                <div class="wrapper">
                  <div class="mb0">
                    <h5 class="price">{{ part.price }}грн
                      <span style="float: right; margin-top: -10px">
                            <a @click.prevent="this.$store.dispatch('addToWishlist',part)" href="">
                              <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                                   src="/images/etc/heartBefore.png">
                              <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                                   src="/images/etc/heartAfter.png">
                            </a>
                           <a v-if="!this.$store.state.cartIds.includes(part.id)"
                              @click.prevent="this.$store.dispatch('addToOrder',part)" href="">
                <img src="/images/etc/beforeCart.png">
              </a>
              <router-link v-if="this.$store.state.cartIds.includes(part.id)"
                           :to="{name: 'order'}">
                <img src="/images/etc/afterCart2.png">
              </router-link>
                          </span>
                    </h5>
                  </div>
                  <h6 class="title cuttedText2Line"><a href=""
                                                       @click.prevent="this.$store.dispatch('getPartSingle',part)">{{
                      part.part_name
                    }}</a></h6>
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
            <div class="row" v-if="paginate && paginate.total > 6">
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
    this.$store.dispatch('getWishlist')
  },
  methods: {
    getUserWishlist(page = 1) {
      api.post('/api/getWishlist' + '?page=' + page)
          .then(res => {
            this.parts = res.data.data
            this.paginate = res.data.meta
          })
    },

  }

}
</script>

<style scoped>

</style>