<template>
  <div>
    <Banner></Banner>
    <Testimonials></Testimonials>
    <StockLists></StockLists>
    <Footer></Footer>
    <!--
    <Offer></Offer>
    <LatestProducts></LatestProducts>
    <ProductCategory></ProductCategory>
    <TrendingProducts></TrendingProducts>
    <BestSellers></BestSellers>
    <Facility></Facility>
    <News></News>
    <Subscribe></Subscribe>
    <Partner></Partner>
    <InstagramPhotos></InstagramPhotos> -->
  </div>
</template>

<script>
import Banner from '../components/landing-one/Banner';
import StockLists from '../components/landing-one/StockLists';
import Offer from '../components/landing-one/Offer';
import LatestProducts from '../components/landing-one/LatestProducts';
import ProductCategory from '../components/landing-one/ProductCategory';
import TrendingProducts from '../components/landing-one/TrendingProducts';
import BestSellers from '../components/landing-one/BestSellers';
import Facility from '../components/landing-one/Facility';
import Testimonials from '../components/landing-one/Testimonials';
import News from '../components/landing-one/News';
import Subscribe from '../components/common/Subscribe';
import Partner from '../components/common/Partner';
import InstagramPhotos from '../components/common/InstagramPhotos';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
    Banner, StockLists, Offer, Footer, LatestProducts, ProductCategory, TrendingProducts,
    BestSellers, Facility, Testimonials, News, Subscribe, Partner, InstagramPhotos
  }
}
</script>
