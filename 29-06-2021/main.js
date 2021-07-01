itemArray = [];

function addItems(itemArray){
    while (true){
        let item = prompt("Enter item name \n If you're done shopping, Type \"End\"");
        if (toLowerCase(item) == "end"){
            break;
        }else if (item == ''){
            alert("Invalid Item");
        }else{
            let name = item;
            let type = prompt("Enter type of the item");
            let price = prompt("Price");
            item = new Object;
            item.name = name;
            item.price = price;
            item.type = type;
            itemArray.push(item);
            console.log(item);
        }    
    }
}

function checkout(itemArray){
    let total = 0;
    for (i in itemArray){
        total += Number(itemArray[i].price);
    }
    return total;
}

function applyCoupon(total){
    let couponArray = ['COUP500', 'COUP1000']
    while(true){
        let code = prompt("Enter Coupon Code");
        if (couponArray.includes(code) == true){
            total -= Number(code.slice(4, code.length));
            console.log(`Rs.${Number(code.slice(4, code.length))} discount!`);
            break;
        }else{
            alert("Invalid Coupon Code");
        }
    }
    return total;
}

function printBill(itemArray, total){
    console.log("----------Your Bill-----------")
    for (i in itemArray){
        console.log(`- ${itemArray[i].name} \t Rs.${itemArray[i].price} -`);
    }
    console.log(`Total is Rs.${total}`);
}

function payment(){
    while(true){
        paymentMethod = prompt("Select you payment method\n 1. Cash\n 2. Card");
        if (paymentMethod == "1"){
            alert("Payment Succesful!, Thank you for shopping");
            break;
        }else if (paymentMethod == "2"){
            while (true){
                cardNo = prompt("Enter Card number");
                if (cardNo.length <= 15 && cardNo[0] == "4"){
                    alert("Payment Succesful!, Thank you for shopping");
                    break;
                }else{
                    console.log(cardNo);
                    console.log(cardNo.length);
                    console.log(cardNo.slice((0)));
                    alert("Invalid Card number");
                }
            }    
            break;
        }else{
            alert("Invalid Option");
        }
    }
}

function main(){
    option = prompt("Welcome to Shopping Chart \n Select Your option \n 1. Add items \n 2. Exit shopping chart \n \"Enter the option number below\"");
    if (option == "2"){
        alert("Thank you");
    }else if (option == "1"){
        addItems(itemArray);
        let total = checkout(itemArray);
        if (total >= 5000){
            option2 = prompt(`Your total is Rs.${total} \nDo you have a Coupon Code? \nEnter \"Yes\" or \"No\"`);
            if (option2 == 'Yes'){
                total = applyCoupon(total);
            }
        }    
        printBill(itemArray, total);
        payment();
    }else{
        alert("Enter a valid option");
    }
}

main();
