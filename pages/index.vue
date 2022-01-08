<template>
  <div>
    <Banner></Banner>
    <Testimonials></Testimonials>
    <StockLists></StockLists>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/home/Banner';
import StockLists from '../components/home/StockLists';
import Testimonials from '../components/home/Testimonials';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    Banner, StockLists, Footer, Testimonials
  }
}
</script>
