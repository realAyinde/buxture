<template>
  <div class="stock-list bg-green-100">
    <div class="p-8">
      <h3 class="text-2xl">Stocks</h3>
      <div class="flex flex-wrap">
        <div
          class="border-l-2 border-green-800 px-2 my-3 xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
          v-for="item in items"
          :key="item.id"
        >
          <p class="text-sm text-green-800 m-0">{{ item.name }}</p>
          <p class="text-sm">{{ item.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Chicken Suya",
          category: "Suya",
        },
        {
          id: 2,
          name: "Beef Spice Pizza",
          category: "Pizza",
        },
        {
          id: 3,
          name: "Chicken Pizza",
          category: "Pizza",
        },
        {
          id: 4,
          name: "Chocolate Ice-Cream",
          category: "Ice-Cream",
        },
        {
          id: 5,
          name: "All Fruit Smoothie",
          category: "Drinks",
        },
        {
          id: 6,
          name: "Milk-Shake",
          category: "Drinks",
        },
        {
          id: 7,
          name: "Burger",
          category: "Burger",
        },
        {
          id: 8,
          name: "Egg-roll",
          category: "Bakery",
        },
        {
          id: 9,
          name: "Sussage-roll",
          category: "Bakery",
        },
        {
          id: 10,
          name: "Bread",
          category: "Bakery",
        },
        {
          id: 11,
          name: "Wheat Bread",
          category: "Bread",
        },
        {
          id: 12,
          name: "Sliced Bread",
          category: "Bread",
        },
        {
          id: 13,
          name: "Shawarma",
          category: "Shawarma",
        },
        {
          id: 14,
          name: "Chocolate Cookies",
          category: "Biscuit",
        },
        {
          id: 15,
          name: "Chocolate Yogurth",
          category: "Yogurth",
        },
        {
          id: 16,
          name: "Fura",
          category: "Yogurth",
        },
        {
          id: 17,
          name: "Zobo",
          category: "Drink",
        },
        {
          id: 18,
          name: "Kunu",
          category: "Drink",
        },
        {
          id: 19,
          name: "Pito",
          category: "Drink",
        },
        {
          id: 20,
          name: "Pito",
          category: "Drink",
        },
      ],
    };
  },
};
</script>