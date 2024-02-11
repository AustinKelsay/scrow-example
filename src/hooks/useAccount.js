
export const useAccount = () => {
    const createAccount = async (client, signer) => {
        const locktime  = 60 * 60  // 1 hour locktime
        // Get an account request from the funder device.
        const acct_req  = signer.account.create(locktime)
        // Submit the account request to the server
        const acct_res = await client.deposit.request(acct_req)

        // Check the response is valid.
        if (!acct_res.ok) throw new Error(acct_res.error)

        return acct_res
    }

    return {
        createAccount
    }
}