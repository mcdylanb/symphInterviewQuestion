const items = [
  { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
  { id: 4, seqId: 5, parent: 1, name: "Table" },
  { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
  { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
  { id: 1, seqId: 1, parent: null, name: "components" },
  { id: 6, seqId: 2, parent: null, name: "controllers" },
];
// const items = [
//   { id: 6, seqId: 2, parent: null, name: "controllers" },
//   { id: 1, seqId: 1, parent: null, name: "components" },
//   { id: 4, seqId: 5, parent: 1, name: "Table" },
//   { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
//   { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
//   { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
//   { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
// ];



//find the root and place to modifiedArray
let modifiedArray = items.filter(e=> e.parent == null)

//function to add child next to parent
const addChild = (parent, list) => {
  //loops array to check whether element has child
  parent.forEach(parentItem => {
    list.forEach(itemOfList => {
      if(parentItem.id == itemOfList.parent){
        console.log("adding" + parentItem.id)
        console.log("parent item:" + parentItem.name)
        console.log("adding" + itemOfList.parent)
        console.log("itemofList parent: " + itemOfList.name)
        console.log("naay anak")
        modifiedArray.splice(modifiedArray.indexOf(parentItem)+1 ,0,itemOfList)
      }else{
         console.log("walay ana")
      } 
    } )
  } )
} 

//new problem how to arrage via seqId
//i think we should arrange ahead
//
//and to get the depth

while ( modifiedArray.length < items.length){
  addChild(modifiedArray, items)
console.log(modifiedArray)
} 

console.log(modifiedArray)

