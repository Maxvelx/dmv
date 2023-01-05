<template xmlns="http://www.w3.org/1999/html">

  <div class="preloader" v-if="brands === null"></div>
  <div class="container py-md-8 pt90 pb50" style="padding-bottom: 150px">
    <div class="row justify-content-center">
      <div class="col-md-3" v-for="brand in brands">
        <div class="shadowNew" style="border-radius: 50px;height: 200px;display: grid;
  align-items: end;">
          <router-link :to="{name: 'parts', params: {id: brand.id}}"><img :src="brand.image" alt="modelImg"
                                                                          style="width: 200px;display: block;margin: 0 auto;">
          </router-link>
          <p class="h4" style="text-align: center;">{{ brand.name }}</p>
        </div>
      </div>
    </div>
  </div>
  <FooterIndexComponent></FooterIndexComponent>

</template>

<script>
import FooterIndexComponent from "@/views/app/etc/FooterIndexComponent.vue";

export default {
  name: "shop",
  components: {FooterIndexComponent},
  data() {
    return {
      brands: null,
    }
  },
  mounted() {
    this.getShopBrand()
  },
  methods: {

    getShopBrand() {
      this.axios.get('/api/brand/' + this.$route.params.id)
          .then(res => {
            this.brands = res.data.data
          })
    },
    // getNewBrand(brand) {
    //   this.axios.get('/api/brand/' + brand)
    //       .then(res => {
    //        this.brands = res.data.data
    //         if (this.brands === undefined) {
    //           router.push({name: 'parts', params: {id: brand}})
    //         }
    //       })
    // },

  }
}
</script>

<style>

</style>