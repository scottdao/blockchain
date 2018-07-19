//恢复账号；
import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey'
import util  from 'ethereumjs-util'
import Tx from 'ethereumjs-tx'
import bitcoin from 'bitcoinjs-lib' 
import bs58check from 'bs58check'
import bitcoinjsMessage from 'bitcoinjs-message'
import buffer from 'buffer'
import chance from './chanceNet'
//let w =  ["street", "lamp", "flavor", "uniform", "beauty", "flame", "chicken", "either", "will", "satoshi", "home", "stone"]

//let word = 'once camera spoon album glove private venue embrace spread involve observe radar';
let word = 'coyote inmate spell ethics leave garlic warm tag must afraid just reject '
//let word = w.join(' ');
//console.log(word)
let ETHNET = "m/44'/60'/0'/0/0"//路径协议eth
let BTCNET = "m/44'/0'/0'/0/0"
let n = chance.testnet
let NET = bitcoin.networks[n]
//console.log(NET)
let netNum = chance.netNum//主网 80 测试网 ef
//console.log(netNum)
let  seed = bip39.mnemonicToSeed(word);

let  hdWallet = hdkey.fromMasterSeed(seed);//生成钱包，钱包存在公私钥

let HdKeyETH = hdWallet._hdkey.derive(ETHNET);//生成以太坊。

let HdKeyBTC = hdWallet._hdkey.derive(BTCNET);//生成比特币。

let addressETH = util.pubToAddress(HdKeyETH._publicKey, true)//生成地址

 addressETH= util.toChecksumAddress(addressETH.toString('hex'))//地址，公钥生成地址；
 //console.log(HdKeyETH._privateKey)
 console.log('私钥：'+HdKeyETH._privateKey.toString('hex'))
// console.log(buffer.Buffer.from('ef189f16a0e10a3445504cb7c9570273c7fa676f794c33368d5019defb093dc6','hex'))
 console.log('address:'+addressETH);
 let publickey = HdKeyBTC._publicKey
 let addressBtc = bitcoin.address.toBase58Check(bitcoin.crypto.hash160(publickey), NET.pubKeyHash)
console.log("BTCaddress:"+addressBtc)//测试网的地址。

//eth签名

	let writeMessage = 'deadbeaf';//明文消息；
	let privateETC = HdKeyETH._privateKey//私钥
	//let tMess = util.addHexPrefix(writeMessage)
	let msgHash = util.hashPersonalMessage(buffer.Buffer.from(writeMessage, 'hex'))
	let messH = msgHash.toString('hex');
//	console.log('me==='+messH)
	let signAddress = util.ecsign(util.toBuffer(msgHash), buffer.Buffer.from(privateETC, 'hex'))//签名
	let trSign = util.addHexPrefix(signAddress.r.toString('hex') + signAddress.s.toString('hex') + util.toBuffer(signAddress.v).toString('hex'));
	
	console.log('签名:'+trSign);

//btc签名

	  var message = '123456'
      //测试网：this.NET 'ef' +key+ '01';真网：bitcoin 80+ key+ 01
     var privateBTC = HdKeyBTC._privateKey
       privateBTC = privateBTC.toString('hex')
      //console.log('私钥：'+privateBTC);
      var key1 = buffer.Buffer.from(netNum + privateBTC + '01', 'hex')
      
      var wif = bs58check.encode(key1)//将私钥转换成58编码
      //console.log('是：' + wif)
      var keyPair = bitcoin.ECPair.fromWIF(wif, NET) // 导入私钥
      var privateK = keyPair.d.toBuffer(32)
      var decoded = bs58check.decode(wif)
      var signature = bitcoinjsMessage.sign(message, privateK, keyPair.compressed)
  		 console.log('============')
		 console.log(signature)
		 console.log('=============')
		 signature = signature.toString('base64')
         console.log('signBTC:'+signature)