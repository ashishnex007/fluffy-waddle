import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import hero from '/hero.jpeg'
const Hero = () => {
  return (
    <div className="py-10">
      <div className="flex gap-[30rem]">
        {/* {for text} */}
        <div className="px-10">
          <div className="flex flex-col items-start justify-center h-[40rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base" data-aos="fade-right">
              Here's our most revolutionary product
            </p>
            <TypewriterEffectSmooth words={words1} />
            <TypewriterEffectSmooth words={words2} />
          </div>
        </div>

        {/* {for image} */}
        <div className="flex items-center -ml-40 " data-aos="fade-left"  data-aos-delay="500">
          <img
            src={hero}
            className="w-[25rem]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;

const words1 = [
  {
    text: "Introducing",
  },
  {
    text: "the",
  },
];
const words2 = [
  {
    text: "Tablet Vending Machine.",
    className: "text-blue-500 dark:text-blue-500",
  },
];
