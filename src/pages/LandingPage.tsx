import pix from "../assets/about_img.png";
import pix1 from "../assets/relx image.png";
import pix2 from "../assets/card1.jpg";
import pix3 from "../assets/card2.jpg";
import pix4 from "../assets/card3.jpg";
import Gallery from "../Components/Gallery";
import pix5 from "../assets/about_img03.png";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsMegaphone } from "react-icons/bs";
import { IoIosCalculator } from "react-icons/io";
import { FaHouseChimney } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { IoMdChatboxes } from "react-icons/io";
import pix6 from "../assets/cta_bg02.jpg";
import pix7 from "../assets/floor-chart.jpg";
import Table from "../Components/Table";
import pix8 from "../assets/hero image.jpg";
import pix9 from "../assets/test-bg.jpg";
import blog from "../assets/blog_img01.jpg";
import blog2 from "../assets/blog_img02.jpg";
import blog3 from "../assets/blog_img03.jpg";
import blog4 from "../assets/contact_bg.jpeg";
import Logo from "../Components/Logo";
import { FaRegUser } from "react-icons/fa";
import { TbMessageCheck } from "react-icons/tb";
import { LuPencil } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";
const LandingPage = () => {
  const card = [
    {
      id: 1,
      title: " Dedicated Production planning Teams",
      icon: (
        <BsMegaphone className="bg-slate-50 w-[20%] h-[20%] rounded-full" />
      ),
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.",
    },
    {
      id: 2,
      title: "We’re Here To Make You Successful",
      icon: (
        <IoIosCalculator className="bg-slate-50 w-[20%] h-[20%] rounded-full" />
      ),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.",
    },
    {
      id: 3,
      title: "Premium, Fresh Cuisine Made Onsite",
      icon: (
        <FaHouseChimney className="bg-slate-50 w-[20%] h-[20%] rounded-full" />
      ),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.",
    },
  ];

  const card2 = [
    {
      id: 1,
      title: "Flexible, Contemporary & Included Spaces",
      icon: (
        <FaSearchLocation className="bg-slate-50 w-[20%] h-[20%] rounded-full" />
      ),
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.",
    },
    {
      id: 2,
      title: "Human-Centered Design Friendly Spacesv",
      icon: (
        <BiSolidCarGarage className="bg-slate-50 w-[20%] h-[20%] rounded-full" />
      ),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.",
    },
    {
      id: 3,
      title: "Broker Cutting-Edge And Technology",
      icon: (
        <IoMdChatboxes className="bg-slate-50 w-[20%] h-[20%] rounded-full" />
      ),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.",
    },
  ];

  const contact = [
    {
      id: 1,
      icon: (
        <IoBookOutline className="bg-[#d29751] rounded-full text-white w-[15%] h-[10%] text-[15px]" />
      ),
      title: "Office Address",
      address: "380 St Kilda Road, Melbourne",
      address1: "VIC 3004, Australia",
    },
    {
      id: 1,
      icon: (
        <FaRegClock className="bg-[#d29751] rounded-full text-white w-[15%] h-[10%] text-[15px]" />
      ),
      title: "Working Hours",
      address: "Monday to Friday 09:00 to 18:30 and",
      address1: "Saturday we work until 15:30",
    },
    {
      id: 1,
      icon: (
        <LuMailOpen className="bg-[#d29751] rounded-full text-white w-[15%] h-[10%] text-[15px]" />
      ),
      title: "Message Us",
      address: "We are always with you to solve your problem",
      address1: "mail us : support@example.com",
    },
  ];
  return (
    <div>
      {/* hero screen */}
      <div className="w-full h-[60vh] bg-slate-300 mb-20 relative">
        <img src={pix8} alt="imd" className="w-full h-[99%]" />
        <div className="absolute top-0 right-0 left-0 opacity flex gap-28">
          <div className="ml-32 mt-10">
            <h1 className="font-bold text-white text-[80px]">
              Discover Modern
              <br /> Building Design
            </h1>
            <div></div>
          </div>
          <div className=" flex  flex-col justify-end">
            <p className="text-white font-bold text-[25px]">Price:</p>
            <p className="font-mono text-[#d29751] text-[40px]">$1,786.80</p>
          </div>
        </div>
      </div>
      {/* second hero */}
      <div className="w-full h-[80vh]  flex justify-center mb-20">
        <div className="w-[80%] h-full  flex justify-between">
          <div className="w-[45%] h-full ">
            <img src={pix} alt="" />
          </div>
          <div className="w-[50%] h-full ">
            <p className="mt-5 font-semibold text-[#d29751] mb-4">ABOUT US</p>
            <h1 className="text-[60px] font-semibold mb-4">
              Welcome To Our Relxtower
            </h1>
            <p className="text-[20px] mb-4">
              We provide an essential service for you
            </p>
            <p className="mb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantiue.
            </p>
            <button className="bg-[#d29751] text-white rounded-3xl w-[180px] h-[50px] font-semiboldj">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[60vh] bg-slate-50 mb-20">
        <img src={pix1} alt="" />
      </div>
      {/* interior views */}
      <div className="w-full h-[30vh]  flex justify-center">
        <div className="w-[30%] h-full ">
          <p className="font-semibold text-[#d29751] text-center mb-4">
            BEST WORK
          </p>
          <p className="text-[60px] font-bold text-center mb-5">
            Interior Views
          </p>
          <div className="w-[15%] h-[5px] bg-[#d29751] ml-52"></div>
        </div>
      </div>
      <div className="w-full h-[75vh] flex justify-center mb-20">
        <div className="w-[80%] h-full  flex gap-8">
          <Gallery
            image={pix2}
            title={"EXPLORE NOW"}
            description={"Luxury Apartment"}
          />
          <Gallery
            image={pix3}
            title={"EXPLORE NOW"}
            description={"One Room Apartment"}
          />
          <Gallery
            image={pix4}
            title={"EXPLORE NOW"}
            description={"Deluxe Apartment"}
          />
        </div>
      </div>
      <div className="bg-[#f5f5f5] w-full h-[90vh] flex justify-center mb-20">
        <div className="w-[80%] h-full  flex gap-7">
          <div className="w-[45%] h-full ">
            <img src={pix5} alt="img" />
          </div>
          <div className="w-[50%]  h-full">
            <div>
              <p className="text-[#d29751] font-semibold">BEST PLACE</p>
            </div>
            <div className="mb-3">
              <h1 className="font-bold text-[60px]">For Sell Properties</h1>
            </div>
            <div className="w-[15%] h-[5px] bg-[#d29751] mb-10" />
            <div className="text-[17px]  mb-7">
              Pellentesque habitant morbi tristique senectus et netus et fames
              acturpis egestas. Vestibulum tortor quam, feugiat vitae, tempor
              sit amet, ante. Donec eu libero sit amet quam egestas semper.
              mivitae est. Mauris placerat eleifend leo. Quisque sit amet est et
              sapien.
            </div>

            <div className="w-full h-[15%]  flex gap-24">
              <div className="w-[30%] h-full ">
                <div className="flex gap-3 items-center mb-2">
                  <span>
                    <FaBed className="text-[#d29751]" />
                  </span>{" "}
                  <p>3 Bedrooms</p>
                </div>
                <div className="flex gap-3 items-center">
                  <span>
                    <FaBath className="text-[#d29751]" />
                  </span>
                  <p>Bedrooms</p>
                </div>
              </div>
              <div className="w-[30%] h-full ">
                <div className="flex gap-3 items-center mb-2">
                  <span>
                    <LuPencilRuler className="text-[#d29751]" />
                  </span>{" "}
                  <p>Square Feet</p>
                </div>
                <div className="flex gap-3 items-center mb-2">
                  <span>
                    <FaCar className="text-[#d29751]" />
                  </span>{" "}
                  <p>Car parking</p>
                </div>
              </div>
            </div>
            <p className="font-semibold text-[40px] mt-2">Price:</p>
            <p className="font-mono text-[40px] mb-3">$1,786.80</p>
            <button className="text-white bg-[#d29751] w-[180px] h-[50px] rounded-3xl hover:bg-slate-950 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[30vh]  flex justify-center">
        <div className="w-[40%] h-full ">
          <div className="mb-5">
            <p className="text-[#d29751] font-semibold text-center">
              OUR SERVICES
            </p>
          </div>
          <div className="mb-3">
            <h1 className="font-bold text-[60px] text-center">What We Do</h1>
          </div>
          <div className="w-[15%] h-[5px] bg-[#d29751] ml-60" />
        </div>
      </div>
      <div className="w-full h-[45vh]  flex justify-center mb-20">
        <div className="w-[80%] h-full  flex gap-10">
          {card.map((el) => (
            <div className="w-[30%] h-full shadow-lg bg-white p-5">
              <div className="mb-4">
                <span>{el.icon}</span>
              </div>
              <div className="mb-4">
                <h1 className="font-semibold text-[25px]">{el.title}</h1>
              </div>
              <div>{el.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[45vh]  flex justify-center mb-20">
        <div className="w-[80%] h-full  flex gap-10">
          {card2.map((el) => (
            <div className="w-[30%] h-full shadow-lg bg-white p-5">
              <div className="mb-4">
                <span>{el.icon}</span>
              </div>
              <div className="mb-4">
                <h1 className="font-semibold text-[25px]">{el.title}</h1>
              </div>
              <div>{el.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[55vh] mb-20 relative">
        <img src={pix6} alt="img" className="e-full h-full" />
        <div className="absolute top-0 left-0 right-0 ">
          <h1 className="text-white font-semibold mt-24 text-center text-[20px]">
            Don’t hestitate to contact us
          </h1>
          <h1 className="text-white font-bold text-[40px] text-center">
            MAKE AN APPOINTMENT NOW
          </h1>
          <h1 className="text-white font-bold text-center text-[30px] mb-5">
            666 888 0000
          </h1>
          <div className="flex justify-center">
            <button className="bg-black text-white w-[150px] h-[45px] rounded-3xl">
              Contact US
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh]  flex justify-center">
        <div className="w-[50%] h-full">
          <div className="mb-5">
            <p className="text-[#d29751] font-semibold text-center">
              OUR PLANS
            </p>
          </div>
          <div className="mb-3">
            <h1 className="font-bold text-[60px] text-center">
              Apartments Plans
            </h1>
          </div>
          <div className="w-[15%] h-[5px] bg-[#d29751] ml-72 mb-20" />
          <div className="flex gap-5 ml-10">
            <button className="bg-[#d29751] text-white w-[150px] h-[50px] rounded-md">
              PENTHOUSE
            </button>
            <button className="bg-black text-white w-[130px] h-[50px] rounded-md hover:bg-[#d29751] transition 500ms">
              STUDIO
            </button>
            <button className="bg-black text-white w-[130px] h-[50px] rounded-md hover:bg-[#d29751] transition 500ms">
              DUPLEX
            </button>
            <button className="bg-black text-white w-[150px] h-[50px] rounded-md hover:bg-[#d29751] transition 500ms">
              DUBBLE HEIGHT
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[60vh]  flex justify-center">
        <div className="w-[75%] h-full flex gap-5">
          <div className="w-[50%] h-full">
            <div className="mt-2 mb-4">
              <p>
                There are many variations of passages of psum available, but the
                majority have alteration in some form, by injected humour, or
                randomised words which don't look even believable.
              </p>
            </div>
            <div className="mb-5">
              <p>
                f you are going to use a passage of lorem ipsum is simply free
                text, you need to be sure there isn't anything embarrassing
                hidden
              </p>
            </div>
            <div className=" flex justify-between mb-2">
              <p>FLOOR NO</p>
              <p>6</p>
            </div>
            <hr className="mb-3" />
            <div className=" flex justify-between mb-2">
              <p>ROOMS</p>
              <p>7</p>
            </div>
            <hr className="mb-3" />
            <div className=" flex justify-between mb-2">
              <p>TOTAL AREA / SQFT</p>
              <p>2800</p>
            </div>
            <hr className="mb-3" />
            <div className=" flex justify-between mb-2">
              <p>PARKING</p>
              <p>1</p>
            </div>
            <hr className="mb-3" />
            <div className=" flex justify-between mb-2">
              <p>PRICE</p>
              <p>2500$/Month</p>
            </div>
            <hr className="mb-3" />
          </div>
          <div className="w-[45%] h-full mt-2">
            <img src={pix7} alt="image" />
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] bg-[#f5f5f5] flex items-center justify-center">
        <div className="w-[50%] h-[70%] ">
          <div className="mb-5 mt-10">
            <p className="text-[#d29751] font-semibold text-center">
              OUR PLANS
            </p>
          </div>
          <div className="mb-3">
            <h1 className="font-bold text-[60px] text-center">
              Select Availability
            </h1>
          </div>
          <div className="w-[15%] h-[5px] bg-[#d29751] ml-72 mb-20" />
        </div>
      </div>
      <div className="w-full h-[75vh] bg-[#f5f5f5] flex justify-center">
        <div className="w-[75%] h-full bg-white">
          <Table />
        </div>
      </div>
      <div className="w-full h-[20vh] bg-[#f5f5f5]" />
      <div className="w-full h-[95vh] mb-20">
        <img src={pix9} alt="image" className="w-full h-full" />
      </div>
      <div className="w-full h-[30vh]  flex justify-center">
        <div className="w-[30%] h-full ">
          <p className="font-semibold text-[#d29751] text-center mb-4">
            NEW EVERY DAY
          </p>
          <p className="text-[60px] font-bold text-center mb-5">Latest News</p>
          <div className="w-[15%] h-[5px] bg-[#d29751] ml-52" />
        </div>
      </div>
      <div className="w-full h-[55vh]  flex justify-center  mb-20">
        <div className="w-[75%] h-full  flex gap-10">
          <div className=" w-[30%] h-full ">
            <img src={blog} alt="img" className="w-full h-[60%]" />
            <p className="ml-5 mt-10 mb-4 ">
              BY ADMIN . 5 DEC 2019 .{" "}
              <span className="text-[#d29751]">REAL ESTATE</span>
            </p>
            <p className="font-semibold text-[20px] ml-5">
              Making Distribut Product Team Work More With Monday
            </p>
          </div>
          <div className=" w-[30%] h-full shadow-2xl ">
            <img src={blog2} alt="img" className="w-full h-[60%]" />
            <p className="ml-5 mt-10 mb-4 ">
              BY ADMIN . 5 DEC 2019 .{" "}
              <span className="text-[#d29751]">REAL ESTATE</span>
            </p>
            <p className="font-semibold text-[20px] ml-5">
              Monthly Web Development Upto Cost Of JavaScript Ethics
            </p>
          </div>
          <div className=" w-[30%] h-full ">
            <img src={blog3} alt="img" className="w-full h-[60%]" />
            <p className="ml-5 mt-10 mb-4 ">
              BY ADMIN . 5 DEC 2019 .{" "}
              <span className="text-[#d29751]">REAL ESTATE</span>
            </p>
            <p className="font-semibold text-[20px] ml-5">
              Monthly Web Development Upto Cost Of JavaScript Ethics
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[99vh] relative">
        <img src={blog4} alt="img" className="h-full w-full" />
        <div className="absolute top-0 left-0 right-0">
          <div className="w-full h-[20vh]  flex justify-center">
            <div className="w-[30%] h-full ">
              <div className="mb-5">
                <p className="text-[#d29751] font-semibold text-center">
                  CONTACT
                </p>
              </div>
              <div className="mb-3">
                <h1 className="font-bold text-[60px] text-center">
                  Get In Touch
                </h1>
              </div>
              <div className="w-[17%] h-[5px] bg-[#d29751] ml-48 mb-20" />
            </div>
          </div>
          <div className="w-full h-[78vh] flex justify-center">
            <div className="w-[80%] h-full  mt-2 flex gap-7">
              <div className="w-[30%] h-[90%] bg-[#3c3934]">
                {contact.map((el) => (
                  <div>
                    <div className="mb-2 ml-3">{el.icon}</div>
                    <div className="text-[#d29751] text-[20px] font-medium ml-3 mb-2">
                      {el.title}
                    </div>
                    <div className="text-white text-[15px] ml-3 mb-2">
                      {el.address}
                    </div>
                    <div className="text-white ml-3 mb-3">{el.address1} </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="w-full h-[10%] mb-7">
                  <div className="w-full h-full shadow-md bg-white flex gap-1 items-center">
                    <input
                      placeholder="Write here "
                      className="pl-7 w-[870px] h-full border-none outline-none"
                    />
                    <span>
                      <FaRegUser className="text-[#d29751] mr-4" />
                    </span>
                  </div>
                </div>
                <div className="w-full h-[10%] mb-7">
                  <div className="w-full h-full shadow-md bg-white flex gap-1 items-center">
                    <input
                      placeholder="Write here "
                      className="pl-7 w-[870px] h-full border-none outline-none"
                    />
                    <span>
                      <CiMail className="text-[#d29751] mr-4" />
                    </span>
                  </div>
                </div>
                <div className="w-full h-[10%] mb-7">
                  <div className="w-full h-full shadow-md bg-white flex gap-1 items-center">
                    <input
                      placeholder="I would like to discuss"
                      className="pl-7 w-[870px] h-full border-none outline-none"
                    />
                    <span>
                      <TbMessageCheck className="text-[#d29751] mr-4" />
                    </span>
                  </div>
                </div>
                <div className="w-full h-[30%] mb-10">
                  <div
                    className="w-full h-full shadow-md bg-white flex gap-1 
                  "
                  >
                    <textarea
                      placeholder="Write Comment"
                      className="pl-7 w-[870px] h-full border-none outline-none "
                    />
                    <span>
                      <LuPencil className="text-[#d29751] mr-4 mt-4" />
                    </span>
                  </div>
                </div>
                <button className="rounded-full text-white bg-[#d29751] h-[50px] w-[200px] font-semibold hover:bg-slate-900 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[25vh] bg-[#d29751] flex justify-center">
        <Logo />
      </div>
    </div>
  );
};

export default LandingPage;
