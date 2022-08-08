function getGecmis(){
	return document.getElementById("gecmis-degeri").innerText;
}
function printGecmis(num){
	document.getElementById("gecmis-degeri").innerText=num;
}
function getCikis(){
	return document.getElementById("cikis-degeri").innerText;
}
function printCikis(num){
	if(num==""){
		document.getElementById("cikis-degeri").innerText=num;
	}
	else{
		document.getElementById("cikis-degeri").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator2 = document.getElementsByClassName("operator2");
for(var i =0;i<operator2.length;i++){
	operator2[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printGecmis("");
			printCikis("");
		}
		else if(this.id=="convert"){
			var cikis=reverseNumberFormat(getCikis()).toString();
			if(cikis){
				cikis= -1*cikis;
				printCikis(cikis);
			}
		}
        else if(this.id=="%"){
            var cikis=reverseNumberFormat(getCikis()).toString();
            cikis=(cikis/100);
            printCikis(cikis);
        }
    })
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
			var cikis=getCikis();
			var gecmis=getGecmis();
			if(cikis==""&&gecmis!=""){
				if(isNaN(gecmis[gecmis.length-1])){
					gecmis= gecmis.substr(0,gecmis.length-1);
				}
			}
			else if(cikis!="" || gecmis!=""){
				cikis= cikis==""?cikis:reverseNumberFormat(cikis);
				gecmis=gecmis+cikis;
				if(this.id=="="){
					var sonuc=eval(gecmis);
					printCikis(sonuc);
					printGecmis("");
				}
				else{
					gecmis=gecmis+this.id;
					printGecmis(gecmis);
					printCikis("");
				}
			}
	})
}

var sayi = document.getElementsByClassName("sayi");
for(var i =0;i<sayi.length;i++){
	sayi[i].addEventListener('click',function(){
		var cikis=reverseNumberFormat(getCikis());
		if(cikis!=NaN){
			cikis=cikis+this.id;
			printCikis(cikis);
		}
	})
}