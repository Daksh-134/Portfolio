import { link } from "fs";

export const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#Achievements" },
  { name: "Skills", link: "#Skills" },
  { name: "Coding Profile", link: "#coding" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "SIH Project",
    des: "A platform which streamlines the organ transplant process by using ML for automated organ matching and prioritization to improve patient outcomes.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    href: "https://life-bridge-sih.vercel.app/",
  },
  {
    id: 2,
    title: "Junoon",
    des: "A dynamic website built using Next.js for Junoon, the Photography Club of NSUT. It allows visitors to explore our projects and provides access to all the photos of events held in college.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    href: "https://www.junoonnsut.com/",
  },
  {
    id: 3,
    title: "Menu Mate",
    des: "A website built using MERN stack which can be used for ordering food from various cafes and restraunts. It can also be used as a QR to replace the paper card menus.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    href: "https://menumate123.vercel.app/",
  },
  {
    id: 4,
    title: "IEEE NSUT",
    des: "A website made for IEEE NSUT,the largest tech society of our college. It includes various sections allowing users to explore the society’s events, learn about its mission, and various chapters.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    href: "https://www.ieeensut.com/",
  },
  {
    id: 5,
    title: "LFHO Research Paper",
    des: "Proposed the Levy Flight-based Fire Hawk Optimizer (LFHO), improvement in an existing meta-heuristic algorithm (FHO) and got it published in IEEE R10 TENSYMP conference",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    href: "https://ieeexplore.ieee.org/document/10752157",
  },
  {
    id: 6,
    title: "IEEE Delhi Section",
    des: "A website developed using React for IEEE Delhi Section. It offers an interactive platform to explore it's initiatives, upcoming events, and contributions to the tech community.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    href: "https://ieee-ds.vercel.app/#/",
  },
];
export const testimonials = [
  {
    description:
      "Secured 2nd position at NSUT and ranked among the Top 30 nationally in the American Express Campus Challenge 2024, a data analytics competition where I utilized Pandas and Matplotlib to uncover insights and deliver a compelling presentation.",
    name: "American Express",
  },
  {
    description:
      "Qualified the internal round of SIH 2024 out of more than 500 teams by developing LifeBridge, a platform streamlining the organ transplant process using machine learning for automated matching, prioritization, and equitable distribution.",
    name: "SIH Qualification",
  },
  {
    description:
      "Presented my research paper titled 'Levy Flight Based Fire Hawk Optimizer' at IEEE TENSYMP 2024, showcasing advancements in optimization algorithms and contributing to the field of meta-heuristic methodologies.",
    name: "TENSYMP Presentation",
  },
  {
    description:
      "Won EPOCH IIIT Delhi 2024 Hackathon by developing an ML project focused on image segmentation, offering a compelling demonstration of core-set concepts compared to original datasets.",
    name: "Epoch IIIT Delhi",
  },
  {
    description:
      "Actively contributed to Hacktoberfest 2024 by making four successful pull requests, collaborating with developers worldwide to enhance open-source software projects.",
    name: "Hacktober",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Developement",
    desc: " Bootstrap | Tailwind | React | Node | Express | Next",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Database",
    desc: "MongoDB | My SQL | Firebase | Cloudinary",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Languages",
    desc: "C | C++ | Java Script | TypeScript | Python | Matlab",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Version Control and Deployment",
    desc: "Git | Git Hub | Vercel | Render ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Daksh-134"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/daksh-baweja-6a503024a/"
  },
];
