names=[];
function SUBMIT(){

    
    

    
    
   
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
   
    names.push(name1);
     names.push(name2); 
     names.push(name3);
      names.push(name4);
      document.getElementById("displayname").innerHTML=names;
      
      document.getElementById("SUBMITBUTTON").style.display="none";
       
      document.getElementById("sortbutton").style.display="inline-block";
      
      
      


    
    

    

}
function sorting(){
    names.sort();
    document.getElementById("displayname").innerHTML=names;

}