import css from "./Experties.module.scss"
import { WhatDoIHelp, projectExperience } from "../../utils/data.js"
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
const Experties = () => {
    return (
        <motion.section
            className={css.wrapper}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <div className={`paddings flexCenter yPaddings innerWidth ${css.container}`}>
                <div className={css.leftSide}>
                    {
                        projectExperience.map((ele, i) =>
                            <motion.div
                                className={css.exp} key={i}
                                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                            >
                                <div className="flexCenter"

                                    style={{ background: ele.bg }}>
                                    <ele.icon size={25} color="white" />
                                </div>
                                <div>
                                    <span>{ele.name}</span>
                                    <span className="secondaryText">{ele.projects} Projects</span>
                                </div>
                            </motion.div>
                        )
                    }
                </div>
                <motion.div 
                    className={css.rightSide}
                    variants={textVariant(0.5)}
                    >
                    <span className="primaryText">
                        What Do I Help
                    </span>
                    {WhatDoIHelp.map((ele, i) =>
                        <span className="secondaryText" key={i}>
                            {ele}
                        </span>
                    )}
                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">285+</span>
                            <span className="secondaryText">Project Complete</span>
                        </div>

                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">199+</span>
                            <span className="secondaryText">Happy Clints</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );

}
export default Experties