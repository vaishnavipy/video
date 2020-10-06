window.onload = function(){
               
                
                   
                   
                    

                
                  
    document.getElementById("overlay").onclick = function(){

        this.classList.toggle("toggle_overlay");

        if(this.classList.contains("toggle_overlay")){

            document.getElementById("video").pause();

        }else{

            document.getElementById("video").play(); 
        }




    }



}
