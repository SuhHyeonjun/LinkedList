    /*  빈 노드 생성 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

    /*  head부분에 빈 노드 생성  */
class LinkedList {
    constructor() {
        this.head = new Node();
        this.size = 0;
    }
    
    /*  첫번째 노드에 데이터 삽입  */
    headInsert(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    /*  마지막 노드에 데이터 삽입 */
    tailInsert(data) {
        let node = new Node(data);
        let current;

        // 헤드가 없다면, 헤드를 생성.
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            // 마지막 데이터를 발견할 때까지 계속 루프 순환한다.
            while(current.next) {
                current = current.next;
            }

            // 마지막 데이터를 링크할 수 있게 노드를 할당한다.
            current.next = node;
        }

        // 데이터를 삽입시 size를 1씩 증가시킨다.
        this.size++;
    }
    
    /*  원하는 index 위치에 데이터 삽입 */
    insertAt(data, index) {
        // index 범위 밖일 경우
        if(index > 0 && index > this.size) {
            return;
        }

        // 0 번째 index 일 경우
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        // index가 count보다 클때 까지 반복
        while(count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    /* 끝 부분에 값을 삭제 */
    tailDelete() {
        let currentNode = this.head;
        // 노드가 없다면 "No Node"를 출력
        if (currentNode.next == null) {
            console.log("No Node")
            return;
        }
        // head의 다음이 없을때까지 순환.
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        // 마지막 노드일 시 null
        currentNode.next = null;
        this.size--;

    };

    /* 데이터 전체 삭제 */
    clearList() {
        this.head = null;
        this.size = 0;
    }

    /*
        삭제하고자 하는 데이터 입력받아, 삭제
        중복된 값을 갖고 있다면 처음 값 만 제거
    */
    searchDataToDelete(data) {
        //중복시 처음 것 만 제거
        let currentNode = this.head;
        if (currentNode.next == null) {
            // 값이 없다면 "삭제할 데이터가 없습니다."가 출력
            console.log("삭제할 데이터가 없습니다.")
            return;
        }
        // head의 다음이 없을때까지 순환하면서 head의 다음 값과 입력받은 값이 같으면 다음 값을 삭제.
        while (currentNode.next !== null) {
            if (currentNode.next.data === data) {
                let delNode = currentNode.next;
                if (delNode.next != null) {
                    currentNode.next = delNode.next;
                    return;
                } else {
                    currentNode.next = null;
                    return;
                }
            }
            // 노드 삭제 시 다음 노드를 가르켜야한다.
            currentNode = currentNode.next;
        }
    };

    /* 기존 값을 다른 값으로 바꾸기 */
    searchDataToChange = (data, changedata) => {
        //중복시 처음 것 만 바꾸기
        let currentNode = this.head
        // 원하는 값이 있는 노드가 없다면 "바꿀 데이터가 없습니다." 출력.
        if (currentNode.data == null) {
            console.log("바꿀 데이터가 없습니다.")
            return;
        }
        // 현재 노드 값과 바꿀 값이 일치할 때까지 순환.
        while (currentNode.data !== data) {
            currentNode = currentNode.next
        }
        // 현재 노드 값과 바꿀 값이 일치하면 값을 Change
        currentNode.data = changedata
    }

    /* 오름차순으로 데이터 정렬 */
    ascendingSort() {
        console.log("-----------------------")
        console.log("오름차순 데이터 정렬")
        console.log("-----------------------")
        var countNode = this.head.next;
        var count = 0
        while (countNode !== null) {
            countNode = countNode.next
            count++
        }
        var currentNode = this.head.next;
        while (count) {
            while (currentNode.next !== null) {
                if (currentNode.next.data < currentNode.data) {
                    this.changeToNextNode(currentNode.next, currentNode);
                }
                currentNode = currentNode.next
            }
            currentNode = this.head.next
            count--
        }
        this.print()
    };

    /* 값을 바꿔 주는 함수 ascendingSort 와 연결*/
    changeToNextNode(next, current) {
        var temp = next.data
        next.data = current.data
        current.data = temp
    }

     /* 사이즈 확인 */
     sizeList() {
         console.log("Size of LinkedList is : " + this.size);
     }

     /* 중복 요소 제거 */
     overlapRemove() {
        console.log("-----------------------")
        console.log("중복 요소 제거")
        console.log("-----------------------")
        let cur = this.head;
 
        // 현재 노드와 다음 노드를 비교
        while (cur.next != null) {
            if (cur.data == cur.next.data)
            {
                cur.next = cur.next.next;
                this.size--;

            }
            else {
                cur = cur.next;   
            }
        }
        this.print()
    }

     /* 목록 형식으로 데이터 출력. */
    print() {
        // this.head 뒤에 .next를 붙이지 않을 시 undefined도 같이 출력
        let current = this.head.next;

           while(current) {
            console.log(`${current.data}`);
            current = current.next;
        }
        ll.sizeList();
    };

    /* 정렬되지 않은 1~ 100 정수 내에서 랜덤한 10개의 데이터를 삽입 */
    randomNumbers() {
        console.log("-----------------------")
        console.log("랜덤한 10개 정수 생성")
        console.log("-----------------------")
        for (var i = 0; i < 10; i++) {
            this.tailInsert(Math.floor(Math.random() * 100 + 1));
        }
    }
}


const ll = new LinkedList();
ll.randomNumbers()
ll.print();
ll.ascendingSort();
ll.overlapRemove();
