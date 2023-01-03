<template>

  <div class="row" style="padding-top: 50px">
    <div class="col-lg-12 m-auto">
      <div class="home_content_home7_slider">
        <div class="home_content_home7">
          <div v-if="isActive !== null" class="wow wow fadeInUp" data-wow-duration="1s"
               data-wow-delay="0.1s" style="visibility: visible;margin-top: -50px; animation-duration: 1s; animation-delay: 0.1s;">
            <h2 class="title">Запит по Vin номеру</h2>
            <div class="row pb20">
              <div class="form_wrapper col-md-6">
                <input type="text" class="form-control form-control-border col-md-5"
                       placeholder="Введіть VIN номер автомобіля">
              </div>
              <div class="form_wrapper col-md-6">
                <input type="text" class="form-control form-control-border col-md-5"
                       placeholder="Як до Вас звертатись?">
              </div>
            </div>
            <div class="row pb20">
              <div class="form_wrapper col-md-6">
                <input type="text" class="form-control form-control-border col-md-5"
                       placeholder="Ваш номер телефону">
              </div>
              <div class="form_wrapper col-md-6">
                <input type="text" class="form-control form-control-border col-md-5"
                       placeholder="Ваша email адреса">
              </div>
            </div>
            <div class="row pb20">
              <div class="form_wrapper col-md-12">
              <textarea type="text" class="form-control form-control-border col-md-5"
                        placeholder="Перелік потрібних запчастин" style="height: 150px"></textarea>
              </div>
            </div>
            <div class="wrapper text-center">
              <div class="d-flex justify-content-center">
                <a class="btn btn1 btn-thm2 mr20" href="">Надіслати запит</a>
                <a class="btn btn2 btn-thm" href="" @click.prevent="isActive = null">Повернутись</a>
              </div>
            </div>
          </div>
          <div v-if="isActive === null" class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
               style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s;">
            <div class="wrapper text-center">
              <!--            <h2 class="title"><a href="page-car-single-v1.html">Mercedes-Benz S-->
              <!--              560 - 2021</a></h2>-->
              <!--            <h3 class="subtitle text-thm">-->
              <!--                                                        <span class="aminated-object1"><img class="objects"-->
              <!--                                                                                            src="images/home/title-bottom-border.svg"-->
              <!--                                                                                            alt=""></span>-->
              <!--              <span>$746</span> <small>/ Month</small>-->
              <!--            </h3>-->
              <div class="d-flex justify-content-center">
                <a class="btn btn1 btn-thm2 mr20" href="" @click.prevent="isActive = 1">Запит по Vin</a>
                <router-link :to="{name: 'shop'}"><a class="btn btn2 btn-thm" href="">Магазин</a></router-link>
              </div>
            </div>
            <div class="thumb">
              <img class="img-fluid" src="/images/home/slider.webp"
                   alt="slide1_home7.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPartComponent from "@/views/app/home/SearchPartComponent.vue";

export default {
  name: "SliderComponent",
  components: {SearchPartComponent},
  data() {
    return {
      isActive: null
    }
  }
}
</script>

<style scoped>

</style>