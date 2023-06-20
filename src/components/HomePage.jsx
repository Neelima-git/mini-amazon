import {
  Carousel,
  CarouselCategory,
  CarouselProduct,
  CarouselTodaysDeals,
  HomePageCard,
} from "./index";

let cardsData = [
  {
    title: "Smartwatch starts at ₹1,999",
    img: "../images/home_grid_1.jpg",
    link: "Shop Now",
  },
  {
    title: "Up to 70% off | Clearance store",
    img: "../images/home_grid_2.jpg",
    link: "See more",
  },
  {
    title: "Sell on Amazon with 1-Click",
    img: "../images/home_grid_3.jpg",
    link: "Register now",
  },
  {
    title: "More titles to explore",
    img: "../images/home_grid_4.jpg",
    link: "Browse Kindle Unlimited",
  },
  {
    title: "Shop Pet Supplies",
    img: "../images/home_grid_5.jpg",
    link: "See more",
  },
  {
    title: "Spring Sale",
    img: "../images/home_grid_6.jpg",
    link: "See the deals",
  },
  {
    title: "Echo Buds",
    img: "../images/home_grid_7.jpg",
    link: "See more",
  },
  {
    title: "Family Plan: 3 months free",
    img: "../images/home_grid_8.jpg",
    link: "Learn more",
  },
];

const HomePage = () => {
  return (
    <div className="bg-miniAmazon-background">
      <div className="min-w-[1000px] max-w[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {cardsData.map((data) => {
            return (
              <HomePageCard
                key={data.title}
                title={data.title}
                img={data.img}
                link={data.link}
              />
            );
          })}
        </div>
        <CarouselTodaysDeals/>
        <CarouselCategory />
        <CarouselProduct />
      </div>
    </div>
  );
};

export default HomePage;
