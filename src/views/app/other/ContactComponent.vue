<template>
  <!-- Our Contact -->
  <section class="our-contact p0 mt0 mt70-992">
    <div class="container-fluid p0">
      <div class="row">
        <div class="col-lg-12">
          <div class="h600" id="map-canvas" style="position: relative; overflow: hidden;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.8836084513346!2d30.337541715916156!3d50.40600669844704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbca24fac26f%3A0xd40c40213dcf94da!2z0J3QvtCy0LDRjyDQv9C-0YfRgtCwIOKEljEy!5e0!3m2!1suk!2sua!4v1672159588572!5m2!1suk!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
              <p>Україна, Київська область<br> с. Софіївська Борщагівка<br>вул. Київська, 4</p>
              <h4 class="subtitle">+38 099 123 22 33</h4>
              <p>myemail@gmail.com</p>
              <div class="footer_social_widget">
                <ul class="mb0">
                  <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li class="list-inline-item"><a href="#"><i class="fab fa-telegram"></i></a></li>
                  <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a href="#"><i class="fab fa-viber"></i></a></li>
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
                      <textarea name="form_message" class="form-control" rows="6" ></textarea>
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