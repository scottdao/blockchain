//btc交易；
import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey'
import util  from 'ethereumjs-util'
import Tx from 'ethereumjs-tx'
import bitcoin from 'bitcoinjs-lib' 
import bs58check from 'bs58check'
import bitcoinjsMessage from 'bitcoinjs-message'
import chance from './chanceNet'
//import buffer from 'buffer'
//import './resotre'
//1.通过助记词恢复钱包；这个交易在私钥情况下进行。

var privateBTC = '344d48a014f8ba685bce666235c8ae9e23ed9891291bb2b9355936d1b14ed7c8';//mgXEfbYoa3HKN56mPGVQQ6Zcxe419xUR7r
//btc 通过私钥恢复钱包；

let NET = bitcoin.networks.testnet

let num = chance.netNum

let keyBTC = Buffer.from( num+ privateBTC + '01', 'hex')//先通过buffer编码,二进制码

let WIF = bs58check.encode(keyBTC)//编译成base58码；
//console.log(WIF)
let sender = new bitcoin.ECPair.fromWIF(WIF, NET)
//console.log(sender.getAddress())
let BTCAddress = sender.getAddress()//私钥,恢复BTC钱包地址 mgXEfbYoa3HKN56mPGVQQ6Zcxe419xUR7r
console.log('address')
console.log(BTCAddress)
let txb = new bitcoin.TransactionBuilder(NET)
//console.log(txb)
    txb.setVersion(1)//设置交易版本；
    let txid = '99585208eb5bccbc5a0a99390886f449392853dfcba36d58d110566b7a6ffc72'//表示用了 unspent数组中对应的交易
    let txn = 1 //表示unspent数组中对应的值
    txb.addInput(txid, txn)//运用unspent数组中的几个元素，就调用几次
    txb.addOutput('n2kbrdnKT6UJvQKu8NNtwXjLkGZ9KFygE1', 0.1*Math.pow(10,8))//转出地址0.35629- 0.1-0.0001
    txb.addOutput('mgXEfbYoa3HKN56mPGVQQ6Zcxe419xUR7r', parseInt((0.35629- 0.1-0.0001)*Math.pow(10,8)))//找零地址  咱们设为自己
	txb.sign(0, sender);//设置交易签名,
	console.log(txb.build().toHex())//交易成功。
//发送交易；
