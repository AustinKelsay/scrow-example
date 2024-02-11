import { useEffect, useMemo } from 'react'
import './App.css'
import { useScrow } from './hooks/useScrow'
import { useSigner } from './hooks/useSigner'
import { useContract } from './hooks/useContract'
import { useAccount } from './hooks/useAccount'
import { useSelector, useDispatch } from 'react-redux'
import { setSigners } from './redux/reducers/signersReducer'

function App() {
  const dispatch = useDispatch();

  const { client } = useScrow();
  const { create_signer } = useSigner();
  const { createDraftContract } = useContract();
  const { createAccount } = useAccount();

  const signers = useSelector((state) => state.signers.signers);

  useMemo(() => {
    // step 1: create signers
    if (signers.length === 0) {
      const receiver = create_signer('receiverEntropy');
      const funder1 = create_signer('funder1Entropy');
      const funder2 = create_signer('funder2Entropy');
  
      // Dispatch a single action with all signers
      dispatch(setSigners([receiver, funder1, funder2]));
    }
  }, [dispatch]);

  useMemo(() => {
    if (signers.length === 3) {
      console.log('signers', signers);
      // step 2: create draft contract
      const draft = createDraftContract();
      console.log('draft', draft);
    }
  }, [signers]);

  useMemo(() => {
    if (signers.length === 3) {
      // step 3: create account for funders
      const account1 = createAccount(client, signers[1]);
      const account2 = createAccount(client, signers[2]);

      console.log('account1', account1);
    }
  }, [signers]);

  return (
    <>
      
    </>
  );
}

export default App;
