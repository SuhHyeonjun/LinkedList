    /*  빈 노드 생성 */
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }

    /*  head부분에 빈 노드 생성  */
    class LinkedList {
        constructor() {
            this.head = new Node();
            this.size = 0;
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
            if (current.next == null) {
                node.next = null;
                node.prev = current;
                current.next = node;
                current = current.next;
            } else {

            // 마지막 데이터를 링크할 수 있게 노드를 할당한다.
            node.next = current.next;
            node.prev = current;
            current.next.prev = node;
            current.next = node;
        }

        // 데이터를 삽입시 size를 1씩 증가시킨다.
        this.size++;
    }
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
  ll.tailInsert(5);
  ll.tailInsert(5); 
  ll.tailInsert(1); 
  ll.tailInsert(1);
  ll.tailInsert(11);
  ll.randomNumbers()
  ll.print();
  ll.ascendingSort();
  ll.overlapRemove();