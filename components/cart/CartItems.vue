<template>
  <!-- Start Cart Area -->
  <section class="cart">
    <div class="container">
      <div class="max-w-[1000px] mx-auto">
        <div class="card rounded-lg p-4 md:flex justify-between w-full bg-green-50 my-3">
          <div class="flex justify-center gap-3">
            <div class="w-[72px] h-[64px] rounded-sm bg-green-400">
              <!-- <img src="~@/assets/img/product.jpg" alt=""> -->
            </div>
            <div class="flex flex-col justify-around">
              <p class="text-base m-0 text-gray-800 font-semibold">Onion Chicken Pizza</p>
              <p class="text-sm m-0 text-gray-600">Pizza</p>
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="flex gap-3">
              <button class="rounded-lg border border-gray-300 bg-green-700 text-center p-1 px-2 text-white" href=""><i class="fas fa-plus"></i></button>
              <input type="text" value="1" name="" id="" class="inline-block bg-transparent w-10 text-center p-2" disabled>
              <button class="rounded-lg border border-gray-300 bg-green-700 text-center p-1 px-2 text-white" href=""><i class="fas fa-minus"></i></button>
            </div>
            <span class="text-lg font-semibold">$1800.00</span>
            <a class="text-red-500" href=""><i class="fas fa-trash fa-lg"></i></a>
          </div>
        </div>

        <div class="card rounded-lg p-4 md:flex justify-between w-full bg-green-50 my-3">
          <div class="flex justify-center gap-3">
            <div class="w-[72px] h-[64px] rounded-sm bg-green-400">
              <!-- <img src="~@/assets/img/product.jpg" alt=""> -->
            </div>
            <div class="flex flex-col justify-around">
              <p class="text-base m-0 text-gray-800 font-semibold">Onion Chicken Pizza</p>
              <p class="text-sm m-0 text-gray-600">Pizza</p>
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="flex gap-3">
              <button class="rounded-lg border border-gray-300 bg-green-700 text-center p-1 px-2 text-white" href=""><i class="fas fa-plus"></i></button>
              <input type="text" value="1" name="" id="" class="inline-block bg-transparent w-10 text-center p-2" disabled>
              <button class="rounded-lg border border-gray-300 bg-green-700 text-center p-1 px-2 text-white" href=""><i class="fas fa-minus"></i></button>
            </div>
            <span class="text-lg font-semibold">$1800.00</span>
            <a class="text-red-500" href=""><i class="fas fa-trash fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Cart Area -->
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartTotal() {
      return this.$store.getters.totalAmount;
    },
  },
  methods: {
    removeItemFromCart(id) {
      this.$store.dispatch("deleteCart", id);
    },
    onIncrement(id) {
      this.$store.dispatch("updateCart", {
        id,
        unit: 1,
        cart: this.cart,
      });
    },
    onDecrement(id, quantity) {
      if (quantity > 1) {
        this.$store.dispatch("updateCart", {
          id,
          unit: -1,
          cart: this.cart,
        });
      } else {
        this.removeItemFromCart(id);
        this.$toast.warning("Item deleted!");
      }
    },
  },
};
</script>
