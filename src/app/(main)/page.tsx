// code dependencies
import Image from "next/image";

// custom components
import { SectionCard } from "./_components/section-card";
import { WelcomeCard } from "./_components/home/welcome-card";
import { LeaveStats } from "./_components/home/leave-stats";
import { Attendance } from "./_components/home/attendance";
import { Calendar } from "./_components/home/calendar";

// assets
import ComingSoon from "@/assets/images/coming-soon.jpg";

// driver code
export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-9 gap-8 p-8">
      <SectionCard className="col-span-2 row-span-3">
        <WelcomeCard />
      </SectionCard>

      <SectionCard className="col-start-3 row-span-4">
        <LeaveStats />
      </SectionCard>

      <SectionCard className="row-span-7 col-start-4 row-start-1">
        <Attendance />
      </SectionCard>

      <SectionCard className="col-span-2 row-span-5 col-start-1 row-start-4 relative bg-[#f8efe2]">
        <Image
          src={ComingSoon}
          alt={"Coming Soon"}
          fill
          style={{ objectFit: "contain" }}
        />
      </SectionCard>

      <SectionCard
        className="row-span-5 col-start-3 row-start-5"
        contentClassName="px-2"
      >
        <Calendar />
      </SectionCard>
    </div>
  );
}
