/*
<==========================Problem Statement================================>

-Given an array of strings representing file paths, write a function
 that returns a new array containing only the file paths that havea .png or .jpg 
 extension, using .filter()

-as in the output .pdf file is not there.


--input==>
    --const filePaths = [
                    "/images/pic1.jpg",
                    "/images/pic2.png",
                    "/assets/img/background.jpg",
                    "/assets/img/logo.png",
                    "/downloads/document.pdf",
                    "/downloads/image.png",
                    "/downloads/image.jpg",
];

--ouput==>
        [
        "/images/pic1.jpg",
        "/images/pic2.png",
        "/assets/img/background.jpg",
        "/assets/img/logo.png",
        "/downloads/image.png",
        "/downloads/image.jpg",
        ];



*/  

function OnlyPngOrJpgFiles(filePaths){
    return filePaths.filter(item=>{
        // return item.includes(".jpg") || item.includes(".png")
        return item.endsWith(".jpg") || item.endsWith(".png");
    })
}

const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];

  console.log(OnlyPngOrJpgFiles(filePaths))
  