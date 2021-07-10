import React from "react";

function FAQContainer() {
  const [faqs, setfaqs] = useState([
    {
      question:
        " What precautions should I take at the time of 2nd dose vaccination?",
      answer:
        "The Vaccination Centres have been directed to ensure that if a citizen is being vaccinated with 2nd dose, they should confirm that the first dose vaccination was done with the same vaccine as is being offered at the time of second dose and that the first dose was administered more than 28 days ago. You should share the correct information about the vaccine type and the date of 1st dose vaccination with the vaccinator. You should carry your vaccine certificate issued after the first dose.",
      open: true,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
    {
      question: "",
      answer: "",
      open: false,
    },
  ]);
  return <div></div>;
}

export default FAQContainer;
