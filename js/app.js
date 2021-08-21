// Memory Configure Selection
function memoryGbPrice (is16GB){
    if(is16GB === false){
        document.getElementById("memory-price").innerText = 0;
    }
    else{
        document.getElementById("memory-price").innerText = 180;
    };
     // Total Mac Book price
     totalPrice();  
};

document.getElementById("memory-8GB").addEventListener("click", function(){
    memoryGbPrice(false); 
});

document.getElementById("memory-16GB").addEventListener("click", function(){
    memoryGbPrice(true); 
});
// Stroage Configure Selection
function ssdPrice(ssd){
    if(ssd === "256GB"){
        document.getElementById("stroage-price").innerText = 0;
    }
    else if(ssd === "512GB"){
        document.getElementById("stroage-price").innerText = 100;
    }
    else{
        document.getElementById("stroage-price").innerText = 180;
    };
};
document.getElementById("stroage-256GB").addEventListener("click", function(){ 
    document.getElementById("stroage-price").innerText = 0;
    // Total Mac Book price
    totalPrice();
});
document.getElementById("stroage-512GB").addEventListener("click", function(){ 
    document.getElementById("stroage-price").innerText = 100;
    // Total Mac Book price
    totalPrice();
});
document.getElementById("stroage-1TB").addEventListener("click", function(){
    document.getElementById("stroage-price").innerText = 180;
    // Total Mac Book price
    totalPrice(); 
});
// Delivery Option Selection
function deliveryCost(wantFast){
    if(wantFast === true){
        document.getElementById("delivery-charge").innerText = 20;
    }
    else{
        document.getElementById("delivery-charge").innerText = 0;
    };
    // Total Mac Book price
    totalPrice();
};
document.getElementById("late-delivery").addEventListener("click", function(){
    deliveryCost(false);
});
document.getElementById("fast-delivery").addEventListener("click", function(){
    deliveryCost(true);
});
// Total Mac-Book Price
function totalPrice(){
    const macBookPrice = document.getElementById("macBook-Price").innerText = 1299;
    const memoryPrice = document.getElementById("memory-price").innerText;
    const memoryPriceInt = parseInt(memoryPrice);
    const storgePrice = document.getElementById("stroage-price").innerText;
    const storgePriceInt = parseInt(storgePrice);
    const deliveryCharge = document.getElementById("delivery-charge").innerText;
    const deliveryChargeInt = parseInt(deliveryCharge);
    const totalProductPrice = macBookPrice + memoryPriceInt + storgePriceInt + deliveryChargeInt;
    document.getElementById("delivery-price").innerText = totalProductPrice;
    
    
};