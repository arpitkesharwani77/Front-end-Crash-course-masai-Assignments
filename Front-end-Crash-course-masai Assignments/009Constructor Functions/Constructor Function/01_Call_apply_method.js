/*
Topics===>
        • constructor function
        • .call()
        • .apply()


        ++++++++++ problem Statement +++++++++++

• write a constructor function iPhone3 to create iPhone objects in bulk quantity
• define a iPhone3 function that takes input as

        -   ASIN
        -    color
        -    display
        -    camera
        -    bluetooth


•
the object it creates has the following

    -properties : ASIN, color, display, camera, bluetooth

    -methods:

        - dial -
                return "tring.. tring..."
        -sendMessage 
            - return "Sending message..."

        -cameraClick
             - return "Camera clicked"

        -connectBluetooth 
            - return "Bluetooth connected successfully..."
 
-iPhone3 return object        

*/

function iPhone3( ASIN, color, display, camera, bluetooth){


    this.ASIN=ASIN
    this.camera=camera
    this.color=color
    this.display=display
    this.bluetooth=bluetooth


    this.dial=function(){
       return "tring.. tring..."

    }

    this.sendMessage=function(){
      return "Sending message..."
    }

    this.cameraClick=function(){
      return "Camera clicked"
    }
    this.connectBluetooth=function (){
        return "Bluetooth connected successfully..."
    
    }          
} 

let i3 = {};
iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
// ---- properties

console.log(i3.ASIN); 
console.log(i3.color);
console.log(i3.display); 
console.log(i3.camera); 
console.log(i3.bluetooth); 

// ---- methods

console.log(i3.dial()); // "tring.. tring..."
console.log(i3.sendMessage()); // "Sending message..."
console.log(i3.cameraClick()); // "Camera clicked"
console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."
