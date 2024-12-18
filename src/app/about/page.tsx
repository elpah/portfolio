"use client";
import styles from "./about.module.scss";
import Skill from "@/components/Skill/Skill";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@custom-react-hooks/all";
import { useEffect } from "react";

export default function About() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const skills = [
    { skillName: "Next.js", imageSrc: "next.svg", delay: 0.1 },
    { skillName: "React", imageSrc: "react.svg" },
    { skillName: "Typescript", imageSrc: "typescript.svg", delay: 0.2 },
    { skillName: "Javascript", imageSrc: "js.png", delay: 0.3 },
    { skillName: "C", imageSrc: "c.svg", delay: 0.4 },
    { skillName: "Node.js", imageSrc: "nodejs.svg", delay: 0.8 },
    { skillName: "MongoDB", imageSrc: "mongodb.svg", delay: 0.9 },
    { skillName: "MySql", imageSrc: "sql.svg", delay: 1 },
    { skillName: "Express", imageSrc: "express.svg", delay: 1.1 },
    { skillName: "Firebase", imageSrc: "firebase.svg", delay: 1.2 },
    { skillName: "Figma", imageSrc: "figma.svg", delay: 1.4 },
    { skillName: "Tailwind", imageSrc: "tailwind.svg", delay: 1.5 },
    { skillName: "Sass", imageSrc: "sass.svg", delay: 1.6 },
  ];

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: -100,
        transition: { duration: 1 },
      });
    }
  }, [animation,inView]);

  return (
    <main className={styles.main_container}>
      <motion.p
        initial={{ opacity: 0, x: isMobile ? 150 : 0, y: isMobile ? 0 : -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.badge}
      >
        🔗About me...
      </motion.p>
      <section className={styles.about_me}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.header}
        >
          Introduction.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.paragraph}
        >
          🎓 Graduated with a Bachelor of Science in Computer Engineering in
          2022, and currently studying Software Engineering at 42 Wolfsburg.
          <br />
          <br />
          👨‍💻 I specialize in building user-friendly interfaces and creating
          innovative applications using technologies such as React JS, Next.js, Node.js, Express
          JavaScript, TypeScript, for both frontend and
          backend development. I am passionate about leveraging these technologies to
          develop scalable solutions. 
          <br />
          <br />
          🚀 Committed to continual growth, I strive
          to improve my technical skills daily through continous learning and,
          staying updated with emerging technologies and best practices. 
          <br />
          <br />
          🕒 In my free time, I enjoy playing video games, the piano and
          saxophone, and occasionally playing hockey. 
          <br />
          <br />
          👨🏾‍💼 I am open to new opportunities where I can contribute my expertise.
            Feel free to reach out if you have an exciting opportunity
          to discuss!
        </motion.p>
      </section>

      <motion.section ref={ref} animate={animation} className={styles.skills}>
        <p className={`${styles.badge} ${styles.badge_skills}`}>🛠️Skills...</p>
        <motion.div animate={animation} className={styles.skills_container}>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              imageSrc={`/images/skills_png/${skill.imageSrc}`}
              skillName={skill.skillName}
            />
          ))}
        </motion.div>
        <img
          className={styles.skills_image}
          src="/images/skills.webp"
          alt="skills-image"
        />
      </motion.section>
    </main>
  );
}
