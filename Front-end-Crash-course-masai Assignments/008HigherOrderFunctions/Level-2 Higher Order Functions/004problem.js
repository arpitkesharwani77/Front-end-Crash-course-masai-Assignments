/*
<==========================Problem Statement================================>

Implementation function takes data array as a input and returns a object with unique 
favoritelcecreams as key and the value is the count of how many people liked it.


--input==>
    const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];



--ouput==>

   {
      Strawberry: 3,
      Vanilla: 4,
      Chocolate: 5,
      "Cookies & Cream": 2,
      "Mint Chocolate Chip": 3,
      "Rocky Road": 1,
      Pistachio: 1,
      Banana: 1,
      "French Vanilla": 1,
      "Vanilla Bean": 1,
    }



*/  

function favoriteIceCreams(data){
    return data.reduce((acc,person)=>{
        person.favoriteIceCreams.forEach(item=>{
            if (! (item in acc)){
              acc[item]=1

            }else{
              acc[item]+=1
            }
        })

        return acc
    },{})
}

const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];

console.log(favoriteIceCreams(data))





/*
++++++++++++++++++ second way ++++++++++++++++

function countFavoriteIceCreams(data) {
  const iceCreamCount = {};

  data.forEach(person => {
 
    person.favoriteIceCreams.forEach(iceCream => {
  
      if (iceCreamCount[iceCream]) {
        iceCreamCount[iceCream]++;
      }  
      else {
        iceCreamCount[iceCream] = 1;
      }
    });
  });

  return iceCreamCount;
}
*/