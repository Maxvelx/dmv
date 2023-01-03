<template>

  <!-- Home Design -->
  <section>
    <div class="container-fluid" style="margin-top: -70px">
      <div class="row posr">
        <div class="col-xl-11 col-xxl-10 m-auto">
          <div class="home_content home7_style">
            <div class="advance_search_panel">
              <div class="home1_advance_search_wrapper">
                  <input type="text" v-model="search" class="form-control form-control-border"
                         placeholder="Введіть номер або назву запчастини..." v-on:keydown.enter="startSearch()">
                  <span style="float: right; margin-top: -45px; margin-right: 20px">
                  <a @click.prevent="startSearch()" class="btn btn-primary" type="submit">Пошук</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SliderComponent></SliderComponent>
      <SelectByCarComponent></SelectByCarComponent>
      <PartsComponent></PartsComponent>
    </div>
  </section>
</template>

<script>
import SearchPartComponent from "@/views/app/home/SearchPartComponent.vue";
import SliderComponent from "@/views/app/home/SliderComponent.vue";
import SelectByCarComponent from "@/views/app/home/SelectByCarComponent.vue";
import PartsComponent from "@/views/app/home/PartsComponent.vue";
import router from "@/router";

export default {
  name: "SearchComponent",
  components: {
    PartsComponent,
    SelectByCarComponent,
    SliderComponent,
    SearchPartComponent
  },
  data() {
    return {
      search: null,
    }
  },

  methods: {
    startSearch() {
      router.push({name: 'search', params: {search: this.search}})
    },
  }
}
</script>

<style>

</style>