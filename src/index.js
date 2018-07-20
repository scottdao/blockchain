import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey'
import util  from 'ethereumjs-util'
import Tx from 'ethereumjs-tx'

import chance from './chanceNet'
import './resotre'
var Web3 = require('web3')
//以太坊交易；

//if (typeof web3 !== 'undefined') {
// var web3 = new Web3(web3.currentProvider);
//} else {
//// set the provider you want from Web3.providers
// var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//}
//console.log(web3)