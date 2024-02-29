import {
  TextRevealCard,
} from "../components/ui/text-reveal-card";
import { TracingBeam } from "../components/ui/tracing-beam";
import Arrow from '@/components/Arrow';
import {work1, work2, work3 } from '../images';

const Working = () => {
  const images = [work1, work2, work3];

  const content = [
    {
      title: "Prescription",
      description: (
        <>
          <p>
            Doctor generates a prescription with respective medicines and a
            unique QR code will be generated.
          </p>
        </>
      ),
      badge: "React",
      image: images[0],
    },
    {
      title: "Camera",
      description: (
        <>
          <p>
            The patient gets the prescription and approaches our Tablet Vending Machine and shows the QR Code to 
            the TVM's camera.
          </p>
        </>
      ),
      badge: "Changelog",
      image: images[1],
    },
    {
      title: "Processing",
      description: (
        <>
          <p>
            The TVM will process the QR Code and dispense the respective medicines.
          </p>
        </>
      ),
      badge: "Launch Week",
      image: images[2],
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full" id="workflow">
        <TextRevealCard
          text="How it Works?"
          revealText="Tablet Vending Machine"
        >
        </TextRevealCard>
      </div>

      <div>
      <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
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
            {index < 2 && ( // Only render Arrow for the first two items
                <div className='flex justify-center py-16'>
                  <Arrow />
                </div>
              )}
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
    </div>
  );
};

export default Working;

