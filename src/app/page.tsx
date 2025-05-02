import TopBar from "@/components/UI/Header/TopBar";
import MegaMenu from "@/components/UI/Header/MegaMenu";
import SideMenuBar from "@/components/Home/SideMenuBar";
import SearchBox from "@/components/Home/SearchBox";
import HeroSection from "@/components/Home/HeroSection";
import ResearchSection from "@/components/Home/ResearchSection";
import TrendsSection from "@/components/Home/TrendsSection";
import ReviewsSection from "@/components/Home/ReviewsSection";
import BestReviewSection from "@/components/Home/BestReviewSection";
import LoveProjectSection from "@/components/Home/LoveProjectSection";
import InfoSection from "@/components/Home/InfoSection";
import Footer from "@/components/UI/Footer/Footer";

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
        <BestReviewSection />
        <LoveProjectSection />
        <InfoSection />
      </div>
      <Footer />
    </>
  );
}
