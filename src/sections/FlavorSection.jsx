import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full w-full lg:w-[43%] flex justify-center items-center">
          {/* This ensures that images of all dimensions fit nicely */}
          <div className="relative max-h-[100vh] max-w-[110%] w-auto h-auto flex items-center justify-center">
            <FlavorSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
