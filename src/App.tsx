import { useState } from "react";
import StudioRoomImg from "./assets/landing-bg.png";
import Dots from "./assets/dots.svg";
import BoxSearchIcon from "./assets/icons/box-search.svg";
import ChartIcon from "./assets/icons/chart-square.svg";
import CodeIcon from "./assets/icons/code.svg";
import WalletIcon from "./assets/icons/empty-wallet.svg";
import { BaseButton, ServiceCard } from "./components/Global/";

function App() {
  return (
    <div className="bg-white font-averta">
      <div className="container mx-auto">
        <div className="flex justify-between py-8">
          <div>A+ Studio</div>
          <div>
            <ul className="flex">
              <li className="mr-10">
                <a>Home</a>
              </li>
              <li className="mr-10">
                <a>What We Do</a>
              </li>
              <li className="mr-10">
                <a>Service</a>
              </li>
              <li className="mr-10">
                <a>Project</a>
              </li>
              <li className="mr-10">
                <a>Blog</a>
              </li>
              <li className="mr-10">
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-5 relative">
            <div className="relative z-20">
              <div className="text-black text-4xl">
                A Digital Product Agency
              </div>
              <div className="py-10 w-3/5">
                <p className="text-sx text-[16px] font-thin text-[#565656]">
                  Leading digital agency with solid design and development
                  expertise. We build readymade websites, mobile applications,
                  and elaborate online business services.
                </p>
              </div>
              <div>
                <BaseButton>Contact Now</BaseButton>
              </div>
            </div>
            <div className="absolute -bottom-28 z-10 -left-20">
              <img src={Dots} />
            </div>
          </div>
          <div className="col-span-7 relative">
            <div className="h-40 w-40 rounded-full bg-[#DAE9FF] absolute -left-20 z-10"></div>
            <div className="relative z-20 ">
              <img src={StudioRoomImg} alt="" className="rounded-tr-2xl" />
            </div>
            <div className="h-40 w-40 bg-[#FFF5DB] rounded-br-[100px] absolute right-20 -bottom-24 z-10"></div>
          </div>
        </div>
        <div>
          {/* Clients */}
          <section className="flex pt-40">
            <div>
              <div className="text-black text-4xl">Our Client</div>
              <p className="text-grey">
                {" "}
                Several selected clients, who already believe in ourr service
              </p>
            </div>
            <div className="flex items-end w-full">
              <div className="flex flex-row justify-evenly items-center w-full">
                <div>
                  <img src="./src/assets/clients/google.png" alt="" />
                </div>
                <div>
                  <img src="./src/assets/clients/airbnb.png" alt="" />
                </div>
                <div>
                  <img src="./src/assets/clients/ubereats.png" alt="" />
                </div>
                <div>
                  <img src="./src/assets/clients/amazon.png" alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="relative">
            <div className="absolute w-[1047px] h-[619px] bg-[#F4F9FF] rounded-tl-[150px] -right-[5vw]"></div>
            <div className="flex items-center justify-between w-full pt-40">
              <div className="relative z-20">
                <div className="text-black text-4xl">
                  How can we help your Business ?
                </div>
                <p className="text-grey">
                  {" "}
                  We build readymade websites, mobile applications, and
                  elaborate online business services.
                </p>
                <div className="absolute -bottom-28 z-10 -left-20">
                  <img src={Dots} />
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="grid grid-cols-2 gap-8 relative">
                  <div className="flex flex-col space-y-8 mt-20">
                    <ServiceCard
                      className="pt-20"
                      color="bg-[#F1F7FF]"
                      icon={BoxSearchIcon}
                      title="Business Idea Planning"
                      subtitle="We present you a proposal and discuss niffty-gritty like"
                    />
                    <ServiceCard
                      icon={CodeIcon}
                      color="bg-[#FFF2F8]"
                      title="Business Idea Planning"
                      subtitle="We present you a proposal and discuss niffty-gritty like"
                    />
                  </div>
                  <div className="flex flex-col space-y-8">
                    <ServiceCard
                      className="pt-20"
                      color="bg-[#FFF7E3]"
                      icon={WalletIcon}
                      title="Business Idea Planning"
                      subtitle="We present you a proposal and discuss niffty-gritty like"
                    />
                    <ServiceCard
                      icon={ChartIcon}
                      color="bg-[#DEFFEE]"
                      title="Business Idea Planning"
                      subtitle="We present you a proposal and discuss niffty-gritty like"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-40">
            <div className="flex flex-row w-full items-center">
              <div className="w-full relative">
                <div className="relative z-20">
                  <iframe
                    className="rounded-3xl shadow-xl w-4/5 h-[372px]"
                    src="https://www.youtube.com/embed/lxvKgxw-P-4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <div className="h-24 w-24 bg-[#FFF5DB] rounded-full absolute right-28 -bottom-12 z-10"></div>
              </div>
              <div className="w-full relative">
                <div>
                  <div className="h-40 w-40 bg-[#EFF1FF] rounded-br-[150px] absolute -left-10 -top-10 z-10"></div>

                  <div className="relative z-20">
                    <div className="text-black text-4xl">
                      Great Digital Product <br /> Agency since 2016{" "}
                    </div>
                    <p className="text-grey pt-5">
                      {" "}
                      Our Business Plan is a written document describing a
                      company's core business activites, Objectives, and how it
                      plans to achieve its goals. Our goal is to provide our
                      client high quality Product with modern idea accordingly
                      their budgets and according thir reuirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-40">
            <div className="flex justify-center">
              <div>
                <div className="text-black text-4xl">
                  What our happy client say
                </div>
                <p className="text-grey pt-5">
                  Several selected clients, who already believe in our service.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
