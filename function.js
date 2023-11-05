
const seconds = new Date().getSeconds();
console.log(seconds);

let headers=document.querySelectorAll('.Header');


if(seconds%2===0){
for(let i=0;i<headers.length;i++){
    let header=headers[i]
    header.classList.remove('Header');
    header.classList.add('Header2')
}

}


let button=document.getElementsByClassName("detail")[0];
    

    $( ".btn" ).on( "click", function() {
        
    if(button.style.display==="none")
    {
        button.style.display="block";
    }
        else
        {
            button.style.display="none";
        }
     } )

  