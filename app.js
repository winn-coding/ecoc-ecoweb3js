const {Ecocw3} = require('ecoweb3');
// console.log(Ecoweb3);
// console.log(Ecoweb3.Ecocjs.getNetwork())
let config = {
    rpcProvider:'http://winn:123456@127.0.0.1:56565'
}
const ecocw3 = new Ecocw3(config);
/*ecocw3.rpc.isConnected().then(data => {
    console.log(data);
});*/
/*
ecocw3.rpc.getBlockCount().then(data =>{
    console.log(data);
});
ecocw3.getNetwork().then(data =>{
    console.log(data);
});*/

// getNewAddress 获取钱包地址
/*ecocw3.rpc.getNewAddress().then(data => {
    console.log(data);
});*/
// getNewAddress 获取钱包地址(包含名称)
/*ecocw3.rpc.getNewAddress("winn").then(data => {
    console.log(data);
});*/
//getAddressesByAccount  根据命名查找钱包地址
/*ecocw3.rpc.getAddressesByAccount("winn").then(data => {
    console.log(data);
});*/
// validateAddress 验证钱包地址（获取钱包详细信息）
/*ecocw3.rpc.validateAddress("eCALXwuVcuHkV4oHerDgT5F5r8eoHD4FXt").then(data => {
    console.log(data);
});*/
// dumpPrivateKey  下载密钥
/*ecocw3.rpc.dumpPrivateKey("eCALXwuVcuHkV4oHerDgT5F5r8eoHD4FXt").then(data => {
    console.log(data);
});*/
// getHexAddress //转成Hex地址格式(6e6b5d74aac8e28d2a55cd3b860136663f2292b4)
/*ecocw3.rpc.getHexAddress("eCALXwuVcuHkV4oHerDgT5F5r8eoHD4FXt").then(data => {
    console.log(data);
})*/

// getAccount 获取用户名
/*ecocw3.rpc.getAccount("eCALXwuVcuHkV4oHerDgT5F5r8eoHD4FXt").then(data => {
    console.log(data);
})*/

//getWalletInfo 钱包信息
/*ecocw3.rpc.getWalletInfo().then(data => {
    console.log(data);
})*/
// getUnconfirmedBalance
/*ecocw3.rpc.getUnconfirmedBalance().then(data => {
    console.log(data);
})*/

//sendToAddress
ecocw3.rpc.sendToAddress('eCALXwuVcuHkV4oHerDgT5F5r8eoHD4FXt',0.001,'test change coin','test add',true,true,6,'UNSET','eQbdcKLCQTna7Z4sPGyFUyn2dKyAw5bBuS',false).then(data => {
    console.log(data);
}).catch(err =>{
    console.log(err);
})

// getTransactionReceipt
/*ecocw3.rpc.getTransaction('ef0ff6b0753e09c9caa9e692fa762627116730c36b1d0821180f280c7e224dc1').then(data => {
    console.log(data);
}).catch(err =>{
    console.log(err);
})*/


