<template>
  <!-- Inner Page Breadcrumb -->
  <section class="inner_page_breadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="breadcrumb_content">
            <h2 class="breadcrumb_title">Про нас</h2>
            <p class="subtitle">Інформація про нас</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Text Content -->
  <section class="about-section pb130">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about_thumb mb30-md">
            <img class="thumb1" src="/images/about/1.jpg" alt="1.jpg">
            <img class="img-fluid thumb2" src="/images/about/2.jpg" alt="2.jpg">
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="about_content">
            <div v-html="this.$store.state.siteInfo.about_us_text">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Chose Us -->
  <section class="why-chose pb90 pt0-md">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="main-title text-center">
            <h2>Чому саме ми?</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="why_chose_us">
            <div class="icon float-start"><span class="flaticon-price-tag"></span></div>
            <div class="details">
              <h5 class="title">Кращі ціни</h5>
              <p>Ми працюємо напряму з дилером у оригінальних запчастинах, та з перевіреними брендами</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="why_chose_us">
            <div class="icon float-start style2"><span class="flaticon-car"></span></div>
            <div class="details">
              <h5 class="title">Кращі ціни</h5>
              <p>Ми працюємо напряму з дилером у оригінальних запчастинах, та з перевіреними брендами</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="why_chose_us">
            <div class="icon float-start style3"><span class="flaticon-trust"></span></div>
            <div class="details">
              <h5 class="title">Кращі ціни</h5>
              <p>Ми працюємо напряму з дилером у оригінальних запчастинах, та з перевіреними брендами</p>
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

export default {
  name: "AboutUsComponent",
  components: {FooterComponent}
}
</script>

<style scoped>

</style>