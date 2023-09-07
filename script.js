let string = ""
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            try{
                string = eval(string)
                document.querySelector('input').value = string
            }catch(err){
                string = "Invalid syntax"
                document.querySelector('input').value = string
                console.log(err)
            }
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == "Back"){

            if(string == "Invalid syntax"){
                string = ""
                document.querySelector('input').value = string
            }else{
                let len = string.length
                string = string.slice(0,len-1)
                document.querySelector('input').value = string
            }
        }
        else{
            if(string == "Invalid syntax"){
                document.querySelector('input').value = string
            }else{
                string = string + e.target.innerHTML
                document.querySelector('input').value = string
            }
        }
    })
})