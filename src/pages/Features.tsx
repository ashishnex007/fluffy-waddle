import { TracingBeam } from "../components/ui/tracing-beam";
import {f1, f2, f3, f4,} from '../images';

const Features = () => {

  const images = [f1, f2, f3, f4,];

  const content = [
    {
      title: "Fast & Reliable",
      description: (
        <>
          <p>
            TVM is silent, fast and reliable. It dispenses the medicines in a flash of an eye.
          </p>
        </>
      ),
      image: images[0],
    },
    {
      title: "Reduced Lines",
      description: (
        <>
          <p>
            TVM reduces the lines and waiting time at the pharmacy.
          </p>
        </>
      ),
      image:  images[1],
    },
    {
      title: "Automation",
      description: (
        <>
          <p>
            TVM automates the process of dispensing the medicines.
          </p>
        </>
      ),
      image: images[2],
    },
    {
      title: "Monitoring",
      description: (
        <>
          <p>
            Due to systematic medicine dispensing, we can properly monitor the amount of medicines and the entire process.
          </p>
        </>
      ),
      image: images[3],
    },
  ];

  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-0 font-DMSans" data-aos="fade-down">
          Features
        </h1>
      </div>
      <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
 
            <div className="text-sm py-20 prose prose-sm dark:prose-invert">
              {item?.image && (
                <img 
                    src={item.image}
                    alt="blog thumbnail"
                    height="400"
                    width="800"
                    className="rounded-lg mb-10 object-cover"
                    data-aos="fade-down"
                />
              )}
              <p className="text-xl mb-4" data-aos="fade-down">
              {item.title}
            </p>
            <div data-aos="fade-right">
              {item.description}
            </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
  )
}

export default Features;


