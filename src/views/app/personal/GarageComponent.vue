<template>
  <div class="preloader" v-if="cars === null"></div>
  <section class="inner_page_breadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="breadcrumb_content">
            <h2 class="breadcrumb_title">Особистий кабінет</h2>
            <p class="subtitle">Ваші автомобілі</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="our-dashbord dashbord">
    <div class="col-md-12 col-sm-12 row">
      <MenuComponent></MenuComponent>
      <div class="col-md-10 col-sm-10 pl6 0 center-all">
        <div v-if="opencar === null" class="row">
          <div v-for="car in cars" class="owl-item zoom"
               style="min-width: 300px;max-width: 360px;border-radius: 10px;padding: 30px;">
            <div class="item" @click.prevent="openCar(car)">
              <div class="car-listing float">
                <div class="thumb">
                  <img style="height: 200px;aspect-ratio: 3/2;object-fit: contain;"
                       :src="car.image === 0 ? '/images/2.png':car.image" alt="1.jpg">
                </div>
                <div class="details">
                  <div class="wrapper">
                    <h5 class="price">{{ car.year }}</h5>
                    <h6 class="title"><a href="">{{ car.model }}</a></h6>
                    <div class="listign_review">
                    </div>
                  </div>
                  <div class="listing_footer">
                    <ul class="mb0">
                      <li v-if="car.body != 'null'" class="list-inline-item"><a href="#"><span
                          class="flaticon-road-perspective me-2"></span>{{ car.body }}</a>
                      </li>
                      <li class="list-inline-item"><a href="#"><span
                          class="flaticon-gas-station me-2"></span>{{ car.engine }}</a>
                      </li>
                      <li v-if="car.transmission != 'null'" class="list-inline-item"><a href="#"><span
                          class="flaticon-gear me-2"></span>{{ car.transmission }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item zoom" style="min-width: 300px;max-width: 360px;border-radius: 10px;padding: 30px;">
            <div class="item" @click.prevent="openForm">
              <div class="float">
                <div class="thumb">
                  <img src="/images/plus.jpg" alt="Add">
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="paginate && paginate.total > 5">
            <div class="col-lg-12">
              <div class="mbp_pagination py-3 px-3">
                <ul class="page_navigation">
                  <li v-if="paginate.current_page !== 1" class="page-item">
                    <a @click.prevent="getAllCars(paginate.current_page -1)" class="page-link" href=""
                       tabindex="-1">
                      <span class="fa fa-arrow-left"></span></a></li>
                  <li v-for="link in paginate.links" :class="link.active ? 'active' : ''" class="page-item"
                      aria-current="page">
                    <template v-if="Number(link.label)">
                      <a @click.prevent="getAllCars(link.label)" class="page-link" href="">{{ link.label }}
                        <span
                            class="sr-only"></span></a>
                    </template>
                  </li>
                  <li v-if="paginate.current_page !== paginate.last_page" class="page-item">
                    <a class="page-link" href="" @click.prevent="getAllCars(paginate.current_page +1)">
                      <span class="fa fa-arrow-right"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div v-if="opencar === 1" class="container1 float1">
          <a class="button1" onclick="document.getElementById('id01').style.display='block'">Видалити</a>
          <a class="button2" @click="editformCar(singleCar)">Редагувати</a>
          <div class="row m-0">
            <div class="col-lg-7 pb-5 pe-lg-5">
              <div class="row">
                <div class="col-12 p-5">
                  <img style="width: 350px;aspect-ratio: 3/2;object-fit: contain"
                       :src="singleCar.image === 0 ? '/images/2.png':singleCar.image"
                       alt="">
                </div>
                <div class="row m-0 bg-light">
                  <div class="col-md-4 col-6 ps-30 pe-0 my-4">
                    <p class="text-muted">Двигун</p>
                    <p class="h5">{{ singleCar.engine }}</p>
                  </div>
                  <div class="col-md-4 col-6  ps-30 my-4">
                    <p class="text-muted">Трансмісія</p>
                    <p class="h5 m-0">{{
                        singleCar.transmission !== 'null' ? singleCar.transmission : 'не вказано'
                      }}</p>
                  </div>
                  <div class="col-md-4 col-6 ps-30 my-4">
                    <p class="text-muted">Привід</p>
                    <p class="h5 m-0">{{ singleCar.drive !== 'null' ? singleCar.drive : 'не вказано' }}</p>
                  </div>
                  <div class="col-md-4 col-6 ps-30 my-4">
                    <p class="text-muted">Кузов</p>
                    <p class="h5 m-0">{{ singleCar.body !== 'null' ? singleCar.body : 'не вказано' }}</p>
                  </div>
                  <div class="col-md-4 col-6 ps-30 my-4">
                    <p class="text-muted">Колір</p>
                    <p class="h5 m-0">{{ singleCar.color !== 'null' ? singleCar.color : 'не вказано' }}</p>
                  </div>
                  <div class="col-md-4 col-6 ps-30 my-4">
                    <p class="text-muted">Рік</p>
                    <p class="h5 m-0">{{ singleCar.year !== 'null' ? singleCar.year : 'не вказано' }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 p-0 ps-lg-4">
              <div class="row m-0">
                <div class="col-12 px-4">
                  <div class="d-flex align-items-end mb-2" style="margin-top: 40px">
                    <p class="h4 m-0"><span class="pe-1">{{
                        singleCar.model !== 'null' ? singleCar.model : 'не вказано'
                      }}</span>
                    </p>
                  </div>
                  <div class="d-flex justify-content-between mb-2" style="padding-top: 20px">
                    <p class="textmuted">Потужність</p>
                    <p class="fs-14 fw-bold">{{ singleCar.power !== 'null' ? singleCar.power : 'не вказано' }}</p>
                  </div>
                </div>
                <div class="col-12 px-0" style="padding-top: 90px">
                  <div class="row bg-light m-0">
                    <div class="col-12 px-4 my-4">
                      <p class="fw-bold">Інформація про авто</p>
                    </div>
                    <div class="col-12 px-4">
                      <div class="d-flex  mb-4">
                        <span class=""><p class="text-muted">VIN код</p>
                          {{ singleCar.vincode }}
                        </span>
                        <div class=" w-100 d-flex flex-column align-items-end">
                          <p class="text-muted"></p>
                        </div>
                      </div>
                      <div class="d-flex mb-5">
                        <span><p class="text-muted">Доп. пакет або опції</p>
                          {{ singleCar.packageAuto !== 'null' ? singleCar.packageAuto : 'не вказано' }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row m-0">
                    <div class="col-12  mb-4 p-0">
                      <div @click.prevent="backToGrid()" class="btn btn-primary">Повернутись<span
                          class="fas fa-arrow-right ps-2"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="opencar === 2" class="pt20">
          <span style="font-weight: 800;font-size: 20px">Додати нове авто</span> <br><br>
          Обов'язкові поля
          <div class="col-md-12 row pr30 pb20">
            <div class="inputGroup col-md-4">
              <input v-model="vincode" type="text" required="" autocomplete="new-off">
              <label for="name">VIN код - обов'язково</label>
              <div class="text-danger" v-if="vincode && vincode.length !== 17">Vin код має бути 17 символів</div>
            </div>
            <div class="inputGroup col-md-4">
              <input v-model="model" type="text" required="" autocomplete="new-off">
              <label for="name">*Марка автомобіля і модель - обов'язково</label>
            </div>
            <div class="inputGroup col-md-4">
              <input v-model="engine" type="text" required="" autocomplete="new-off">
              <label for="name">Об'єм і тип двигуна - обов'язково</label>
            </div>
            <div class="inputGroup col-md-4">
              <input v-model="year" type="text" required="" autocomplete="new-off">
              <label for="name">*Рік випуску - обов'язково</label>
            </div>
          </div>
          Не обов'язкові поля
          <div class="col-md-12 row pr30">
            <div class="inputGroup col-md-4">
              <input v-model="body" type="text" required="" autocomplete="new-off">
              <label for="name">Кузов</label>
            </div>
            <div class="inputGroup col-md-4">
              <input v-model="color" type="text" required="" autocomplete="new-off">
              <label for="name">Колір</label>
            </div>

            <div class="inputGroup col-md-4">
              <input v-model="transmission" type="text" required="" autocomplete="new-off">
              <label for="name">Трансмісія</label>
            </div>
            <div class="inputGroup col-md-4">
              <input v-model="drive" type="text" required="" autocomplete="new-off">
              <label for="name">Привід</label>
            </div>
            <div class="inputGroup col-md-4">
              <input v-model="packageAuto" type="text" required="" autocomplete="new-off">
              <label for="name">Доп. пакет - Police | AMG | тощо</label>
            </div>
            <div class="inputGroup col-md-4">
              <input v-model="power" type="text" required="" autocomplete="new-off">
              <label for="name">Потужність</label>
            </div>
            <div class="inputGroup col-md-4">
              Завантажити зображення авто
              <input type="file" ref="file" id="customFile" @change="fileSet" required="" autocomplete="new-off">
            </div>
          </div>
          <div class="row">
            <button v-if="editButton === null" @click.prevent="addNewCar" :disabled="!isDisabled"
                    style="width: 200px;height: 50px;margin-top: 30px; margin-right: 30px"><span>Додати</span>
            </button>
            <button v-if="editButton === 1" @click.prevent="editCar(singleCar.id)" :disabled="!isDisabled"
                    style="width: 200px;height: 50px;margin-top: 30px; margin-right: 30px"><span>Редагувати</span>
            </button>
            <button @click.prevent="backToGrid" style="width: 200px;height: 50px;margin-top: 30px"><span>Назад</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id="id01" class="modal2">
    <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Закрити">&times;</span>
    <form class="modal-content2">
      <div class="container2">
        <h2>Видалити автомобіль</h2>
        <p>Ви впевнені?</p>
        <div class="clearfix">
          <a type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</a>
          <a type="button" @click="deleteCar(singleCar.id)" class="deletebtn">Delete</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from "@/api";
import MenuComponent from "@/views/app/personal/MenuComponent.vue";

export default {
  name: "GarageComponent",
  components: {MenuComponent},
  data() {
    return {
      opencar: null,
      attached: null,
      power: null,
      vincode: null,
      model: null,
      engine: null,
      year: null,
      body: null,
      color: null,
      transmission: null,
      drive: null,
      packageAuto: null,
      cars: null,
      singleCar: null,
      paginate: null,
      editButton: null,
    }
  },
  mounted() {
    this.getAllCars()
  },
  methods: {

    openCar(car) {
      this.opencar = 1
      this.singleCar = car
    },

    backToGrid() {
      this.opencar = null
      this.allInputNull()
    },

    fileSet(e) {
      this.attached = e.target.files[0]
    },

    addNewCar() {
      const config = {'content-type': 'multipart/form-data'}
      const formData = new FormData()
      formData.append('power', this.power)
      formData.append('vincode', this.vincode)
      formData.append('color', this.color)
      formData.append('model', this.model)
      formData.append('engine', this.engine)
      formData.append('year', this.year)
      formData.append('body', this.body)
      formData.append('transmission', this.transmission)
      formData.append('drive', this.drive)
      formData.append('packageAuto', this.packageAuto)
      if (this.attached) {
        formData.append('image', this.attached)
      }
      api.post('/api/garage', formData, config)
          .then(res => {
            if (res.status === 200) {
              this.opencar = null
              this.allInputNull()
              this.getAllCars()
            }
          })
    },

    editCar(id) {
      const config = {'content-type': 'multipart/form-data'}
      const formData = new FormData()
      formData.append('power', this.power)
      formData.append('vincode', this.vincode)
      formData.append('color', this.color)
      formData.append('model', this.model)
      formData.append('engine', this.engine)
      formData.append('year', this.year)
      formData.append('body', this.body)
      formData.append('transmission', this.transmission)
      formData.append('drive', this.drive)
      formData.append('packageAuto', this.packageAuto)
      formData.append("_method", "patch")
      if (this.attached) {
        formData.append('image', this.attached)
      }
      api.post('/api/garage/' + id, formData, config)
          .then(res => {
            if (res.status === 200) {
              this.opencar = null
              this.singleCar = null
              this.editButton = null
              this.allInputNull()
              this.getAllCars()
            }
          })
    },

    allInputNull() {
      this.power = null
      this.vincode = null
      this.model = null
      this.engine = null
      this.year = null
      this.body = null
      this.color = null
      this.transmission = null
      this.drive = null
      this.packageAuto = null
    },

    editformCar(car) {
      this.opencar = 2
      this.editButton = 1
      this.singleCar = car
      this.power = car.power
      this.vincode = car.vincode
      this.model = car.model
      this.engine = car.engine
      this.year = car.year
      this.body = car.body
      this.color = car.color
      this.transmission = car.transmission
      this.drive = car.drive
      this.packageAuto = car.packageAuto
    },

    openForm() {
      this.opencar = 2
    },

    getAllCars(page = 1) {
      api.get('api/garage?page=' + page)
          .then(res => {
            this.cars = res.data.data
            this.paginate = res.data.meta
          })
    },

    deleteCar(id) {
      api.delete('api/garage/' + id)
          .then(res => {
            if (res.status === 200) {
              this.getAllCars()
              this.backToGrid()
              document.getElementById('id01').style.display = 'none'
            }
          })
    }

  },
  computed: {

    isDisabled() {
      return this.vincode && this.vincode.length === 17 && this.model && this.engine && this.year
    },

    watchSingle() {
      this.singleCar
    }

  },

}
</script>

<style scoped>
button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #183153;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border: none;
}

button:after {
  content: " ";
  width: 0%;
  height: 100%;
  background: #FFD401;
  position: absolute;
  transition: all 0.4s ease-in-out;
  right: 0;
}

button:hover::after {
  right: auto;
  left: 0;
  width: 100%;
}

button span {
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding: 18px 25px;
  color: #fff;
  font-size: 1.125em;
  font-weight: 700;
  letter-spacing: 0.3em;
  z-index: 20;
  transition: all 0.3s ease-in-out;
}

button:hover span {
  color: #183153;
  animation: scaleUp 0.3s ease-in-out;
}

@keyframes scaleUp {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
}

.container1 {
  margin: 20px auto;
  max-width: 1000px;
  background-color: white;
  padding: 0;
  border-radius: 20px;
}

.text-muted {
  font-size: 12px;
}

.textmuted {
  color: #6c757d;
  font-size: 13px;
}

.fs-14 {
  font-size: 14px;
}

.btn.btn-primary {
  width: 100%;
  height: 55px;
  border-radius: 0;
  padding: 13px 0;
  background-color: black;
  border: none;
  font-weight: 600;
}

.btn.btn-primary:hover .fas {
  transform: translateX(10px);
  transition: transform 0.5s ease
}


::placeholder {
  font-size: 12px;
}

.ps-30 {
  padding-left: 30px;
}

.h4 {
  font-family: 'Work Sans', sans-serif !important;
  font-weight: 800 !important;
}

.textmuted,
h5,
.text-muted {
  font-family: 'Poppins', sans-serif;
}


/* Set a style for all buttons */
.button1 {
  background-color: rgba(241, 14, 14, 0.88);
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  opacity: 0.8;
}

.button1:hover {
  opacity: 1;
}

.button2 {
  background-color: rgba(14, 44, 241, 0.88);
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  opacity: 0.8;
}

.button2:hover {
  opacity: 1;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn, .deletebtn {
  float: left;
  width: 50%;
  padding: 14px 20px;
}

/* Add a color to the cancel button */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.deletebtn {
  background-color: #f44336;
}

/* Add padding and center-align text to the container */
.container2 {
  padding: 16px;
  text-align: center;
}

/* The Modal (background) */
.modal2 {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content2 {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .deletebtn {
    width: 100%;
  }
}
</style>