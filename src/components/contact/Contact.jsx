
import ContactForm from "./ContactForm";
import DividerTag from "../dividerTag/DividerTag";
import FooterContact from "./FooterContact";

// Reemplaza 'ID_DEL_ARCHIVO' con el ID real de tu archivo en Google Drive
// const googleDriveFileId = "1LTja5061INTTENK-pJXuo0nfOeaoabEa";

// Construye el enlace de descarga directa desde Google Drive
// const googleDriveDownloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="min-h-[86vh] mt-9 flex items-center flex-col "
      >
        <DividerTag tag="Contact" />
        <div className="container mx-auto min-h-[86vh] bg-black/20 backdrop-blur-2xl rounded-xl flex flex-col justify-center items-center">
          <div className="w-[80%] min-h-[82vh] flex justify-center items-start flex-col  ">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary text-center mb-10">
              Thanks for visiting me!
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary text-center">
              Let's Connects and Work Together
            </h2>
            <ContactForm />
          </div>
          <div className="w-full h-full relative bottom-20">
            <FooterContact />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
