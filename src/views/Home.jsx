import React, { useContext } from "react";
// import Resume from "../assets/Resume.pdf";
// import CTA from "./CTA";
import ME from "../assets/image.jpeg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
//import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Sravani 
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
            Full stack Developer with Specialization in MERN Stack.
            Currently, working on react based projects
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a 
                  href={el.link}  target="__blank"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
              {/* <CTA /> */}
                {/* <Link to="../assets/resume.pdf" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10" > */}
                {/* <button  onClick={()=>{
                 window.location.href="https://drive.google.com/file/d/1ZH2y4rYnKED4YoXxSVzaQWjWkMi75Uxt/view?usp=sharing"
                }}  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">Resume</button>  */}
                 <a href="https://drive.google.com/file/d/1IyW1r-bSB7xYwHkS5rn66IYiaV5fyoF8/view?usp=sharing"  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"  target="__blank">Resume</a> 
                {/* </Link> */}
                {/* <Button className="bg-custom-blue font-weight-bold shadow-sm border-0 resume-btn" onClick={() => window.open('/static/Bipin_mv_resume.pdf', '_blank')}>View Resume
                </Button> */}
              </div>
            </div>
          </div>
          {/* <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src="https://www.linkpicture.com/q/My-project-1_1.png"
            alt=""
            className="md:w-3/6 hidden sm:block"
          /> */}
          {/* <img className="md:w-2/6  sm:block" src={ME} /> */}
          {/* <a href="https://ibb.co/4ZdT7BC"><img src="https://i.ibb.co/4ZdT7BC/Image.jpg" alt="Image" border="0"></a> */}
          <a  className="md:w-2/6  sm:block" href="https://ibb.co/4ZdT7BC"><img src={ME} type="image"/></a>
          {/* <a href="https://www.linkpicture.com/view.php?img=LPic626d139e1d4691066984160"><img className="md:w-4/6 hidden sm:block" src="https://www.linkpicture.com/q/My-project_4.jpg" type="image"/></a> */}
         {/* <a className="md:w-3/6 hidden sm:block" href="https://www.linkpicture.com/view.php?img=LPic626d1054bd3081267736362"><img className="md:w-4/8 hidden sm:block" src="https://www.linkpicture.com/q/My-project-1_1.png" type="image"/></a> */}
           {/* <a href="https://www.linkpicture.com/view.php?img=LPic626d07f439bfb143666443">
             <img className="md:w-4/8 hidden sm:block" src="https://www.linkpicture.com/q/My-project_5.png" type="image"/></a> */}
        </main>
      </div>
    </>
  );
};

export default Home;
