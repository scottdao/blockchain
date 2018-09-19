var  keythereum = require('keythereum');
 var params = { keyBytes: 32, ivBytes: 16 };
 var dk = keythereum.create(params);
 var options = {
    kdf: "pbkdf2",
    cipher: "aes-128-ctr",
    kdfparams: {
        c: 262144,
        dklen: 32,
        prf: "hmac-sha256"
    }
  }
var aLink = document.createElement('a');
var passwd = 'AoFKyF9zJI7f7dwuwD66'
var keyObject = keythereum.dump(passwd, '58ad93973164418e2431c456c164235633fa90c437ff185aef901ccc964fb29c', dk.salt, dk.iv, options);
var blob = new Blob([JSON.stringify(keyObject)], {type: "" });
var evt = new Event('click');
aLink.download = 'keystore.json';
aLink.href = URL.createObjectURL(blob);
aLink.click();
URL.revokeObjectURL(blob);
/*生成keystore文件*/
