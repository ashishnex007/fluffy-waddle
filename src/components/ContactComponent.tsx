import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Spline from "@splinetool/react-spline";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormState {
    name: string;
    email: string;
    message: string;
}

const ContactComponent: React.FC = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
      name: "",
      email: "",
      message: "",
  });
  const [loading, setLoading] = useState(false);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Ashish Gowtham",
          from_email: form.email,
          to_email: "ashish.goutham@gmail.com",
          message: form.name +" " + form.email + " " + form.message + "from TVM page",
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex  overflow-hidden">
      <div
        className="flex-[0.75] bg-black-100 -mt-4 ml-20 px-10 rounded-2xl"
        data-aos="fade-right"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <Input 
              type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <Input 
              type="email"
              name="email"
              placeholder="What's your email?"
              value={form.email}
              onChange={handleChange} 
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <Textarea 
              rows={7}
              name="message"
              placeholder="What do you want to say?"
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <Button 
            variant="secondary"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>

      <div
        className="w-[60rem] -mr-40"
        data-aos="fade-left"
      >
        <div className="earth">
          <Spline
            scene="https://prod.spline.design/dpPOvIOuVSfoTVbx/scene.splinecode"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactComponent;
