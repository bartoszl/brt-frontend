import React from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from '../../../../components/FormGroup/FormGroup';
import { useCreateVest } from '../../hooks/useCreateVest';

export function NewVestForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      amount: 0,
      address: '',
    },
  });

  const { mutate: vest } = useCreateVest();

  const handleMintFormSubmit = (values) => {
    vest(values);
  };

  return (
    <form onSubmit={handleSubmit(handleMintFormSubmit)}>
      <h3> Create a new Vest entry</h3>
      <FormGroup>
        <label htmlFor="address">Address</label>
        <input id="address" {...register('address')} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="amount">Amount</label>
        <input id="amount" {...register('amount')} />
      </FormGroup>

      <button type="submit"> Vest </button>
    </form>
  );
}
