class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /* 첫번째 노드에 데이터 삽입 */
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    /* 마지막 노드에 데이터 삽입 */
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty, make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    /* 원하는 index 위치에 데이터 삽입 */
    insertAt(data, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // If first index
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }


    /* 원하는 index 번째의 data 찾기. */
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return;
    }

    /* index 번째 데이터 삭제. */
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }


    /* 데이터 전체 삭제. */
    cleasList() {
        this.head = null;
        this.size = 0;
    }

    /* 사이즈 확인 */
    sizeList()
    {
        console.log("Size of LinkedList is : " + this.size);
    }


    /* 중복 요소 제거 */
    removeDups() {
        n = this.head;
        while (n != null && n.next != null) {
            r = n;
            while (r.next != null) {
                if (n.data == r.next.data) {
                    r.next = r.next.next;
                } else {
                    r = r.next;
                }
            }
            n = n.next;
        }
    }





    /* 목록 형식으로 데이터 출력. */    

    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const ll = new LinkedList();


ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertAt(500, 2);

// ll.getAt(5);

// ll.removeAt(3);
// ll.cleasList();



    // console.log 와 다르게 마지막에 삽입한 데이터가 먼저 순서대로 목록으로 출력된다.
ll.printListData();

ll.sizeList();

