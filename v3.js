const items = [
  { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
  { id: 4, seqId: 5, parent: 1, name: "Table" },
  { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
  { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
  { id: 1, seqId: 1, parent: null, name: "components" },
  { id: 6, seqId: 2, parent: null, name: "controllers" },
];


//find the root and place to modifiedArray
let modifiedArray = items.filter(e=> e.parent == null)

//function to add child next to parent
const addChild = (parent, list) => {
  //loops array to check whether element has child

  let ifBreak;
  //TODO: foreach cant be break so its advisable to change
  for( let x = 0; x < parent.length; x++){
    for(let y = 0; y < list.length; y++){
      if(parent[x].id == list[y].parent){
        console.log("found one")
        // console.log("here")
        // console.log(list.filter(e => e.parent == list[y].parent))
        
        // trying to use concat
        // modifiedArray.concat( list.filter(e => e.parent == parent[x].parent))

        // trying to use filter 
        // modifiedArray.splice(modifiedArray.indexOf(parent[x])+1 ,0, list.filter(e => e.parent == list[y].parent))
        modifiedArray.splice(modifiedArray.indexOf(parent[x])+1 ,0, list[y])
      } 

    } 
  }
  } 

  // parent.forEach(parentItem => {
  //   list.forEach(itemOfList => {
  //     if(parentItem.id == itemOfList.parent){
// // the problem here is for every iteration it adds it after the parent which concludes rearranged
// // we want to place sub array in between
  //     console.log(list.filter(e => e.parent == itemOfList.parent))
  //     modifiedArray.splice(modifiedArray.indexOf(parentItem)+1 ,0,itemOfList)
  //     }
  //   } )
  // } )
// } 

//new problem how to arrage via seqId
//i think we should arrange ahead
//
//lets try to remove then place 
//
//and to get the depth

while ( modifiedArray.length < items.length){
  addChild(modifiedArray, items)
} 

console.log(modifiedArray)

