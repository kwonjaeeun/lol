var page=1;
function aa() {
    console.log("aa");
}
// (()=>{
//     //5배함수
//     document.querySelector("#container").style.height=`${window.innerHeight*5}px`;
// })();
function sizing(){
    for(var i=0;i<page;i++){
    document.querySelector("#section"+(i+1)).style.height=`${window.innerHeight}px`;
    }
};
function onlyone() {
    for(var count=page;count>1;count--){
        document.querySelector("#section"+count).remove();
    }
    page=1;
}
function plus(){
    var sec=document.createElement("section");
    var div=document.createElement("div");
    div.innerText=page+1;
    page=page+1;
    sec.append(div);
    sec.id="section"+page;
    var color=page%8;
    sec.style.backgroundColor="#"+color*100101;
    document.querySelector("#sec_container").append(sec);
    sizing();
}
sizing();