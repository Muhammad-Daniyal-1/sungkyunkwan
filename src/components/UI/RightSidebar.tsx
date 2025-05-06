import { IoIosInformationCircle } from "react-icons/io";
import { MdMobileFriendly, MdOutlineMenuBook } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { FaPerson, FaArrowUpLong } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "맞춤정보",
    icon: <IoIosInformationCircle size={20} />,
  },
  {
    id: 2,
    title: "북사이렌오더",
    icon: <MdMobileFriendly size={20} />,
  },
  {
    id: 3,
    title: "도서구입신청",
    icon: <IoBagHandleOutline size={20} />,
  },
  {
    id: 4,
    title: "원문복사",
    icon: <FaFile size={20} />,
  },
  {
    id: 5,
    title: "타기관도서대출",
    icon: <MdOutlineMenuBook size={20} />,
  },
  {
    id: 6,
    title: "시설·좌석예약",
    icon: <FaPerson size={20} />,
  },
];

export default function RightSidebar() {
  return (
    <div className="fixed right-0 top-1/2 translate-y-[-45%] shadow-[4px_4px_4px_0_rgba(0,0,0,0.10) z-50">
      <div className="flex flex-col gap-4 items-center justify-center">
        <ul className="flex flex-col gap-3 items-center justify-center text-white bg-primary py-6 rounded-2xl">
          {data.map((item) => (
            <li
              key={item.id}
              className=" pb-2 flex items-center flex-col gap-2"
            >
              {item.icon}
              <span className="text-sm px-2">{item.title}</span>
              <span className="w-20 h-[1px] bg-[#454F6F]"></span>
            </li>
          ))}
        </ul>
        <button className="flex flex-col items-center  justify-center bg-secondary rounded-full text-white w-14 h-14 gap-1">
          <FaArrowUpLong size={16} />
          <span className="text-xs font-bold">TOP</span>
        </button>
      </div>
    </div>
  );
}
