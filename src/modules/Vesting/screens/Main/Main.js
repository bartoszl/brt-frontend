import React from 'react';
import { useTotalVestAmount } from '../../hooks/useTotalVestAmount';
import { useCollectedVestAmount } from '../../hooks/useCollectedVestAmount';
import { useToBeCollectedAmount } from '../../hooks/useToBeCollectedAmount';
import { NewVestForm } from '../../components/NewVestForm';
import { useClaim } from '../../hooks/useClaim';
import { VestingContractAddress } from '../../hooks/useVestingContract';

export function Main() {
  const { data: totalAmount } = useTotalVestAmount();
  const { data: collectedAmount } = useCollectedVestAmount();
  const { data: toBeCollectedAmount } = useToBeCollectedAmount();

  const { mutate: claim, error } = useClaim();

  const handleClaim = () => {
    claim();
  };

  return (
    <div>
      <h1>Vesting Contract</h1>
      <h3>
        { VestingContractAddress }
      </h3>
      <div>
        Total Amount:
        {' '}
        {totalAmount}
      </div>
      <div>
        Collected Amount:
        {' '}
        {collectedAmount}
      </div>
      <div>
        To Be Collected Amount:
        {' '}
        {toBeCollectedAmount}
      </div>
      <button type="button" onClick={handleClaim}> Claim</button>
      <div>
        {error && error.error.message}
      </div>
      <br />
      <br />
      <NewVestForm />
    </div>
  );
}
