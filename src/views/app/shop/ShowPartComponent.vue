<template>
  <div v-if="part === null" class="preloader"></div>
  <div v-if="part !== null">
    <NotificationComponent
        :messages="this.$store.state.messages"
    />
  <!-- Shop Single Content -->
  <section class="shop-single-content pt100 pb40 ovh bgc-f9">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="single_product_grid">
            <div class="sps_content">
              <div class="thumb">
                <div class="single_product">
                  <div class="single_item">
                    <div v-if="part.image !== 0" class="thumb"><img class="img-fluid" :src="part.image"  alt="partImage"></div>
                    <div v-if="part.image === 0" class="thumb"><img class="img-fluid" src="/images/etc/zaglushkaPart.jpg"  alt="partImage"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="shop_single_product_details p0-414">
            <h3 class="title">{{part.part_name}}</h3>
            <p class="mb25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nulla faucibus viverra nisl
              non senectus tortor. Suspendisse pellentesque elementum proin diam.</p>
            <div class="sspd_price mb30">{{part.price}}грн</div>
            <ul class="cart_btns instock_area mb30">
<!--              <li class="list-inline-item"><input placeholder="1" type="number"></li>-->
              <li v-if="part.qty && part.qty != 0" style="font-size: 16px" class="list-inline-item"><span class="fa fa-check-circle text-thm3 ml10 mr5 fz18"></span> {{part.qty}} у наявності</li>
            <li v-if="part.qty <= 0" class="text-warning" style="font-size: 16px">Під замовлення</li>
            </ul>
            <ul class="cart_btns wishlist_compare mb20">
              <li class="list-inline-item">
                <button @click.prevent="this.$store.dispatch('addToOrder',part)" type="button" class="btn btn-thm"><img class="mr10" src="/images/shop/cart-bag.svg"
                                                               alt="cart-bag.svg">Додати в замовлення
                </button>
              </li>
              <a class="favorite_icon" v-if="this.$store.state.authUser !== null" @click.prevent="this.$store.dispatch('addToWishlist',part)" href="">
                <img v-if="!this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartBefore1.png">
                <img v-if="this.$store.state.wishlistIds.includes(part.id)"
                     src="/images/etc/heartAfter.png">
              </a>
              <a class="favorite_icon" v-if="this.$store.state.authUser === null">
                <router-link to="/">
                  <img src="/images/etc/heartBefore1.png">
                </router-link>
              </a>
            </ul>
            <div class="col-8 row">
              <div class="col-6 fnt700">Виробник:</div><div class="col-6">{{part.part_brand}}</div>
              <div class="col-6 fnt700">Номер запчастини:</div><div class="col-6">{{part.part_number}} </div>
              <div class="col-6 fnt700">Оригінальний номер:</div><div class="col-6">{{part.part_number_oem}}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="shop_single_tab_content mt70">
            <ul class="nav nav-tabs justify-content-center" id="myTab2" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description"
                        type="button" role="tab" aria-controls="description" aria-selected="true">Опис запчастини
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button"
                        role="tab" aria-controls="reviews" aria-selected="false"> Відгуки (2)
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent2">
              <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                <div class="row">
                  <div class="col-lg-8 m-auto">
                    <div class="product_single_content">
                      <div class="mbp_pagination_comments">
                        <div class="mbp_first">
                          <h5 class="title">Деталі запчастини</h5>
                          <p class="mb30">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                            ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                            placerat eleifend leo.</p>
                          <h5 class="title">Material and care</h5>
                          <div class="ui_page_heading float-start mr100">
                            <ul class="order_list list-style-type-bullet list-inline-item">
                              <li><a href="#">Main: 100% Cotton</a></li>
                              <li><a href="#">Soft twill</a></li>
                              <li><a href="#">Ribbed, diagonal pattern</a></li>
                            </ul>
                          </div>
                          <div class="ui_page_heading">
                            <ul class="order_list list-style-type-bullet list-inline-item">
                              <li><a href="#">One size fits all</a></li>
                              <li><a href="#">Imported</a></li>
                              <li><a href="#">Product color: Dark greenish</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="shop_single_tab_content mb30-991">
                      <div class="product_single_content">
                        <div class="mbp_pagination_comments">
                          <h5 class="fz16 mb30">Reviews</h5>
                          <div class="mbp_first d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <img src="" class="mr-3" alt="reviewer1.png">
                            </div>
                            <div class="flex-grow-1 ms-4">
                              <h4 class="sub_title mt20">Bessie Cooper</h4>
                              <div class="sspd_postdate mb15">April 6, 2021 at 3:21 AM
                                <div class="sspd_review float-end">
                                  <ul class="mb0 pl15">
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item">(5 reviews)</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="mt15 mb30">Every single thing we tried with John was delicious! Found some awesome
                            places we would definitely go back to on our trip. John was also super friendly and
                            passionate about Beşiktaş and Istanbul.</p>
                          <hr>
                          <div class="mbp_first d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <img src="" class="mr-3" alt="reviewer2.png">
                            </div>
                            <div class="flex-grow-1 ms-4">
                              <h4 class="sub_title mt20">Savannah Nguyen</h4>
                              <div class="sspd_postdate mb15">April 6, 2021 at 3:21 AM
                                <div class="sspd_review float-end">
                                  <ul class="mb0 pl15">
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item">(5 reviews)</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="mt15 mb30">Every single thing we tried with John was delicious! Found some awesome
                            places we would definitely go back to on our trip. John was also super friendly and
                            passionate about Beşiktaş and Istanbul.</p>
                          <hr>
                          <div class="mbp_first d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <img src="" class="mr-3" alt="reviewer3.png">
                            </div>
                            <div class="flex-grow-1 ms-4">
                              <h4 class="sub_title mt20">Albert Flores</h4>
                              <div class="sspd_postdate mb15">April 6, 2021 at 3:21 AM
                                <div class="sspd_review float-end">
                                  <ul class="mb0 pl15">
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="mt15">Every single thing we tried with John was delicious! Found some awesome places
                            we would definitely go back to on our trip. John was also super friendly and passionate
                            about Beşiktaş and Istanbul.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="bsp_reveiw_wrt pt30">
                      <form class="comments_form">
                        <div class="row">
                          <div class="col-lg-12">
                            <h5 class="fz16 mb30">Write a review</h5>
                            <div class="sspd_review mb30">
                              <ul>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input type="text" class="form-control form_control" placeholder="Your Name">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input type="email" class="form-control form_control" placeholder="Email">
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="mb-3">
                              <textarea class="form-control form_control" rows="6" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-check mb-3">
                              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                              <label class="form-check-label" for="defaultCheck1">Save my name, email, and website in
                                this browser for the next time I comment.</label>
                            </div>
                            <button type="submit" class="btn btn-thm">Send Your Review</button>
                          </div>
                        </div>
                      </form>
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

  <!-- Our Shopping Product -->
  <section class="our-shop pt0 bgc-f9 pb90">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="main-title text-center">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="recent_property_slider_home5 dots_none nav_none owl-carousel owl-theme owl-loaded">


            <div class="owl-stage-outer">
              <div class="owl-stage"
                   style="transform: translate3d(-1326px, 0px, 0px); transition: all 0s ease 0s; width: 3978px;">
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="1.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src=""
                                                                                        alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="2.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src="" alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="5.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src=""
                                                                                        alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="4.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src=""
                                                                                        alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="1.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src=""
                                                                                        alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="2.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src="" alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="5.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src="" alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="4.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src=""
                                                                                        alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="1.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src=""
                                                                                        alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="2.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src="" alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="5.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src="" alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 301.5px; margin-right: 30px;">
                  <div class="item">
                    <div class="shop_item">
                      <div class="thumb"><img src="" alt="4.png"></div>
                      <div class="details">
                        <div class="title">12v Compact Battery Jump Starter</div>
                        <div class="review">
                          <ul class="mb0">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
                            <li class="list-inline-item">4.7</li>
                          </ul>
                        </div>
                        <div class="si_footer">
                          <div class="price float-start"><small>
                            <del>$129</del>
                          </small>$129
                          </div>
                          <a class="cart_btn float-end" href=""><img src="" alt="cart-bag.svg"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-controls">
              <div class="owl-nav">
                <div class="owl-prev" style=""><i class="flaticon-left-arrow"></i></div>
                <div class="owl-next" style=""><i class="flaticon-right-arrow"></i></div>
              </div>
              <div class="owl-dots" style="display: block;">
                <div class="owl-dot active"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <FooterComponent></FooterComponent>
  </div>

</template>

<script>
import axios from "axios";
import FooterComponent from "@/views/app/etc/FooterComponent.vue";
import NotificationComponent from "@/views/app/notification/NotificationComponent.vue";

export default {
  name: "ShowPartComponent",
  components: {NotificationComponent, FooterComponent},
  data() {
    return {
      part: null,
    }
  },
  mounted() {
    this.getSingleProduct()
  },
  methods: {
    getSingleProduct() {
      axios.get('/api/parts/show/' + this.$route.params.id)
          .then(res => {
            console.log(this.part = res.data.data);
          })
    },
  }
}
</script>

<style scoped>
.fnt700{
  font-weight: 700;
}
</style>