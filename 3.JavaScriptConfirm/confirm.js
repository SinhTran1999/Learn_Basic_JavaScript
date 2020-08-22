function testConfirmDialog(){
    var result = confirm("Do you want to continue?");
    if(result){
        alert("OK Next lession!");
    }else{
        alert("Bye!");
    }
}