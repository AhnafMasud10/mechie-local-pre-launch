'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useSwiper } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute top-[40%] left-0 transform -translate-y-1/2 bg-purple-300 text-white p-3 rounded-full hover:bg-purple-800 z-10"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute top-[40%] right-0 transform -translate-y-1/2 bg-purple-300 text-white p-3 rounded-full hover:bg-purple-800 z-10"
      >
        <FaArrowRight />
      </button>
    </>
  );
};

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "Before implementing his methods, I was about 40:2 applications to interviews. After implementing, I pulled about 50:8. His resources have been a game changer.",
      name: "Matthew Moner",
      position: "Engineering Intern, Anatak Robotics"
    },
    {
      text: "Have never come across anyone so authentic and clear with his explanations. His resources helped me do well in my design engineering internship interviews with Apple!",
      name: "Amar Kaul",
      position: "Mechanical Engineering, Lam Research"
    },
    {
      text: "Tamer’s content and practice helped me land my first role in California as a Battery Engineering Intern at Tesla. His advice and resources have been of great help.",
      name: "Salah Said",
      position: "Battery Engineering Intern, Tesla"
    },
    {
      text: "I had an interview with Google for a Product Design Engineer and Tamer’s guidance helped me land the job! Never imagined myself actually getting this opportunity.",
      name: "Joaquin Luzio",
      position: "Product Design Engineer"
    }
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          
          <SwiperSlide key={index}>
            <div className="bg-white  p-6 rounded-lg shadow-md text-gray-700 md:h-72 mb-20 h-80">
              <p className="mb-6 px-5">{testimonial.text}</p>
              <p className="text-right text-purple-600 font-semibold px-4">{testimonial.name}</p>
              <p className="text-right text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </SwiperSlide>
          
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
