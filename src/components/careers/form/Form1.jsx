import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Form1 = () => {
    const schema = yup.object({
        firstName: yup
            .string()
            .matches(/^[a-zA-Z]+$/, 'First Name should only contain alphabetic characters')
            .required('First Name is required'),
        lastName: yup
            .string()
            .matches(/^[a-zA-Z]+$/, 'Last Name should only contain alphabetic characters')
            .required('Last Name is required'),
        dob: yup
            .date()
            .nullable()
            .required('Date of Birth is required')
            .max(new Date(), 'Date of Birth cannot be in the future'), // Adjust the validation as needed
        age: yup.number().positive().integer().required('Age is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('firstName')}
                    />

                    {errors.firstName && (
                        <p className="text-red-600">{errors.firstName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('lastName')}
                    />

                    {errors.lastName && (
                        <p className="text-red-600">{errors.lastName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        {...register('dob')}
                    />
                    {errors.dob && (
                        <p className="text-red-600">{errors.dob.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="address"> Current address</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('lastName')}
                    />

                    {errors.address && (
                        <p className="text-red-600">{errors.address.message}</p>
                    )}
                </div>

                <button type="submit" className="btn btn-primary p-2 bg-blue-400">
                    Apply Now
                </button>
            </form>
        </>
    );
};

export default Form1;
