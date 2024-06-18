const DividerTag = ({ tag }) => {
  return (
    <div className=" container flex flex-col w-full items-end   ">
      <div className="w-full h-1 mt-1  bg-white rounded-full"></div>
      <h3 className="text-white font-bold font-primary text-3xl mt-1 mx-8">{tag}</h3>
    </div>
  );
};

export default DividerTag;
