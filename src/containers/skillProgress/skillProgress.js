import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";
// import lottie from "lottie-web"

export default function StackProgress() {
    // const container = useRef(null);
    // useEffect(() => {
    //   lottie.loadAnimation({
    //     container: container.current,
    //     renderer: "svg",
    //     loop: true,
    //     autoplay: true,
    //     animationData: require('../../pro.json')
    //   });
    // }, []);
  

    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading">Proficiency</h1>
                    {techStack.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>

                {/* <div className="skills-image"> 
                <div ref={container}></div>
                </div> */}
            </div>
            </Fade>
        );
    }
    return null;
}
