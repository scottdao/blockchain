import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey'
import util  from 'ethereumjs-util'
import Tx from 'ethereumjs-tx'

import chance from './chanceNet'
//import './resotre'
var Web3 = require('web3')
//以太坊交易；

if (typeof web3 !== 'undefined') {
   var web3 = new Web3(web3.currentProvider);
} else {
// set the provider you want from Web3.providers
   var  web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/H2RvEhIXzZSxx73jLtcZ"));
}
var from = '0xb52Aa890a5a9A56a1FDBCc62968B885B92Da7efF'

var revice = '0x789e8c97ae218de87c528023259f1c3d67204001'//表示token,智能合约地址
//构造交易数据；24=24/16....8
var nonce = 0x74//表示交易次数
var gasPrice = '0x98bca5a00'//交易费=gasPrice*gasLimit
var gasLimit = '0x52080'//33600wei

var txData={
	 nonce: nonce,
      gasPrice:gasPrice, //1 Gwei（= 1000000000 = 0x3B9ACA00）
      //gasLimit: gas,
      gasLimit:gasLimit,//1000000
      to:revice,
      value: 0x00,
      data:'0xa9059cbb0000000000000000000000006C7648365aeD4a3B4e8F8e415DFd4a3c385d27C90000000000000000000000000000000000000000000000056bc75e2d63100000',
      chainId: 3
}
 var tx = new Tx(txData)
     //var key1 = hdwallet.derive("m/44'/60'/0'/0/0")
     var privateKey = '97d5836950a00e9d5e3aa42ec3fe3ae05e40cc3e61717f1a1890c816f6c58429';
     //privateKey = privateKey.toString('hex')
     tx.sign(Buffer.from(privateKey, 'hex'))
     const serializedTx = tx.serialize()
     var raw = '0x' + serializedTx.toString('hex') 
     //console.log(raw)
    web3.eth.sendRawTransaction(raw, function(err, hash) {
		if(!err) {
			console.log(hash);
		} else {
			console.log(err)
		}
	});