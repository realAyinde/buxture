<template>
    <div class="w-full">
      <div class="xs:p-20 sm:p-20 md:p-10 w-full">
        Back to store
        <CartItems />
      </div>
    </div>
</template>

<script>
import CartItems from '../components/cart/CartItems';
export default {
    components: {
        CartItems
    }
}
</script>
