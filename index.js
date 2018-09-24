export default {
  main: {
    prefix: 'STM',
    chain_id: '0000000000000000000000000000000000000000000000000000000000000000',
    rpc: 'https://api.steemit.com',
    websocket: 'wss://gtg.steem.house:8090'
  },
  test: {
    prefix: 'TST',
    chain_id: '46d82ab7d8db682eb1959aed0ada039a6d49afa1602491f93dde9cac3e8e6c32',
    rpc: 'https://testnet.steemitdev.com'
  },
  steem_vc: {
    prefix: 'STX',
    chain_id: '79276aea5d4877d9a25892eaa01b0adf019d3e5cb12a97478df3298ccdd01673',
    rpc: 'https://testnet.steem.vc',
    websocket: 'wss://testnet.steem.vc'
  }
}
