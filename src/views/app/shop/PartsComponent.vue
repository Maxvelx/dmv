<template>
  <template v-if="parts !== undefined">
    <div v-if="parts === null" class="preloader"></div>
  </template>
  <NotificationComponent
      :messages="this.$store.state.messages"
  />
  <!-- Listing Grid View -->
  <section class="our-listing pb30-991 bgc-f9 pt0">
    <div class="container" style="padding-top: 50px">
      <div class="row">
        <div class="sp_search_content">
          <div class="col-sm-12 col-md-4 col-lg-4 col-xl-5">
            <div class="left_area tac-xsd mb30-767 mt15">
              <p>Відображено {{ paginate ? paginate.from + ' – ' + paginate.to : '' }} з <span
                  class="heading-color fw600">{{ paginate ? paginate.total : '' }}</span> запчастин</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-8 col-lg-8 col-xl-7">
            <div class="right_area text-end tac-xsd">
              <ul>
                <li class="list-inline-item mb10-400">
                  <a id="open2" class="filter_open_btn style2 dn db-lg" href="#"><img class="mr10"
                                                                                      src=""
                                                                                      alt="filter-icon.svg">
                    Filters</a>
                </li>
                <li class="list-inline-item listone">Sort by:</li>
                <li class="list-inline-item listwo">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker show-tick">
                    <option>Date: newest First</option>
                    <option>Most Recent</option>
                    <option>Recent</option>
                    <option>Best Selling</option>
                    <option>Old Review</option>
                  </select>
                    <button type="button" tabindex="-1" class="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox"
                            aria-expanded="false" title="Date: newest First">
                      <div class="filter-option">
                        <div class="filter-option-inner">
                          <div class="filter-option-inner-inner">Date: newest First</div>
                        </div>
                      </div>
                    </button>
                    <div class="dropdown-menu ">
                      <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1">
                        <ul class="dropdown-menu inner show" role="presentation"></ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 dn-lg">
          <div class="sidebar_listing_grid1 mb30">
            <div class="sidebar_listing_list">
              <div class="shop_category_sidebar_widgets">
                <h4 class="title">Авто</h4>
                <div class="widget_list">
                  <ul class="list_details">
                    <template v-if="brand !== undefined">
                      <img :src="brand" alt="xd">
                    </template>
                  </ul>
                </div>
              </div>
              <div class="shop_category_sidebar_widgets">
                <h4 class="title">Фільтр</h4>
                <div class="widget_list">
                  <ul v-for="tag in tags" class="list_details">
                    <input type="checkbox"> {{ tag.title }}
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
                    <h5 class="post_title">{{recent_part.price}}грн</h5>
                    <p class="post_title">{{ recent_part.number }}</p>
                    <p class="cuttedText2Line">{{ recent_part.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 pr0">
          <div class="row">
            <div v-for="part in parts" class="col-sm-6 col-xl-4 zoom">
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
                    <h5 class="price list-inline-item">{{ part.price }}грн</h5><a class="list-inline-item" href=""></a>
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
            <div class="row" v-if="paginate !== null && paginate.total > 12">
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
  </section>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import NotificationComponent from "@/views/app/notification/NotificationComponent.vue";
import ShowPartComponent from "@/views/app/shop/ShowPartComponent.vue";

export default {
  name: "PartsComponent",
  components: {ShowPartComponent, NotificationComponent, FooterComponent},

  data() {
    return {
      brand: null,
      parts: null,
      tags: [],
      paginate: null,
      dontShow: 1,
      recent: JSON.parse(localStorage.getItem('recent')),
      recent_parts: null,
    }
  },
  mounted() {
    this.getPartsByCategory()
    this.$store.dispatch('getWishlist')
    this.recentSlice()
  },
  methods: {
    getPartsByCategory(page = 1) {
      this.axios.post('/api/brand/show/' + this.$route.params.id + '?page=' + page)
          .then(res => {
                res.data.brand.forEach(brand => {
                  this.brand = brand.image
                });
                this.parts = res.data.data
                this.paginate = res.data.meta
              }
          )
    },

    recentSlice(){
      this.recent_parts = this.recent.slice(0,3)
    }
  },

}
</script>

<style>

</style>