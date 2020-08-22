function testPromptDialog(){
    var result = prompt("Enter you age","20");
    if(result != null){
        alert("You age is " + result);
    }
}