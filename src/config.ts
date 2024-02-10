const configs = {
  mutiny : {
    hostname : 'https://bitescrow-mutiny.vercel.app',
    oracle   : 'https://mutinynet.com',
    network  : 'mutiny'
  },

  regtest : {
    hostname : 'http://localhost:3000',
    oracle   : 'http://172.21.0.3:3300',
    network  : 'regtest'
  },

  signet : {
    hostname : 'https://bitescrow-signet.vercel.app',
    oracle   : 'https://mempool.space/signet',
    network  : 'signet'
  },

  testnet : {
    hostname : 'https://bitescrow-testnet.vercel.app',
    oracle   : 'https://mempool.space/testnet',
    network  : 'testnet'
  }
}

const faucets = {
  mutiny  : 'https://faucet.mutinynet.com',
  regtest : 'none',
  signet  : 'https://signet.bc-2.jp',
  testnet : 'https://bitcoinfaucet.uo1.net'
}

const poll_rates = {
  mutiny  : [ 10, 6  ],
  regtest : [ 10, 6  ],
  signet  : [ 60, 30 ],
  testnet : [ 60, 30 ]
}

const network = 'signet'

export const config = {
  network,
  client  : configs[network as keyof typeof configs],
  faucet  : faucets[network as keyof typeof faucets],
  members : [ 'alice', 'bob', 'carol' ],
  poll    : poll_rates[network as keyof typeof poll_rates]
}