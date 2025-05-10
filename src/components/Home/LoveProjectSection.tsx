import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    img: "/images/project-1.png",
    title: "소프트웨어공학과 김상희",
  },
  {
    id: 2,
    img: "/images/project-2.png",
    title: "철학과 김명륜",
  },
  {
    id: 3,
    img: "/images/project-3.png",
    title: "영어교육과 홍길동",
  },
  {
    id: 4,
    img: "/images/project-4.png",
    title: "산업공학과 김영희",
  },
];

export default function LoveProjectSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Project card component
  const ProjectCard = ({ item }: { item: (typeof data)[0] }) => (
    <motion.div variants={itemVariants}>
      <div className="flex justify-center">
        <Image
          src={item.img}
          alt={item.title}
          width={260}
          height={340}
          className="rounded-xl border border-[#C6D7D4] w-[260px] h-[340px]"
        />
      </div>
      <p className="font-bold text-md my-6 text-center">{item.title}</p>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:mt-24">
      {/* Left section */}
      <div className="md:col-span-1 bg-white p-4">
        <p className="text-2xl mb-1">Love Project1</p>
        <div className="flex justify-between items-end lg:items-start lg:flex-col">
          <p className="text-3xl font-bold">사랑해서가</p>
          <p className="text-[#8188A1] mt-3 cursor-pointer">+ 더보기</p>
        </div>
      </div>

      {/* Right section - Conditional rendering based on screen size */}
      <div className="md:col-span-4 relative">
        {isMobile ? (
          // Mobile view - Swiper slider
          <div className="relative px-2">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.5}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProjectCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Desktop view - Grid layout
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
