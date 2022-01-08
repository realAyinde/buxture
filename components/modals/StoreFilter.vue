<template>
  <div class="xs:block sm:hidden">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container rounded-md p-4">
            <div class="modal-body max-h-full">
              <div class="px-4">
                <p class="font-semibold py-2 m-0">Categories</p>
              <div class="max-h-48 overflow-y-auto">
                <label class="block py-1" for="drink"><input type="checkbox" name="drinks" id=""> All</label>
                <label class="block py-1" for="drink"><input type="checkbox" name="drinks" id=""> Drinks</label>
                <label class="block py-1" for="ice-cream"><input type="checkbox" name="ice-cream" id=""> Ice-Cream</label>
                <label class="block py-1" for="burger"><input type="checkbox" name="burger" id=""> Burger</label>
                <label class="block py-1" for="pizza"><input type="checkbox" name="pizza" id=""> Pizza</label>
                <label class="block py-1" for="suya"><input type="checkbox" name="suya" id=""> Suya</label>
              </div>
            </div>
            <div class="px-4 h-fit">
              <div class="w-full">
              <p class="font-semibold py-2 m-0">Price range</p>
              </div>
            </div>
            <div class="px-4 h-fit">
              <p class="font-semibold py-2">Rating</p>
            </div>
            <div class="flex justify-between px-4 h-fit">
              <button class="w-2/5 my-2 py-1 px-3 text-sm text-center bg-green-800 rounded text-green-100 antialiased">Set filter</button>
              <button class="w-2/5 my-2 py-1 px-3 text-sm text-center bg-red-600 rounded text-green-100 antialiased" @click="$emit('close')">Cancel</button>
            </div>
          </div>
            </div>
          </div>
        </div>
    </transition>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container, .modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);

}
</style>
