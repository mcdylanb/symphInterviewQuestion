const items = [
  { id: 1, seqId: 1, parent: null, name: "components" },
  { id: 4, seqId: 5, parent: 1, name: "Table" },
  { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
  { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
  { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
  { id: 6, seqId: 2, parent: null, name: "controllers" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
  { id: 6, seqId: 2, parent: null, name: "controllers" },
];


// my work flow : 
// arrange list with seqId
// first add the root files
// then run function placing child beside

//loop to find the max number
let max = 0;
for(let y = 0; y < items.length; y++){
  if(items[y].seqId > max){
    max=items[y].seqId;
  } 
}

//arrange items
let arrangedArray = [];
for( let x = 0; x <= max; x++){
  for(let y = 0; y < items.length; y++){
    arrangedArray = arrangedArray.concat(items.filter(e=> e.seqId == x))
    break;
  }
}

//find  root and place to modifiedArray
let modifiedArray = arrangedArray.filter(e=> e.parent == null)


//function to add child next to parent
const addChild = (parent, list) => {
  let depth = 1
  //loops array to check whether element has child
  for( let x = 0; x < parent.length; x++){
    //sets null parent value depth 0
    if(parent[x].parent == null) parent[x].depth = 0
    for(let y = list.length -1; y > 0; y--){
      if(parent[x].id == list[y].parent){
        list[y].depth = depth
        modifiedArray.splice(modifiedArray.indexOf(parent[x])+1 ,0, list[y])
      } 
    } 
    depth++
  }
} 

//applies addchild functino until length similar
while ( modifiedArray.length < arrangedArray.length){
  addChild(modifiedArray, arrangedArray)
} 

console.log(modifiedArray)

