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
    hasparent(childIndex){
        return this.getParentIndex(childIndex)>=0
    }

}