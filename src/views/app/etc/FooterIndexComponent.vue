<template>
  <!-- Start Our Footer -->
  <section class="footer_one home7_style pt10">
    <div class="container pt130 pt60-sm pb0-sm">
      <div class="row">
        <div class="col-md-4 col-xl-7">
          <div class="footer_about_widget home2 text-center text-md-start">
            <div class="logo mb40 mb0-sm"><img src="/images/header-logo2.svg" alt="header-logo2.svg"></div>
          </div>
        </div>
        <div class="col-md-8 col-xl-5">
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
            <p>Україна, Київська область<br> с. Софіївська Борщагівка<br>вул. Київська, 4</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div class="footer_contact_widget home2">
            <h5 class="title">Зв'язок з нами</h5>
            <div class="footer_phone">+38 099 123 22 33</div>
            <p>myemail@gmail.com</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div class="footer_contact_widget home2">
            <h5 class="title">Ми працюємо</h5>
            <p>Понеділок – П'ятниця: 09:00 – 18:00<br>Суббота: 09:00 – 17:00<br>Неділя: Вихідний</p>
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
    <div class="container">
      <div class="row" style="margin-bottom: -100px">
        <div class="col-md-6 col-lg-8 col-xl-9">
          <div class="copyright-widget home2 mt5 text-center text-md-start">
            <p>Maxvel © 2022.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="footer_social_widget home2 text-center text-md-end">
            <ul class="mr30">
              <li class="list-inline-item"><a href="#"><i style="margin-top: 14px" class="fab fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a href="#"><i style="margin-top: 14px" class="fab fa-telegram"></i></a></li>
              <li class="list-inline-item"><a href="#"><i style="margin-top: 14px" class="fab fa-instagram"></i></a></li>
              <li class="list-inline-item"><a href="#"><i style="margin-top: 14px" class="fab fa-viber"></i></a></li>
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
  name: "FooterIndexComponent"
}
</script>

<style scoped>

</style>