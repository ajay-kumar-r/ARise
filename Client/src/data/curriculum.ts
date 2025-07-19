export const curriculum = [
  {
    id: 'DSA',
    name: 'Data Structures and Algorithms',
    chapters: [
      {
        id: 'unit-1',
        name: 'Unit I - Linear Data Structures',
        topics: [
          {
            id: '1.1',
            name: '1.1 Introduction'
          },
          {
            id: '1.2',
            name: '1.2 Abstract Data Types'
          },
          {
            id: '1.3',
            name: '1.3 Stacks',
            children: [
              { id: '1.3.1', name: '1.3.1 Operations' },
              { id: '1.3.2', name: '1.3.2 Applications' }
            ]
          },
          {
            id: '1.4',
            name: '1.4 Expression Evaluation',
            children: [
              { id: '1.4.1', name: '1.4.1 Postfix Evaluation' },
              { id: '1.4.2', name: '1.4.2 Infix to Postfix Conversion' },
              { id: '1.4.3', name: '1.4.3 A Generic Algorithm for Infix to Postfix Conversion' }
            ]
          },
          {
            id: '1.5',
            name: '1.5 Queues',
            children: [
              { id: '1.5.1', name: '1.5.1 Operations' },
              { id: '1.5.2', name: '1.5.2 Applications' },
              { id: '1.5.3', name: '1.5.3 Double Ended Queue' }
            ]
          },
          {
            id: '1.6',
            name: '1.6 Linked Lists',
            children: [
              { id: '1.6.1', name: '1.6.1 Linked List vs. Arrays' },
              { id: '1.6.2', name: '1.6.2 Singly Linked List' },
              { id: '1.6.3', name: '1.6.3 Doubly Linked List' },
              { id: '1.6.4', name: '1.6.4 Circular Linked List' }
            ]
          },
          {
            id: '1.7',
            name: '1.7 Polynomials',
            children: [
              { id: '1.7.1', name: '1.7.1 Polynomial Addition' }
            ]
          },
          {
            id: '1.8',
            name: '1.8 Exercises'
          },
          {
            id: '1.9',
            name: '1.9 Design Problems'
          }
        ]
      }
    ]
  }
];
