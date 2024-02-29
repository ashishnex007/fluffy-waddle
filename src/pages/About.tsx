import Avatarx from "@/components/Avatar";
import { one, two, three, four, five, six } from "@/images";

const About = () => {
  const images = [one, two, three, four, five, six];
  const names = ["Vajjala Ashish Gowtham", "Varun Nitesh Shah", "I Sai Rohit", "Md Riyyanuddin Quamri", "M Vishnu Priya", "N Rithvik" ];
  const roles = ["Web Developer", "Technical Head", "Hardware Expert", "Graphic Designer", "Innovation", "ML Expert" ];

  return (
    <div className="flex flex-col items-center py-5">
      <div className="flex justify-center">
        <h1 className="scroll-m-20 border-b text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-0 font-DMSans" data-aos="fade-down">
          Team 405
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-x-20">
        {images.map((image, index) => {
          return (
            <Avatarx 
              index={index}
              image={image}
              fallbackText={names[index].substring(2)}
              name={names[index]}
              role={roles[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
