class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarysearchTree {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    insert(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.root = node;
      } else {
        this.insertNode(this.root, node);
      }
    }
  
    insertNode(root, node) {
      if (node.value < root.value) {
        if (root.left === null) {
          root.left = node;
        } else {
          this.insertNode(root.left, node);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          this.insertNode(root.right, node);
        }
      }
    }
    
  
    search(root, value) {
      if (!root) {
        return false;
      } else {
        if (root.value === value) {
          return true;
        } else if (value < root.value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }
    }
  
    // Tree Traversal
    // 1. DFS
    // 2. BFS
  
    /**
     * Depth first search - Start at root node , and explores all branches as possible
     * visit all nodes in the left subtree
     * visit all nodes in the right subtree
     * Depending on order , can three types
     * 1.PreOrder
     * 2.Inorders
     * 3.PostOrder
     */
    
  /**
   * Pre Order
   *
   * 1.Read the data of node
   * 2.Visit all left subtree
   * 3.Visit all right subtree
   */ 
      preorder(root){
          if(root){
              console.log(root.value)
              this.preorder(root.left)
              this.preorder(root.right)
          }
      }
  
    /**
   * In Order
   *
   * 1.Visit all left subtree
   * 2.Read the data of node
   * 3.Visit all right subtree
   */ 
  
      Inorder(root){
          if(root){
            this.Inorder(root.left)
            console.log(root.value)
              this.Inorder(root.right)
          }
      }
    /**
   * PostOrder
   *
   * 1.Visit all left subtree
   * 2.Visit all right subtree
   * 3.Read the data of node
   */ 
  
      Postorder(root){
          if(root){
            this.Inorder(root.left)
            this.Inorder(root.right)
            console.log(root.value)
          }
      }



    /**
     * Breadth first search
     * 
     * To traverse all the node by depth level
     * 
     * 1.create queue
     * 2.enque the root node
     * 3.continue the stps --->  
     * 
     * 1.Deque the node 
     * 2.Read the value 
     * 3.Enqueue the nodes if childs are exist
     * 
     * */   

    // Implementation of BFS

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


  // Minimum node
  min(root){
    if(!root.left){
      return root.value
    }
    else{
      return this.min(root.left)
    }
  }
// Maximum node
  max(root){
    if(!root.right){
      return root.value
    }
    else{
      return this.max(root.right)
    }
  }

    // Delete
  delete(value){
    this.root = this.deleteNode(this.root , value)
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    // Traverse the tree to find the node to delete
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value); // Assign result back to root.left
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value); // Assign result back to root.right
    } else {
      // Node to be deleted is found

      // 1. Node has no children
      if (!root.left && !root.right) {
        return null;
      }

      // 2. Node has only one child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // 3. Node has two children
      // Find the in-order successor (minimum value in the right subtree)
      root.value = this.min(root.right);

      // Delete the in-order successor
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }      
      
  }
  
  const bst = new BinarysearchTree();
  bst.insert(5)
  bst.insert(15)
  bst.insert(25)
  bst.insert(12)
  bst.insert(63)
  // bst.preorder(bst.root)
//   bst.Inorder(bst.root)
// bst.Postorder(bst.root)