import { useForm } from "react-hook-form";

import "./style.css";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import InputWrapper from "../../components/InputWrapper";
import ErrorInput from "../../components/ErrorInput";
import Box from "../../components/Box";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import FormContext from "../../context/FormContext";

export default function PersonalInfo() {
  const { setCurrentPage, setRegister } = useContext(FormContext);

  useEffect(() => setCurrentPage(0), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setRegister(data);
    navigate("/selectPlan");
  };

  return (
    <div className="personal">
      <Box>
        <h2>Personal info</h2>
        <p>Please provide your name, email, address, and phone number.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper labelFor="name" label="Name">
            <input
              type="text"
              placeholder="e.g Stephen King"
              {...register("name", { required: true })}
            />
          </InputWrapper>
          {errors.name && <ErrorInput field="Name" />}

          <InputWrapper labelFor="email" label="Email Address">
            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email", { required: true })}
            />
          </InputWrapper>
          {errors.email && <ErrorInput field="Email" />}

          <InputWrapper labelFor="phone" label="Phone Number">
            <input
              type="tel"
              placeholder="e.g. +1 234 567 890"
              {...register("phone", { required: true })}
            />
          </InputWrapper>
          {errors.phone && <ErrorInput field="Phone" />}

          <Footer>
            <Button text="Next Step" />
          </Footer>
        </form>
      </Box>
    </div>
  );
}
