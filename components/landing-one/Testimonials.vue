<template>
  <client-only>
    <!-- Start Testimonials Area -->
    <section class="">
      <div class="p-8">
        <div class="">
            <div class="p-4 overflow-x-auto whitespace-nowrap w-full">
              <div class="inline-block p-4 xs:w-full md:w-1/2 lg:w-1/3 text-center whitespace-normal" v-for="item in items" :key="item.id">
                <div class="rounded inline-block mx-auto">
                  <img :src="item.image" :alt="item.name" />
                </div>

                <p class="w-full">{{ item.feedback }}</p>

                <div class="">
                  <h4>{{ item.name }}</h4>
                  <span>{{ item.position }}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <!-- End Testimonials Area -->
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Jason Statham",
          position: "Actor at Crank",
          feedback:
            "Lorem dunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          image: require("../../assets/img/client1.jpg"),
        },
        {
          id: 2,
          name: "Jason Statham",
          position: "CEO at Assmble",
          feedback:
            "Consectetur adipiscing elit, et dolore magna aliqua. Risus commodo viverra maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          image: require("../../assets/img/client1.jpg"),
        },
        {
          id: 3,
          name: "Jason Statham",
          position: "Founder at Kramble",
          feedback:
            "Lorem ipsum dolor sit amet,Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          image: require("../../assets/img/client1.jpg"),
        },
      ],
    };
  },
};
</script>