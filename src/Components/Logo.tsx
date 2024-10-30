import { VscArchive } from "react-icons/vsc";
import pix from "../assets/c-logo1.png";
import pix2 from "../assets/c-logo2.png";
import pix3 from "../assets/c-logo3.png";
import pix4 from "../assets/c-logo4.png";
import pix5 from "../assets/c-logo5.png";
import pix6 from "../assets/c-logo6.png";

const Logo = () => {
  const data = [
    { id: 1, logo: <img src={pix} alt="img" className="w-[20%] h-[20%]" /> },
    { id: 2, logo: <img src={pix2} alt="img" className="w-[20%] h-[20%]" /> },
    { id: 3, logo: <img src={pix3} alt="img" className="w-[20%] h-[20%]" /> },
    { id: 4, logo: <img src={pix4} alt="img" className="w-[20%] h-[20%]" /> },
    { id: 5, logo: <img src={pix5} alt="img" className="w-[20%] h-[20%]" /> },
    { id: 6, logo: <img src={pix6} alt="img" className="w-[20%] h-[20%]" /> },
  ];
  return (
    <div>
      <div className="w-[85%] h-full  flex gap-14 items-center">
        {data.map((el) => el.logo)}
      </div>
    </div>
  );
};

export default Logo;
