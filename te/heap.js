class Heap{
    constructor(){
        this.heap = []
    }
    
    isEmpty(){
        return this.heap.length === 0
    }
    
    // Ḥelper function
    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }
    getParent(childIndex){
        return this.heap[this.getParentIndex(childIndex)]
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0 
    }


    getLeftChildindex(parentIndex){
        return (2*parentIndex)+1
    }

    getLeftChild(parentIndex){
        return this.heap[this.getLeftChildindex(parentIndex)]
    }
    hasLeft(parentIndex){
        return this.getLeftChildindex(parentIndex) < this.heap.length 
    }

    getRightChildindex(parentIndex){
        return (2*parentIndex)+2
    
    }
    getRightChild(parentIndex){
        return this.heap[this.getRightChildindex(parentIndex)]
    }
    hasRight(parentIndex){
        return this.getRightChild(parentIndex) < this.heap.length 
    }


    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        else{
            return this.heap[0]
        }
    }

    heapifyUp(){
        let index = this.heap.length-1
        while(this.hasParent(index) && this.getParent(index) > this.heap[index] ){
            this.swap(this.getParentIndex(index) , index)
            index = this.getParentIndex(index)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    remove(){
        if(this.isEmpty()){
            return null
        }
        let temp = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return temp
    }

    heapifyDown(){
        let index = 0
        while(this.hasLeft(index)){
            let childIndex = this.getLeftChildindex(index)
            if(this.hasRight(index) && this.getRightChild(index) < this.getLeftChild(index)){
                childIndex = this.getRightChildindex(index)
            }
            
            if(this.heap[index] < this.heap[childIndex]){
                break
            }
            else {
                this.swap(index , childIndex)
            }
            index = childIndex
        }
    }
    










    heapifyUp(){
        let index = this.heap.length-1
        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            this.swap(this.getParentIndex(index) , index)
            index = this.getParentIndex(index)
        }
    }

    heapifyDown(){
        let index = 0
        while(this.hasLeft(index)){
            let smallChildIndex = this.getLeftChildindex(index)
            if(this.hasRight(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallChildIndex = this.getRightChildindex(index)
            }
            if(this.heap[index] < this.heap[smallChildIndex]){
                break
            }
            else{
                this.swap(index , smallChildIndex)
            }
            index = smallChildIndex
        }
    }











heapifyUp(){
    let index = this.heap.length-1
    while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
        this.swap(this.getParentIndex(index) , index)
        index = this.getParentIndex(index)
    }
}
heapifyDown(){
    let index = 0
    while(this.hasLeft(index)){
        let small = this.getLeftChildindex(index)
        if(this.hasRight(index) && this.getRightChild(index) < this.getLeftChild( index)){
            small = this.getRightChildindex(index)
        }
        if(this.heap[index] < this.heap[small])
        {
            break
        }
        else{
            this.swap(small,index)
        }
        index = small
    }
}



























}















