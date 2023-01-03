<template xmlns="http://www.w3.org/1999/html">
  <div class="preloader" v-if="!brands"></div>
  <div class="container py-md-8 pt60" style="padding-bottom: 190px;">
    <div class="row justify-content-center">
      <div class="col-md-3" v-for="brand in brands">
        <div class="shadowNew" style="border-radius: 50px;height: 200px;display: grid;
  align-items: end;">
          <router-link :to="{name: 'shop_brand', params: {id: brand.id}}"><img :src="brand.image"
                          style="width: 200px;display: block;margin: 0 auto;"></router-link>
          <p class="h4" style="text-align: center;">{{ brand.name }}</p>
        </div>
      </div>
    </div>
  </div>
  <FooterIndexComponent></FooterIndexComponent>

</template>

<script>
import router from "@/router";
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
    this.getShopBrands()
  },
  methods: {
    getShopBrands() {
      this.axios.get('/api/brand')
          .then(res => {
            this.brands = res.data.data
          })
    },
  },
}
</script>

<style>

</style>