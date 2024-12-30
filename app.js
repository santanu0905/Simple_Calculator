const boxes=document.querySelectorAll('.box');
const inputContain=document.querySelector('#input');
const temp=document.querySelector('#equal')
let inputValue='';

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        inputValue=box.value;
        if(inputValue!=="c" && inputValue!=='=' && inputValue!=='back'){
            inputContain.value+=inputValue;
        }else if(inputValue==='c'){
            resetBtn();
        }else if(inputValue==='='){
            calculateResult(inputContain.value);
        }else{
            backBtn();
        }
    });
});

document.addEventListener('keydown',(evt)=>{
    if(evt.key==='Enter'){
        calculateResult(inputContain.value);
    }
})

const resetBtn=(()=>{
    inputContain.value='';
});

const calculateResult=(values)=>{
    try{
        inputContain.value=eval(values) || 0;
    }catch(err){
        inputContain.value='undefined';
    }
    
};

const backBtn=()=>{
    if(inputContain.value==='undefined'){
        inputContain.value='';
    }else{    
        inputContain.value=inputContain.value.slice(0,-1);
    }
};
