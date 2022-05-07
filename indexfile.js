//identify password length
let passwordLength = 8

//identify allowed characters
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let number = [0,1,2,3,4,5,6,7,8,9]
let specialChar = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','|',']','^','_','`','{',"\\",'}','~']

function randomPassword () {
    //step 1: Of 8 characters, assign to one of 4 categories such that each category has minimum one
    // Categories in order are lowerCase, upperCase, number, specialChar
    let countForEachCategory = [0,0,0,0] 
    let passwordLengthCounter = passwordLength
    for (let i=0;i<3,i+=1;) {
        countForEachCategory[i]= Math.floor(Math.random()*4+1)
        passwordLengthCounter -= countForEachCategory[i]
    }
    countForEachCategory[3]= passwordLengthCounter
    console.log(countForEachCategory)
    //step 2: based on length generated above, pick as many characters randomly from each category
    //step 3: shuffle up the 8 characters in a random order
}

// generate passwords
function generateOutput() {
    // return values
    document.getElementById("password1").textContent = "aajMeinUpar"
    document.getElementById("password2").textContent = "aasmanNeeche"
    document.getElementById("password3").textContent = "aajMeinAage"
    document.getElementById("password4").textContent = "ZamanaHePeeche"
    console.log(Math.floor(Math.random()*4+1))
}

randomPassword ()
