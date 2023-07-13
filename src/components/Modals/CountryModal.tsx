import React from "react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useCountryModal from "@/hooks/useCountryModal";
import Modal from "./Modal";
import CountrySelect from "../Inputs/CountrySelect";
import axios from "axios";

const CountryModal = () => {
  const countryModal = useCountryModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    countryModal.onClose();

    // TODO: Add country to user with fetch request
    axios.get("/api/security/ip");
  };

  const bodyContent = (
    <div className="flex flex-col">
      <CountrySelect
        onChange={(value) => {
          register("country", { value: value.label, required: true });
          register("region", { value: value.region, required: true });
          register("countryCode", { value: value.value, required: true });
        }}
      />
      <span className="block mt-2 text-sm text-gray-400">
        This action is irreversible. You will not be able to change your country
        once you have set it.
        <br />
        This action helps us to match users and purchases to your country.
      </span>
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={countryModal.isOpen}
        title="Select your country"
        actionLabel="Save"
        onClose={countryModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        secondaryActionLabel="Cancel"
        secondaryAction={countryModal.onClose}
      />
    </div>
  );
};

export default CountryModal;
