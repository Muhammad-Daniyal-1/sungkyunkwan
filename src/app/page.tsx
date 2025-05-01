import TopBar from "@/components/Header/TopBar";
import MegaMenu from "@/components/Header/MegaMenu";
import SideMenuBar from "@/components/Home/SideMenuBar";
import SearchBox from "@/components/Home/SearchBox";
import HeroSection from "@/components/Home/HeroSection";
import ResearchSection from "@/components/Home/ResearchSection";
import TrendsSection from "@/components/Home/TrendsSection";
import ReviewsSection from "@/components/Home/ReviewsSection";

export default function Home() {
  return (
    <>
      <SideMenuBar />
      <TopBar />
      <MegaMenu />
      <div className="mx-20">
        <SearchBox />
        <HeroSection />
        <ResearchSection />
        <TrendsSection />
        <ReviewsSection />
      </div>
    </>
  );
}
