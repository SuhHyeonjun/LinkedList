const n1 = {
    data: 100
};

const n2 = {
    data: 200
};

const n3 = {
    data: 300
};

n1.next = n2;
n2.next = n3;

console.log(n1);
 
