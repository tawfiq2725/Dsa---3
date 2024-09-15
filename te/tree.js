class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }
        else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root ,node){
        if(node.value < root.value ){
            if(root.left === null){
                root.left = node
            }
            else{
                this.insertNode(root.left , node)
            }
        }
        else{
            if(root.right === null){
                root.right = node
            }
            else{
                this.insertNode(root.right , node)
            }
        }
    }
    search(root, value){
        if(root === null){
            return false
        }
        if(root.value === value){
            return true
        }
        else if(value < root.value){
            return this.search(root.left , value)
        }
        else{
            return this.search(root.right ,  value)
        }
    }

    // Traversal

    // BFS

    preorder(root){
        if(root){
        console.log(root.value)
        this.preorder(root.left)
        this.preorder(root.right)
    }
    }

    Inorder(root){
        if(root){
            this.Inorder(root.left)
            console.log(root.value);
            this.Inorder(root.right)
        }
    }

    Postorder(root){
        if(root){
            this.Postorder(root.left)
            this.Postorder(root.right)
            console.log(root.value)
        }
    }

    // DFS
    dfs(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }


    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        // Basic
        if(!root){
            return root
        }
        
        // Traverse
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right ,value)
        }

        else{
            if(!root.left && !root.right){
                return null1
            }

            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right , root.value)
        }
        return root
    }








    delete(){
        this.root = this.deleteNode(this.root ,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }
        if(value < root.value){
            this.left = this.deleteNode(root.left , value)
        }
        else if(value > root.value){
            this.right = this.deleteNode(root.right , value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right , root.value)
        }

        return root

    }

}

const tree1 = new BinarySearchTree()
const tree2 = new BinarySearchTree()
// console.log(tree.isEmpty())

tree1.insert(10)
tree1.insert(20)
tree1.insert(30)
tree1.insert(2)
tree1.insert(6)
tree1.insert(1)
tree1.insert(5)
tree1.insert(3)
tree2.insert(10)
tree2.insert(20)
tree2.insert(30)
tree2.insert(2)
tree2.insert(7)
// console.log( tree.search(tree.root , 30))
// tree.preorder(tree.root)
// tree.Inorder(tree.root)
// tree.Postorder(tree.root)
// tree.dfs()
// console.log(tree.min(tree.root))
// console.log(tree.max(tree.root));
// console.log(tree.isEmpty())


// tree.Inorder(tree.root)

// console.log('before');

// tree.delete(20)

// console.log('after');

// tree.Inorder(tree.root)

function areIdentical(root1,root2){
    if(!root1 && !root2){
        return true
    }
    if(!root1 || !root2){
        return false
    }
    return (
        root1.value === root2.value &&
        areIdentical(root1.left,root2.left)&&
        areIdentical(root1.right,root2.right)
    )
}
// console.log(areIdentical(tree1.root , tree2.root))


function isPrime(num){
    if(num<2){
        return false
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

function toCheck(root){
    if(!root){
        return
    }

    if(isPrime(root.value)){
       console.log(root.value)
    }

    toCheck(root.left)
    toCheck(root.right)
}
// toCheck(tree1.root)


function isvalidTree(root , min=-Infinity , max=-Infinity){
    if(!root){
        return true
    }
    if(root.value <= min && root.value >=max){
        return false
    }
    return isvalidTree(root.left , min , root.value) && isvalidTree(root.right , root.value , max)
}
// console.log(isvalidTree(tree1.root))


function sumOfall(root){
    if(!root){
        return 0
    }
    return root.value + sumOfall(root.left) + sumOfall(root.right)
}
// console.log(sumOfall(tree1.root))

function sumOfOdd(root){
    if(!root){
        return 0
    }
    let sum = 0
    if( root.value % 2 !== 0 ){
        sum = sum + root.value
    }
    sum = sum + sumOfOdd(root.left)
    sum = sum + sumOfOdd(root.right)

    return sum
}
// console.log(sumOfOdd(tree1.root));


function sumOfEven(root){
    let sum = 0
    if(!root){
        return 0
    }
    if(root.value % 2 === 0){
        sum = sum + root.value
    }
    sum = sum + sumOfEven(root.left)
    sum = sum + sumOfEven(root.right)
    return sum
}
// console.log(sumOfEven(tree1.root));


// Second Largest

function secondLargest(root){
    let parent = null , current = root
    while(current && current.right){
        parent = current
        current = current.right
    }
    if(current && current.left){
        current = current.left
        while(current && current.right){
            current = current.right
        }
        return current.value
        
    }
    return parent?parent.value : null
}
console.log(secondLargest(tree1.root))

