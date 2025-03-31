import React, { useState } from "react";
import { motion } from "framer-motion";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import ProgressBar from "../components/ProgressBar";
import StepFour from "../components/StepFour";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          boxShadow:"0 0 10px 0 rgba(0,0,0,0.1)",
          width: "70%",
          borderWidth:1,
          borderRadius:15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <ProgressBar step={step} />
        <motion.div
        style={{width:"90%",paddingBottom:20}}
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 && <StepOne nextStep={nextStep} />}
          {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} />}
          {step === 4 && <StepFour prevStep={prevStep} formData={formData} />}
        </motion.div>
      </div>
    </div>
  );
};

export default MultiStepForm;
