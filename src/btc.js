 import bs58check from 'bs58check'
 import bitcoinjsMessage from 'bitcoinjs-message'
 import buffer from 'buffer'
 import chance from './chanceNet'
 
 let netNum = chance.netNum
 //console.log(buffer)
function btc(hdWallet,BTCNET,bitcoin,NET){//btc 地址
	 var keyBtc = hdWallet.derivePath(BTCNET);
     //var addressBtc = util.pubToAddress(keyBtc._hdkey._publicKey, true);
     var publickey = keyBtc._hdkey._publicKey
     //var testnet = bitcoin.networks.testnet//测试网
     var addressBtc = bitcoin.address.toBase58Check(bitcoin.crypto.hash160(publickey), NET.pubKeyHash)
     return addressBtc
}
function sign(hdWallet,BTCNET,bitcoin,NET){//btc 签名
      var message = '123456'
      //测试网：this.NET 'ef' +key+ '01';真网：bitcoin 80+ key+ 01
      var keyBtc = hdWallet.derivePath(BTCNET)
      var privateBTC = keyBtc._hdkey._privateKey
       privateBTC = privateBTC.toString('hex')
      //console.log('私钥：'+privateBTC);
      var key1 = buffer.Buffer.from(netNum + privateBTC + '01', 'hex')
      var wif = bs58check.encode(key1)//将私钥转换成58编码
      //console.log('是：' + wif)
      var keyPair = bitcoin.ECPair.fromWIF(wif, NET) // 导入私钥
      var privateK = keyPair.d.toBuffer(32)
      var decoded = bs58check.decode(wif)
      var signature = bitcoinjsMessage.sign(message, privateK, keyPair.compressed)
      signature = signature.toString('base64')
      return signature;}
	var BTC = {
		btc,
		sign
	}
 export default BTC 