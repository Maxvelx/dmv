<template>
  <NotificationComponent
      :messages="this.$store.state.messages"
  />
  <template v-if="searchResult !== undefined">
    <div v-if="searchResult === null" class="preloader"></div>
  </template>
  <section style="margin-top: -30px">
    <div class="container-fluid">
      <div class="row posr">
        <div class="col-xl-11 col-xxl-10 m-auto">
          <div class="home_content home7_style">
            <div class="advance_search_panel">
              <div class="home1_advance_search_wrapper">
                <input type="text" v-model="search" class="form-control form-control-border"
                       placeholder="Введіть номер запчастини" v-on:keydown.enter="startSearch()">
                <span class="searchInputButton">
                  <a class="btn btn-template-blue" type="button" @click.prevent="startSearch()">Пошук</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="paginate" class="text-success pl40">Знайдено пропозицій цієї запчастини: {{paginate.total}} </div>

      <div style="padding-top: 45px">
        <div v-if="searchResult === undefined"
             class="alert alart_style_two alert-dismissible fade show col-md-7 m-auto wow fadeInUp"
             data-wow-duration="1s"
             style="visibility: visible; animation-duration: 1s;">
          За вашим запитом: {{ watchSearch }} нічого не знайдено, спробуйте інший номер, <br> або зателефонуйте нам 099
          123 33 22, ми з радістю Вам допоможемо
        </div>
      </div>
    </div>
  </section>
  <template v-if="searchResult !== undefined">
    <div class="pb100">
      <table class="show wow fadeInUp" style="margin-top: -150px;visibility: visible; animation-duration: 1s;"
             data-wow-duration="1s">
        <thead>
        <tr>
          <th>Бренд</th>
          <th>Номер зап.</th>
          <th>Назва</th>
          <th>Термін поставки</th>
          <th>Ціна</th>
          <th>Наявність</th>
          <th>Термін</th>
          <th>Дія</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="part in this.searchResult">
          <tr>
            <td>{{ part.part_brand }}</td>
            <td>{{ part.part_number }}</td>
            <td><a href="" @click.prevent="this.$store.dispatch('getPartSingle',part)">{{ part.part_name }}</a></td>
            <td>{{ part.time }}</td>
            <td>{{ part.price }}{{ part.currency }}</td>
            <td v-if="part.qty > 0" class="text-success">
              {{ part.qty }} од. в наявності
            </td>
            <td v-if="part.qty <= 0" class="text-thm">
              Під замовлення
            </td>
            <td v-if="part.qty > 0" style="color: #98C900">
              {{
                part.time !== null ? 'На складі через: ' + part.time : 'Готово до видачі'
              }}
            </td>
            <td v-if="part.time !== null && part.qty <= 0">
              Через {{ part.time }} на складі
            </td>
            <td v-if="part.time === null && part.qty <= 0">
              Має варіанти доставки
            </td>
            <!--          <td :class="part.qty <= 0 ? 'text-thm' : 'text-success'">-->
            <!--            {{ part.qty <= 0 ? 'Під замовлення' : 'У наявності' }} {{part.qty}}-->
            <!--          </td>-->
            <td>
              <a
                  @click.prevent="this.$store.dispatch('addToOrder',part)" href="" style="padding-right: 10px">
                <img v-if="!this.$store.state.cartIds.includes(part.id)" src="/images/etc/beforeCart.png">
                <img v-if="this.$store.state.cartIds.includes(part.id)" src="/images/etc/afterCart2.png">
              </a>
              <a v-if="this.$store.state.authUser !== null" @click.prevent="this.$store.dispatch('addToWishlist',part)"
                 href="">
                <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartBefore.png">
                <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartAfter.png">
              </a>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
      <div class="row" v-if="paginate && paginate.total > 5">
        <div class="col-lg-12">
          <div class="mbp_pagination py-3 px-3">
            <ul class="page_navigation">
              <li v-if="paginate && paginate.current_page !== 1" class="page-item">
                <a @click.prevent="getSearchOem(paginate.current_page -1)" class="page-link" href="" tabindex="-1">
                  <span class="fa fa-arrow-left"></span></a></li>
              <li v-for="link in paginate.links" :class="link.active ? 'active' : ''" class="page-item"
                  aria-current="page">
                <template v-if="Number(link.label)">
                  <a @click.prevent="getSearchOem(link.label)" class="page-link" href="">{{ link.label }} <span
                      class="sr-only"></span></a>
                </template>
              </li>
              <li v-if="paginate.current_page !== paginate.last_page" class="page-item">
                <a class="page-link" href="" @click.prevent="getSearchOem(paginate.current_page +1)">
                  <span class="fa fa-arrow-right"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="paginate_replace" class="text-success pl50 pb20 pt20">Знайдено аналогів для цієї запчастини: {{paginate_replace.total}}</div>
      <table v-if="searchResult_replace" class="show wow fadeInUp" style="visibility: visible; animation-duration: 1s;"
             data-wow-duration="1s">
        <thead>
        </thead>
        <tbody>
        <td style="text-decoration: underline;font-weight: 600;font-size: 20px;padding: 20px">
          Аналоги
        </td>
        <template v-for="part in this.searchResult_replace">
          <tr>
            <td>{{ part.part_brand }}</td>
            <td>{{ part.part_number }}</td>
            <td><a href="" @click.prevent="this.$store.dispatch('getPartSingle',part)">{{ part.part_name }}</a></td>
            <td>{{ part.time }}</td>
            <td>{{ part.price }}{{ part.currency }}</td>
            <td v-if="part.qty > 0" class="text-success">
              {{ part.qty }} од. в наявності
            </td>
            <td v-if="part.qty <= 0" class="text-thm">
              Під замовлення
            </td>
            <td v-if="part.qty > 0" style="color: #98C900">
              {{
                part.time !== null ? 'На складі через: ' + part.time : 'Готово до видачі'
              }}
            </td>
            <td v-if="part.time !== null && part.qty <= 0">
              Через {{ part.time }} на складі
            </td>
            <td v-if="part.time === null && part.qty <= 0">
              Має варіанти доставки
            </td>
            <td>
              <a
                  @click.prevent="this.$store.dispatch('addToOrder',part)" href="" style="padding-right: 10px">
                <img v-if="!this.$store.state.cartIds.includes(part.id)" src="/images/etc/beforeCart.png">
                <img v-if="this.$store.state.cartIds.includes(part.id)" src="/images/etc/afterCart2.png">
              </a>
              <a v-if="this.$store.state.authUser !== null" @click.prevent="this.$store.dispatch('addToWishlist',part)"
                 href="">
                <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartBefore.png">
                <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartAfter.png">
              </a>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
      <div class="row" v-if="paginate_replace && paginate_replace.total > 5">
        <div class="col-lg-12">
          <div class="mbp_pagination py-3 px-3">
            <ul class="page_navigation">
              <li v-if="paginate_replace && paginate_replace.current_page !== 1" class="page-item">
                <a @click.prevent="getSearch(paginate_replace.current_page -1)" class="page-link" href="" tabindex="-1">
                  <span class="fa fa-arrow-left"></span></a></li>
              <li v-for="link in paginate_replace.links" :class="link.active ? 'active' : ''" class="page-item"
                  aria-current="page">
                <template v-if="Number(link.label)">
                  <a @click.prevent="getSearch(link.label)" class="page-link" href="">{{ link.label }} <span
                      class="sr-only"></span></a>
                </template>
              </li>
              <li v-if="paginate_replace.current_page !== paginate_replace.last_page" class="page-item">
                <a class="page-link" href="" @click.prevent="getSearch(paginate_replace.current_page +1)">
                  <span class="fa fa-arrow-right"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>

  <FooterComponent></FooterComponent>
