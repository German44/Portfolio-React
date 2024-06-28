const Process = ({ title, content, image }) => {
  return (
    <div className="w-full h-full px-8 mt-4 grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-6 gap-4 ">
      <div className="sm:col-span-2 col-span-2 ">
        <h2 className="text-white font-primary text-5xl m-4" id={title}>{title}</h2>
      </div>
      <div className="col-span-2 row-span-2 row-start-2 sm:col-span-2 sm:row-span-2 sm:col-start-3 ">
        <p className="text-white font-primary text-xl text-justify m-4">{content}</p>
      </div>
      <div className="col-span-2 row-span-1 row-start-4 sm:col-span-4 sm:row-span-4 sm:row-start-3 ">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Process;
