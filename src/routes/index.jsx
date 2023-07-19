import { Route, Routes } from "react-router-dom";
import PersonalInfo from "../pages/PersonalInfo";
import SelectPlan from "../pages/SelectPlan";
import AddOns from "../pages/AddOns";
import Summary from "../pages/Summary";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PersonalInfo />} />
      <Route path="/selectPlan" element={<SelectPlan />} />
      <Route path="/addOns" element={<AddOns />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="*" element={<PersonalInfo />} />
    </Routes>
  );
}
