import Faqs from "@/components/Faqs/page";
import Hero from "@/components/Hero/page";
import Profile from "@/components/Profile/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-grow">
        <Hero />
        <Profile />
        <Faqs />
      </div>
    </div>
  );
}
