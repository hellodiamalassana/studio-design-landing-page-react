import { useState } from "react";
import StudioRoomImg from "./assets/landing-bg.png";
import Avatar9 from "./assets/avatar/9.png";
import Avatar1 from "./assets/avatar/1.png";
import Avatar2 from "./assets/avatar/2.png";
import Avatar3 from "./assets/avatar/3.png";
import Avatar4 from "./assets/avatar/4.png";
import Avatar5 from "./assets/avatar/5.png";
import Avatar6 from "./assets/avatar/6.png";
import Avatar7 from "./assets/avatar/7.png";
import Avatar8 from "./assets/avatar/8.png";

import GoogleImg from "./assets/clients/google.png";
import AirbnbImg from "./assets/clients/airbnb.png";
import UbereatsImg from "./assets/clients/ubereats.png";
import AmazonImg from "./assets/clients/amazon.png";

import Dots from "./assets/dots.svg";
import BoxSearchIcon from "./assets/icons/box-search.svg";
import ChartIcon from "./assets/icons/chart-square.svg";
import CodeIcon from "./assets/icons/code.svg";
import WalletIcon from "./assets/icons/empty-wallet.svg";
import MenuIcon from "./assets/icons/menu-icon.svg";
import { BaseButton, ServiceCard } from "./components/Global/";
import { animateScroll as scroll, scroller, Link, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
  mirror: true,
  offset: 120,
  easing: "ease",
});

const scrollTo = () => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

