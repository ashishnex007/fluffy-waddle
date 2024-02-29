import { userstory } from "@/images"

const HomeComponent = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first:mt-0 font-DMSans"
          id="demo"
          data-aos="fade-down"
        >
          Demo Video
        </h1>
      </div>
      <div className="flex justify-center py-10">
        <video className="w-[50rem] h-auto rounded-3xl" loop controls>
            <source src={userstory} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <span className="flex justify-center">Check this on youtube as well<a className="mx-2 text-blue-600 cursor-pointer" href="https://youtu.be/XtfFWCGJcF0" target="_blank">click here</a></span>
    </div>
  )
}

export default HomeComponent
