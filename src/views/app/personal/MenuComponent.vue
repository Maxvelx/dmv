<template>
  <div class="pb50 col-md-1 col-sm-1 col-xs-1">
    <div class="container-fluid">
      <nav class="main-menu">
        <div class="scrollbar" id="style-1">
          <ul>
            <li class="toogler">
              <i class="fa fa-bars"></i>
            </li>
            <router-link :to="{name: 'personal'}">
              <li class="darkerli" :class="{'active': this.$store.state.activeElP === 1}">
                <a @click="this.$store.commit('menuPersonal', 1)" href="">
                  <i class="fa fa-house"></i>
                  <span class="nav-text">Головна</span>
                </a>
              </li>
            </router-link>
            <router-link :to="{name: 'personal_profile'}">
              <li class="darkerli" :class="{'active': this.$store.state.activeElP === 2}">
                <a @click="this.$store.commit('menuPersonal', 2)" href="">
                  <i class="fa fa-user"></i>
                  <span class="nav-text">Профіль</span>
                </a>
              </li>
            </router-link>
            <router-link :to="{name: 'personal_orders'}">
              <li class="darkerli" :class="{'active': this.$store.state.activeElP === 3}">
                <a @click="this.$store.commit('menuPersonal', 3)" href="">
                  <i class="fa fa-briefcase"></i>
                  <span class="nav-text">Замовлення</span>
                </a>
              </li>
            </router-link>
            <router-link :to="{name: 'personal_wishlist'}">
              <li class="darkerli" :class="{'active': this.$store.state.activeElP === 4}">
                <a @click="this.$store.commit('menuPersonal', 4)" href="">
                  <i class="fa fa-star"></i>
                  <span class="nav-text">Обрані запчастини</span>
                </a>
              </li>
            </router-link>
            <router-link :to="{name: 'personal_garage'}">
              <li class="darkerli" :class="{'active': this.$store.state.activeElP === 5}">
                <a @click="this.$store.commit('menuPersonal', 5)" href="">
                  <i class="fa fa-car"></i>
                  <span class="nav-text">Ваші авто</span>
                </a>
              </li>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent"
}

</script>

<style scoped>


#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #BFBFBF;
}

/* Scrollbar End */

.toogler {
  visibility: hidden;
}

.fa {
  position: relative;
  display: table-cell;
  width: 55px;
  height: 36px;
  text-align: center;
  top: 12px;
  font-size: 20px;
}


.main-menu:hover, nav.main-menu.expanded {
  width: 350px;
  overflow: hidden;
  opacity: 1;
  border-radius: 1em;
}

.main-menu {
  z-index: 10;
  padding-top: 25px;
  background: #ffffff;
  position: fixed;
  top: 35%;
  bottom: 0;
  height: 400px;
  left: 20px;
  width: 55px;
  overflow: hidden;
  -webkit-transition: width .2s linear;
  transition: width .2s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  /*box-shadow: 0 7px 30px -10px rgba(150,170,180,0.7);*/

  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.20);
  opacity: 1;
  border-radius: 10em;
}

.main-menu > ul {
  margin: 7px 0;
}

.main-menu li {
  position: relative;
  display: block;
  width: 250px;
  padding-bottom: 5px;
  background-color: #ffffff;
}

.main-menu li > a {
  position: relative;
  width: 255px;
  display: table;
  height: 50px;
  border-collapse: collapse;
  border-spacing: 0;
  color: #8a8a8a;
  background-color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  -webkit-transform: translateZ(0) scale(1, 1);
  -webkit-transition: all .14s linear;
  transition: all .14s linear;
  font-family: 'Strait', sans-serif;
}


.main-menu .nav-text {

  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
  font-family: 'Titillium Web', sans-serif;
}


/* Darker element side menu Start*/


.darkerli {
  background-color: #ededed;
}

.main-menu li:hover > a, nav.main-menu li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {
  color: #fff;
  background-image: linear-gradient(to right top, #ffc541, #ffc741, #ffc841, #ffca41, #ffcb41, #ffcd44, #fece46, #fed049, #fdd24f, #fcd554, #fcd75a, #fbd95f);
  text-shadow: 0px 0px 0px;
  margin-left: -2px;
  opacity: 1;
  border-radius: 10px;

}

@media (max-width: 992px) {

  .toogler {
    padding-bottom: 20px;
    margin-bottom: 10px;
    visibility: visible;
  }

  #style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #BFBFBF;
  }

  /* Scrollbar End */
  .fa {
    position: relative;
    display: table-cell;
    width: 55px;
    height: 36px;
    text-align: center;
    top: 12px;
    font-size: 20px;
  }

  .main-menu:hover, nav.main-menu.expanded {
    height: 360px;
    width: 350px;
    overflow: hidden;
    opacity: 1;
    border-radius: 1em;
  }

  .main-menu:hover > toogler {
    visibility: hidden;
  }

  .main-menu {
    display: block !important;
    z-index: 50;
    padding-top: 5px;
    background: #ffffff;
    position: fixed;
    margin-bottom: 30px;
    top: 12%;
    bottom: 0;
    height: 50px;
    left: 20px;
    width: 50px;
    overflow: hidden;
    -webkit-transition: width .2s linear;
    transition: width .2s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    /*box-shadow: 0 7px 30px -10px rgba(150,170,180,0.7);*/

    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.20);
    opacity: 1;
    border-radius: 10em;
  }

  .main-menu > ul {
    margin: 7px 0;

  }

  .main-menu li {
    position: relative;
    display: block;
    width: 250px;
  }

  .main-menu li > a {
    position: relative;
    width: 255px;
    display: table;
    height: 50px;
    border-collapse: collapse;
    border-spacing: 0;
    color: #8a8a8a;
    background-color: #ffffff;
    font-size: 20px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all .14s linear;
    transition: all .14s linear;
    font-family: 'Strait', sans-serif;
  }


  .main-menu .nav-text {

    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 190px;
    font-family: 'Titillium Web', sans-serif;
  }


  /* Darker element side menu Start*/
  .darkerli {
    background-color: #ededed;
    text-transform: capitalize;
  }

  .main-menu li:hover > a, nav.main-menu li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #f5c34b;
    text-shadow: 0px 0px 0px;
    margin-left: -2px;
    opacity: 1;
    border-radius: 10px;
  }

}


@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
}

</style>