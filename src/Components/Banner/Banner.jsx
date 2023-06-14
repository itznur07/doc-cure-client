import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className='container mx-auto mb-5 pb-5'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div
            className='h-screen bg-cover bg-center'
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1589279003513-467d320f47eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
            }}
          >
            <div className='h-full bg-black bg-opacity-50 flex items-center justify-center'>
              <div className='text-white text-center'>
                <h1 className='text-6xl font-bold'>
                  Quality Healthcare, Delivered
                </h1>
                <p className='text-2xl mt-4'>Welcome to our doc cure portal</p>
                <button className='bg-[#1F8A70] hover:bg-[#00484a] px-8 py-4 rounded-lg mt-8'>
                  Appointment
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='h-screen bg-cover bg-center'
            style={{
              backgroundImage: `url(https://source.unsplash.com/featured/?doctor[1])`,
            }}
          >
            <div className='h-full bg-black bg-opacity-50 flex items-center justify-center'>
              <div className='text-white text-center'>
                <h1 className='text-6xl font-bold'>
                  Your Health, Our Priority
                </h1>
                <p className='text-2xl mt-4'>
                  Find the best course for your needs and goals
                </p>
                <button className='bg-[#1F8A70] hover:bg-[#0a5658] px-8 py-4 rounded-lg mt-8'>
                  Appointment
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='h-screen bg-cover bg-center'
            style={{
              backgroundImage: `url(https://source.unsplash.com/featured/?doctor[3])`,
            }}
          >
            <div className='h-full bg-black bg-opacity-50 flex items-center justify-center'>
              <div className='text-white text-center'>
                <h1 className='text-6xl font-bold'>
                  Connecting Patients & Doctors
                </h1>
                <p className='text-2xl mt-4'>
                  Become a teacher and earn money by creating courses
                </p>
                <button className='bg-[#1F8A70] hover:bg-[#014748] px-8 py-4 rounded-lg mt-8'>
                  Appointment
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
