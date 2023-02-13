<template>
  <!-- Start Our Footer -->
  <section class="footer_one home7_style pt10" v-if="this.$store.state.siteInfo">
    <div class="container pt130 pt60-sm pb0-sm">
      <div class="row">
        <div class="col-md-4 col-xl-7" style="z-index: 3">
          <div class="footer_about_widget home2 text-center text-md-start">
            <div class="logo mb40 mb0-sm"><img src="/images/header-logo2.svg" alt="header-logo2.svg"></div>
          </div>
        </div>
        <div class="col-md-8 col-xl-5" style="z-index: 3">
          <div class="footer_menu_widget home2 text-end tac-md mt15">
            <ul>
              <li class="list-inline-item">
                <router-link :to="{name: 'index'}">Головна</router-link>
              </li>
              <li class="list-inline-item"><router-link :to="{name: 'shop'}">Магазин</router-link></li>
              <li class="list-inline-item"><router-link :to="{name: 'about'}">Про нас</router-link></li>
              <li class="list-inline-item"><router-link :to="{name: 'contact'}">Контакти</router-link></li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="pb30"></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div class="footer_about_widget home2">
            <h5 class="title">Адреса</h5>
            <p>{{ this.$store.state.siteInfo.city }}<br> {{ this.$store.state.siteInfo.state }}
              <br>{{ this.$store.state.siteInfo.address }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div class="footer_contact_widget home2">
            <h5 class="title">Зв'язок з нами</h5>
            <div class="footer_phone pb10">{{ this.$store.state.siteInfo.phone }}</div>
            Наш email:
            <a :href="'mailto:'+this.$store.state.siteInfo.email">
              {{ this.$store.state.siteInfo.email }}</a>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div class="footer_contact_widget home2">
            <h5 class="title">Ми працюємо</h5>
            <p>{{ this.$store.state.siteInfo.work_hour}}</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div class="footer_contact_widget home2">
            <h5 class="title">Будьте в курсі останніх новин</h5>
            <form class="footer_mailchimp_form">
              <div class="wrapper">
                <div class="col-auto">
                  <input type="email" class="form-control" placeholder="Введіть Ваш email адрес">
                  <button type="submit">ОК</button>
                </div>
              </div>
            </form>
            <p>Отримувати останні новини та пропозиції.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="margin-bottom: -30px">
      <div class="row">
        <div class="col-md-6 col-lg-8 col-xl-9">
          <div class="copyright-widget home2 mt5 text-center text-md-start">
            <p>Maxvel © 2023.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="footer_social_widget home2 text-center text-md-end">
            <ul class="mr30">
              <a style="padding-left: 7px" :href="this.$store.state.siteInfo.facebook" rel="noopener noreferrer nofollow"
                 target="_blank">
                <li class="list-inline-item">
                  <i style="margin-top: 14px" class="fab fa-facebook-f"></i>
                </li>
              </a>
              <a style="padding-left: 7px" :href="'tg://resolve?domain='+this.$store.state.siteInfo.telegram">
                <li class="list-inline-item">
                  <i style="margin-top: 14px" class="fab fa-telegram"></i>
                </li>
              </a>
              <a style="padding-left: 7px" rel="noopener noreferrer nofollow" target="_blank"
                 :href="'https://www.instagram.com/'+this.$store.state.siteInfo.instagram">
                <li class="list-inline-item">
                  <i style="margin-top: 14px" class="fab fa-instagram"></i>
                </li>
              </a>
              <a style="padding-left: 7px" :href="'viber://chat?number=%2B'+this.$store.state.siteInfo.viber">
                <li class="list-inline-item">
                  <i style="margin-top: 14px" class="fab fa-viber"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Our Footer -->
</template>

<script>
export default {
  name: "FooterIndexComponent",
  mounted() {
    this.$store.dispatch('getSiteInfo')
  },
}
</script>

<style scoped>

</style>