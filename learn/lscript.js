function Table(num) {
    var input = num.value;
    if(!isNaN(input)) {
        var table="";
        var number="";
        for(i=1;i<=20;i++) {
            number = input * i;
            table +=  input + " x " + i + " = " + number + "<br>";
        }
        document.getElementById("mul").innerHTML = ("<br><br>" + table);
    }
    else {
        document.getElementById("mul").innerHTML = "Please Enter a valid Number";
    }
}