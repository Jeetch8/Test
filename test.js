import Web3 from 'web3'
import MyContract from './contract.js' //File with ABI and Contract ADDRESS
const MYaddress = 'YOUR WALLET ADDRESS'
const addressTo = 'RECIPIENT'
const privateKey = 'PRIVATE KEY OF YOUR WALLET/ADDRESS'
const infuraUrl = 'INFURA URL/NODE PROVIDER'
const contractAddress = 'Your__Contract__ADDRESS'


const init1 = async () => {
    const web3 = new Web3(infuraUrl);
    const vm = MyContract(web3)
  
    const signedTx = await web3.eth.accounts.signTransaction(
      {
        from: contractAddress,
        to: addressTo,
        value: web3.utils.toWei('2', 'ether'), 
        gas:21000,
        data: vm.methods.transfer(addressTo, 2*10**18)
      },
      privateKey
    );
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
  }


  init1();
