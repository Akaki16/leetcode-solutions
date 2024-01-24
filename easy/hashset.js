const MyHashSet = function() {
    this.set = [];
};

MyHashSet.prototype.add = function(key) {
    if (!this.contains(key)) {
        this.set.push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    const idx = this.set.indexOf(key);
    if (idx !== -1) {
        this.set.splice(idx, 1);
    }
};

MyHashSet.prototype.contains = function(key) {
    for (let i = 0; i < this.set.length; i++) {
        if (this.set[i] === key) {
            return true;
        }
    }
    return false;
};

const set = new MyHashSet();

set.add(1);
set.add(2);
set.add(3);
set.add(1);
set.add(2);

console.log( set );