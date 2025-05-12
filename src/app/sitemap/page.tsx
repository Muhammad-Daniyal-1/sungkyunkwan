import MobileSearchBox from "@/components/UI/Header/MobileSearchBox";
import MobileHeader from "@/components/UI/Header/MobileHeader";
import TopBar from "@/components/UI/Header/TopBar";
import MegaMenu from "@/components/UI/Header/MegaMenu";
import SearchBox from "@/components/UI/SearchBox";
import RightSidebar from "@/components/UI/RightSidebar";
import Menu from "@/components/SiteMap/Menu";
import Sidebar from "@/components/SiteMap/Sidebar";
import MobileFooter from "@/components/UI/Footer/MobileFooter";
import Footer from "@/components/UI/Footer/Footer";

export default function SiteMap() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="hidden xl:block">
        <RightSidebar />
      </div>
      <TopBar />
      <MobileHeader />
      <MegaMenu />
      <div className="px-20 mx-auto max-w-[1560px] hidden xl:block">
        <SearchBox />
      </div>
      <div className="xl:hidden">
        <MobileSearchBox />
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto max-w-[1560px]">
        <div className="flex flex-col md:grid md:grid-cols-6 mt-10 border-t border-[#E0E2EB]">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-[#E0E2EB]">
            <Sidebar />
          </div>
          <div className="md:col-span-5">
            <Menu />
          </div>
        </div>
      </div>
      <Footer />
      <MobileFooter />
    </div>
  );
}
