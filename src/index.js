module.exports = function check(str, bracketsConfig){
  let arr = str.split('');
  let open = [], close = [];
    for(let i=0;i<bracketsConfig.length;i++){
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
    }

    for(let i=0;i<arr.length-1;i++){
      if(open.indexOf(arr[i])!=-1 && open.indexOf(arr[i])==close.indexOf(arr[i+1])){
        arr.splice(i,2);
        i=-1;
      }
}
if(!arr.length)return true;
else return false;


};