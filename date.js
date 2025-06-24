let myDate=new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

let mycreatedDate1=new Date(2025,0,30)
console.log(mycreatedDate1.toDateString()); 
console.log(mycreatedDate1.toLocaleString()); 


let mycreatedDate2=new Date(2025,0,30,5,3)
console.log(mycreatedDate2.toDateString()); 
console.log(mycreatedDate2.toLocaleString()); 

let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toDateString()); 
console.log(myCreatedDate3.toLocaleString()); 

let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(mycreatedDate1.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1); //in JS Month Start from 0; so jan-->0, june-->5,so do +1
console.log(newDate.getDay());

