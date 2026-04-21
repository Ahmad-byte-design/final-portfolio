import Image from "@/components/ui/Image";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import project from "@/assets/images/project.jpeg";

import { motion } from "motion/react";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Button from "@/components/ui/Button";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_25fl6ti",
        "template_yhjxiti",
        formRef.current,
        "LW8qItLAGyrCOpF9c",
      )
      .then(() => {
        alert("message has been successfully !");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("faild to send message");
      });
  };

  return (
    <div className="w-full " id="contact">
      <h2 className="text-3xl flex items-center justify-center ">Contact Us</h2>

      <motion.div initial={{opacity:0 , scale:0}} whileInView={{opacity:1 , scale:1}} className="flex flex-col md:flex-row items-center justify-between border border-primary rounded-2xl  gap-2 p-5">
        <div className="md:w-1/2 relative flex items-center justify-center">
          <Image src={project} />
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="w-full  md:w-1/2 flex flex-col gap-5 items-center">
          <Input name="email" type="email" placeholder="email" />
          <Input name="name" type="text" placeholder="name" />
          <Textarea name="message" />

         <Button type="submit">

            Send
         </Button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
