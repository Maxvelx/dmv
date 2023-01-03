<template>
  <div v-if="orders === null" class="preloader"></div>
  <!-- Our Dashbord -->
  <section class="our-dashbord dashbord">
    <div class="col-md-12 col-sm-12 row">
      <MenuComponent></MenuComponent>
      <div class="col-md-9 col-sm-9 bgc-f9-1">
      <div class="row">
          <div class="col-xl-8">
            <div class="col-lg-12 mb50">
              <div class="breadcrumb_content">
                <h2 class="breadcrumb_title">Мої замовлення</h2>
                <p>Відстежуйте статуси ваших замовлень тут</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-left: -100px">
          <div class="col-lg-12">
            <div class="dashboard_favorites_contents dashboard_my_lising_tabs p10-520">
              <div class="row">
                <div class="col-lg-12">
                  <!-- Nav tabs -->
                  <div class="nav nav-tabs justify-content-start" role="tablist" style="padding-left: 30px">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                            role="tab" aria-controls="nav-home" aria-selected="true">Всі замовлення
                    </button>
                    <button class="nav-link" id="nav-shopping-tab" data-bs-toggle="tab" data-bs-target="#nav-shopping"
                            role="tab" aria-controls="nav-shopping" aria-selected="false">В Україні
                    </button>
                    <button class="nav-link" id="nav-hotels-tab" data-bs-toggle="tab" data-bs-target="#nav-hotels"
                            role="tab" aria-controls="nav-hotels" aria-selected="false">Викупленні
                    </button>
                  </div>
                </div>
                <!-- Tab panes -->
                <div class="col-lg-12 mt50" style="padding-left: 30px;padding-right: 30px">
                  <div class="tab-content row" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div class="col-lg-12">
                        <div class="table-responsive my_lisging_table">
                          <table class="table">
                            <thead class="table-light">
                            <tr class="thead_row">
                              <th class="thead_title pl20" scope="col">Номер замовлення</th>
                              <th class="thead_title" scope="col">Кількість позицій</th>
                              <th class="thead_title" scope="col">Дата замовлення</th>
                              <th class="thead_title" scope="col">Сума</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="order in orders">
                              <th class="align-middle pl20" scope="row">
                                <div class="car-listing bdr_none d-flex mb0">
                                  <div class="details ms-1">
                                    <h6 class="title"><a href="">{{order.order_number}}</a></h6>
                                  </div>
                                </div>
                              </th>
                              <td class="align-middle"><p>{{order.parts.length}}</p></td>
                              <td class="align-middle">{{order.time}}</td>
                              <td class="align-middle">{{ order.total_price }}грн</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="row" v-if="paginate !== null && paginate.total > 10">
                          <div class="col-lg-12">
                            <div class="mbp_pagination py-3 px-3">
                              <ul class="page_navigation">
                                <li v-if="paginate.current_page !== 1" class="page-item">
                                  <a @click.prevent="getUserOrders(paginate.current_page -1)" class="page-link" href=""
                                     tabindex="-1">
                                    <span class="fa fa-arrow-left"></span></a></li>
                                <li v-for="link in paginate.links" :class="link.active ? 'active' : ''" class="page-item"
                                    aria-current="page">
                                  <template v-if="Number(link.label)">
                                    <a @click.prevent="getUserOrders(link.label)" class="page-link" href="">{{ link.label }}
                                      <span
                                          class="sr-only"></span></a>
                                  </template>
                                </li>
                                <li v-if="paginate.current_page !== paginate.last_page" class="page-item">
                                  <a class="page-link" href="" @click.prevent="getUserOrders(paginate.current_page +1)">
                                    <span class="fa fa-arrow-right"></span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-shopping" role="tabpanel" aria-labelledby="nav-shopping-tab">
                      <div class="col-lg-12">
                        <div class="table-responsive my_lisging_table">
                          <table class="table">
                            <thead class="table-light">
                            <tr class="thead_row">
                              <th class="thead_title pl20" scope="col">Make</th>
                              <th class="thead_title" scope="col">Model</th>
                              <th class="thead_title" scope="col">Year</th>
                              <th class="thead_title" scope="col">Transmission</th>
                              <th class="thead_title" scope="col">FuelType</th>
                              <th class="thead_title" scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <th class="align-middle pl20" scope="row">
                                <div class="car-listing bdr_none d-flex mb0">
                                  <div class="thumb w150">
                                    <img class="img-fluid" src="" alt="">
                                  </div>
                                  <div class="details ms-1">
                                    <h6 class="title"><a href="">Volvo XC90 - 2020</a></h6>
                                    <h5 class="price">$129</h5>
                                  </div>
                                </div>
                              </th>
                              <td class="align-middle">Volvo</td>
                              <td class="align-middle">2020</td>
                              <td class="align-middle">Automatic</td>
                              <td class="align-middle">Diesel</td>
                              <td class="editing_list align-middle">
                                <ul>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="View" aria-label="View"><span
                                        class="flaticon-view"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Edit" aria-label="Edit"><span
                                        class="flaticon-trash"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Delete" aria-label="Delete"><span
                                        class="flaticon-trash"></span></a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <th class="align-middle pl20" scope="row">
                                <div class="car-listing bdr_none d-flex mb0">
                                  <div class="thumb w150">
                                    <img class="img-fluid" src="" alt="5.jpg">
                                  </div>
                                  <div class="details ms-1">
                                    <h6 class="title"><a href="">Audi A8 L 55 - 2021</a></h6>
                                    <h5 class="price">$129</h5>
                                  </div>
                                </div>
                              </th>
                              <td class="align-middle">Volvo</td>
                              <td class="align-middle">2020</td>
                              <td class="align-middle">Automatic</td>
                              <td class="align-middle">Diesel</td>
                              <td class="editing_list align-middle">
                                <ul>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="View" aria-label="View"><span
                                        class="flaticon-view"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Edit" aria-label="Edit"><span
                                        class="flaticon-pen"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Delete" aria-label="Delete"><span
                                        class="flaticon-trash"></span></a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <th class="align-middle pl20" scope="row">
                                <div class="car-listing bdr_none d-flex mb0">
                                  <div class="thumb w150">
                                    <img class="img-fluid" src="" alt="7.jpg">
                                  </div>
                                  <div class="details ms-1">
                                    <h6 class="title"><a href="">Bentley Bentayga V8 - 2020</a>
                                    </h6>
                                    <h5 class="price">$129</h5>
                                  </div>
                                </div>
                              </th>
                              <td class="align-middle">Volvo</td>
                              <td class="align-middle">2020</td>
                              <td class="align-middle">Automatic</td>
                              <td class="align-middle">Diesel</td>
                              <td class="editing_list align-middle">
                                <ul>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="View" aria-label="View"><span
                                        class="flaticon-view"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Edit" aria-label="Edit"><span
                                        class="flaticon-pen"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Delete" aria-label="Delete"><span
                                        class="flaticon-trash"></span></a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mbp_pagination mt10">
                          <ul class="page_navigation">
                            <li class="page-item">
                              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"> <span
                                  class="fa fa-arrow-left"></span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active" aria-current="page">
                              <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                              <a class="page-link" href="#"><span class="fa fa-arrow-right"></span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-hotels" role="tabpanel" aria-labelledby="nav-hotels-tab">
                      <div class="col-lg-12">
                        <div class="table-responsive my_lisging_table">
                          <table class="table">
                            <thead class="table-light">
                            <tr class="thead_row">
                              <th class="thead_title pl20" scope="col">Make</th>
                              <th class="thead_title" scope="col">Model</th>
                              <th class="thead_title" scope="col">Year</th>
                              <th class="thead_title" scope="col">Transmission</th>
                              <th class="thead_title" scope="col">FuelType</th>
                              <th class="thead_title" scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <th class="align-middle pl20" scope="row">
                                <div class="car-listing bdr_none d-flex mb0">
                                  <div class="thumb w150">
                                    <img class="img-fluid" src="" alt="">
                                  </div>
                                  <div class="details ms-1">
                                    <h6 class="title"><a href="">Volvo XC90 - 2020</a></h6>
                                    <h5 class="price">$129</h5>
                                  </div>
                                </div>
                              </th>
                              <td class="align-middle">Volvo</td>
                              <td class="align-middle">2020</td>
                              <td class="align-middle">Automatic</td>
                              <td class="align-middle">Diesel</td>
                              <td class="editing_list align-middle">
                                <ul>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="View" aria-label="View"><span
                                        class="flaticon-view"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Edit" aria-label="Edit"><span
                                        class="flaticon-trash"></span></a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                       data-bs-original-title="Delete" aria-label="Delete"><span
                                        class="flaticon-trash"></span></a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mbp_pagination mt10">
                          <ul class="page_navigation">
                            <li class="page-item">
                              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"> <span
                                  class="fa fa-arrow-left"></span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active" aria-current="page">
                              <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                              <a class="page-link" href="#"><span class="fa fa-arrow-right"></span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  name: "OrdersComponent",
  components: {MenuComponent},
  data() {
    return {
      user: null,
      orders:null,
      paginate: null,
    }
  },
  mounted() {
    this.getUserOrders()
  },
  methods: {
    getUserOrders(page = 1){
      api.post('/api/orders'+ '?page=' + page)
          .then(res =>{
            this.orders = res.data.data
            this.paginate = res.data.meta
          })
    }
  }
}
</script>

<style scoped>

</style>