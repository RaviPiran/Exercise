// Q3
let a = 4
let b = 3

if(a>b){
    console.log(a+ "is greate the " + b);
}
else{
    console.log("a is less than b");
}


//Q4
let mark =65
if(mark >= 80){
    console.log("A")
}
else if(mark >= 70){
    console.log("B")
}
else if(mark >= 60){
    console.log("C")
}
else if(mark >= 50){
    console.log("D")
}
else{
    console.log("F")
}


//Q5
let Months=prompt(" Enter your Month ")
switch (Months) {
    case "September":
        case "October":
            case "November":
                console.log("Automun");
                break
                case "December":
                    case "January":
                        case "February":
                            console.log("Winter");
                            break
                            case "March":
                                case "April":
                                    case "May":
                                        
                                        console.log("Spring");
                                        break
                                        case "June":
                                            case "July":
                                                case "August":
                                                    console.log("Summer");
                                                    break;

    
}


//Switch Q3

let Program=prompt(" Enter your Month ")
switch (Program) {
    case "HTML":
        case "CSS":
            case "JAVASCRIPT":
                console.log("Frontend ");
                break
                case "NODEJS":
                    case "EXPRESSJS":
                    
                            console.log("BACKEND");
                            break
                            case "default":
                                console.log("Not in list");
                                        break
}


