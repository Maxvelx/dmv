<template>
      <SearchComponent></SearchComponent>
  <!-- Start Our Footer -->
  <section class="footer_one home7_style" style="margin-top: -100px;margin-bottom: -190px;z-index: 2;">
    <div class="container" style="margin-bottom: -100px">
      <div class="feature_icons home7_style">
        <div class="row">
          <div class="col-lg-6 col-xl-7">
            <div class="mailchimp_widget home7_style mb30-md">
              <div class="details">
                <h3 class="title">Підпишіться</h3>
                <p class="para">Та отримуйте останні новини від нас, ми не розсилаємо спам і т.д.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-5">
            <div class="footer_social_widget">
              <form class="footer_mailchimp_form home2 home7_style">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <input type="email" class="form-control" placeholder="Ваша Email адреса...">
                    <button class="btn-thm" type="submit">Підписатись</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterIndexComponent></FooterIndexComponent>
  <!-- End Our Footer -->
</template>
<script>

import SearchComponent from "@/views/app/home/SearchComponent.vue";
import FooterIndexComponent from "@/views/app/etc/FooterIndexComponent.vue";
export default {
  name: "index",
  components: {FooterIndexComponent, SearchComponent},
}
</script>
<style>

</style>
