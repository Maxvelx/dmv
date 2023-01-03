<template>
  <div class='v-notification'>
    <transition-group tag="div"
        name="v-transition-animate"
        class="messages_list"
    >
      <div
          class="v-notification__content"
          v-for="message in messages"
          :key="message.id"
          :style="message.color"
      >
        <div class="content__text">
          <span style="float: left;margin-top: 10px;padding-right: 13px">
            <i class="fas fa-check-circle"></i>
          </span>
          <span style="float: right;font-size: 16px">{{message.name}}
          <br>
            {{message.number}}
          </span>

        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "NotificationComponent",
  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {}
  },
  methods: {
    hideNotification() {
      let vm = this;
      if (this.messages.length) {
        setTimeout(function () {
          vm.messages.splice(vm.messages.length - 1, 1)
        }, 3000)
      }
    }
  },
  watch: {
    messages:{
      handler(){
        this.hideNotification()
      },
      deep: true
    }


  },
  mounted() {
    this.hideNotification()
  }
}
</script>

<style lang="scss">
.v-notification {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;
  &__content {
    padding: 16px;
    border-radius: 14px;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin-bottom: 16px;
    &.error {
      background: red;
    }
    &.warning {
      background: orange;
    }
    &.check_circle {
      background: green;
    }
  }
  .content {
    &__text {
      align-items: center;
      justify-content: space-between;
    }
  }
}

.v-transition-animate {
  &-enter-from {
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active {
    transition: all .6s ease;
  }
  &-enter-to {
    opacity: 1;
  }

  &-leave-from {
    height: 50px;
    opacity: 1;
  }
  &-leave-active {
    transition: transform .6s ease, opacity .6s, height .6s .2s;
  }
  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }

  &-move {
    transition: transform .6s ease;
  }

}
</style>