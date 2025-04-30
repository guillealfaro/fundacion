"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, CheckCircle, Clock, FileText, Settings, Star, Zap } from "lucide-react"
import PropTypes from "prop-types"
import "../StepsIMAS/stepsIMAS.scss"
export default function StepsIMAS() {
  const containerRef = useRef(null)

  return (
    <div className="scroll-container">
      {/* Initial view with instruction to scroll */}
      <div className="intro-section">
        <h1>Scroll Down to See the Steps</h1>
        <ArrowDown className="arrow-icon" />
      </div>

      {/* Main scroll container */}
      <div ref={containerRef} className="main-container">
        <div className="content-wrapper">
          <div className="grid-layout">
            {/* Left fixed content */}
            <div className="fixed-content">
              <h2>Our Process</h2>
              <p className="description">
                Follow our proven step-by-step approach to transform your ideas into reality. Each step is carefully
                designed to ensure the best possible outcome for your project.
              </p>
              <div className="scroll-indicator">
                <div className="indicator-line"></div>
                <p>Scroll to explore</p>
              </div>
            </div>

            {/* Right scrolling steps */}
            <div className="steps-container">
              <StepCard
                containerRef={containerRef}
                index={0}
                icon={<FileText className="step-icon" />}
                title="Discovery"
                description="We start by understanding your goals, target audience, and project requirements to create a solid foundation."
              />

              <StepCard
                containerRef={containerRef}
                index={1}
                icon={<Settings className="step-icon" />}
                title="Planning"
                description="Our team develops a comprehensive strategy and project roadmap tailored to your specific needs."
              />

              <StepCard
                containerRef={containerRef}
                index={2}
                icon={<Zap className="step-icon" />}
                title="Design"
                description="We create intuitive, engaging designs that align with your brand and provide an exceptional user experience."
              />

              <StepCard
                containerRef={containerRef}
                index={3}
                icon={<Clock className="step-icon" />}
                title="Development"
                description="Our developers bring the designs to life with clean, efficient code that ensures performance and scalability."
              />

              <StepCard
                containerRef={containerRef}
                index={4}
                icon={<CheckCircle className="step-icon" />}
                title="Testing"
                description="Rigorous quality assurance ensures your project works flawlessly across all devices and browsers."
              />

              <StepCard
                containerRef={containerRef}
                index={5}
                icon={<Star className="step-icon" />}
                title="Launch"
                description="We handle the deployment process and provide support to ensure a smooth and successful launch."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepCard({ containerRef, index, icon, title, description }) {
  const cardRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "end start"],
  })

  // Transform the Y position based on scroll progress
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])

  // Fade in the cards as they come into view
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.6])

  // Add a slight delay to each card based on its index
  const initialDelay = index * 0.1

  return (
    <motion.div
      ref={cardRef}
      className="step-card-wrapper"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: initialDelay }}
      style={{ y, opacity }}
    >
      <div className="step-card">
        <div className="card-header">
          <div className="icon-container">{icon}</div>
          <h3>{title}</h3>
        </div>
        <p className="card-description">{description}</p>
      </div>
    </motion.div>
  )
}

// Define PropTypes for the StepCard component
StepCard.propTypes = {
  containerRef: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
