import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { CodeIcon, UserIcon, BriefcaseBusinessIcon } from 'lucide-react';
import './StatsSection.scss';

const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const statItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100
        }
    }
};

const StatsSection = () => {
    return (
        <motion.section
            className="stats"
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Projects Completed */}
            <motion.div
                className="stat-item"
                variants={statItemVariants}
            >
                <div className="icon-wrapper">
                    <CodeIcon strokeWidth={1.5} className="stat-icon" />
                </div>
                <div className="counter">
                    <CountUp
                        start={0}
                        end={70}
                        duration={2}
                        separator=","
                        enableScrollSpy
                    />
                    <span>+</span>
                </div>
                <p>Projects Completed</p>
            </motion.div>

            {/* Students Trained */}
            <motion.div
                className="stat-item"
                variants={statItemVariants}
            >
                <div className="icon-wrapper">
                    <UserIcon strokeWidth={1.5} className="stat-icon" />
                </div>
                <div className="counter">
                    <CountUp
                        start={0}
                        end={500}
                        duration={2}
                        separator=","
                        enableScrollSpy
                    />
                    <span>+</span>
                </div>
                <p>Students Trained</p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
                className="stat-item"
                variants={statItemVariants}
            >
                <div className="icon-wrapper">
                    <BriefcaseBusinessIcon strokeWidth={1.5} className="stat-icon" />
                </div>
                <div className="counter">
                    <CountUp
                        start={0}
                        end={1.3}
                        duration={2}
                        decimals={1}  // Display one decimal place for years
                        enableScrollSpy
                    />
                    <span>+</span>
                </div>
                <p>Years of Work Experience</p>
            </motion.div>

            {/* Freelancing Experience */}
            <motion.div
                className="stat-item"
                variants={statItemVariants}
            >
                <div className="icon-wrapper">
                    <BriefcaseBusinessIcon strokeWidth={1.5} className="stat-icon" />
                </div>
                <div className="counter">
                    <CountUp
                        start={0}
                        end={3}
                        duration={2}
                        enableScrollSpy
                    />
                    <span>+</span>
                </div>
                <p>Yr of Freelance Experience</p>
            </motion.div>

        </motion.section>
    );
};

export default StatsSection;
