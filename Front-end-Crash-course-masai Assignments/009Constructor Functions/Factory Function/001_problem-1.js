// +++++++++++++++++++++++++++++++ Problem 1: factory function iPhone1 ++++++++++++++++++++++++++++

// <============================problem Statement ==============================>

    /*
   - write a factory function iPhone1 to create iPhone objects in bulk quantity

    - define a iPhone1 function that takes input as
           - ASIN
           - color
           - display
           - camera
    - the object it creates has the following

        -properties : ASIN, color, display, camera
        
        -methods
            
            -dial -
                return "tring.. tring..."
            -sendMessage -
                return "Sending message..."
            -cameraClick-
                return "Camera clicked"

    iPhoneI -return object


 */

function  iPhone1(ASIN,color,display,camera){
    obj={}

    obj.ASIN=ASIN
    obj.camera=camera
    obj.color=color
    obj.display=display


    obj.dial=function(){
       return "tring.. tring..."

    }

    obj.sendMessage=function(){
      return "Sending message..."
    }

    obj.cameraClick=function(){
      return "Camera clicked"
    }

    return obj
}


let i1 = iPhone1(   
    "B09X67JBQV",
    "Gray",
    "90mm",
    "2.0 MP"
  );
//   ---- properties

  console.log(i1.ASIN); 
  console.log(i1.color);
  console.log(i1.display); 
  console.log(i1.camera); 
  
//   ---- methods
  console.log(i1.dial()); // "tring.. tring..."
  console.log(i1.sendMessage()); // "Sending message..."
  console.log(i1.cameraClick()); // "Camera clicked"
  