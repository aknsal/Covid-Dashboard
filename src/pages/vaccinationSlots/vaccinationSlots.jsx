import React from "react";
import VaccinationSlotsByPin from "../../components/vaccinationSlotsByPin/vaccinationSlotsByPin";

export default function VaccinationSlots({ darkMode }) {
  return (
    <div>
      <VaccinationSlotsByPin darkMode={darkMode} />
    </div>
  );
}