function App() {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className="bg-white font-averta h-full ">
      <div className="container   overflow-x-hidden px-5 scroll-smooth md:mx-auto">
        <div className="flex flex-wrap items-center justify-between w-full py-8">
          <h1 className="font-bold text-2xl">A+ Studio</h1>
          <div>
            <img
              loading="lazy"
              onClick={() => onClickMenu()}
              className="h-6 w-6 cursor-pointer md:hidden block"
              src={MenuIcon}
            />
          </div>
          <div
            className={`${
              !isActive ? "hidden" : null
            } w-full md:flex md:items-center md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 pt-5">
              <li className="mr-10 cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => scrollTo()}
                >
                  Home
                </Link>
              </li>
              <li className="mr-10 cursor-pointer">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => scrollTo()}
                >
                  What We Do
                </Link>
              </li>
              <li className="mr-10 cursor-pointer">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => scrollTo()}
                >
                  Services
                </Link>
              </li>
              <li className="mr-10 cursor-pointer">
                <Link
                  to="product"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => scrollTo()}
                >
                  Project
                </Link>
              </li>
              <li className="mr-10 cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => scrollTo()}
                >
                  Blog
                </Link>
              </li>
              <li className="mr-10 cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => scrollTo()}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-4 items-center">
          <div className="col-span-5 relative">
            <div className="relative z-20">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="text-black text-4xl"
              >
                A Digital Product Agency
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="py-10 w-full lg:w-3/5"
              >
                <p className="text-sx text-[16px] font-thin text-[#565656]">
                  Leading digital agency with solid design and development
                  expertise. We build readymade websites, mobile applications,
                  and elaborate online business services.
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1500">
                <BaseButton>Contact Now</BaseButton>
              </div>
            </div>
            <div className="absolute -bottom-28 z-10 -left-20">
              <img src={Dots} />
            </div>
          </div>
          <div className="col-span-7 relative pt-10">
            <div className="h-40 w-40 rounded-full bg-[#DAE9FF] absolute -left-20 z-10"></div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="relative z-20 "
            >
              <img
                loading="lazy"
                src={StudioRoomImg}
                alt=""
                className="rounded-tr-2xl"
              />
            </div>
            <div className="h-40 w-40 bg-[#FFF5DB] rounded-br-[100px] absolute right-20 -bottom-24 z-10"></div>
          </div>
        </div>
        <div>
          {/* Clients */}
          <section className="lg:flex pt-40">
            <div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="text-black text-4xl"
              >
                Our Clients
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-grey"
              >
                {" "}
                Several selected clients, who already believe in ourr service
              </p>
            </div>
            <div className="flex items-center md:items-end w-full pt-10 lg:pt-0">
              <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center w-full space-y-10 lg:space-y-0">
                <div data-aos="fade-left" data-aos-delay="100">
                  <img loading="lazy" src={GoogleImg} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-delay="200">
                  <img loading="lazy" src={AirbnbImg} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-delay="300">
                  <img loading="lazy" src={UbereatsImg} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-delay="400">
                  <img loading="lazy" src={AmazonImg} alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="relative">
            <div className="absolute w-[1047px] h-[619px] bg-[#F4F9FF] rounded-tl-[150px] -right-[5vw]"></div>
            <div className="flex  flex-col lg:flex-row items-center justify-between w-full pt-40">
              <div className="relative z-20">
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="text-black text-4xl"
                >
                  How can we help your Business ?
                </div>
                <p
                  className="text-grey"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {" "}
                  We build readymade websites, mobile applications, and
                  elaborate online business services.
                </p>
                <div className="absolute -bottom-28 z-10 -left-20">
                  <img loading="lazy" src={Dots} />
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="flex flex-col space-y-8 mt-20">
                    <ServiceCard
                      className="pt-0 lg:pt-20"
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
            <Element name="product">
              <div className="flex  flex-col-reverse space-y-20 space-y-reverse lg-space-y-0 lg:flex-row w-full items-center">
                <div className="w-full relative">
                  <div className="relative z-20">
                    <iframe
                      data-aos="fade-right"
                      className="rounded-3xl shadow-xl w-full lg:w-4/5 h-[372px]"
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
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="text-black text-4xl"
                      >
                        Great Digital Product <br /> Agency since 2016{" "}
                      </div>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        className="text-grey pt-5"
                      >
                        {" "}
                        Our Business Plan is a written document describing a
                        company's core business activites, Objectives, and how
                        it plans to achieve its goals. Our goal is to provide
                        our client high quality Product with modern idea
                        accordingly their budgets and according thir
                        reuirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          </section>

          <section className="pt-40">
            <div className="flex justify-center">
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-black text-4xl"
                >
                  What our happy client say
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="text-grey pt-5"
                >
                  Several selected clients, who already believe in our service.
                </p>
              </div>
            </div>
            {/* Testimonals */}
            <div className="flex flex-col space-x-2 justify-between lg:flex-row h-full w-full items-center pt-10">
              <div className="w-full lg:w-2/3">
                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center space-x-10">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-2/3 lg:w-full"
                  >
                    <div className="relative">
                      <img
                        loading="lazy"
                        src={Avatar9}
                        className="rounded-br-full relative rounded-bl-full rounded-tl-full z-10"
                        alt=""
                      />
                      <div className="absolute bottom-2">
                        <div className="w-[120px] h-[120px] border-8 border-[#FF007A] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="500"
                      className="text-black font-bold text-2xl"
                    >
                      Matthew Paul
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="500"
                      className="font-normal text-sm leading-relaxed text-[#565656] pt-5"
                    >
                      Perfect, very good job! Thank you for the amazing design
                      and work. Really impressed with the high quality and quick
                      turnaround time. Highly recommend.
                    </div>
                    <div className="pt-[40px]">
                      <div className="h-4 w-4 rounded-full bg-blue-700"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-[340px] relative"
              >
                <div className="animate-spin-slow relative z-20">
                  <div className=" w-[600px] h-[415px]">
                    <div className="absolute left-[40%] ">
                      <div className="animate-neg-spin-slow">
                        <img loading="lazy" src={Avatar1} alt="" />
                      </div>
                    </div>
                    <div className="absolute top-[20%]">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar5}
                          className="w-[98px] h-[98px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="absolute top-[60%]">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar3}
                          className="w-[68px] h-[68px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-[30%]">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar6}
                          className="w-[98px] h-[98px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[20%] right-[10%]">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar7}
                          className="w-[68px] h-[68px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="absolute top-[15%] right-[10%]">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar4}
                          className="w-[54px] h-[54px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="absolute top-[40%] right-0">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar2}
                          className="w-[54px] h-[54px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="absolute top-[40%] right-0">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar2}
                          className="w-[54px] h-[54px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="absolute top-[50%] left-[50%] -mt-[50px] -ml-[50px]">
                      <div className="animate-neg-spin-slow">
                        <img
                          loading="lazy"
                          src={Avatar8}
                          className="w-[120px] h-[120px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-16 left-10">
                  <div className="w-[184px] h-[184px] rounded-full bg-[#FFF5DB]"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-40">
            <Element name="contact">
              <div className="relative h-[292px]">
                <div className="border-0 rounded-3xl h-full  bg-[#F4F9FF] rounded-br-0 rounded-tr-0 lg:rounded-br-[100px] lg:rounded-tr-[100px]">
                  <div className="flex">
                    <div className="w-full"></div>
                    <div className="w-full">
                      <div className="flex justify-end">
                        <div className="h-[292px] rounded-br-[100px] rounded-tr-[100px] rounded-tl-[190px] rounded-bl-[240px] w-3/4 bg-blue-700 hidden lg:block"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute z-10 top-0 h-full w-full">
                  <div className="flex flex-col lg:flex-row w-full items-center h-full justify-around">
                    <div className="flex flex-col space-y-4">
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="text-4xl font-extrabold"
                      >
                        Subscribe Newsletter
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="700"
                        className="text-[#757575]"
                      >
                        I will update good news and promotion service not spam
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div
                        data-aos="fade-up"
                        className="flex items-center space-x-2 p-3 w-full rounded-full justify-between bg-white h-full shadow-3xl"
                      >
                        <div className="w-full h-full pl-4">
                          <input
                            className="w-full h-full focus:outline-0"
                            placeholder="Enter your email address..."
                          />
                        </div>
                        <div>
                          <BaseButton className="whitespace-nowrap">
                            Contact Now
                          </BaseButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          </section>
          <section className="pt-40 pb-20">
            <div className="border-t border-b">
              <div className="pt-16 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-6">
                  <div className="lg:col-span-2">
                    <div className="pb-7 font-black">A+ Studio</div>
                    <div className="w-1/2">
                      Leading digital agency with solid design and development
                      expertise. We build readymade websites, mobile
                      applications, and elaborate online business services.
                    </div>
                  </div>
                  <div>
                    <div className="font-black pb-7 pt-10 md:pt-0">
                      What We do
                    </div>
                    <div>
                      <ul className="font-thin text-xs leading-8">
                        <li>Web Design</li>
                        <li>App Design</li>
                        <li>Social Media Manage</li>
                        <li>Market Analysis Project</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="font-black pb-7 pt-10 md:pt-0">Company</div>
                    <div>
                      <ul className="font-thin text-xs leading-8">
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Become Investor</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="font-black pb-7 pt-10 md:pt-0">Support</div>
                    <div>
                      <ul className="font-thin text-xs leading-8">
                        <li>FAQ</li>
                        <li>Policy</li>
                        <li>Business</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="font-black pb-7 pt-10 md:pt-0">Contact</div>
                    <div>
                      <ul className="font-thin text-xs leading-8">
                        <li>WhatsApp</li>
                        <li>Support 24</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center items-center">
              <div className="p-4 text-[#A4A4A4] text-xs text-center">
                Design by <a>Avi Yansah</a> and made with love by Simeon Nortey
                ❤️
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
