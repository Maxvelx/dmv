<template>

  <!-- We Are The Best -->
  <section class="we-are-best" style="margin-top: 100px; margin-bottom: -150px">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 m-auto">
          <div class="main-title text-center">
            <h2>Чому саме ми?</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
             style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s;">
          <div class="why_chose_us home7_style">
            <div class="icon"><span><img src="/images/home/parts.png" alt="" class="icon_about_us"></span>
            </div>
            <div class="details">
              <h5 class="title">Великий вибір запчастин</h5>
              <p>Ми пропонуємо величезний вибір оригінальних та неоригінальних запчастин для різних видів автомобілів.
                Незалежно від того, чи ви шукаєте запчастини для європейських, азійських чи американських марок
                автомобілів, ми маємо все, що вам потрібно. Наші запчастини забезпечують високу якість та надійність, що
                забезпечує безпеку і комфорт управління автомобілем.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"
             style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s;">
          <div class="why_chose_us home7_style">
            <div class="icon style2"><span><img src="/images/home/graph.png" alt=""
                                                class="icon_about_us"></span></div>
            <div class="details">
              <h5 class="title">Доступні ціни</h5>
              <p>Однією з головних переваг нашої компанії є те, що ми пропонуємо конкурентні ціни на всі наші запчастини.
                Наші ціни набагато нижчі, ніж ціни у більшості автомобільних магазинів та сервісних центрів. Це дозволяє
                нашим клієнтам заощаджувати кошти та мати доступ до високоякісних запчастин за доступними цінами.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"
             style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s;">
          <div class="why_chose_us home7_style">
            <div class="icon style3"><span><img src="/images/home/truck.png" alt=""
                                                class="icon_about_us"></span></div>
            <div class="details">
              <h5 class="title">Особистий підхід</h5>
              <p>Ми розуміємо, що наші клієнти можуть мати різні потреби та запити, тому ми завжди намагаємося
                забезпечити їхнє задоволення. Наша команда професіоналів готова надати консультації та допомогти в
                підборі потрібної запчастини. Ми завжди стараємося надавати високоякісний сервіс, щоб наші клієнти
                поверталися до нас знову та знову.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Car For Rent -->
  <section class="car-for-rent pb90">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="main-title text-center text-md-start mb20-sm">
            <h2 class="title">Популярні моделі</h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-center text-md-end mb30-sm">
            <router-link :to="{name: 'shop'}"><a href="" class="more_listing">Показати всі марки <span
                class="icon"><span style="margin-top: 11px"
                                   class="fas fa-plus"></span></span></a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="brand in brands" class="col-6 col-sm-6 col-md-4 col-lg col-xl wow fadeInUp" data-wow-duration="1s"
             data-wow-delay="0.1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s;">
          <router-link :to="{name: 'parts', params: {id: brand.id}}">
            <div class="category_item home7_style">
              <img class="index_brand_grid" :src="brand.image" alt="1.png">
              <div class="details">
                <p class="title"><a href="">{{ brand.name }}</a></p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SelectByCarComponent",
  data() {
    return {
      brands: null,
    }
  },
  mounted() {
    this.getBrandsIndex()
  },
  methods: {
    getBrandsIndex() {
      this.axios.get('/api/index/brands')
          .then(res => {
            this.brands = res.data.data
          })
    }
  }
}
</script>

<style scoped>

</style>