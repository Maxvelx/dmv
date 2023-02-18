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
            <div class="icon float-start"><span>
              <img alt="" src="/images/home/parts.png" class="icon_about_us"></span></div>
            <div class="details">
              <h5 class="title">Великий вибір запчастин</h5>
              <p>
                Ми пропонуємо величезний вибір оригінальних та неоригінальних запчастин для різних видів автомобілів.
                Незалежно від того, чи ви шукаєте запчастини для європейських, азійських чи американських марок
                автомобілів, ми маємо все, що вам потрібно. Наші запчастини забезпечують високу якість та надійність, що
                забезпечує безпеку і комфорт управління автомобілем.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="why_chose_us">
            <div class="icon float-start style2"><span>
              <img alt="" src="/images/home/graph.png"
                                                            class="icon_about_us"></span></div>
            <div class="details">
              <h5 class="title">Доступні ціни</h5>
              <p>
                Однією з головних переваг нашої компанії є те, що ми пропонуємо конкурентні ціни на всі наші запчастини.
                Наші ціни набагато нижчі, ніж ціни у більшості автомобільних магазинів та сервісних центрів. Це дозволяє
                нашим клієнтам заощаджувати кошти та мати доступ до високоякісних запчастин за доступними цінами.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="why_chose_us">
            <div class="icon float-start style3"><span>
              <img alt="" src="/images/home/truck.png" class="icon_about_us"></span></div>
            <div class="details">
              <h5 class="title">Особистий підхід</h5>
              <p>
                Ми розуміємо, що наші клієнти можуть мати різні потреби та запити, тому ми завжди намагаємося
                забезпечити їхнє задоволення. Наша команда професіоналів готова надати консультації та допомогти в
                підборі потрібної запчастини. Ми завжди стараємося надавати високоякісний сервіс, щоб наші клієнти
                поверталися до нас знову та знову.</p>
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