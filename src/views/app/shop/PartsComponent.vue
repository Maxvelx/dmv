<template>
  <template v-if="parts !== undefined">
    <div v-if="parts === null" class="preloader"></div>
  </template>
  <NotificationComponent
      :messages="this.$store.state.messages"
  />
  <!-- Listing Grid View -->
  <section class="our-listing pb30-991 pt0">
    <div class="container-fluid col-xl-11" style="padding-top: 50px">
      <div class="row">
        <div class="sp_search_content">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
            <div class="right_area text-end tac-xsd">
              <ul>
                <li class="list-inline-item dn db-sm">
                  <a class="" href="#">
                    <img class="container-fluid w-75" :src="brandimage" alt="xd">
                  </a>
                </li>
                <a id="open2" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" class="pr10 dn db-sm"
                   style="font-size: 22px" href="#"><i class="fas fa-bars"></i> Фільтра
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="row col-sm-12 col-md-12 col-lg-12 col-xl-12 pb30">
          <div class="col-sm-12 col-md-7 col-lg-8 col-xl-9" style="">
            <p>Показано {{ paginate ? paginate.from + ' – ' + paginate.to : '' }} з <span
                class="heading-color fw600">{{ paginate ? paginate.total : '' }}</span> запчастин</p>
          </div>
          <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3">
            Сортувати за:
            <select v-model="orderBy">
              <option value="null">вибрати</option>
              <option value="1">зростанням ціни</option>
              <option value="2">змешенням ціни</option>
              <option value="3">новизною</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row col-xl-12 col-xxl-12 col-md-12 col-lg-12">
        <div class="col-xl-3 col-md-5 col-lg-4 dn-sm">
          <div class="sidebar_listing_grid1 mb30">
            <div class="sidebar_listing_list">
              <div class="shop_category_sidebar_widgets">
                <h4 class="title">Авто</h4>
                <div class="widget_list">
                  <ul class="list_details">
                    <template v-if="brandimage !== undefined">
                      <img :src="brandimage" alt="xd">
                    </template>
                  </ul>
                </div>
              </div>
              <div class="shop_category_sidebar_widgets">
                <div>
                  <a href="" style="float: right;font-size: 12px;margin-top: 5px" @click.prevent="clearFilter()">Показати
                    все</a>
                  <h3>Категорії </h3>
                </div>
                <div class="widget_list">
                  <ul v-for="category in categories" class="list_details">
                    <a href="" @click.prevent="categoryFilter(category.id)">
                      {{ category.name }} {{ '(' + category.count + ')' }}</a>
                  </ul>
                </div>
                <h3 class="mt30">Фільтр</h3>
                <div class="widget_list">
                  <ul v-for="tag in tags" class="list_details">
                    <input type="checkbox" v-model="tagsFilter" :value="tag.id"> {{ tag.title }}
                    {{ '(' + tag.count + ')' }}
                  </ul>
                </div>
              </div>
              <div v-if="recent_parts" class="sidebar_shop_recent_post">
                <h4 class="title">Останні переглянуті товари</h4>
                <div v-for="recent_part in recent_parts" class="d-flex mb20">
                  <div class="flex-shrink-0">
                    <img class="align-self-start mr-3" :src="recent_part.image" alt="recentImg">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="post_title">{{ recent_part.price }}грн</h5>
                    <p class="post_title">{{ recent_part.number }}</p>
                    <p class="cuttedText2Line">{{ recent_part.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-md-7 col-lg-8 pr0">
          <div class="row">
              <div v-for="part in parts" class="col-md-6 col-xl-4 col-xxl-4 col-lg-4 zoom">
                <div class="car-listing">
                  <div class="thumb">
                    <div class="tag">Новинка</div>
                    <img :src="part.image" alt="1.jpg">
                    <div class="thmb_cntnt2">
                      <ul class="mb0">
                      </ul>
                    </div>
                  </div>
                  <div class="details">
                    <div class="wrapper">
                      <h5 class="price list-inline-item">{{ part.price }}грн</h5><a class="list-inline-item"
                                                                                    href=""></a>
                      <h5 class="float-end" style="margin-top: -10px;"><a
                          @click.prevent="this.$store.dispatch('addToOrder',part)" href="">
                        <img v-if="!this.$store.state.cartIds.includes(part.id)" src="/images/etc/beforeCart.png">
                        <img v-if="this.$store.state.cartIds.includes(part.id)" src="/images/etc/afterCart2.png">
                      </a></h5>
                      <h5 class="float-end" style="margin-top: -12px;margin-right: 10px">
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
                      <h6 class="title cuttedTextMaxWidth50"><a
                          @click.prevent="this.$store.dispatch('getPartSingle',part)" href="">{{ part.part_name }}</a>
                      </h6>
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
            <div class="row" v-if="paginate && paginate.total > 12">
              <div class="col-lg-12">
                <div class="mbp_pagination py-3 px-3">
                  <ul class="page_navigation">
                    <li v-if="paginate.current_page !== 1" class="page-item">
                      <a @click.prevent="getPartsByCategory(paginate.current_page -1)" class="page-link" href=""
                         tabindex="-1">
                        <span class="fa fa-arrow-left"></span></a></li>
                    <li v-for="link in paginate.links" :class="link.active ? 'active' : ''" class="page-item"
                        aria-current="page">
                      <template v-if="Number(link.label)">
                        <a @click.prevent="getPartsByCategory(link.label)" class="page-link" href="">{{ link.label }}
                          <span
                              class="sr-only"></span></a>
                      </template>
                    </li>
                    <li v-if="paginate.current_page !== paginate.last_page" class="page-item">
                      <a class="page-link" href="" @click.prevent="getPartsByCategory(paginate.current_page +1)">
                        <span class="fa fa-arrow-right"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
         tabindex="-1" style="background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="shop_category_sidebar_widgets">
              <div>
                <a href="" style="float: right;font-size: 12px;margin-top: 5px" @click.prevent="clearFilter()">Показати
                  все</a>
                <h3>Категорії </h3>
              </div>
              <div class="widget_list">
                <ul v-for="category in categories" class="list_details">
                  <a href="" @click.prevent="categoryFilter(category.id)">
                    {{ category.name }} {{ '(' + category.count + ')' }}</a>
                </ul>
              </div>
              <h3 class="mt30">Фільтр</h3>
              <div class="widget_list">
                <ul v-for="tag in tags" class="list_details">
                  <input type="checkbox" v-model="tagsFilter" :value="tag.id"> {{ tag.title }} {{
                    '(' + tag.count + ')'
                  }}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <FooterComponent></FooterComponent>
</template>

<script>
import axios from "axios";
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import NotificationComponent from "@/views/app/notification/NotificationComponent.vue";
import ShowPartComponent from "@/views/app/shop/ShowPartComponent.vue";

export default {
  name: "PartsComponent",
  components: {ShowPartComponent, NotificationComponent, FooterComponent},

  data() {
    return {
      tagsFilter: [],
      brandimage: null,
      categories: null,
      parts: null,
      tags: [],
      modal: '',
      orderBy: null,
      categoryId: null,
      paginate: null,
      dontShow: 1,
      recent_parts: JSON.parse(localStorage.getItem('recent')),
    }
  },
  mounted() {
    this.getPartsByCategory()
    this.$store.dispatch('getWishlist')
  },
  watch: {
    tagsFilter: {
      handler: function () {
        this.getPartsByCategory()
      }
    },
    orderBy: {
      handler: function () {
        this.getPartsByCategory()
      }
    }
  },
  methods: {

    getPartsByCategory(page = 1) {
      axios.post('/api/brand/show/' + this.$route.params.id + '?page=' + page, {
        category_id: this.categoryId,
        tags: this.tagsFilter,
        orderBy: this.orderBy,
      })
          .then(res => {
            this.tags = res.data.tags
            this.brandimage = res.data.brand.image
            this.parts = res.data.data
            this.paginate = res.data.meta
            this.categories = res.data.categories
            $('#exampleModalToggle .btn-close').click()
          })
    },

    categoryFilter(id) {
      this.categoryId = id
      this.getPartsByCategory()
    },

    tagFilter(id) {
      this.tagsFilter.push(id)
      this.getPartsByCategory()
    },

    clearFilter() {
      this.categoryId = null
      this.tagsFilter = []
      this.getPartsByCategory()
    },

  },

}
</script>

<style>

</style>