function CreateObject(arr) {
    let obj={}
    for(let i=0;i<arr.length;i+=2)
    {
        let k=arr[i]
        let v=arr[i+1]
        obj[k]=v
    }
    return(obj)
    // Write your code here
}

module.exports = CreateObject;