</template>

<script>

import router from "@/router";
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import NotificationComponent from "@/views/app/notification/NotificationComponent.vue";

export default {
  name: "SearchPartComponent",
  components: {NotificationComponent, FooterComponent},
  data() {
    return {
      num_oem: null,
      search: null,
      searchResult: null,
      searchResult_replace: null,
      paginate: null,
      paginate_replace: null,
      watchSearch: this.$route.params.search,
    }
  },
  mounted() {
    this.getSearch()
    this.getSearchOem()
    this.$store.dispatch('getWishlist')
  },
  methods: {

    startSearch() {
      router.push({name: 'search', params: {search: this.search}})
      this.watchSearch = this.search
      this.searchResult = null
      this.getSearch()
      this.getSearchOem()
    },

    getSearch(page = 1) {
      this.axios.get('/api/search?search=' + this.watchSearch + '&page=' + page)
          .then(res => {
            console.log(res);
            this.searchResult_replace = res.data.data
            this.paginate_replace = res.data.meta
          })
    },

    getSearchOem(page = 1) {
      this.axios.get('/api/oem_search?search=' + this.watchSearch + '&page=' + page)
          .then(res => {
            this.searchResult = res.data.data
            this.paginate = res.data.meta
          })
    }

  }
}
</script>

<style scoped lang="scss">
// sets

$gl-ms: "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs: "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm: "screen and (max-width: 48em)"; // max 768px
$gl-md: "screen and (max-width: 64em)"; // max 1024px
$gl-lg: "screen and (max-width: 80em)"; // max 1280px

// table style

table {
  border-spacing: 1px;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  width: 95%;
  margin: 0 auto;
  position: relative;
  -webkit-box-shadow: 0 18px 60px rgba(23, 26, 33, 0.05);
  -moz-box-shadow: 0 18px 60px rgba(23, 26, 33, 0.05);
  -o-box-shadow: 0 18px 60px rgba(23, 26, 33, 0.05);
  box-shadow: 0 18px 60px rgba(23, 26, 33, 0.05);

  * {
    position: relative
  }

  td, th {
    padding-left: 18px;
    padding-right: 18px;

  }

  thead tr {
    height: 60px;
    background: #f5c34b;
    font-size: 16px;
  }

  tbody tr {
    height: 48px;
    border-bottom: 1px solid #E3F1D5;

    &:last-child {
      border: 0;
    }
  }

  td, th {
    text-align: left;

    &.l {
      text-align: right
    }

    &.c {
      text-align: center
    }

    &.r {
      text-align: center
    }
  }
}


@media #{$gl-xs}              {

  table {
    display: block;

    > *, tr, td, th {
      display: block
    }

    thead {
      display: none
    }

    tbody tr {
      height: auto;
      padding: 8px 0;

      td {
        padding-left: 45%;
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 30px
        }

        &:before {
          position: absolute;
          font-weight: 700;
          width: 40%;
          left: 10px;
          top: 0
        }

        &:nth-child(1):before {
          content: "Бренд";
        }

        &:nth-child(2):before {
          content: "Номер зап.";
        }

        &:nth-child(3):before {
          content: "Назва";
        }

        &:nth-child(4):before {
          content: "Термін поставки";
        }

        &:nth-child(5):before {
          content: "Ціна";
        }

        &:nth-child(6):before {
          content: "Наявність";
        }

        &:nth-child(7):before {
          content: "Дія";
        }
      }
    }
  }
}


// body style

body {
  background: #9BC86A;
  font: 400 14px 'Calibri', 'Arial';
  padding: 20px;
}

blockquote {
  color: white;
  text-align: center;
}
</style>