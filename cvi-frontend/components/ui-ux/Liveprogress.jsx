import Image from "next/image";
import React from "react";

const Liveprogress = () => {
  return (
    <section className="bg-[linear-gradient(25deg,#181818_20%,#07575F_45%,#07575F_55%,#181818_80%)] py-10 md:py-16">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-2xl md:text-4xl text-white font-semibold text-center mb-4">
          Live Progress Tracking
        </h2>
        <p className="text-center text-[#DCDCDC] mb-10">
          Track progress and stay in control with our transparent system, which
          provides a comprehensive overview of progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 place-items-center mb-10">
          <div>
            <Image
              src="/image-3.png"
              alt="Live Progreess"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl text-[#BDBDBD] font-bold mb-6">
              Jira Board
            </h2>
            <p className="text-[#989898] mb-6">
              At CVI, clients stay informed and involved with our Jira
              management tool, with the ability to view to-do, in-progress and
              completed tasks, as well as any issues and who is working on them,
              at any time.
            </p>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="space-y-2">
                {" "}
                <Image
                  src="/atlassian.png"
                  alt="atlassian"
                  width={40}
                  height={40}
                />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Atlassian
                </p>
              </div>

              <div className="space-y-2">
                {" "}
                <Image src="/jira.png" alt="jira" width={40} height={40} />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Jira
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 place-items-center mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#BDBDBD] font-bold mb-6">
              Development Milestone
            </h2>
            <p className="text-[#989898] mb-6">
              A comprehensive overview of your project’s development milestones
              and timeline, providing a bird’s eye view of progress and allowing
              clients to make informed decisions.
            </p>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="space-y-2">
                {" "}
                <Image
                  src="/atlassian.png"
                  alt="atlassian"
                  width={40}
                  height={40}
                />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Atlassian
                </p>
              </div>

              <div className="space-y-2">
                {" "}
                <Image src="/jira.png" alt="jira" width={40} height={40} />
                <p className="text-[#BDBDBD] text-sm font-semibold text-center">
                  Jira
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/image-3.png"
              alt="Live Progreess"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liveprogress;
