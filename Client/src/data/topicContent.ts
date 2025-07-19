export const topicData = {
  unit: "Unit I - Linear Data Structures",
  sections: [
    {
      title: "1.1 Introduction",
      content: `Linear data structures are those in which data elements are arranged sequentially or linearly. Each element is connected to the one before and after it. Common examples include arrays, linked lists, stacks, and queues.`
    },
    {
      title: "1.2 Abstract Data Types",
      content: `An Abstract Data Type (ADT) is a mathematical model for data types where data and operations are defined independently of implementation. ADTs provide a clear interface and hide implementation details. Examples include List, Stack, Queue, and Deque.`
    },
    {
      title: "1.3 Stacks",
      content: "A stack is a linear data structure that follows the Last In First Out (LIFO) principle.",
      subsections: [
        {
          title: "1.3.1 Operations",
          content: `Basic stack operations include:
- Push: Adds an element to the top.
- Pop: Removes the top element.
- Peek/Top: Returns the top element without removing it.
- isEmpty: Checks if the stack is empty.`
        },
        {
          title: "1.3.2 Applications",
          content: `Stacks are used in:
- Expression evaluation
- Backtracking (e.g., maze solving)
- Function call management
- Undo mechanisms in editors`
        }
      ]
    },
    {
      title: "1.4 Expression Evaluation",
      content: "Stacks are crucial in parsing and evaluating mathematical expressions.",
      subsections: [
        {
          title: "1.4.1 Postfix Evaluation",
          content: `Postfix (Reverse Polish Notation) doesn't require parentheses. Algorithm:
1. Read from left to right.
2. Push operands to the stack.
3. On operator, pop two elements, apply the operation, and push result.`
        },
        {
          title: "1.4.2 Infix to Postfix Conversion",
          content: `Infix: A + B
Postfix: AB+
Use stack to hold operators and follow precedence/associativity rules.`
        },
        {
          title: "1.4.3 A Generic Algorithm for Infix to Postfix Conversion",
          content: `1. Initialize an empty stack.
2. For each character in infix:
   - If operand, add to result.
   - If ‘(’, push to stack.
   - If ‘)’, pop till ‘(’.
   - If operator, pop operators of higher or equal precedence before pushing.`
        }
      ]
    },
    {
      title: "1.5 Queues",
      content: "A queue follows the First In First Out (FIFO) principle.",
      subsections: [
        {
          title: "1.5.1 Operations",
          content: `- Enqueue: Add to rear.
- Dequeue: Remove from front.
- Front: Access front.
- isEmpty: Check if empty.`
        },
        {
          title: "1.5.2 Applications",
          content: `- Print Queue
- CPU Scheduling
- BFS in Graphs`
        },
        {
          title: "1.5.3 Double Ended Queue",
          content: `A deque allows insertion and deletion from both ends. Types:
- Input restricted
- Output restricted`
        }
      ]
    },
    {
      title: "1.6 Linked Lists",
      content: "Linked lists are dynamic linear structures where elements (nodes) point to the next.",
      subsections: [
        {
          title: "1.6.1 Linked List vs. Arrays",
          content: `Arrays:
- Fixed size
- Random access

Linked Lists:
- Dynamic size
- Sequential access`
        },
        {
          title: "1.6.2 Singly Linked List",
          content: `Each node has data and pointer to next node. Last node points to NULL.`
        },
        {
          title: "1.6.3 Doubly Linked List",
          content: `Each node has pointers to both previous and next nodes. Allows bidirectional traversal.`
        },
        {
          title: "1.6.4 Circular Linked List",
          content: `Last node links to first node. Can be singly or doubly circular.`
        }
      ]
    },
    {
      title: "1.7 Polynomials",
      content: "Polynomials can be represented using linked lists where each node holds coefficient and exponent.",
      subsections: [
        {
          title: "1.7.1 Polynomial Addition",
          content: `Traverse both lists, add coefficients of like terms (same exponent), store in new list.`
        }
      ]
    },
    {
      title: "1.8 Exercises",
      content: `1. Implement stack using array and linked list.
2. Convert infix to postfix.
3. Evaluate postfix expression.
4. Compare singly vs doubly linked list.`
    },
    {
      title: "1.9 Design Problems",
      content: `1. Design a circular queue for real-time system.
2. Design undo-redo using stack.
3. Polynomial subtraction.`
    }
  ]
};
