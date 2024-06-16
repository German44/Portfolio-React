import DividerTag from "../dividerTag/DividerTag";

// 'ID_DEL_ARCHIVO' de Google Drive
const googleDriveFileId = "1rjmihF8GRWkFVuWNQJoPK6_yYNmzdDBX";

// Enlace de descarga de Google Drive
const googleDriveDownloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

const Banner = () => {
  return (
    <section className="min-h-[100vh] " id="home">
      <div className="container mx-auto min-h-[100vh] bg-black/20 backdrop-blur-2xl rounded-xl  flex items-center">
        <div className="flex flex-col w-full h-full  gap-y-6 p-8">
          {/* <DividerTag tag="Home" /> */}
          <div className="flex-grow">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white font-primary">
              UX-UI DESIGNER
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white font-primary">
              FRONTEND DEVELOPER
            </h1>
            <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-white font-secondary mt-4">
              As a creative UX/UI Designer and Frontend Developer, I excel at
              crafting disruptive, user-centric digital experiences. My
              problem-solving approach ensures seamless integration of design
              and functionality, transforming innovative concepts into
              responsive, high-performing websites and applications.
            </p>
          </div>
          <div className="flex justify-start items-center  p-4">
            <button
              className="btn btn-primary"
              onClick={() => window.open(googleDriveDownloadLink, "_blank")}
            >
              Download C.V.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
