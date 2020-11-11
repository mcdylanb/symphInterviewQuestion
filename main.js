const items = [
  { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
  { id: 4, seqId: 5, parent: 1, name: "Table" },
  { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
  { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
  { id: 1, seqId: 1, parent: null, name: "components" },
  { id: 6, seqId: 2, parent: null, name: "controllers" }
];

/*
Create a function `transformItems` that would return the desired output below
(should be able to support virtually unlimited depth and additional items)
*/

// the algorithm flow
// 1.arrange list with seqId
// 2.first add the root files
// 3.then run function placing child beside which adds depth
const transformItems = (list) => {
  //Variables
  let max;
  let arrangedArray = [];
  let modifiedArray = [];


  //arrange list base on seqid
  const arrangeArrayFunc = (list, max) => {
    let arrangedArray = [];
    for (let x = 0; x <= max; x++) {
        arrangedArray = arrangedArray.concat(list.filter((e) => e.seqId == x));
    }
    return arrangedArray;
  };

  //adds child next to parent
  const addChild = (parent, list) => {
    let depth = 1;
    //loops array to check whether element has child
    for (let x = 0; x < parent.length; x++) {
      //sets null parent value depth 0
      if (parent[x].parent == null) parent[x].depth = 0;
      for (let y = list.length - 1; y > 0; y--) {
        if (parent[x].id == list[y].parent) {
          list[y].depth = depth;
          modifiedArray.splice(
            modifiedArray.indexOf(parent[x]) + 1,
            0,
            list[y]
          );
        }
      }
      depth++;
    }
  };

  // Main Process
  max = Math.max(...list.map(e=>e.seqId)); //sets max of list value of seqid
  arrangedArray = arrangeArrayFunc(list, max); //arrangesArray
  modifiedArray = arrangedArray.filter((e) => e.parent == null); //set roots to modifiedArray
  while (modifiedArray.length < arrangedArray.length) {
    addChild(modifiedArray, arrangedArray);
  }

  return modifiedArray;
};

const finalItems = transformItems(items);
console.log(finalItems);

/* Output:
// The seqId is used for ordering within siblings.
// The depth would depend on the number of ancestors.
[
  { id: 1, seqId: 1, parent: null, depth: 0, name: 'components' },
  { id: 5, seqId: 2, parent: 1, depth: 1, name: 'AssignmentTable' },
  { id: 2, seqId: 4, parent: 5, depth: 2, name: 'index.tsx' },
  { id: 7, seqId: 5, parent: 5, depth: 2, name: 'SelectableDropdown.tsx' },
  { id: 3, seqId: 3, parent: 1, depth: 1, name: 'Sidebar' },
  { id: 4, seqId: 5, parent: 1, depth: 1, name: 'Table' },
  { id: 6, seqId: 2, parent: null, depth: 0, name: 'controllers' }
]
*/
