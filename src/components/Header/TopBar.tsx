import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { FiGrid, FiLogIn } from "react-icons/fi";

export default function TopBar() {
    return (
        <div >
            <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 border border-[#EFF2F1]">
                <div className="flex items-center space-x-4">
                    <Image src="/svgs/logo.svg" alt="Logo" width={180} height={50} />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-4">
                        <Image src="/svgs/heart.svg" alt="Heart" width={24} height={24} />
                        <Image src="/svgs/notification.svg" alt="Notification" width={24} height={24} />
                    </div>
                    <div className="flex items-center space-x-2 border-l-2 border-[#E2EAE8] pl-4">
                        English
                        <FaCaretDown />
                    </div>
                    <button className="flex items-center space-x-2 bg-primary text-white rounded-full px-4 py-2">
                        <span className="pl-2">Login</span>
                        <FiLogIn size={24} color="white" />
                    </button>
                    <div className="w-[144px] h-[41px] flex rounded-full overflow-hidden">
                        {/* Left side (Active / Dark) */}
                        <div className="w-1/2 bg-[#0A0046] text-white flex items-center justify-center">
                            <span className="text-sm font-semibold">자과캠</span>
                        </div>

                        {/* Right side (Inactive / Light with inner shadow) */}
                        <div
                            className="w-1/2 bg-[#EFF2F1] text-black flex items-center justify-center"
                            style={{
                                boxShadow: "inset -4px -2px 5px rgba(0,0,0,0.16)",
                            }}
                        >
                            <span className="text-sm font-semibold">인사캠</span>
                        </div>
                    </div>

                    <button className="bg-white rounded-full px-4 py-2 flex items-center gap-2 border border-gray text-gray">
                        <FiGrid size={18} />
                        전체메뉴
                    </button>

                </div>


            </header>

        </div>
    );
}