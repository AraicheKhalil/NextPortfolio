"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";


export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <div className="mb-2">👋 Welcome to my digital playground! I'm passionate about crafting digital experiences that make a difference.</div>

        <div className="mb-2">💻 As a dedicated <span className="font-medium">full-stack developer</span>, I embarked on this journey fueled by my fascination with technology's potential to transform lives and businesses. Through hands-on experience and a commitment to lifelong learning, I've cultivated a skill set that allows me to thrive in the ever-evolving landscape of software development.</div>

        <div className="mb-2">🚀 I believe in the power of <span className="font-medium">collaboration</span> and <span className="font-medium">innovation</span>, where ideas flourish and solutions shine. Whether it's brainstorming the next big feature or diving deep into code, I thrive in dynamic environments where creativity knows no bounds.</div>

        <div className="mb-2">⚙️ My toolkit includes <span className="font-medium"> MongoDB, Nest.js, Express.js, React.js, Dooker, and Node.js </span>, which I leverage to build robust and scalable applications. With <span className="font-medium">TypeScript</span>, I write <span className="underline">cleaner</span>, more <span className="underline">maintainable code</span>, and with <span className="font-medium">Next.js</span>, I create <span className="underline">lightning-fast</span>, <span className="underline"> SEO-friendly </span> web applications effortlessly.</div>

        <div className="mb-2">💡 But enough about me—let's talk about you and your project! Whether you have a medium vision or a simple idea, I'm here to turn it into reality. <span className=" italic">Let's collaborate and bring your digital dreams to life!</span></div>
        {/* I'm Khalil Araiche, a dedicated {" "}
        <span className="font-medium">full stack developer </span>, My journey into the world of software development began with a deep curiosity for how technology can empower individuals and businesses alike. Over the years, I have honed my skills through hands-on experience and continuous learning, staying abreast of the latest advancements in the field. With a keen eye for detail and a commitment to delivering {" "} 
        <span className="underline">high-quality solutions,</span>
        I thrive in dynamic environments where innovation and collaboration are paramount.
        As a Full stack developer, I excel in crafting robust and scalable applications that leverage the power of {" "}
        <span className="font-medium">MongoDB, Express.js, React.js, and Node.js.</span> My proficiency in {" "}
        <span className="font-medium">TypeScript</span> enables me to {" "}
        <span className="underline">write cleaner, more maintainable code</span>, while {" "}
        <span className="font-meduim">Next.js</span> empowers me to {" "}
        <span className="underline">build fast, SEO-friendly</span> web applications with ease. */}
      </p>
    </motion.section>
  );
}