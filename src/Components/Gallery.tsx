const Gallery = ({ image, title, description }: any) => {
  return (
    <div>
      <div className="w-[95%] h-full bg-white shadow-md">
        <div>
          {image && <img src={image} alt="img" className="w-full h-[70%]" />}
        </div>
        <div className="mt-5 ml-7">{title}</div>
        <div className="mt-3 ml-7 text-[25px] font-semibold">{description}</div>
      </div>
    </div>
  );
};

export default Gallery;
