import { EscrowClient } from '@scrow/core/client'
import {config} from '../config'

export const useScrow = () => {
    const client = new EscrowClient(config.client)

    return {
        client
    }
}