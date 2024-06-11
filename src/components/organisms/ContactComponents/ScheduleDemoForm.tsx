'use clien';

import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from '../../../styles/components/pages/Contact/ScheduleDemoForm.module.scss';
import clsx from 'clsx';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

interface ScheduleDemoFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className: string;
}

interface IScheduleDemoForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  employees: number;
}

export default function ScheduleDemoForm({
  className,
  ...props
}: ScheduleDemoFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IScheduleDemoForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (data: IScheduleDemoForm) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(styles.form, className)}
      {...props}
    >
      <div className={styles.nameBox}>
        <label className={styles.label}>
          First name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('firstName', {
              required: { value: true, message: '' },
            })}
            className={styles.input}
            placeholder="Enter your first name"
            error={errors.firstName}
          />
        </label>

        <label className={styles.label}>
          Last name <span className={styles.labelAccent}>*</span>
          <Input
            {...register('lastName', {
              required: { value: true, message: '' },
            })}
            placeholder="Enter your last name"
            className={styles.input}
            error={errors.lastName}
          />
        </label>
      </div>

      <label className={styles.label}>
        Business email <span className={styles.labelAccent}>*</span>
        <Input
          {...register('email', {
            required: { value: true, message: '' },
          })}
          placeholder="Enter your business email"
          className={styles.input}
          error={errors.email}
        />
      </label>

      <label className={styles.label}>
        Phone number <span className={styles.labelAccent}>*</span>
        <Input
          {...register('phone', {
            required: { value: true, message: '' },
          })}
          placeholder="Enter phone number"
          className={styles.input}
          error={errors.phone}
        />
      </label>

      <label className={styles.label}>
        Job Title <span className={styles.labelAccent}>*</span>
        <Input
          {...register('jobTitle', {
            required: { value: true, message: '' },
          })}
          placeholder="Enter your current job title"
          className={styles.input}
          error={errors.jobTitle}
        />
      </label>

      <label className={styles.label}>
        Company name <span className={styles.labelAccent}>*</span>
        <Input
          {...register('company', {
            required: { value: true, message: '' },
          })}
          placeholder="Enter the name of company"
          className={styles.input}
          error={errors.company}
        />
      </label>

      <Button
        appearance="primary"
        type="submit"
        className={styles.submitBtn}
        disabled={!isValid}
      >
        GET STARTED
      </Button>
    </form>
  );
}
