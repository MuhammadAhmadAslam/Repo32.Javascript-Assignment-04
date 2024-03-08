document.write("Welcome To Mobile Phone Recomender");
document.write("Please Answer The following question to help us suggest the perfect mobile phone");
var budget = prompt("Enter abudget of your mobile phone (low/medium/high)");
document.write("Your prefer budget is: " + budget);
var opreatingSystem = prompt("Which opreating system do you prefer? (Andriod / IOS)");
document.write("Your prefer opreating System is: " + opreatingSystem);
var cameraQuality = prompt("What camera quality do you need? (basic/moderate/high)");
document.write("Your prefer camera quality is: " + cameraQuality);
var batteryLife = prompt("Which battery life do you prefer (short/average/long)");
document.write("Your perefer battery life is: " + batteryLife);
var screenSize = prompt("Which screen size do you prefer (small/medium/large)");
document.write("Your prefer screen size is: " + screenSize);


document.write("Based on your prefences , we recommend the following mobile phone ");


if(budget == "low" || budget == "Low" || budget == "low"){
    document.write("Price: 25000 PKR");
    if (opreatingSystem == "andriod" || opreatingSystem == "Andriod") {
        document.write("SAMSUNG A10s")
    }else{
        document.write("I Phone 5s");
    }
      
}


