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
   * 2.Read the data of node
   * 3.Visit all right subtree
   */ 
  
      Postorder(root){
          if(root){
            this.Inorder(root.left)
            console.log(root.value)
              this.Inorder(root.right)
          }
      }
      
      
  }
  
  const bst = new BinarysearchTree();
  bst.insert(5)
  bst.insert(15)
  bst.insert(25)
  bst.insert(12)
  bst.insert(63)
  // bst.preorder(bst.root)
  bst.Inorder(bst.root)