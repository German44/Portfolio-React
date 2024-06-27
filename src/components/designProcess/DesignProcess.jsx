import DividerTag from "../dividerTag/DividerTag";

const DesignProcess = () => {
  return (
    <>
      <section
        className="min-h-[100vh] mt-9  flex flex-col w-full items-center"
        id="DesignProcess"
      >
        <DividerTag tag="Design Process" />
        <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
          <div className="w-full min-h-[82vh] flex justify-center items-center">Design Process</div>
        </div>
      </section>
    </>
  );
};

export default DesignProcess;
