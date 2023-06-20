import { Swiper } from "swiper/react";


const CarouselTodaysDeals = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">
        Today's Deals
      </div>
      {/* <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      > */}
        {/* {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img
                src={`../images/product_${i}_small.jpg`}
                alt="Carousel product"
              />
            </Link>
          </SwiperSlide>
        ))} */}
        <div className="p-4">
            <img src="../images/home_grid_1.jpg" alt="" className="h-60 w-60" />
            <div className="pt-3 text-sm">
                <span className="bg-red-500 p-1 text-white  rounded-sm">Up to 7% off </span>
                <span className="pl-2 text-red-500 font-bold">Deal of the Day</span>
            </div>
            <div className="truncate text-sm" >Exclusive Deals on Gold Coins | Bangalore Refinery, Malabar Gold and more</div>
        </div>
      {/* </Swiper> */}
    </div>
  );
};

export default CarouselTodaysDeals;
