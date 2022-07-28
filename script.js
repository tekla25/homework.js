// 1. ამოიღეთ user ცვლადის სტუდენტის სტატუსი; //

let  user = {

    firstname:'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active',

    };
    console.log(user.studentstatus);


   // 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი (for, while);

   // a)

  let nummer = [5, 7, 25 , 13 ,8 ,23 ,27, ]
  
  for (let n = 0; n < nummer.length; n++){

    console.log(nummer[n]);
  }
    //b)

  let i = 0;
    while(i<nummer.length){
        console.log(nummer[i]);
        i++
    }
  




// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

    let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

    for ( let i = 0 ;i < numbers.length; i++ ){

        if (numbers[i] > 5) {
            console.log(numbers[i]);
            
        }
    }

   

    // 4.მოცემულია ობიექტი:
    // თუ user ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
    // hello;თუ user სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
    // თუ user სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
    // ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


var u = {
	name: "giorgi",
	age:  20,
	studentstatus: "active"
}
if (u.age < 18 && u.studentstatus == "active") {
    console.log("hello");
}
   else if (u.name == "levani") {
    console.log("Hello Giorgi");
    
   } 
   else if (u.studentstatus == "active" || u.age < 25 ) {
    console.log("Hello World");
    
   }

    else{

        console.log("error");
    }



   //  5.მოცემულია მასივი:
   // გამოიტანეთ მარტო სრტინგები;


    let array = ["watermelone", "pear",10,45,50, "apple", "ananas"];
    for (let i of array){

    if (typeof i == "string") {
        console.log(i);
        
    }
}





    //6. მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიხ 5-ის ჯერადია.(null არ უნდა გამოიტანოთ)


    let array1 = [ 32, 10, "hello", null, "hello2", 50 ]
for(let i = 0; i < array1.length ; i++){
    if(array1[i]% 5== 0 && array1[i] != null){
        console.log(array1[i]);
    }
}
 


    //7.მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:


    let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
    
    for(let i=0; i<array2.length;i++){
        //console.log(array2[i]);
        for(let y=0;y<array2[i].length;y++){
            if(array2[i][y]>0){
                console.log(array2[i][y])
            }
        }
    }


    let array4 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ].flat()
    for(let i=0; i<array4.length;i++){
        if(array4[i]>0){
            console.log(array4[i])
    }
}


    //8.  
    //a.ამოიღეთ მარტო ლუწი რიცხვები
   
    let array3 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

   for(let i of array3){
    if (i % 2 == 0) {
        console.log(i);
    }
   }
   //b.ამოიღეთ კენტი რიცხვები

   let array5 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

   for(let i of array5){
    if(i % 2 == 1){
        console.log(i);
    }
   }






 //9. Ცვლადს აქვს ორი მნიშვნელობა “ka”  და  “en
 //Დაწერეთ პირობა, თუ ცვლადი უდრის “ka” -ს გამოიტანეთ ნებსიმიერი ტექსტი ქართულად; თუ ცვლადი უდრის “en”- ს გამოიტანეთ ნებისმიერ ტექსტი ინგლისურად;
 //Დაწერეთ კოდი if-ით და switch case-ით;


let y = ["ka", "en"]

for(let i = 0; i<y.length; i++){

if(y[i] == "ka"){
    console.log("ქართული ტექსტი");
}
else if(y[i] == "en"){
    console.log("englishe text");
}
}

let n = ["ka","en"]
for(let i = 0; i<n.length; i++){
    switch (n[i]) {
        case "en":
            console.log("en")
            break;
            case "ka":
                console.log("ka")
                break;
        default:
            console.log("wrong language")
    }
}
