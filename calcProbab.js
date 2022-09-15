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

function calc1(x,n) {
    const N = n;
    
    function calcu(x){
        ans = 0;
        ans+=Math.pow(N,x.length);
        y = "";
        for (let index = 1; index < x.length; index++) {
            if(x.substring(0,x.length-index)==x.substring(index)){
                y = x.substring(index);
                break;
            }
        }
        if(y!=""){
            ans+=calcu(y);
        }
        
        return ans;
    }
    return calcu(x);

}

function calc2(x,arrStr) {
    text = arrStr.split(",");
    arr = {};
    for (let index = 0; index < text.length-1; index+=2) {
        arr[text[index]] = parseFloat(text[index+1]);
    }
    const Arr = arr;
    function calcu2(x){
        ans = 1;
        var i = x.length;
        while (i--) {
            ans*=1/arr[x.charAt(i)];
        }
        // ans = 1/ans;
        y = "";
        for (let index = 1; index < x.length; index++) {
            if(x.substring(0,x.length-index)==x.substring(index)){
                y = x.substring(index);
                break;
            }
        }
        if(y!=""){
            ans+=calcu2(y);
        }
        
        return ans;
    }
    return calcu2(x);

}