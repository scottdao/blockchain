# Blockchain

		ETH--工具类:bip39/ethereumjs-tx/ethereumjs-util/ethereumjs-wallet
		BTC--工具类：bip39/ethereumjs-tx/bitcoinjs-lib/bs58check/bitcoinjs-message

#### [测试网查询地址](https://ropsten.etherscan.io/address/0xb52Aa890a5a9A56a1FDBCc62968B885B92Da7efF)

#### [申请测试比特币](https://testnet.coinfaucet.eu/en/)

	
#### [测试网查询交易](https://ropsten.etherscan.io/tx/0x2a8e9e51558a57517f8085310a6c34e00302b8b55c7ef459261743742bafeebb)


#### [测试网查询BTC](https://testnet.blockchain.info)
		

#### [主网查询ETH](https://etherscan.io/address)

#### [主网查询BTC](https://www.blockchain.com/en/btc/address/121HNYTpm1r4axd9fhX2aBMJ6eTJHN5fbg)

#### [比特币书籍](http://book.8btc.com/books/1/master_bitcoin/_book/jian_suo.html)

#### [keystore文件](https://github.com/ethereumjs/keythereum)

## 比特币
 
###	1.UTXO

		比特币交易的基本单位是未经使用的一个交易输出
    
### 2.单位

	 1BTC = 10^3 mBTC(毫比特) = 10^6 uBTC(微比特) = 10^8 Satoshi(聪,基本单位)

## 以太坊

### 1.nonce
               发生交易的次数。

### 2.单位：
       1ETH = 10^18wei
	   1Mwei = 10^6wei
	   1Kwei = 10^3wei
	   1Gwei = 10^9wei
    		

## web3工具类函数   
	
	1.16进制-->10进制 web3.toDecimal(0x15)
	
	2.10进制-->16进制 web3.fromDecimal(21)
	
	3.将wei转换成其他单位： web3.fromWei('2100000000','ether')
	
	4.将以太坊单位(包括代币单位)转换成wei : web3.toWei('1', 'ether');
##  基础知识点：
	
### 1进制换算原理：
	
		1bytes = 8位  = 2string.length;
		
			
		16进制-->10进制转换函数：0x56 = 6*16^0+5*16^1 =86,parseInt(0x56,10) 
		
		10进制-->16进制 转换函数：21 = 21%16   0x15        (21).toString(16) = 15
														Number('21').toString(16) = 15
		
		21/16 = 1 .....5  低位
		
		1/16 = 0 .....1     高位
		
		0x15

### 2 p2p网络：
         （Peer-to-Peer）网络是一种端到端的网络，
         
         分为：结构化和非结构化网络；比特币的区块链采用的是非结构化P2P网络，
         
         整个网络没有中心化的硬件或管理机构，任一节点既是服务端，也是客户端。

### 3 加密算法和数字签名：
	
	加密技术分为对称、非对称和哈希（Hash）加密。对称加密是指用一个同样的密钥来进行加密和解密，非对称加密是指通过公钥和私钥来进行加密和解密，哈希加密主要是通过对数据进行哈希运算，用固定的哈希结果值验证信息是否被篡改。
	
	对称加密：一个密钥；非对称加密：两个密钥(公钥和私钥)
	
	非对称加密算法有RSA、DSA和ECC等种类，区块链使用的是基于椭圆曲线加密技术的数字签名（ECDSA），具体实现是secp256k1。ECDSA相当于是DSA和非对称加密ECC的结合。
	
	相比RSA算法，ECDSA具有计算量小、存储空间小、带宽要求低等特点。
	
	数字签名：基于数字签名的通信机制工作原理。
	
	安全哈希算法（Secure Hash Algorithm，SHA）是由美国国家安全局研发，由美国国家标准与技术研究院（NIST）发布的一系列密码哈希函数，包括SHA-0、SHA-1、SHA-2和SHA-3等系列。
	
	比特币还使用ripemd160算法来生成比特币钱包的地址。
	
	区块链使用的是SHA-256算。

### 4 梅克尔（Merkle）树是区块链的基本组成部分。

	如果没有梅克尔树， 区块链也是可以运转，但是要在区块头里包含所有交易记录，扩展性方面存在很大挑战。
	 
	区块链中的每个区块，由区块头和区块体构成，区块头中含有一个Merkle根节点的字段，通过对区块体中所有交易记录，以二叉树的形式迭代地两两拼接 、进行哈希操作，可以得到一个最终的哈希值，我们称之为Merkle根哈希。
	 
	Merkle根哈希相当于是对区块中所有交易记录进行了一个快照，区块中交易记录的任意改动都可以通过比较Merkle根哈希而很容易地察觉。
	 
	Merkle根哈希主要用于简单支付验证（SPV），在验证某个交易是否在区块中时，也能极大地减少网络传输成本。

### 5 Buffer类

### 6 币的分类

		比特币衍生出来的代替中心化的，也是一种竞争币；这类货币使用跟比特币同样的创建块链的方式来实现自己的电子货币系统。

		在比特币的块链上层，可以实现一系列的协议层。

		元币、元块链或者块链应用程序以块链为平台，或通过增加协议层的方式扩展比特币协议。

		竞争块链使用的是和比特币一样的创建块的机制，有时也会采用货币或代币的支付机制，

		但它们的主要目的不是为了维持一个货币系统。

####  6.1 元币平台

		元币和元块链是在比特币之上实现的软件层，

		也可以认为是覆盖在比特币系统之上的平台/协议，或者是在一个币中币的实现。

		元币的第一个实现利用了大量的 hack 技巧把元数据添加到比特币块链中，

		比如使用比特币地址编码数据，或者利用空白的交易字段存放新协议层增加的这些元数据。

		自从交易脚本操作码问世之后，元币得以直接将信息存放在块链之中。

##### 6.1.2 染色币

		由特殊的钱包管理，这类钱包存储和解析依附在染色币上的元信息。

		这种标签的内容可以表示股票证明、优惠券信息、实际财产、商品或者可收集的代币ect.

		如何书写和解读这类标签，完全取决于给这枚比特币“染色”的人，他可以决定附着在这部分比特币上的元信息属性.

##### 6.1.3 万事达币

#### [智能合约](http://wiki.jikexueyuan.com/project/solidity-zh/installing-solidity.html)	

# cmd命令

		创建文件名:touch (文件名)README.md
		创建文件夹: mdkir 文件夹名(me)
