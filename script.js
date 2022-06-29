function fade(){
    var x = document.getElementById("text1").value;
    var y = document.getElementById("img1");
    var z = document.getElementById("img2");
    var z1 = document.getElementById("img3");
    var m1 = document.getElementById("l1");
    var m2 = document.getElementById("l2");
    var m3 = document.getElementById("l3");
    var m4 = document.getElementById("l4");

    if (x =="magi") {

        y.style.transition= "1s";
        m1.style.transition= "1s";
        z.style.transition= "1s";
        z1.style.transition= "1s";
        m2.style.transition= "1s";
        m3.style.transition= "1s";
        m4.style.transition= "1s";
        y.style.opacity= "1";
        z.style.opacity= "0";   
        z1.style.opacity= "0";   
        m1.style.opacity= "0";
        m3.style.opacity= "0";
        m4.style.opacity= "0";
        m2.style.opacity= "1";
    }
    else if(x =="khanki"){
        m1.style.transition= "1s";
        m2.style.transition= "1s";
        m3.style.transition= "1s";
        m4.style.transition= "1s";
        y.style.transition= "1s";
        z.style.transition= "1s";
        z1.style.transition= "1s";
        y.style.opacity= "0";
        z.style.opacity= "1";
        z1.style.opacity= "0";
        m1.style.opacity= "0";
        m3.style.opacity= "1";
        m2.style.opacity= "0";
        m4.style.opacity= "0";
    }
    else if(x =="innocent"){
        m1.style.transition= "1s";
        m2.style.transition= "1s";
        m3.style.transition= "1s";
        y.style.transition= "1s";
        z.style.transition= "1s";
        z1.style.transition= "1s";
        y.style.opacity= "0";
        z.style.opacity= "0";
        z1.style.opacity= "1";
        m4.style.opacity= "1";
        m1.style.opacity= "0";
        m3.style.opacity= "0";
        m2.style.opacity= "0";
    }
    
    else{
        alert("Wrong Keyword!");
    }
}