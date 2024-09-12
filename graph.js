// Adjacency Array
const array = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]

// console.log(array[1][2])

// Adjacency List
const obj = {
    'a': ['b'],
    'b' : ['a' , 'c'],
    'c' : ['b']
}


// More effiecient is List , constant time complexity in search

// Undirected

class Graph{
    
    constructor(){
        this.adjacencyList = {}
    }

    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge( v1 , v2 ){
        if(!this.adjacencyList[v1]){
            this.addvertex(v1)
        }
        
        if(!this.adjacencyList[v2]){
            this.addvertex(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }

    hasEdge(vertex1 , vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log( vertex + '--->' + [...this.adjacencyList[vertex]])
        }
    }

}

const g = new Graph()
g.addvertex('a')
g.addvertex('b')
g.addvertex('c')
g.addEdge('a','b')
g.addEdge('b','c')
g.display()
console.log(g.hasEdge('b','c'));
