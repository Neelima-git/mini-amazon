import { Swiper, SwiperSlide } from "swiper/react";
import { callAPI } from "../utils/CallApi";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";

const CarouselTodaysDeals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const getDeals = async () => {
      try {
        const dealResults = await callAPI("data/todaysDeals.json");
        setDeals(Object.values(dealResults));
      } catch (error) {
        console.log("Error fetching deals:", error);
      }
    };

    getDeals();
  }, []);

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Today's Deals</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className="p-4">
              <img src={deal.img} alt="" className="h-60" />
              <div className="pt-3 text-sm">
                <span className="bg-red-700 p-1 text-white rounded-sm">
                  {deal.discount}
                </span>
                <span className="pl-2 text-red-600 font-bold">
                  Deal of the Day
                </span>
              </div>
              <div className="truncate text-sm">{deal.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTodaysDeals;
