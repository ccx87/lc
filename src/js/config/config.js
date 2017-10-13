const system = (() => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  let system;
  if (isAndroid) {
    system = 'Android'
  } else if (isIOS) {
    system = 'IOS'
  }
  return system
})()
const LTYAPI = {
  default: '',
  upload: ''
}
if( process.env.NODE_ENV !== 'production' ){
  //LTYAPI.default = 'http://192.168.2.17:8082';
  //LTYAPI.upload = 'http://192.168.2.51:8080';
  LTYAPI.default = 'http://www.lianty.com/';
  LTYAPI.upload = 'http://file.lianty.com:8080/';   
}else{
  LTYAPI.default = 'http://www.lianty.com/';
  LTYAPI.upload = 'http://file.lianty.com:8080/';  
}
//const target = process.env.NODE_ENV !== 'production' ? 'http://192.168.2.51:8080' : 'http://www.lianty.com'; //目标网站
export {
    LTYAPI,
    system
}