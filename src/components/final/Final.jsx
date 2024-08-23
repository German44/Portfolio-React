import DividerTag from "../dividerTag/DividerTag";

const Final = () => {
  return (
    <>
      <section
        className="min-h-[100vh] mt-9  flex flex-col w-full items-center"
        id="Final"
      >
        <DividerTag tag="Final Experience" />
        <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
          <div className="w-full min-h-[82vh] flex justify-center items-center">Experiencia Final</div>
        </div>
      </section>
    </>
  );
};

export default Final;
