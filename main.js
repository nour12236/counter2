var count;
var start_count;
var selectvalue_second;
clk.onclick=()=>{
  selectvalue_second=document.querySelector("#slct").value;
  count=setInterval(counter,1000);
}
function counter(){
  var minutes = Math.floor(selectvalue_second / 60),

      remSeconds = selectvalue_second % 60;
  if (selectvalue_second>0) {
    selectvalue_second--;
    document.querySelector("#p").innerHTML=minutes + ":" + remSeconds;

  }else {
   clearInterval(count);
   document.querySelector("#p").innerHTML="Done..";
  }
}
