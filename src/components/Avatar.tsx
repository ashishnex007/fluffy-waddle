import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarxProps {
  index: number;
  image: string;
  fallbackText: string;
  name: string;
  role: string;
}

const Avatarx: FC<AvatarxProps> = ({ index, image, fallbackText, name, role }) => {
  return (
    <div className="flex py-10 gap-x-10">
      <Avatar key={index} className="w-32 h-auto">
        <AvatarImage src={image} data-aos="zoom-in"/>
        <AvatarFallback>{fallbackText}</AvatarFallback>
      </Avatar>
      <div className="my-auto">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" data-aos="fade-right">{name}</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{role}</p>
      </div>
    </div>
  );
};

export default Avatarx;
