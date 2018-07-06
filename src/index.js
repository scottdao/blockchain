//eth
import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey'
import util  from 'ethereumjs-util'
import Tx from 'ethereumjs-tx'

 let ETHNET = "m/44'/60'/0'/0/0"//协议
 
 let  mnemonic = bip39.generateMnemonic();//生成助记词；一般12-24，bip39生成为12
 
 let  seed = bip39.mnemonicToSeed(mnemonic);//种子，二进制数64
 
 let  hdWallet = hdkey.fromMasterSeed(seed);//生成钱包，钱包存在公私钥
 //console.log(hdWallet)
 let key1 = hdWallet.derivePath(ETHNET)//测试网生成密钥
 
 let address1 = util.pubToAddress(key1._hdkey._publicKey, true)
 
 address1 = util.toChecksumAddress(address1.toString('hex'))//地址，公钥生成地址；
 
 //私钥生成签名，验证身份；
 

