function calc(x) {
    ans = 0;
    ans+=Math.pow(2,x.length);
    y = "";
    for (let index = 1; index < x.length; index++) {
        if(x.substring(0,x.length-index)==x.substring(index)){
            y = x.substring(index);
            break;
        }
    }
    if(y!=""){
        ans+=calc(y);
    }
    return ans;
}