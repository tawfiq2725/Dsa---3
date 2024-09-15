// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }
//         else{
//             this.insertNode(this.root , node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }
//             else{
//                 this.insertNode(root.left,node)
//             }
//         }
//         else{
//             if(root.right === null){
//                 root.right = node
//             }
//             else{
//                 this.insertNode(root.right , node)
//             }
//         }
//     }


//     Inorder(root){
//         if(root){
//             this.Inorder(root.left)
//             console.log(root.value)
//             this.Inorder(root.right)
//         }
//     }
// }


// const tree = new Binarysearchtree()

// tree.insert(10)
// tree.insert(2)
// tree.insert(6)
// tree.insert(30)
// tree.insert(24)

// // tree.Inorder(tree.root)



// function isValidtree(root , min=-Infinity , max=-Infinity){
//     if(!root){
//         return true
//     }
//     if( root.value<=min && root.value >=max){
//         return false
//     }

//     return isValidtree(root.left , root.value , max ) && isValidtree(root.right,min , root.value)
// }
// console.log(isValidtree(tree))








// Heap


class Heap{
    constructor(){
        this.heap = []
    }

    // Helper functions

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }
    getParent(childIndex){
        return this.heap[this.getParentIndex(childIndex)]
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex)>= 0
    }


    getLeftChildIndex(parentIndex){
        return (2*parentIndex)+1
    }
    getLeftChild(parentIndex){
        return this.heap[this.getLeftChildIndex(parentIndex)]
    }
    hasLeft(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.heap.length
    }

    getrightChildIndex(parentIndex){
        return (2*parentIndex)+2
    }
    getRight(parentIndex){
        return this.heap[this.getrightChildIndex(parentIndex)]
    }
    hasRight(parentIndex){
        return this.getrightChildIndex(parentIndex) < this.heap.length
    }

    isEmpty(){
        return this.heap.length === 0
    }

    swap(index1 , index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }


    heapifyUp(){
        let index = this.heap.length-1
        while(ind){

        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }



}





















