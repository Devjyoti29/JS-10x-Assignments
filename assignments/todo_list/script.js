let c=0
let btn=document.querySelector("button")
btn.addEventListener("click",()=>{
    let todo=document.querySelector(".todos")
    let inp=document.querySelector("input")
    let txt=inp.value
    let p=document.createElement("p")
    p.innerHTML=txt
    p.setAttribute("key",c)
    c++
    todo.append(p)
    p.addEventListener("click",function(){
        this.remove()
})})
