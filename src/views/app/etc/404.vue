<template>
  <section class="error-404-section section-padding">
    <div class="error">
      <img src="/images/error404.png" alt>
    </div>
    <div class="error-message">
      <h3>Оу! Сторінка не знайдена!</h3>
      <p>На жаль ми не можемо знайти таку сторінку. Можливо ви не вірно ввели адресу.</p>
      <router-link :to="{name: 'index'}"><a class="theme-btn">На головну</a></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

html {
  font-size: 16px;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #fff;
  font-size: 16px;
  font-size: 1rem;
  color: #525252;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

@media (max-width:767px) {
  body {
    font-size: 14px;
  }
}

p {
  color: #525252;
  line-height: 1.6em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #242f6c;
}

ul {
  padding-left: 0;
  margin: 0;
}

a {
  text-decoration: none;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

a:hover {
  text-decoration: none;
}

img {
  max-width: 100%;
}

img {
  max-width: 100%
}

.error-404-section {
  text-align: center
}

.error-404-section .error-message {
  margin-top: 70px;
  padding: 0 200px
}

@media (max-width:991px) {
  .error-404-section .error-message {
    margin-top: 50px;
    padding: 0 100px
  }
}

@media (max-width:767px) {
  .error-404-section .error-message {
    padding: 0
  }
}

.error-404-section .error-message h3 {
  font-size: 20px;
  font-size: 1.25rem;
  margin: 0 0 0.8em
}

.error-404-section .error-message p {
  margin-bottom: 1.8em
}

.section-padding {
  padding: 100px 0
}

@media (max-width:991px) {
  .section-padding {
    padding: 90px 0
  }
}

@media (max-width:767px) {
  .section-padding {
    padding: 80px 0
  }
}

.theme-btn {
  background: #00c6d1;
  background: -webkit-linear-gradient(left, #00a7d5, #00ded8);
  background: -moz-linear-gradient(left, #00a7d5, #00ded8);
  background: -o-linear-gradient(left, #00a7d5, #00ded8);
  background: -ms-linear-gradient(left, #00a7d5, #00ded8);
  background: -webkit-gradient(linear, left top, right top, from(#00a7d5), to(#00ded8));
  background: linear-gradient(left, #00a7d5, #00ded8);
  color: #fff;
  display: inline-block;
  font-weight: 600;
  padding: 12px 22px;
  border: 0;
  border-radius: 55px;
  text-transform: capitalize;
  -webkit-box-shadow: 0 0 0 5px #c8eaf5;
  box-shadow: 0 0 0 5px #c8eaf5;
  -webkit-backface-visibility: hidden;
  z-index: 1;
  position: relative;
}

.theme-btn:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 55px;
  background: -webkit-linear-gradient(left, #00ded8, #00a7d5);
  background: -moz-linear-gradient(left, #00ded8, #00a7d5);
  background: -o-linear-gradient(left, #00ded8, #00a7d5);
  background: -ms-linear-gradient(left, #00ded8, #00a7d5);
  background: -webkit-gradient(linear, left top, right top, from(#00ded8), to(#00a7d5));
  background: linear-gradient(left, #00ded8, #00a7d5);
  -webkit-transition: opacity 0.5s ease-out;
  -o-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
  opacity: 0;
  z-index: -1;
}

.theme-btn:hover,
.theme-btn:focus,
.theme-btn:active {
  color: #fff;
}

.theme-btn:hover:after {
  opacity: 1;
}

@media (max-width:991px) {

  .theme-btn {
    font-size: 14px;
    font-size: 0.875rem;
  }
}

@media (max-width:767px) {

  .theme-btn {
    padding: 12px 18px;
    font-size: 13px;
  }
}
</style>