/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.db = new Map()    
  this.mp = new Map() 
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  if(this.db.has(key)) {
    let pre = this.db.get(key)
    this.db.set(key, val)
    val -= pre
  } else {
    this.db.set(key, val)
  }
  for(let i = 0; i < key.length + 1; i++) {
    let cur = key.slice(0, i)
    if(!this.mp.has(cur)) {
      this.mp.set(cur, val)
    } else {
      let nextVal = this.mp.get(cur) + val
      this.mp.set(cur, nextVal)
    }
  }
}

MapSum.prototype.sum = function(prefix) {
  return this.mp.get(prefix) || 0
};

