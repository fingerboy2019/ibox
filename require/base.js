let file1 = "https://gitee.com/minicloud/ibox/raw/master/core/base.js";
let file2 = "https://gitcode.net/fingerboy/ibox/-/raw/c1502e07d53f575f85902913e465e10e6b0bea9d/core/base.js";
let relyfile = "";
if(fileExist('hiker://files/libs/' + md5(file1) + '.js')){
  relyfile = file1;
}else if(fileExist('hiker://files/libs/' + md5(file2) + '.js')){
  relyfile = file2;
}
if(relyfile==""){
  let cjFile = request(file1,{timeout:3000});
  if(cjFile.indexOf('nowVersion') > -1){
    relyfile = file1;
  }else{
    let cjFile = request(file2,{timeout:3000});
    if(cjFile.indexOf('nowVersion') > -1){
      relyfile = file2;
    }else{
      //报错
    }
  }
}
  
