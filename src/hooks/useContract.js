import { useSelector } from 'react-redux'
import { config } from '../config'
import {
    create_policy,
    create_proposal
} from '@scrow/core'
import { create_draft } from '@scrow/core/proposal'

export const useContract = () => {
    const signers = useSelector((state) => state.signers.signers);

    const createDraftContract = () => {
        if (signers.length === 0) {
            return
        }

        const receiver = signers[0]
        const funder1 = signers[1]
        const funder2 = signers[2]

        // Immediately once the contract is active we will schedule the payout to the receiver immediately.
        const proposal = create_proposal({
            title: 'A fundraising proposal',
            duration: 0,
            moderator: receiver.pubkey,
            network: config.network,
            value: 15000,
            schedule: [[0, 'close', 'payout']]
        })

        const receiverRole = create_policy({
            title: 'receiver',
            payment: proposal.value,
            paths: [['payout', proposal.value]]
        })

        const roles = [receiverRole]

        const draft = create_draft({ proposal, roles })

        return draft
    }

    return {
        createDraftContract
    }
}