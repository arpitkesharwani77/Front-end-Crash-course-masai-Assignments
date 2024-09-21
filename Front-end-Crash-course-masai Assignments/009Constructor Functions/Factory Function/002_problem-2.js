

// <============================problem Statement ==============================>

/*
    Problem 2: factory function iPhone2======>

    write a factory function iPhone2 to create iPhone objects in bulk quantity
    define a iPhone2 function that takes input as
                      -  ASIN
                      -  color
                      -  display
                      -  camera
                      -  bluetooth

    - the object it creates has the following
         
                 -properties : ASIN, color, display, camera, bluetooth
    
                - methods
    
                        -dial - return "tring.. tring..."

                        -sendMessage - return "Sending message...w
    
                       - cameraClick- return "Camera clicked"
    
                      - connectBluetooth - return "Bluetooth connected successfully..."
    
    - iPhone2   return object
   
 */

function iPhone2( ASIN, color, display, camera, bluetooth){
    let obj={}

    obj.ASIN=ASIN
    obj.camera=camera
    obj.color=color
    obj.display=display
    obj.bluetooth=bluetooth


    obj.dial=function(){
       return "tring.. tring..."

    }

    obj.sendMessage=function(){
      return "Sending message..."
    }

    obj.cameraClick=function(){
      return "Camera clicked"
    }
    obj.connectBluetooth=function (){
        return "Bluetooth connected successfully..."
    
    }   
        
    return obj
}    


let i2 = iPhone2(
    "B09X67JBQV",
    "Gray",
    "90mm",
    "2.0 MP",
    "5.1"
    );

    
//   ---- properties
console.log(i2.ASIN); 
console.log(i2.color); 
console.log(i2.display);
console.log(i2.camera); 
console.log(i2.bluetooth); 

//   ---- methods
console.log(i2.dial()); // "tring.. tring..."
console.log(i2.sendMessage()); // "Sending message..."
console.log(i2.cameraClick()); // "Camera clicked"
console.log(i2.connectBluetooth()); //"Bluetooth connected successfully..."
      
