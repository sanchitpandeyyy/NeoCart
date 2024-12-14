import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "I was thrilled to find authentic Nepali products online! The AI-powered recommendations made my shopping experience seamless, and the delivery was faster than expected. The quality is unmatched—thank you for bringing a touch of Nepal to my doorstep!",
      author: "Sita Sharma",
      location: "Kathmandu, Nepal",
    },
    {
      id: 2,
      content:
        "Amazing service! I got authentic Nepali spices delivered right on time. The website is easy to use, and the AI recommendations feel very personalized. Highly recommend!",
      author: "Rajesh Thapa",
      location: "Pokhara, Nepal",
    },
    {
      id: 3,
      content:
        "Great experience! The quality of the handmade crafts I ordered was fantastic. Delivery was smooth and hassle-free. Keep up the great work!",
      author: "Meera Gurung",
      location: "Sydney, Australia",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
      <Swiper
        // modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <h3 className="font-semibold text-lg">{testimonial.author}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
