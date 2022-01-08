<template>
  <!-- Start Main Banner Area -->
  <div class="home-banner pt-12">
    <div class="p-8">
      <div class="md:flex md:flex-row gap-8">
        <div class="flex-1 md:h-full">
          <div class="max-w-2xl mx-auto">
            <img
              src="~@/assets/img/product.jpg"
              alt=""
              srcset=""
              class="mx-auto"
            />
          </div>
        </div>
        <div class="flex-1 md:h-full">
          <div class="max-w-md mx-auto items-center">
            <div class="sm:hidden md:flex md:w-full">
              <div class="my-8 mx-auto w-fit flex gap-8">
                <i class="fas fa-long-arrow-alt-left fa-lg"></i>
                <!-- <span class="text-xl">1/3</span> -->
                <i class="fas fa-long-arrow-alt-right fa-lg"></i>
              </div>
            </div>
            <div class="bg-color3 rounded-full h-1 my-4"></div>
            <p class="text-base m-0 text-color3">Chicken Suya Pizza</p>
            <p class="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              expedita assumenda animi possimus officiis harum incidunt illo
              tempora alias quaerat.
            </p>
            <a
              class="
                rounded-full
                px-6
                py-2
                bg-color3
                text-white text-center
              "
              >BUY NOW</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Main Banner Area -->
</template>

<script>
export default {
  name: "Banner",
};
</script>
