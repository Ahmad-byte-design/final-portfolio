import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



import "@/assets/global.css"
import { useState } from 'react';

type Props = {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
};

export default function Carousel({ items, renderItem }: Props) {

  const [ isMobiel , setIsMobiel ] = useState(window.innerWidth <= 720 ? true : false);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={isMobiel?1:3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          navigation
          pagination={{ clickable: true }}
          className=' p-10! m-auto! '
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id ?? index} className='w-1/2 flex self-center'>
              {renderItem(item, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
