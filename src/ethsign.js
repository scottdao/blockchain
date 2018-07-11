import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey'
import util  from 'ethereumjs-util'
import Tx from 'ethereumjs-tx'

//eth签名
function ethSign(hdWallet,ETHNET){
	let key1 = hdWallet.derivePath(ETHNET)//测试网生成密钥
	var writeMessage = 'deadbeaf';//明文消息；
	var privateETC = key1._hdkey._privateKey//私钥
	var tMess = util.addHexPrefix(writeMessage)
	var msgHash = util.hashPersonalMessage(Buffer.from(writeMessage, 'hex'))
	var messH = msgHash.toString('hex');
	//console.log('msg:' + messH)
	var signAddress = util.ecsign(util.toBuffer(msgHash), Buffer.from(privateETC, 'hex'))//签名
	var trSign = util.addHexPrefix(signAddress.r.toString('hex') + signAddress.s.toString('hex') + util.toBuffer(signAddress.v).toString('hex'));
	console.log('ethsidn:'+trSign)
}
 export default ethSign