const items = [
  { id: 1, seqId: 1, parent: null, name: "components" },
  { id: 4, seqId: 5, parent: 1, name: "Table" },
  { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
  { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
  { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
  { id: 6, seqId: 2, parent: null, name: "controllers" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
];


//TODO:
//  - arrange via seqId
//  - add depth


//loop to find the max number
let max = 0;
for(let y = 0; y < items.length; y++){
  console.log(items[y].seqId)
  if(items[y].seqId > max){
    max=items[y].seqId;
  } 
}

console.log("max number:" + max)


//arrange items
let arrangedArray = [];
  for( let x = 0; x <= max; x++){
    for(let y = 0; y < items.length; y++){
      arrangedArray = arrangedArray.concat(items.filter(e=> e.seqId == x))
      break;
    }
  }

console.log(arrangedArray)



//find the root and place to modifiedArray
let modifiedArray = arrangedArray.filter(e=> e.parent == null)

//function to add child next to parent
const addChild = (parent, list) => {
  //loops array to check whether element has child

  for( let x = 0; x < parent.length; x++){
    for(let y = list.length -1; y > 0; y--){
      if(parent[x].id == list[y].parent){
        // modifiedArray.splice(modifiedArray.indexOf(parent[x])+1 ,0, list[y])
        modifiedArray.splice(modifiedArray.indexOf(parent[x])+1 ,0, list[y])
      } 
    } 
  }
} 

while ( modifiedArray.length < arrangedArray.length){
  addChild(modifiedArray, arrangedArray)
} 

console.log(modifiedArray)

