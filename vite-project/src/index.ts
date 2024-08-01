let check:boolean=false 
let surname: string | number;
surname="patel";
surname=23


// const fun=(num1:string):number=>{
//     return 23;
// }

type commonFun =(n:number,m:number) =>number;

const fun1:commonFun=(num1)=>{
    return 23;
}


///array
// const arr:number[] = [34,45]
const arr:Array<number> = [34,45]
const arrtuple:[number,number,number] = [34,45,45]
const arr1:Array<boolean | number> = [true,false,34]


//object

type obj = {
    height:number,
    age:number,
    gender?:string
}

let person:obj= {
    height:23,
    age:34
}



//interface 
 interface person {
    height:number,
    age:number,
    gender?:string
}

//extends interface
interface student extends person {
   id:number
}
let saurav:person ={
    height:34,
    age:24
}


let meet:student={
   id:34,
   height:45,
   age:34
}


//default parameter
type funcType =(n:number,l?:number)=> number;


//rest operator
type rest= (...m:number[])=> number[]

let restfunc:rest=(...m)=>{
    
    return m
}


restfunc(25,23,34,5);



//class and object

class player {
    private balance;
    public height;
    protected age;  //only inherted and we can access
    constructor(height:number ,balance:number,age:number){
        this.balance=balance;
        this.height=height
        this.age=age
    }

    set changeBalance(val:number){
         this.balance=val
    }


}

class cricket extends player{
    special:boolean;
    constructor(height:number,balance:number,age:number,special:boolean){
        super(height,balance,age)   //intiallize parent class
        this.special=special
    }
}


 const abhi=new player(23,45,23);
 abhi.changeBalance=23

 


//interface with class
 //interface //structure of a class

 interface structuremy {
    age:number,
    name:string,
    phone:number,
    offer?:string,
    getname:()=>string
 }
 class saurav32 implements structuremy{

    constructor(public age:number,public name:string,public phone:number){

    }
    getname(){
   return "dasda"
    }
 }


 //type assertion:we overrule a type that given by typescript


//  const btn = <HTMLElement>document.getElementById("btn") ;
 const btn = document.getElementById("btn") as HTMLElement;

//  btn.onclick   

 //we define that element as image
 const img=document.getElementById("myimg") as HTMLImageElement;


//  utility type  //for help developer
// ex required utitlity , partial utility  


interface orderInfo {
    readonly id:string,
    user: string,
    city:string,
    status:string
}

type shippingInfo = Pick<orderInfo,"city"| "id" >
type userInfo = Omit<orderInfo,"user "| "id" >



//generic
const func = <Customtype>(n:Customtype):Customtype =>{
    return n;  
} 

const ans =func(34)


//generic example with obj
type personDetails={
    name:string,
    age:number
} 

let personSaurav:personDetails = {
    name:"saurav",
    age:23
}

const Info =  <T> (n: T) :T =>{

    return n;
}


const Details=Info <personDetails>(personSaurav)


//nultiple generic
//u need a properties of T 
const multipleInfo =  <T,U extends T> (n: T,o:U) :object =>{

    return {n,o};
}

 
//array of object

type persontype ={
    name:string,
    age:number
}

const users:persontype[] =[
    {
          name:"saurav",
          age:12
    },
    {
        name:"vikash",
        age:25

    }
]