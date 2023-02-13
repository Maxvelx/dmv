<template>
  <!-- Our Contact -->
  <section class="our-contact p0 mt0 mt70-992">
    <div class="container-fluid p0">
      <div class="row">
        <div class="col-lg-12">
          <div class="h600" id="map-canvas" style="position: relative; overflow: hidden;">
            <div v-html="this.$store.state.siteInfo.google_maps"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Contact -->
  <section class="our-contact inner_page_section_spacing bgc-f9">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact_icon_box mb50">
            <div class="details">
              <h3 class="title">Зв'язок з нами</h3>
              <p>{{ this.$store.state.siteInfo.city }}<br> {{ this.$store.state.siteInfo.state }}
                <br>{{ this.$store.state.siteInfo.address }}</p>
              <h4 class="footer_phone pb10">{{ this.$store.state.siteInfo.phone }}</h4>
              Наш email:
              <a :href="'mailto:'+this.$store.state.siteInfo.email">
                {{ this.$store.state.siteInfo.email }}</a>
              <div class="footer_social_widget mt30">
                <ul class="mb0">
                  <a style="padding-left: 7px" :href="this.$store.state.siteInfo.facebook"
                     rel="noopener noreferrer nofollow"
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
        <div class="col-md-8">
          <div class="form_grid">
            <div class="wrapper">
              <h3 class="title mb20">Написати нам</h3>
              <form class="contact_form" name="contact_form" action="#" method="post" novalidate="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Ім'я*</label>
                      <input class="form-control" type="text" placeholder="Ваше ім'я">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">По батькові*</label>
                      <input class="form-control" type="text" placeholder="По батькові">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Email*</label>
                      <input class="form-control email" type="email" placeholder="Ваша email адреса">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Телефон</label>
                      <input class="form-control" type="text" placeholder="Ваш телефон">
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Ваше звернення*</label>
                      <textarea name="form_message" class="form-control" rows="6"></textarea>
                    </div>
                    <div class="form-group mb0">
                      <button type="button" class="btn btn-thm">Відправити</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped>
</style>