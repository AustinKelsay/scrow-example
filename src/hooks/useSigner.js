import { EscrowSigner } from '@scrow/core/client'
import { Buff }         from '@cmdcode/buff'
import { config } from '../config'

export const useSigner = () => {
    const create_signer = (alias) => {
        // Simple hash of a string. For testing only.
        const seed = Buff.str(alias).digest
        // Return an escrow signer.
        return EscrowSigner.create(config, seed)
      }

    return {
        create_signer
    }
}