function updateCaseNumber(product, price, isIncreasing){
    const caseInput=document.getElementById(product+'-number');
    let caseNumber=caseInput.value;
    if(isIncreasing){
        caseNumber= parseInt(caseNumber)+ 1 ;
    }
    else if(caseNumber > 0) {
        caseNumber= parseInt(caseNumber) - 1;
    }
    caseInput.value=caseNumber;
    // update total cost
    const caseTotal=document.getElementById(product +'-total');
    caseTotal.innerText=caseNumber*price;
    calculateTotal();
}
function getInputValue(product){
    const productInput=document.getElementById(product+'-number');
    const productNumber=productInput.value;
    const productTotal=parseInt(productNumber);
    return productNumber;
}

function calculateTotal(){
   const phoneTotal=getInputValue('phone')*1219;
   const caseTotal=getInputValue('case')*59;
   const subTotal=phoneTotal+caseTotal;
   const taxAmount=subTotal/10;
   const totalPrice=subTotal+taxAmount;
//    update in html
document.getElementById('sub-total').innerText=subTotal;
document.getElementById('tax-amount').innerText=taxAmount;
document.getElementById('total-price').innerText=totalPrice;   
}
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber('case',59, true);
    
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber('case',59,false);
});
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,false);
})