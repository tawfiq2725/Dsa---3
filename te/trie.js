// class Trienode{
//     constructor(){
//         this.child = {}
//         this.isEnd = false
//     }
// }


// class Trie{
//     constructor(){
//         this.root = new Trienode()
//     }

//     insert(word){
//         let curr = this.root
//         for(let key of word){
//             if(!curr.child[key]){
//                 curr.child[key] = new Trienode()
//             }
//             curr = curr.child[key]
//         }
//         curr.isEnd = true
//     }

//     search(word){
//         let curr = this.root
//         for(let key of word){
//             if(!curr.child[key]){
//                 return false
//             }
//             curr = curr.child[key]
//         }
//         return curr.isEnd
//     }

//     prefix(char){
//         let curr = this.root
//         for(let key of char){
//             if(!curr.child[key]){
//                 return false
//             }
//             curr = curr.child[key]
//         }
//         return true
//     }

//     print(node=this.root,char='',result = []){
//        if(node.child){
//         result.push(char)
//        } 
//        for(let key in node.child){
//         this.print(node.child[key] , char+key , result)
//        }
//         return result
//     }


// }


// const trie = new Trie()
// trie.insert('tawfiq')
// trie.insert('kasin')
// console.log(trie.print())










class Trienode{
    constructor(){
        this.child = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Trienode()
    }

    insert(word){
        let curr = this.root
        for(let key of word){
            if(!curr.child[key]){
                curr.child[key] = new Trienode()
            }
            curr = curr.child[key]
        }
        curr.isEnd = true
    }

    search(word){
        let curr = this.root
        for(let key of word){
            if(!curr.child[key]){
                return false
            }
            curr = curr.child[key]
        }
        return curr.isEnd
    }

    prefix(char){
        let curr = this.root
        for(let key of char){
            if(!curr.child[key]){
                return false
            }
            curr = curr.child[key]
        }
        return true
    }

    sufix(word){
        for(let i=0; i<word.length; i++){
            word.substring(i)
        }
    }

    print(node = this.root , char = '' , result = []){
        if(node.child){
            result.push(char)
        }       

        for(let key in node.child){
            this.print(node.child[key] , char+key , result)
        }

        return result
    }
}