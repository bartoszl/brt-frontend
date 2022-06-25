import React from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from '../../../../components/FormGroup/FormGroup';
import { useEthereumContext } from '../../../../context/EthereumContext';
import { useMintToken } from '../../hooks/useMintToken';

export function MintForm() {
  const { address } = useEthereumContext();
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      amount: 0,
      address: '',
    },
  });

  const { mutate: mintTokens } = useMintToken();

  const handleMintFormSubmit = (values) => {
    mintTokens(values);
  };

  const setSelf = () => {
    setValue('address', address);
  };

  return (
    <form onSubmit={handleSubmit(handleMintFormSubmit)}>
      <FormGroup>
        <label htmlFor="address">Address</label>
        <input id="address" {...register('address')} />
      </FormGroup>
      <button type="button" onClick={setSelf}> Set my address </button>
      <FormGroup>
        <label htmlFor="amount">Amount</label>
        <input id="amount" {...register('amount')} />
      </FormGroup>

      <button type="submit"> Mint </button>
    </form>
  );
}
