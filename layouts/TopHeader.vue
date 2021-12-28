<template>
  <!-- Start Top Header Area -->
  <div
    class="
      top-header
      text-green-800
      fixed
      top-0
      right-0
      left-0
      z-20
      bg-white
      backdrop-blur
    "
  >
    <div class="px-8">
      <nuxt-link class="md:hidden py-2" to="/">BUXTURE</nuxt-link>
      <div class="flex flex-row justify-between items-center">
        <nuxt-link class="flex-none xs:hidden sm:hidden md:inline-block" to="/"
          >BUXTURE</nuxt-link
        ><transition name="rotate">
          <a
            class="sm:hidden relative z-50 cursor-pointer"
            :style="menuStyle"
            style="transition: transform 0.5s"
            @click="showMenu()"
          >
            <i class="fas fa-plus"></i
          ></a>
        </transition>
        <transition name="slide">
          <div
            v-if="menu"
            class="
              bg-green-500
              opacity-90
              fixed
              h-screen
              w-screen
              top-0
              left-0
              pt-32
              overflow-x-hidden
            "
          >
            <ul>
              <li>
                <nuxt-link class="text-2xl block p-4 text-green-800" to="/"
                  >Home</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  class="text-2xl block p-4 text-green-800 active"
                  to="/"
                  >Store</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="text-2xl block p-4 text-green-800" to="/"
                  >Blogs</nuxt-link
                >
              </li>
            </ul>
          </div>
        </transition>
        <ul class="xs:hidden sm:inline-flex gap-4 list-none">
          <li class="md:hidden"><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/">Store</nuxt-link></li>
          <li><nuxt-link to="/">Blogs</nuxt-link></li>
        </ul>
        <ul class="inline-flex gap-4 list-none">
          <li>
            <nuxt-link to="/"><i class="fas fa-shopping-bag"></i></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"><i class="far fa-heart"></i></nuxt-link>
          </li>
          |
          <li>
            <nuxt-link to="/"><i class="far fa-moon"></i></nuxt-link>
          </li>
          <li>
            <div class="languages-list bg-transparent">
              <select class="bg-transparent">
                <option value="english">en</option>
                <option value="yoruba">yr</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Top Header Area -->
</template>
<script>
export default {
  data() {
    return {
      menu: false,
      menuStyle: "",
    };
  },

  methods: {
    showMenu() {
      if (this.menu) {
        this.menuStyle = `transform: rotate(0deg);`;
        this.menu = false;
      } else {
        this.menuStyle = `transform: rotate(45deg);`;
        this.menu = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  text-decoration: underline;
}

.slide-enter-active {
  animation: slide-in 0.5s;
}

.slide-leave-active {
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
  0% {
    width: 0;
  }
  100% {
    width: 100vw;
  }
}

.rotate-enter-active {
  animation: rotate-right 0.5s;
}

.rotate-leave-active {
  animation: rotate-right 0.5s reverse;
}

@keyframes rotate-right {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
</style>