<template>

  <section class="our-dashbord dashbord">
    <div class="container-fluid">
      <div class="row">
        <MenuComponent></MenuComponent>
        <div class="col-md-9 col-sm-9 bgc-f9-1">
        <div class="row">
          <div class="col-xl-8">
            <div class="col-lg-12 mb50">
              <div class="breadcrumb_content">
                <h2 class="breadcrumb_title">Profile</h2>
                <p>Ready to jump back in?</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-left: -80px">
          <div class="col-lg-12">
            <div class="new_property_form mb30">
              <h4 class="title mb30">Account Details</h4>
              <div class="dp_user_thumb_content">
                <div class="wrap-custom-file mb25">
                  <input type="file" name="image1" id="image1" accept=".gif, .jpg, .png">
                  <label for="image1">
                    <span>&nbsp;&nbsp;Browse</span>
                  </label>
                  <small class="file_title">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg
                    &amp; .png</small>
                </div>
              </div>
              <form class="contact_form" name="contact_form" action="#" method="post" novalidate="">
                <div class="row">
                  <div class="col-lg-7">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb20">
                          <input name="form_name" class="form-control form_control" type="text" placeholder="Name">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <input name="form_name" class="form-control form_control" type="text" placeholder="Location">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <input name="form_name" class="form-control form_control" type="text" placeholder="Phone">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb20">
                          <input name="form_name" class="form-control form_control" type="text" placeholder="Email">
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="ui_kit_select_search add_new_property mb20">
                          <div class="dropdown bootstrap-select" style="width: 100%;"><select class="selectpicker"
                                                                                              data-live-search="true"
                                                                                              data-width="100%">
                            <option>Type</option>
                            <option data-tokens="Seller">Seller</option>
                            <option data-tokens="Purchaser">Purchaser</option>
                            <option data-tokens="Dealer">Dealer</option>
                            <option data-tokens="Other">Other</option>
                          </select>
                            <button type="button" tabindex="-1" class="btn dropdown-toggle btn-light"
                                    data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1"
                                    aria-haspopup="listbox" aria-expanded="false" title="Type">
                              <div class="filter-option">
                                <div class="filter-option-inner">
                                  <div class="filter-option-inner-inner">Type</div>
                                </div>
                              </div>
                            </button>
                            <div class="dropdown-menu ">
                              <div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"
                                                               role="combobox" aria-label="Search"
                                                               aria-controls="bs-select-1" aria-autocomplete="list">
                              </div>
                              <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1">
                                <ul class="dropdown-menu inner show" role="presentation"></ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb20">
                          <textarea name="form_message" class="form-control" rows="10" placeholder="Type"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="new_propertyform_btn">
                          <a href="#" class="btn btn-thm ad_flor_btn">Save</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="new_property_form">
              <div class="row">
                <div class="col-lg-12">
                  <h4 class="title mb30">Change Password</h4>
                </div>
                <div class="col-sm-6 col-lg-7">
                  <div class="mb20">
                    <input name="form_name" class="form-control form_control" type="text" placeholder="Old Password">
                  </div>
                </div>
                <div class="col-sm-6 col-lg-7">
                  <div class="mb20">
                    <input name="form_name" class="form-control form_control" type="text" placeholder="New Password">
                  </div>
                </div>
                <div class="col-sm-6 col-lg-7">
                  <div class="mb20">
                    <input name="form_name" class="form-control form_control mb20" type="text"
                           placeholder="Re-enter New Password">
                    <a href="#" class="btn btn-thm ad_flor_btn">Save</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="new_property_form">
              <div class="row">
                <div class="col-lg-7">
                  <div class="row">
                    <div class="col-lg-12">
                      <h4 class="title mb30">Your Social Networks</h4>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb20">
                        <input name="form_name" class="form-control form_control" type="text" placeholder="Facebook">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb20">
                        <input name="form_name" class="form-control form_control" type="text" placeholder="Twitter">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb20">
                        <input name="form_name" class="form-control form_control" type="text" placeholder="Linked In">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb20">
                        <input name="form_name" class="form-control form_control mb20" type="text"
                               placeholder="Youtube">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <a href="#" class="btn btn-thm ad_flor_btn">Save</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="new_property_form">
              <div class="row">
                <div class="col-lg-12">
                  <h4 class="title mb30">Gallery</h4>
                </div>
                <div class="col-lg-12">
                  <label class="form-label">Featured Image</label>
                  <ul class="mb0 mt10">
                    <li class="list-inline-item">
                      <div class="portfolio_item">
                        <img class="img-fluid" src="" alt="">
                        <div class="edu_stats_list" data-toggle="tooltip" data-placement="top" title="Delete"
                             data-original-title="Delete">
                          <a href="#"><span>X</span></a>
                        </div>
                      </div>
                    </li>
                    <li class="list-inline-item vat">
                      <div class="upload_file_input_add_remove style-right mb30-sm">
                          <span class="btn_upload">
                            <input type="file" id="imag3" title="" class="input-img" placeholder="UPLOAD FILES">
                            <span class="">UPLOAD FILES</span>
                          </span>
                        <img id="ImgPreview3" src="" class="preview3" alt="">
                        <button id="removeImage3" class="btn-rmv3" type="button"><span>X</span></button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <div class="mb20">
                    <label class="form-label">Video - copy any online video link e.g. YouTube, Facebook, Instagram or
                      .mp4</label>
                    <input name="form_name" class="form-control form_control" type="text" placeholder="Video Link">
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
import MenuComponent from "@/views/app/personal/MenuComponent.vue";
export default {
  name: "ProfileComponent",
  components: {MenuComponent},
}
</script>

<style scoped>

</style>