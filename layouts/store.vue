<template>
  <div class="">
    <TopHeader></TopHeader>
    <div class="xs:pt-20 sm:pt-20 md:pt-10 h-screen">
      <div class="flex flex-wrap h-full">
        <div
          class="
            relative
            h-full
            xs:hidden
            sm:w-4/12
            lg:w-3/12
            border-r border-black-100
            overflow-y-auto
          "
        >
          <div class="">
            <div class="border-b border-black-100 pl-8 pr-2">
              <p class="font-bold py-2">Filter</p>
            </div>
            <div class="border-b border-black-100 pl-8 p-2">
              <p class="font-semibold py-2 m-0">Categories</p>
              <!-- <fieldset>
                <div class="flex items-center mb-4">
                  <input type="checkbox" name="all" id="" class="w-4 h-4 text-green-800 bg-gray-100 rounded border-gray-300 focus:ring-green-800" checked>
                <label class="ml-1 text-sm font-medkium text-gray-900" for="all">All</label>
                </div>

                <label for="" class="checkbox">
                  <input type="checkbox" name="" id="">
                  <span>Geek4Geek</span>
                </label>
              </fieldset> -->
              <div class="">

                <label class="block py-1" for="drink"><input type="checkbox" name="drinks" id=""> Drinks</label>
                <label class="block py-1" for="ice-cream"><input type="checkbox" name="ice-cream" id=""> Ice-Cream</label>
                <label class="block py-1" for="burger"><input type="checkbox" name="burger" id=""> Burger</label>
                <label class="block py-1" for="pizza"><input type="checkbox" name="pizza" id=""> Pizza</label>
                <label class="block py-1" for="suya"><input type="checkbox" name="suya" id=""> Suya</label>
              </div>
            </div>
            <div class="border-b border-black-100 pl-8 pr-4">
              <div class="w-full">
              <p class="font-semibold py-2 m-0">Price range</p>
              <div class="w-full flex justify-between">
                <input type="text" name="min" id="" class="inline-block w-1/3 rounded border border-black-100 py-1 px-3" placeholder="min">
                <input type="text" name="max" id="" class="inline-block w-1/3 rounded border border-black-100 py-1 px-3" placeholder="max">
              </div>
              <a href="" class="my-2 py-1 px-3 text-center bg-green-800 rounded text-green-100 antialiased">Set Price</a>
              </div>
            </div>
            <div class="border-b border-black-100 pl-8 pr-2">
              <p class="font-semibold py-2">Rating</p>
            </div>
          </div>
        </div>
        <div class="relative h-full xs:w-full sm:w-8/12 lg:w-6/12 overflow-y-auto">
          <Nuxt />
        </div>
        <div
          class="
            relative
            h-full
            xs:hidden
            sm:w-0
            lg:w-3/12
            lg:border-l lg:border-black-100
            sm:border-0
            overflow-y-auto
          "
        >
        <div class="p-4 pr-8">
          You are yet to select your favorites
        </div>
        </div>
      </div>

      <a
        class="
          sm:hidden
          fixed
          bottom-8
          right-8
          rounded
          bg-green-800
          py-1
          px-4
          text-white
          cursor-pointer
        "
        @click="showFilter=true"
      >
        filter
      </a>
      <store-filter v-if="showFilter" @close="showFilter=false"></store-filter>
    </div>
  </div>
</template>
<script>
import StoreFilter from '~/components/modals/StoreFilter.vue';
import TopHeader from "./TopHeader.vue";
export default {
  data() {
    return {
      showFilter: false
    }
  },
  components: { TopHeader, StoreFilter },
};
</script>
