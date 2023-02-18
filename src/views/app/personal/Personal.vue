<template>
  <div v-if="user === null" class="preloader"></div>
  <!-- Our Dashbord -->
  <section class="inner_page_breadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="breadcrumb_content">
            <h2 class="breadcrumb_title">Особистий кабінет</h2>
            <p class="subtitle">Головна сторінка</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="user !== null" class="our-dashbord dashbord">
    <div class="col-md-12 col-sm-12 col-xs-12 row">
      <MenuComponent></MenuComponent>
      <div class="col-md-10 col-sm-10 col-xs-10 center-all">
        <div class="row">
          <div class="breadcrumb_content mb50 pl30">
            <h2 class="breadcrumb_title">Вітаємо, {{ this.user.name + ' ' + this.user.patronymic }}!</h2>
            <p>Раді Вас бачити!</p>
          </div>
        </div>
        <div class="row pl30">
          <div class="col-sm-6 col-lg-4" style="max-width: 400px">
            <div class="ff_one float less_transparent">
              <div class="icon"><i class="fa fa-briefcase"></i></div>
              <div class="detais text-end">
                <div v-if="!order">Завантаження...</div>
                <div class="timer">{{ order }}</div>
                <p class="para">Кількість замовлень</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4" style="max-width: 400px">
            <div class="ff_one float less_transparent">
              <div class="icon"><i class="fa fa-car"></i></div>
              <div class="detais text-end">
                <div v-if="!garage">Завантаження...</div>
                <div class="timer">{{ garage }}</div>
                <p class="para">Кількість доданих авто</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4" style="max-width: 400px">
            <div class="ff_one float less_transparent">
              <div class="icon"><i class="fa fa-star"></i></div>
              <div class="detais text-end">
                <div v-if="!wish">Завантаження...</div>
                <div class="timer">{{ wish }}</div>
                <p class="para">Кількість бажаних запчастин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import MenuComponent from "@/views/app/personal/MenuComponent.vue";

export default {
  name: "Personal",
  components: {MenuComponent},
  data() {
    return {
      user: null,
      counter: null,
      wish: null,
      order: null,
      garage: null,
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {

    getUser() {
      api.post('/api/auth/me')
          .then(res => {
            if (res.status === 200) {
              this.user = res.data.data
              api.post('/api/getCounts')
                  .then(res => {
                    this.counter = res.data
                    this.getCountsName()
                  })
            }
          })
    },

    getCountsName(){
      let suffix_wish = {first: 'запчастина', second: 'запчастини', many: 'запчастин'};
      let suffix_order = {first: 'замовлення', second: 'замовлення', many: 'замовлень'};
      let suffix_garage = {first: 'автомобіль', second: 'автомобіля', many: 'автомобілів'};


      this.wish = this.formatCount(this.counter.wish, suffix_wish)
      this.order = this.formatCount(this.counter.order, suffix_order)
      this.garage = this.formatCount(this.counter.garage, suffix_garage)
    },

    formatCount(count, suffix) {

      if (count % 10 === 1 && count % 100 !== 11) {
        suffix = suffix.first;
      } else if (count % 10 >= 2 && count % 10 <= 4 && !(count % 100 >= 12 && count % 100 <= 14)) {
        suffix = suffix.second;
      } else {
        suffix = suffix.many;
      }

      return count + ' ' + suffix;
    },


  },
}

</script>

<style scoped>
.icon > i {
  font-size: 32px;
  margin-top: 17px
}
</style>