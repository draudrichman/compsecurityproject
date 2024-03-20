'use client';

import { useCallback, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

import useOtpModal from "@/app/hooks/useOtpModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import axios from "axios";

const OtpModal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const otpModal = useOtpModal();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> =
        (data) => {


        }



    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="OTP Verification"
                subtitle="Enter the OTP sent to your email to proceed with the reservation."
            />
            <Input
                id="otp"
                label="OTP"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

        </div>
    )



    return (
        <Modal
            disabled={isLoading}
            isOpen={otpModal.isOpen}
            title="Verification"
            actionLabel="Continue"
            onClose={otpModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
}

export default OtpModal;
