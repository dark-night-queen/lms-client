// code dependencies
import Image from "next/image";

// custom components
import { SectionCard } from "../_components/section-card";
import { WelcomeCard } from "./_components/welcome-card";
import { LeaveStats } from "./_components/leave-stats";
import { Attendance } from "./_components/attendance";
import { Calendar } from "../_components/calendar";

// assets
import ComingSoon from "@/assets/images/coming-soon.jpg";

// driver code
export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-4 md:grid-rows-9 md:gap-8">
      <SectionCard className="col-span-1 md:col-span-2 md:row-span-3">
        <WelcomeCard />
      </SectionCard>

      <SectionCard className="col-span-1 md:col-start-3 md:row-span-4">
        <LeaveStats />
      </SectionCard>

      <SectionCard className="col-span-1 md:row-span-7 md:col-start-4 md:row-start-1">
        <Attendance />
      </SectionCard>

      <SectionCard
        className="col-span-1 md:row-span-5 md:col-start-3 md:row-start-5"
        contentClassName="px-2"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl font-semibold">Calendar</p>

          <Calendar />
        </div>
      </SectionCard>

      <SectionCard className="col-span-1 md:col-span-2 md:row-span-5 md:col-start-1 md:row-start-4 relative bg-[#f8efe2]">
        <Image
          src={ComingSoon}
          alt={"Coming Soon"}
          fill
          style={{ objectFit: "contain", minHeight: "200px" }}
        />
      </SectionCard>
    </div>
  );
}
