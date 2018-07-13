# Blockchain

		ETH--工具类:bip39/ethereumjs-tx/ethereumjs-util/ethereumjs-wallet
		BTC--工具类：bip39/ethereumjs-tx/bitcoinjs-lib
		
	


## 比特币
 
    ###	1.UTXO:比特币交易的基本单位是未经使用的一个交易输出
    
    ### 2.1BTC = 10^3 mBTC(毫比特) = 10^6 uBTC(微比特) = 10^8 Satoshi(聪,基本单位)

## 以太坊

### 1.nonce:发生交易的次数。
    
### 2.单位：1ETH = 10^18wei
    
    		   1Mwei = 10^6wei
    		   1Kwei = 10^3wei
        	   1Gwei = 10^9wei
    		

## web3工具类函数   
	
	1.16进制-->10进制 web3.toDecimal(0x15)
	
	2.10进制-->16进制 web3.fromDecimal(21)
	
	3.将wei转换成其他单位： web3.fromWei('2100000000','ether')
	
	4.将以太坊单位(包括代币单位)转换成wei : web3.toWei('1', 'ether');
##  基础知识点：

### 1
	
		1bytes = 8位  = 2string.length;
		
			
		16进制-->10进制转换函数：0x56 = 6*16^0+5*16^1 =86,parseInt(0x56,10) 
		
		10进制-->16进制 转换函数：21 = 21%16   0x15        (21).toString(16) = 15
		
		21/16 = 1 .....5  低位
		
		1/16 = 0 .....1     高位
		
		0x15

### 2 p2p网络：（Peer-to-Peer）网络是一种端到端的网络，分为：结构化和非结构化网络；比特币的区块链采用的是非结构化P2P网络，整个网络没有中心化的硬件或管理机构，任一节点既是服务端，也是客户端。

### 3 加密算法和数字签名：

# cmd命令

创建文件名:touch (文件名)README.md
创建文件夹: mdkir 文件夹名(me)
