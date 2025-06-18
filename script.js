var result=(a,b)=>{
    return a+b;
}
console.log(result(3,2));
//spread operator (...)
var a=[10,20,30];
var b=[...a,90];
console.log(a);
console.log(b);
//Destructuring operator
var marks=[80,90,60,54,34]
var [a1,a2,a3,a4,a5]=marks;
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
//callback function-call one function by using another function
function demo(){
    console.log("Hello,i am from demo");
}
var callBack=(func)=>{
    console.log("Hello from callback");
    func();
}
callBack(demo);
//map
var a=[1,2,3,4,5,]
var ans=a.map(c=>c*2);
console.log(ans);
//filter
var b=ans.filter(num=>num>=5);
console.log(b)

//reduce
var total=b.reduce((val,num)=>val+num,0)
console.log(total)

