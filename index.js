
 
 // 1. ստեղծել սեփական forEach ֆեւնկցիա, որը լրիվ նույն կերպ կաշխատի ինչպես forEach-ը

 const list = [ "Հարությունյան", "Նալբանդյան", "Այվազյան", "Իշխանյան"];
 list.sort();
 const func = function(a, b){
    for(let i = 0; i < list.length; i++){
        b(list[i], i);
    }
 };
 func(list, function(val, ind){
    alert(` Համար ${ind + 1} մասնակիցը ${val}ն է։`);
 });


 // 2. ստեղծել օբջեքթ ու քոփի անել մեր անցած մեթոդներով
//․․․1․․․․
const myObj = {
    name: "Աննա",
    lastName: "Առուստամյան"
};
const copyObj = myObj;
myObj.name = "Կարինե";
myObj.lastName ="Մնացականյան";
console.log(myObj); 
console.log(copyObj);


//...2...
const number1 = {
    a: 5,
    b:10,
};
const number2 = {
    b: 77,
    c: 3
};
const copy = Object.assign(number1, number2);
console.log(number1);
console.log(copy);

//...3...
const data = {
    country : "Հայաստան",
    city:"Երևան"
};
const dataCopy = {...data};
console.log(dataCopy);


//3. ստեղծել զանգված ու քոփի անել մեր անցած մեթոդներով
//...1...
const arr = [20, 15, 65, 70];
const arr1 = [20, 68, 47];
const newArr = [...arr, ...arr1];
console.log(newArr);

//...2...
const a = [88, 99, 77];
const b = a.slice();
b[0] = 66;
console.log(b);


//4. ստեղծել ֆունկցիա, որը կաշխատի split-ի նման (տողը կվերցնի, կկտրի կդարձնի զանգված)
let newArray = [];              
let string = "";   
function split(newAArr){
    for(const i in newAArr){
        if(newAArr[i] === " "){
            newArray.push(string);
            string = "";
        } else{
            string += newAArr[i];
        }
    }
console.log(newArray);
}
split("Խնդիրը լուծված է ");





