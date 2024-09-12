const { log } = require("console")

class TrieNode{
    constructor(){
        this.child = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let curr = this.root
        for(let char of word){
            if(!curr.child[char]){
                curr.child[char] = new TrieNode()
            }
            curr = curr.child[char]
        }
        curr.isEnd = true
    }

    search(word){
        let curr = this.root
        for(let char of word){
            if(!curr.child[char]){
                return false
            }
            curr = curr.child[char]
        }
        return curr.isEnd
    }

    prefix(char){
        let curr =this.root
        for(let key of char){
            if(!curr.child[key]){
                return false
            }
            curr = curr.child[key]
        }
        return true
    }

    print(node = this.root , char='' , result = []){
        if(node.child){
            result.push(char)
        }

        for(let key in node.child){
            this.print(node.child[key] , char+key , result)
        }

        return result
    }

}

const trie = new Trie()
trie.insert('Tawfiq')
trie.insert('Siraj')
trie.insert('Kasim')
trie.insert('Riz')
console.log(trie.prefix('i'))
console.log(trie.search('Tawfiq'));
console.log(trie.search('Siraj'));
console.log(trie.search('Kas'));

// console.log(trie.print())