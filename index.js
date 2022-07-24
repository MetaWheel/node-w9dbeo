// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
import { sequence } from '0xsequence'

const wallet = sequence.initWallet('mainnet')
const connectDetails = await wallet.connect()

console.log('=> connected?', connectDetails.connected)
import { sequence } from '0xsequence'

const wallet = sequence.initWallet('polygon')
const connectDetails = await wallet.connect()

console.log('=> connected?', connectDetails.connected)
const wallet = sequence.getWallet()
const walletAddress = await wallet.getAddress()

console.log(walletAddress)
// # => '0xabcd....'
const wallet = sequence.getWallet()
wallet.openWallet()
const wallet = sequence.getWallet()

console.log('chainId:', await wallet.getChainId())

const provider = wallet.getProvider()
console.log('provider.getChainId()', await provider.getChainId())

const signer = wallet.getSigner()
console.log('signer.getChainId()', await signer.getChainId())
// Get the wallet provider and signer instances
const wallet = sequence.getWallet()
const provider = wallet.getProvider()
const signer = wallet.getSigner()

// Prepare the message string
const message = `I've been to Web3 & back again :D`

// Sign the message
const signature = await signer.signMessage(message)
console.log('message signature:', signature)

// Validate the signed message. The sequence utils `isValidMessageSignature` method
// supports validating both EOA and Smart Wallet (EIP1271) signatures with this simple call.
const isValid = await sequence.utils.isValidMessageSignature(
  await wallet.getAddress(),
  message,
  signature,
  provider
)

console.log('isValid?', isValid)
if (!isValid) throw new Error('signature is invalid')
// Part of the ERC20 ABI, so we can encode a `transfer` call
const erc20Interface = new ethers.utils.Interface([
  'function transfer(address _to, uint256 _value)'
])

// Get the wallet signer interface
const wallet = sequence.getWallet()
const signer = wallet.getSigner()

// USDC contract address on Polygon network
const usdcContractAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'

// Sending to a recipient address
const recipientAddress = '0x8b4de256180cfec54c436a470af50f9ee2813dbb'

// Sending 1.50 USDC, note USDC has 6 decimal places
const amount = ethers.utils.parseUnits('1.50', 6)

// Encode an ERC-20 token transfer to recipient of the specified amount
const data = erc20Interface.encodeFunctionData(
  'transfer', [recipientAddress, amount]
)

// Prepare Transaction object
const tx: sequence.transactions.Transaction = {
  to: usdcContractAddress,
  data: data
}

// Send the transaction via the signer to the blockchain :D The signer will prompt the user
// sign+send the transaction, and once the user confirms it will be transmitted.
const txnResp = await signer.sendTransaction(tx)

// Wait for the transaction to be mined by the network
await txnResp.wait()

// We're done, print the transaction hash, and open it up in your block explorer
console.log('transaction hash:', txnResp.hash)
const wallet = sequence.getWallet()
const walletAddress = await wallet.getAddress()

console.log(walletAddress)
// # => '0xabcd....'
const wallet = sequence.getWallet()
wallet.openWallet()
const wallet = sequence.getWallet()

console.log('chainId:', await wallet.getChainId())

const provider = wallet.getProvider()
console.log('provider.getChainId()', await provider.getChainId())

const signer = wallet.getSigner()
console.log('signer.getChainId()', await signer.getChainId())
