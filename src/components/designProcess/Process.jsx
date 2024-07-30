const Process = ({ title, content, image }) => {
  return (
    <div className="w-full h-full px-8 mt-4 flex flex-col sm:grid sm:grid-cols-4 sm:grid-rows-6 gap-4 mt-8">
      <div className="sm:col-span-2 ">
        <h2 className="text-white font-primary text-xl sm:text-5xl m-4" id={title}>{title}</h2>
      </div>
      <div className=" sm:col-span-2 sm:row-span-2 sm:col-start-3  ">
        <p className="text-white  text-lg sm:text-xl text-justify m-4 mt-12">{content}</p>
      </div>
      <div className="sm:col-span-4 sm:row-span-4 sm:row-start-3 ">
        <img className="w-full h-full object-cover rounded-xl" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Process;
