# steem-networks

exports a dictionary of steem networks.

current fields:

- prefix
- chainId
- rpc
- websocket

## usage

```js
// index.js
import steem from '@steemit/steem-js'
import networks from 'steem-networks'

const network = networks[process.env.STEEM_NETWORK] 

steem.api.setOptions({ url: network.rpc })
steem.config.set('address_prefix', network.prefix)
steem.config.set('chain_id', network.chainId)

```

```bash
STEEM_NETWORK=main node index.js
```
