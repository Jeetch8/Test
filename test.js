import Web3 from 'web3'
import MyContract from './contract.js'
const address = '0x0957A823e5507a2e70560e0e82c8Ca6201F1c529'
const address2 = '0x95e26De1b32Fb30BA29c886E38Fa3278f72b235c'
const privateKey = '833caaa6024311c6b045e3ade7c8e2574fa5c1a0bb01b052f85fbbcb37e64e33'
const infuraUrl = 'https://rinkeby.infura.io/v3/10a91acfa2fb445e9a2bfb7ea0ee13ec'
const contractAddress = '0x1dCcB085F644ff780C84c36C16dcc7ae8E274E27'


const init1 = async () => {
    const web3 = new Web3(infuraUrl);
    const vm = MyContract(web3)
  
    const signedTx = await web3.eth.accounts.signTransaction(
      {
        from: contractAddress,
        to: address2,
        value: web3.utils.toWei('2', 'ether'), 
        gas:21000,
        data: vm.methods.transfer(address2, 2*10**18)
      },
      privateKey
    );
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
  }


  init1();
