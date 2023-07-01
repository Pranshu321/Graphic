// import icons
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/img_hero.png";
import Feature1Img from "../src/assets/img/new_img5.png";
import Feature2Img from "../src/assets/img/new_img4.png"; // feature 2
import Feature3Img from "../src/assets/img/new_img3.webp";
import Feature4Img from "../src/assets/img/new_img6.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import HeroImage from "../src/assets/img/img_1.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";

export const navigationData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "VoteForBest",
    href: "/showexhibition",
  },
  {
    name: "Photo Prints",
    href: "/photoprints",
  },
  {
    name: "Hire Photographers",
    href: "/jobpost",
  },
  {
    name: "Blogs",
    href: "/showblog",
  },
  {
    name: "QNA",
    href: "/qna",
  },
];

export const heroData = {
  title: `Exhibit, sell, and get hired - all on Graphic.`,
  subtitle:
    "Your all-in-one creative platform for photography - showcase, sell, and grow your artistry with Graphic.",
  btnText: "Get Started",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Where art meets commerce: Graphic for photographers.",
  subtitle:
    "Welcome to Graphic, the one-stop web-app for photographers looking to showcase their creativity and grow their business. With Graphic, photographers can easily exhibit their work, sell their prints in our marketplace, create artistic styles and get hired by clients who love their style.",
};

export const featuresData = {
  title: "Our Key Services",
  subtitle:
    "Here are some of the features of the web app . Most of the features are available if you login as a photographer",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Take Home a Piece of Art",
      description:
        "Here any photogragher can exhibit their work and sell them.",
      linkText: "Learn more",
      delay: "100",
      href: "/photoprints",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Support Your Favorite Photographer",
      description:
        "Through our web app you can vote for the best photo in our Gallery.This will create a healthy competition among photographers to strive for the best",
      linkText: "Learn more",
      delay: "100",
      href: "/showexhibition",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Hire Your Photographer",
      description:
        " Photographers want to get hired may share their details , We will connect them with their clients.",
      linkText: "Learn more",
      delay: "100",
      href: "/jobpost",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Exploring the Art of Photography- Learn, Read and Write",
      description:
        "Graphic is a perfect place for young budding photographers to read and learn from the Blogs or the Chat Bot while Experts can share their experience through their Blogs",
      linkText: "Learn more",
      delay: "100",
      href: "/showblog",
    },
    {
      image:
        "https://user-images.githubusercontent.com/86917304/224525626-f3abcd8b-22f5-4743-be4e-1567cf53725c.png",
      bgImage: Feature1BgImg,
      title: "Graphic Chatbot",
      description: "Resolve Your Doubts with our smart Chatbot",
      linkText: "Learn more",
      delay: "100",
      href: "/qna",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Get Hired",
      description:
        "We also work as the platform where you will get the opportunities and upscale in photography career",
      linkText: "Learn more",
      delay: "100",
      href: "/getclients",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Vebin",
    web: "vebin.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoV2,
  address: "1/606-D , 234 Bokki Avenue Street, Texas, USA",
  email: "info@Graphic.com",
  phone: "1-232-7788 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: `© Graphic, ${new Date().getUTCFullYear()}. All rights reserved. By Team Hackit ♥`,
  icon: <BsChatDotsFill />,
};
