export const topicData = [
{
  "unit": "Unit I - Linear Data Structures",
  "sections": [
    {
      "title": "1.1 Introduction",
      "content": "Linear data structures are those in which data elements are arranged sequentially or linearly. Each element is connected to the one before and after it. Common examples include arrays, linked lists, stacks, and queues."
    },
    {
      "title": "1.2 Abstract Data Types",
      "content": "An Abstract Data Type (ADT) is a mathematical model for data types where data and operations are defined independently of implementation. ADTs provide a clear interface and hide implementation details. Examples include List, Stack, Queue, and Deque."
    },
    {
      "title": "1.3 Stacks",
      "content": "A stack is a linear data structure that follows the Last In First Out (LIFO) principle.",
      "subsections": [
        {
          "title": "1.3.1 Operations",
          "content": "Basic stack operations include:\n- Push: Adds an element to the top.\n- Pop: Removes the top element.\n- Peek/Top: Returns the top element without removing it.\n- isEmpty: Checks if the stack is empty."
        },
        {
          "title": "1.3.2 Applications",
          "content": "Stacks are used in:\n- Expression evaluation\n- Backtracking (e.g., maze solving)\n- Function call management\n- Undo mechanisms in editors"
        }
      ]
    },
    {
      "title": "1.4 Expression Evaluation",
      "content": "Stacks are crucial in parsing and evaluating mathematical expressions.",
      "subsections": [
        {
          "title": "1.4.1 Postfix Evaluation",
          "content": "Postfix (Reverse Polish Notation) doesn't require parentheses. Algorithm:\n1. Read from left to right.\n2. Push operands to the stack.\n3. On operator, pop two elements, apply the operation, and push result."
        },
        {
          "title": "1.4.2 Infix to Postfix Conversion",
          "content": "Infix: A + B\nPostfix: AB+\nUse stack to hold operators and follow precedence/associativity rules."
        },
        {
          "title": "1.4.3 A Generic Algorithm for Infix to Postfix Conversion",
          "content": "1. Initialize an empty stack.\n2. For each character in infix:\n   - If operand, add to result.\n   - If ‘(’, push to stack.\n   - If ‘)’, pop till ‘(’.\n   - If operator, pop operators of higher or equal precedence before pushing."
        }
      ]
    },
    {
      "title": "1.5 Queues",
      "content": "A queue follows the First In First Out (FIFO) principle.",
      "subsections": [
        {
          "title": "1.5.1 Operations",
          "content": "- Enqueue: Add to rear.\n- Dequeue: Remove from front.\n- Front: Access front.\n- isEmpty: Check if empty."
        },
        {
          "title": "1.5.2 Applications",
          "content": "- Print Queue\n- CPU Scheduling\n- BFS in Graphs"
        },
        {
          "title": "1.5.3 Double Ended Queue",
          "content": "A deque allows insertion and deletion from both ends. Types:\n- Input restricted\n- Output restricted"
        }
      ]
    },
    {
      "title": "1.6 Linked Lists",
      "content": "Linked lists are dynamic linear structures where elements (nodes) point to the next.",
      "subsections": [
        {
          "title": "1.6.1 Linked List vs. Arrays",
          "content": "Arrays:\n- Fixed size\n- Random access\n\nLinked Lists:\n- Dynamic size\n- Sequential access"
        },
        {
          "title": "1.6.2 Singly Linked List",
          "content": "Each node has data and pointer to next node. Last node points to NULL."
        },
        {
          "title": "1.6.3 Doubly Linked List",
          "content": "Each node has pointers to both previous and next nodes. Allows bidirectional traversal."
        },
        {
          "title": "1.6.4 Circular Linked List",
          "content": "Last node links to first node. Can be singly or doubly circular."
        }
      ]
    },
    {
      "title": "1.7 Polynomials",
      "content": "Polynomials can be represented using linked lists where each node holds coefficient and exponent.",
      "subsections": [
        {
          "title": "1.7.1 Polynomial Addition",
          "content": "Traverse both lists, add coefficients of like terms (same exponent), store in new list."
        }
      ]
    },
    {
      "title": "1.8 Exercises",
      "content": "1. Implement stack using array and linked list.\n2. Convert infix to postfix.\n3. Evaluate postfix expression.\n4. Compare singly vs doubly linked list."
    },
    {
      "title": "1.9 Design Problems",
      "content": "1. Design a circular queue for real-time system.\n2. Design undo-redo using stack.\n3. Polynomial subtraction."
    }
  ]
},

{
  "unit": "Unit II - Non-Linear Data Structures",
  "sections": [
    {
      "title": "2.1 Introduction",
      "content": "A non-linear data structure is a way of organizing data where elements are not arranged sequentially..."
    },
    {
      "title": "2.2 Trees",
      "content": "A tree is a finite set of nodes with a special root node and disjoint subtrees.",
      "subsections": [
        {
          "title": "2.2.1 Terminologies",
          "content": "Node, Root, Degree of a node, Degree of a tree, Parent & Child, Levels in tree, Subtree, Siblings, Relationships"
        },
        {
          "title": "2.2.2 Diagram",
          "content": "Tree with Degree 3"
        }
      ]
    },
    {
      "title": "2.3 Binary Tree",
      "content": "A binary tree is a tree where each node has at most two children.",
      "subsections": [
        {
          "title": "2.3.1 Properties",
          "content": "Max nodes at level l = 2^(l-1)\nMax nodes in height h = 2^h -1\nFull binary tree has 2^h -1 nodes"
        },
        {
          "title": "2.3.2 Types",
          "content": "Skewed Tree: Nodes form a chain.\nComplete Tree: All levels filled except possibly last."
        },
        {
          "title": "2.3.3 Representation",
          "content": "Using arrays or linked nodes."
        },
        {
          "title": "2.3.4 Creation Procedures",
          "content": "makeNode(data)\ncreateBinTree()"
        },
        {
          "title": "2.3.5 Traversal",
          "content": "Methods: Inorder, Preorder, Postorder\nProcedure: procedure inOrder(t)"
        }
      ]
    },
    {
      "title": "2.4 Applications of Trees",
      "content":"2.4.1 Expression Trees\nUsage: Mathematical expressions.\nProcedure: procedure postorderEval(t)\n\n2.4.2 Set Representation\nUsage: Representing disjoint sets.\nOperation: Union operation.\n\n2.4.3 Decision Trees\nProblem: Eight Coins Problem\nProcedure: procedure eightCoins() and compareCoins(x, y, z)"
    },
    {
      "title": "2.5 Balanced Trees",
      "content": "Height-balanced binary search tree.",
      "subsections": [
        {
          "title": "2.5.1 AVL Tree",
          "content": "Balance Factor: BF(N) = hL - hR\nRotations: rotateLL(C), rotateRR(A)\nInsertion: AVL insertion uses rotations."
        }
      ]
    },
    {
      "title": "2.6 B-Tree",
      "content": "Balanced m-way search tree.",
      "subsections": [
        {
          "title": "2.6.1 Properties",
          "content": "Node stores n keys\nChildren = n+1\nRoot has at least 2 children"
        }
      ]
    },
    {
      "title": "2.7 Binary Search Tree",
      "content": "BST property: Left < Root < Right",
      "subsections": [
        {
          "title": "2.7.1 Insertion",
          "content": "procedure insertValue(t, data)"
        },
        {
          "title": "2.7.2 Deletion",
          "content": "procedure deleteValue(t, data)"
        }
      ]
    },
    {
      "title": "2.8 Splay Trees",
      "content": "Self-adjusting binary search trees.",
      "subsections": [
        {
          "title": "2.8.1 Operations",
          "content": "Zig-Zig, Zig-Zag"
        },
        {
          "title": "2.8.2 Amortized Time",
          "content": "O(log n)"
        }
      ]
    },
    {
      "title": "2.9 Huffman Algorithm",
      "content": "Create optimal prefix codes.",
      "subsections": [
        {
          "title": "2.9.1 Concepts",
          "content": "Extended Binary Tree\nInternal/External Path Length\nWeighted External Path Length (WEPL)"
        },
        {
          "title": "2.9.2 Procedure",
          "content": "procedure huffmanTree(l, n)"
        }
      ]
    },
    {
      "title": "2.10 Exercises",
      "content": "1. Define height of a binary tree.\n2. Procedure to find an element in BST.\n3. List elements in decreasing order.\n4. Find the height of a binary tree.\n5. Count nodes in a binary tree.\n6. Count terminal nodes.\n7. Minimum value in BST.\n8. Sum of all elements in binary tree.\n9. Verify if binary tree is BST.\n10. Construct expression tree for a+b+(c+d)*e*f*g*h.\n11. Construct expression tree from postfix.\n12. Evaluate expression tree.\n13. Max nodes in binary tree of height h.\n14. Max nodes at level i.\n15. Complete binary tree definition.\n16. Check if two binary trees are equal.\n17.Merge two BSTs.\n18. Drawback of set union algorithm."
    }
  ]
},

{
  "unit": "Unit III - Graphs",
  "sections": [
    {
      "title": "3.1 Introduction",
      "content": "Graph Theory Basics\nA graph G = (V, E) consists of:\nV (Vertices): A finite, non-empty set of points.\nE (Edges): A set of connections (pairs of vertices).\n\nTypes of Graphs\nUndirected Graph: Edges have no direction (e.g., G1 and G2 in Figure 3.1).\nDirected Graph: Edges have direction (e.g., G3 in Figure 3.1, where <v1, v2> is different from <v2, v1>).\n\nExamples of Graphs (Related to Figure 3.1)\nG1 (Complete Graph): Every vertex connects to every other vertex.\nG2 (Tree Structure): A hierarchical structure where each node connects to its children.\nG3 (Directed Graph): Features a bidirectional edge between 1 and 2 and a cycle between 2 and 3.\n\nGraph Representation\nAdjacency Matrix: A 2D array showing edge presence between vertices.\nAdjacency List: A list where each vertex stores its connected vertices.\nAdjacency Multilist: A list optimized for faster traversal.\n\nGraph Traversal\nDepth First Search (DFS): Explores deep paths before backtracking.\nBreadth First Search (BFS): Explores all neighbors first.\nTopological Search: Arranges vertices linearly (for directed acyclic graphs).\n\nShortest Path Algorithms\nBellman-Ford Algorithm: Works with graphs that have negative weights.\nFloyd’s Algorithm: Finds shortest paths between all pairs of vertices.\n\nMinimum Cost Spanning Trees\nKruskal’s Algorithm: Adds the smallest available edge while avoiding cycles.\nPrim’s Algorithm: Builds the spanning tree starting from a single vertex.\n\nGraph Properties\nComplete Graph: Contains maximum possible edges. Example: G1 in Figure 3.1.\nMultigraph: Allows multiple edges between the same vertices.\nConnected Graph: Every vertex has a path to every other vertex.\nTree: A connected graph without cycles (Example: G2 in Figure 3.1).\nStrongly Connected Graph: In a directed graph, every vertex must have a path to every other vertex (Example: part of G3 in Figure 3.1).\n\nSubgraphs (Related to Figure 3.2)\nLeft Subgraph: A linear path of connected nodes.\nMiddle Subgraph: Forms a cycle (like in G1).\nRight Subgraph: A star-shaped graph with a central node.\n\nConnected Components (Related to Figure 3.3)\nLeft Component (H1): A connected square-shaped structure.\nRight Component (H2): A smaller connected structure.\n\nPaths and Cycles\nPath: A sequence of vertices connected by edges (Example: 1 → 2 → 4 → 3 in G1).\nSimple Path: No repeated vertices except possibly the start and end.\nCycle: A path where the first and last vertices are the same (Example: 1 → 2 → 3 → 1 in G1).\n\nDegree of a Vertex\nUndirected Graph: Number of edges connected to a vertex (Example: Vertex 1 in G1 has degree 3).\nDirected Graph:\nIn-degree: Number of edges pointing to a vertex.\nOut-degree: Number of edges leaving a vertex.\nExample (G3 in Figure 3.1): Vertex 2 has in-degree 1, out-degree 2, total degree 3.\n\nTotal Edges in a Graph\ne= 1/2 N to i=1 ∑di\n\nFigures Summary (Relation to Content)\nFigure 3.1 (Sample Graphs):\nG1 is a complete graph, which matches the definition of a graph where every vertex is connected to every other.\nG2 is a tree, which corresponds to the concept of a connected acyclic graph.\nG3 is a directed graph, illustrating strong connectivity and bidirectional edges.\nFigure 3.2 (Subgraphs of G1):\nShows different substructures formed by removing edges from G1.\nExamples include paths, cycles, and star-shaped graphs.\nFigure 3.3 (Connected Components):\nDemonstrates how a graph can be broken into smaller connected parts.\nMatches the definition of connected components in an undirected graph."
    },
    {
      "title": "3.2 Graph Representation",
      "content": "",
      "subsections": [
        {
          "title": "3.2.1 Adjacency Matrix",
          "content": "An adjacency matrix represents a graph G=(V,E) with n vertices as a 2D square matrix of order n. The matrix entry A(i,j) is:\n1 if there is an edge between v i and v j\n0 if there is no edge.\nImage 1 (Adjacency Matrix Representation)\nGraph (Left Side): A 6-vertex undirected graph, showing connections such as (1-2), (1-3), (1-4), (3-5), (4-5), and (2-6).\nAdjacency Matrix (Right Side):\nA 6×6 matrix, where each entry reflects the presence (1) or absence (0) of edges.\nSince the graph is undirected, the matrix is symmetric (i.e., A(i,j)=A(j,i)).\nThe degree of any vertex in an undirected graph is the sum of entries in its row.\nFor a directed graph, the adjacency matrix need not be symmetric. The row sum gives the out-degree, and the column sum gives the in-degree."
        },
        {
          "title": "3.2.2 Adjacency List",
          "content": "An adjacency list is an array of linked lists, where each vertex vi vj has a list of vertices adjacent to it.\n\nImage 2 (Adjacency List Representation)\n\nGraph (Left Side): Displays the same 6-vertex undirected graph as in Image 1.\nAdjacency List (Right Side):\nEach vertex maintains a linked list of its adjacent vertices.\nExample:\n𝑣1 v 1 → {2, 3, 4}\n𝑣2v 2 → {1}\n𝑣3v 3 → {1, 5}\n𝑣4v 4→ {1, 5}\n𝑣5v 5​ → {3, 4, 6}\n𝑣6v 6 → {5}\n\nThe degree of a vertex is simply the number of nodes in its adjacency list.\nMore space-efficient than adjacency matrices for sparse graphs."
        },
        {
          "title": "3.2.3 Adjacency Multilist",
          "content": "An adjacency multilist optimizes adjacency lists by storing only one node per edge, linking both vertices instead of duplicating entries.\n\nImage 4 (Multilist Representation)\nGraph (Left Side):\nThe same 6-vertex undirected graph as before.\nMultilist Representation (Right Side):\nEach edge is stored as a single node shared between its two connected vertices.\nThe structure of each node includes:\nM: A marker for edge traversal.\nWeight: Used in weighted graphs.\nv1, v2: The two vertices connected by the edge.\nLinks: Pointers to other nodes in the list.\nExample:\n𝑁1N 1​ connects vertex 1 to vertex 2 and vertex 3.\n𝑁2N 2​ connects vertex 2 to vertex 6.\n𝑁3N 3​ connects vertex 3 to vertex 5.\n𝑁4N 4​ connects vertex 4 to vertex 5.\n𝑁5N 5​ connects vertex 5 to vertex 6.\nThis structure allows efficient marking of edges during traversal."
        }
      ]
    },
    {
      "title": "3.3 Traversals",
      "content": "For any graph G = (V, E) and a vertex v in V(G), all the reachable vertices from v in\nthe graph may be visited using\ni. Depth First Search and\nii. Breadth First Search"
    },
    {
      "title": "3.4 Depth First Search (DFS)",
      "content": "The given image (Figure 3.8) represents Depth First Traversal (DFT) in a graph. It consists of two parts:\n\nPart (a): Displays an undirected graph with vertices 𝑣1,𝑣2,...,𝑣8 and edges connecting them.\n\nPart (b): Illustrates the DFS traversal path, marking the order in which vertices are visited.\nUnderstanding DFS Traversal in the Given Graph\nStarting Vertex: DFS is initiated from 𝑣1v 1\n​Traversal Order: The algorithm follows one path as deep as possible before backtracking.\nThe order in which vertices are visited:\n𝑣1→𝑣2→𝑣4→𝑣8→𝑣5→𝑣6→𝑣3→𝑣7 \n\nIf a vertex has multiple adjacent vertices, DFS selects one unvisited neighbor and continues the process.\nBacktracking:\nWhen a vertex has no unvisited adjacent nodes, DFS backtracks to the previous vertex with unvisited neighbors.\nResult: Since all vertices in the given graph are connected, DFS covers all nodes in a single traversal.\nDFS Algorithm (Recursive)\n\ndef DFS(graph, v, visited):\n    visited.add(v)\n    print(v, end=\" \")  # Process the node\n    \n    for neighbor in graph[v]:  # Explore all adjacent vertices\n        if neighbor not in visited:\n            DFS(graph, neighbor, visited)\n\n# Example graph as adjacency list representation\ngraph = {\n    1: [2, 3],\n    2: [1, 4, 5],\n    3: [1, 6, 7],\n    4: [2, 8],\n    5: [2],\n    6: [3],\n    7: [3],\n    8: [4]\n}\n\n\nComplexity Analysis\nAdjacency List Representation: O(e) (where e is the number of edges).\nAdjacency Matrix Representation: O(n 2) (where n is the number of vertices)."
    },
    {
      "title": "3.5 Breadth First Search (BFS)",
      "content": "Breadth-First Search (BFS) explores all neighbors of a vertex before moving to the next level.\n\nUnderstanding BFS Traversal in the Given Graph (Figure 3.8.a)\nStarting Vertex: BFS begins from v1\nTraversal Order: BFS visits all adjacent vertices first, then moves to the next level.\nThe vertices are visited in the order:\nv 1 →v 2,v 3→v 4,v 5,v 6​ ,v 7 →v 8\n​\n Queue-Based Approach: BFS uses a queue (FIFO) to track which vertices to visit next.\nTermination: The search stops when all vertices are visited.\n\ncode:\nfrom collections import deque\n\ndef BFS(graph, start):\n    visited = set()  # To track visited nodes\n    queue = deque([start])  # Initialize queue with starting vertex\n\n    visited.add(start)\n    \n    while queue:\n        v = queue.popleft()  # Remove from front of the queue\n        print(v, end=\" \")  # Process the node\n        \n        for neighbor in graph[v]:  # Explore neighbors\n            if neighbor not in visited:\n                queue.append(neighbor)\n                visited.add(neighbor)\n\n# Example graph (Adjacency List)\ngraph = {\n    1: [2, 3],\n    2: [1, 4, 5],\n    3: [1, 6, 7],\n    4: [2, 8],\n    5: [2],\n    6: [3],\n    7: [3],\n    8: [4]\n}\n\n# Start BFS from vertex 1\nprint(\"Breadth First Traversal:\")\nBFS(graph, 1)"
    },
    {
      "title": "3.6 Topological Search",
      "content": "Simplified Explanation of AOV Network and Topological Sort  \n\n- AOV Network: A directed graph where:  \n  - Vertices represent tasks.  \n  - Edges show dependency (precedence) between tasks.  \n  - If there is a path from vertex i to vertex j, then i is a predecessor of j.  \n  - If an edge directly connects i to j, then i is an immediate predecessor of j.  \n\n- Topological Order:  \n  - A linear ordering of tasks where each task appears before the tasks that depend on it.  \n  - Possible only if the graph is Directed and Acyclic (DAG).  \n\nProcedure for Topological Sort  \n\nPseudocode:  \nprocedure topologicalOrder(G, n)  \nbegin  \n    for i = 1 to n do  \n    begin  \n        if every vertex has a predecessor then  \n        begin  \n            the network has a cycle;  \n            Topological Sort infeasible;  \n            return;  \n        end  \n        pick a vertex v which has no predecessors;  \n        output v;  \n        delete v and all outgoing edges from the network;  \n    end  \nend  \n\nSteps to Perform Topological Sort  \n\n1. Find a vertex with no predecessors.  \n2. Output this vertex.  \n3. Remove it from the graph along with all outgoing edges.  \n4. Repeat until:  \n   - All vertices are processed (valid topological order found).  \n   - All remaining vertices have predecessors (cycle detected, sort infeasible).  \n\nExample (from Image Summary)  \n\n- Initial Graph: Shows tasks and their dependencies.  \n- Step-wise Removal:  \n    1. Remove v1 → Graph updates.  \n    2. Remove v4 → Graph updates.  \n    3. Remove v3 → Graph updates.  \n    4. Remove v6 → Graph updates.  \n    5. Remove v2 → Graph updates.  \n    6. Remove v5 → All vertices processed.  \n- Final Topological Order: v1, v4, v3, v6, v2, v5 (One possible order).  \n\nThis method ensures that tasks are scheduled in a valid order following dependencies."
    },
    {
      "title": "3.7 Shortest Path Algorithm (Dijkstra’s Algorithm)",
      "content": "- Problem Definition:  \n  - Given a directed graph G = (V, E) with a weight function w(e) on edges.  \n  - Find the shortest paths from a source vertex v0 to all other vertices.  \n  - Assumes all weights are positive.  \n\n- Key Observations:  \n  1. If the next shortest path is to vertex u, it starts at v0 and only goes through vertices in S (set of solved vertices).  \n  2. The next vertex u is the one with the minimum distance d(u) among all unsolved vertices.  \n  3. After adding u to S, distances d(w) to remaining vertices may decrease if a shorter path exists through u.  \n\n- Algorithm Steps:  \n  1. Initialize:  \n     - Set S(i) = 0 for all vertices (indicating they are unsolved).  \n     - Set d(i) to the direct edge cost from v0 (∞ if no direct edge exists).  \n     - Set d(v0) = 0 and mark v0 as solved (S(v0) = 1).  \n  2. While there are unsolved vertices:  \n     - Select the vertex u with the smallest d(u).  \n     - Mark u as solved (S(u) = 1).  \n     - Update distances d(w) = min { d(w), d(u) + C(u, w) } for all unsolved vertices w.  \n  3. Repeat until all vertices are processed.  \n\nPseudocode:  \nprocedure shortestPath(C, d, v, n)  \nbegin  \n    for i = 1 to n do  \n    begin  \n        S(i) = 0;  \n        d(i) = C(v, i);  \n    end  \n    S(v) = 1;  \n    d(v) = 0;  \n    vCount = 2;  \n    while (vCount < n) do  \n    begin  \n        choose u such that d(u) is minimum among unsolved vertices;  \n        S(u) = 1;  \n        vCount = vCount + 1;  \n        for all w where S(w) = 0 do  \n        begin  \n            d(w) = min { d(w), d(u) + C(u, w) };  \n        end  \n    end  \nend  \n\n- Time Complexity: O(n^2)  \n  - Loop runs n times.  \n  - Selecting the next vertex and updating distances takes O(n) each, leading to O(n^2) total complexity.  \n\nExample (from Image Summary)  \n\n- Graph (8 vertices, 11 edges):  \n  - Shows paths and edge weights.  \n- Cost Matrix:  \n  - Represents direct connection costs between vertices.  \n  - Non-connected edges are marked as ∞.  \n- Step-wise Computation:  \n  - Iteratively selects vertices and updates distances.  \n  - Final shortest distances from vertex 5:  \n    - To vertices 1, 2, 3, 4, 6, 7, and 8: 33, 32, 24, 12, 0, 2, 11, 16.  \n\nDijkstra’s algorithm ensures that all shortest paths from the source vertex are determined efficiently."
    },
    {
      "title": "3.8 Bellman-Ford Algorithm",
      "content": "- Purpose:  \n  - Unlike Dijkstra’s algorithm, Bellman-Ford can handle graphs with negative weight edges.  \n  - However, it does not work for graphs containing negative weight cycles.  \n  - It is more complex than Dijkstra’s algorithm but useful in cases where negative weights are present.  \n\n- Algorithm Steps:  \n  1. Initialize:  \n     - Set all distances d(v) to ∞ except the source vertex s, which is set to 0.  \n  2. Relaxation Process:  \n     - Iterate n–1 times (where n is the number of vertices).  \n     - For each edge (u, v), update d(v) = min{d(v), d(u) + w(u, v)}.  \n  3. Negative Cycle Check:  \n     - Iterate over all edges again.  \n     - If any d(v) still decreases, return \"Not Feasible\" (indicating a negative cycle).  \n\nPseudocode:  \nprocedure BellmanFord(G, s, n)  \nbegin  \n    for v = 1 to n do  \n        d(v) = ∞;  \n    d(s) = 0;  \n    for i = 1 to n–1 do  \n    begin  \n        for each edge (u, v) in E do  \n            d(v) = min{d(v), d(u) + w(u, v)}  \n    end  \n    for each edge (u, v) in E do  \n        if d(v) > d(u) + w(u, v) then return \"Not Feasible\";  \nend  \n\n- Time Complexity: O(n × m)  \n  - Runs in O(n) for n–1 iterations over m edges.  \n  - More expensive than Dijkstra’s O(n²) but necessary for graphs with negative edges.  \n\nExample (from Image Summary)  \n\n- Graph (5 vertices, 8 edges, including negative weights):  \n  - Demonstrates handling of negative weights.  \n  - Example: Edge from vertex 2 to 4 has weight -3.  \n- Table Representation:  \n  - Shows shortest distances and paths from source vertex 1.  \n  - Example Paths:  \n    - Vertex 1: Distance 0 (source).  \n    - Vertex 2: Distance -1, Path: 1 → 2.  \n    - Vertex 3: Distance 2, Path: 1 → 2 → 3.  \n    - Vertex 4: Distance -2, Path: 1 → 2 → 5 → 4.  \n    - Vertex 5: Distance 1, Path: 1 → 2 → 5.  \n\nBellman-Ford is useful for graphs with negative weights, though Dijkstra's algorithm is preferred for efficiency when all weights are positive."
    },
    {
      "title": "3.9 Floyd’s Algorithm",
      "content": "- This algorithm finds the shortest paths between all pairs of vertices (vi, vj) where i ≠ j.\n- It works even with negative weight edges but does not support negative weight cycles.\n- The time complexity is O(n^3).\n\n### Graph Representation\n- The graph is represented as a cost adjacency matrix:\n  - C(i, i) = 0 (cost to itself is zero).\n  - C(i, j) = ∞ if there is no edge between i and j.\n- Ak(i, j) represents the shortest path cost from i to j using vertices up to index k.\n- The final shortest path cost is An(i, j), where n is the highest vertex index.\n- A0(i, j) = C(i, j) since it is the direct edge cost.\n\n### Shortest Path Calculation\n- The algorithm updates matrices A0, A1, A2, ..., An step by step.\n- For each pair of vertices (i, j):\n  - If no intermediate vertex with index > (k-1), cost remains Ak-1(i, j).\n  - If path goes through vertex k, the cost is updated as:\n    Ak(i, j) = min {Ak-1(i, j), Ak-1(i, k) + Ak-1(k, j)}\n\n### Pseudocode\n```\nprocedure allPairsShortestPath(C, A, n)\nbegin\n  for i = 1 to n do\n    for j = 1 to n do\n      A(i, j) = C(i, j)\n\n  for k = 1 to n do\n    for i = 1 to n do\n      for j = 1 to n do\n        A(i, j) = min {A(i, j), A(i, k) + A(k, j)}\nend\n```\n\n- The total time complexity is O(n^3).\n- This algorithm ensures the shortest path calculation for all pairs of vertices."
    },
    {
      "title": "3.10 Minimum Cost Spanning Trees",
      "content": "- A spanning tree is a tree that includes all vertices of a graph G and only edges from G.\n- Depth First Spanning Tree (DFST): A spanning tree formed using Depth First Search (DFS).\n- Breadth First Spanning Tree (BFST): A spanning tree formed using Breadth First Search (BFS).\n\nFloyd-Warshall Algorithm for All-Pairs Shortest Path\n\n- Finds the shortest paths between all pairs of vertices, even with negative edge weights (but no negative cycles).\n- Time complexity: O(n^3).\n\nGraph Representation\n- Vertices: v1, v2, v3.\n- Edges and Weights:\n  - v1 → v2 (6), v2 → v1 (4).\n  - v1 → v3 (11).\n  - v3 → v2 (2), v3 → v1 (3).\n\nCost Matrix\n- Represents direct connection costs between vertices.\n- Diagonal values = 0 (distance to itself).\n- ∞ (infinity) for no direct connection.\n\nAlgorithm Steps (Matrix Iterations)\n1. A^0 - Initial cost matrix.\n2. A^1 - Updates shortest paths considering vertex 1.\n3. A^2 - Updates shortest paths including vertex 2.\n4. A^3 - Final matrix with all shortest paths.\n\nThis method iteratively refines the shortest paths until convergence."
    },
    {
      "title": "3.11 Kruskal’s Algorithm",
      "content": "- Finds the minimum cost spanning tree (MST) of a weighted graph.\n- Selects edges in non-decreasing order of weight.\n- An edge is included if it does not form a cycle.\n- A connected graph with n vertices will have exactly n-1 edges in its MST.\n\nProcedure for Kruskal’s Algorithm\nprocedure Kruskal(G, T)\nbegin\n    T = ∅;\n    while T has less than n–1 edges and E is not empty do\n    begin\n        choose a least cost edge (v, w) from E;\n        delete (v, w) from E;\n        if (v, w) does not create a cycle in T then add (v, w) to T;\n    end\n    if T contains fewer than n–1 edges then print ('no spanning tree')\nend\n\nSpanning Trees in Graphs\n\n- A spanning tree connects all vertices of a graph without forming cycles.\n- Depth-First Search (DFS) Spanning Tree:\n  - Formed by performing DFS from a given vertex.\n- Breadth-First Search (BFS) Spanning Tree:\n  - Formed by performing BFS from a given vertex.\n\nFigure 3.13: Spanning Trees\n1. (a) Undirected Graph G:\n   - A graph with vertices v1 to v7 and edges between them.\n2. (b) DFS Spanning Tree from v1:\n   - Shows how DFS explores and connects vertices.\n3. (c) BFS Spanning Tree from v1:\n   - Shows a different structure formed by BFS traversal.\n\nFigure 3.14: Minimum Cost Spanning Tree Using Kruskal's Algorithm\n1. (a) Original Graph:\n   - A weighted undirected graph with labeled edge weights.\n2. (b) Minimum Cost Spanning Tree:\n   - Constructed using Kruskal’s algorithm.\n   - Edges are selected in order of increasing weight.\n   - Avoids cycles and includes exactly n-1 edges.\n\nThe figures illustrate spanning tree concepts, comparing DFS and BFS spanning trees and demonstrating Kruskal’s algorithm for computing an MST."
    },
    {
      "title": "3.12 Prim’s Algorithm",
      "content": "- Constructs a Minimum Spanning Tree (MST) by growing a tree from a single starting vertex.\n- Expands by adding the nearest vertex to the current tree in each step.\n- Stops when all vertices are included.\n- Requires n-1 iterations for a graph with n vertices.\n\nProcedure for Prim’s Algorithm\nprocedure Prim(G, VT, ET)\nbegin\n    VT = ∅;\n    ET = ∅;\n    for i = 1 to |V| − 1 do\n    begin\n        find the least cost edge (v, u) among all the edges\n        such that v is in VT and u is in V – VT;\n        VT = VT ∪ { u };\n        ET = ET ∪ { (v, u) };\n    end\nend\n\n- Uses a priority queue to efficiently select the next edge.\n- If a binary heap is used, the time complexity is O(|E| log |V|).\n\nFigure 3.15: Minimum Cost Spanning Tree Using Prim’s Algorithm\n1. (a) Original Graph:\n   - A weighted graph with labeled edges.\n2. (b) Minimum Cost Spanning Tree:\n   - Constructed using Prim’s algorithm.\n   - The edges are added in order of increasing weight:\n     - 1st edge: (2,3) → weight 5  \n     - 2nd edge: (3,4) → weight 6  \n     - 3rd edge: (2,4) → weight 11  \n     - 4th edge: (2,1) → weight 16  \n     - 5th edge: (5,4) → weight 18  \n\nThe figure demonstrates Prim’s algorithm in action, showing the sequence in which edges are included to form the minimum spanning tree.\n."
    }
  ]
},

{
  "unit": "Unit IV - Algorithm Analysis",
  "sections": [
    {
      "title": "4.1 Algorithm Design Technique",
      "content": [
        "->Algorithms help solve computational problems. Writing a good algorithm can be challenging.",
        "->Several techniques simplify the process:",
        "1. Divide and Conquer",
        "2. Greedy Approach",
        "3. Dynamic Programming",
        "4. Branch and Bound",
        "5. Backtracking"
      ],
      "3d_model": "no"
    },
    {
      "title": "4.2 Divide & Conquer",
      "content": [
        "->A general approach for solving complex problems by breaking them into smaller parts.",
        "->Top-down approach that divides a problem into subproblems, solves them recursively, and combines the results.",
        "->Three main steps:",
        "1. Divide – Split the problem into smaller subproblems.",
        "2. Conquer – Solve each subproblem recursively.",
        "3. Combine – Merge the solutions to get the final result."
      ],
      "3d_model": "no",
      "subsections": [
        {
          "title": "4.2.1 Merge Sort",
          "content": [
            "Figure 4.2. Merge Sort Example",
            "Merge sort works by:",
            "->Dividing the array into smaller parts(subarrays).",
            "->Sorting each part separately.",
            "->Merging them back into a single sorted array.",
            "Steps of Merge Sort",
            "1.Divide:",
            "->The array is split into two halves until each subarray has only one element.",
            "2.Conquer:",
            "->Each subarray is sorted recursively.",
            "3.Combine:",
            "->Two sorted subarrays are merged into one sorted array.",
            "Pseudocode for Merge Sort:",
            "procedure mergeSort (list, first, last)",
            "begin",
            "if (first > last) return;",
            "mid = (first + last)/2;",
            "mergeSort (list, first, mid);",
            "mergeSort (list, mid+1, last);",
            "merge2way(list, first, mid, last);",
            "end",
            "Pseudocode for Merging Two Sorted Arrays:",
            "procedure merge2way (list, first, mid, last)",
            "begin",
            "i = first; j = mid; k = 0;",
            "while ((i <= mid) and (j <= last)) do",
            "begin",
            "if (list[i] <= list[j]) then",
            "begin",
            "tmp[k] = list[i]; k = k + 1; i = i + 1;",
            "end",
            "else begin",
            "tmp[k] = list[j]; k = k + 1; j = j + 1;",
            "end",
            "end",
            "while (i <= mid) do",
            "begin",
            "tmp[k] = list[i]; k = k + 1; i = i + 1;",
            "end",
            "while (j <= last) do",
            "begin",
            "tmp[k] = list[j]; k = k + 1; j = j + 1;",
            "end",
            "i = 0;",
            "while (i < last–first) do",
            "begin",
            "list[first+i] = tmp[i]; i = i + 1;",
            "end",
            "end",
            "Time Complexity Analysis:",
            "->Divide: Finds the middle of the array (Θ(1)).",
            "->Conquer: Recursively solves two subproblems of size n/2 (2T(n/2)).",
            "->Combine: Merging takes Θ(n) time.",
            "->Final Complexity:",
            "T(n)=2T(n/2)+cn",
            "->The depth of recursion is log₂(n).",
            "->The total time complexity is Θ(n log₂ n)."
          ],
          "3d_model": "no"
        },
        {
          "title": "4.2.2 Quick Sort",
          "content": [
            "->Figure 4.3. Quick Sort Example",
            "->Quick Sort is a sorting algorithm that works using the divide-and-conquer method.",
            "Steps Involved:",
            "1.Divide:",
            "->Select a pivot element (q).",
            "->Partition the array into two subarrays:",
            "Left: Elements ≤ pivot.",
            "Right: Elements > pivot.",
            "2.Conquer:",
            "->Recursively sort both subarrays.",
            "3.Combine:",
            "No extra steps are needed as subarrays are already sorted.",
            "Time Complexity:",
            "->Best case: O(n log₂ n) (Pivot divides array evenly).",
            "->Worst case: O(n²) (Unbalanced partitions, e.g., sorted input).",
            "->Average case: O(n log₂ n).",
            "Space Complexity:",
            "->Average: O(log₂ n) (Recursive calls).",
            "->Worst case: O(n) (Deep recursion stack).",
            "Choosing a Good Pivot:",
            "->Bad pivot selection can lead to O(n²) time complexity.",
            "->A sorted input with the wrong pivot makes quicksort inefficient.",
            "Pseudocode for Quick Sort:",
            "procedure quickSort(list, left, right)",
            "begin",
            "pivot = list [left];",
            "i = left + 1; j = right;",
            "if (left < right) then",
            "begin",
            "while (i < j ) do",
            "begin",
            "while (list[i] < pivot) do",
            "i = i + 1;",
            "while (list[j] > pivot) do",
            "j = j - 1;",
            "if (i < j) then interchange (list[i], list[j]);",
            "end",
            "interchange (list[j], list[left]);",
            "quicksort(list, left , j–1 );",
            "quicksort(list, j+1, right );",
            "end",
            "end",
            "Example Execution (Figure 4.3):",
            "1.Pivot Selection: 10 is chosen as the pivot.",
            "2.Partitioning:",
            "->Elements ≤ 10: [7, 5, 9, 8, 1, 3]",
            "->Elements > 10: [16, 15, 20, 27, 24]",
            "3.Recursive Sorting:",
            "->Left subarray sorts [7, 5, 9, 8, 1, 3].",
            "->Right subarray sorts [16, 15, 20, 27, 24].",
            "4.Final Sorted Array: [1, 3, 5, 7, 8, 9, 10, 15, 16, 20, 24, 27]."
          ],
          "3d_model": "no"
        },
        {
          "title": "4.2.3 Binary Search",
          "content": [
            "->Used for searching elements in a sorted list.",
            "->Divides the list into two halves and compares the middle element with the search value.",
            "->If middle element matches, return its position.",
            "->Otherwise, continue search in the left or right half based on the comparison.",
            "->Time Complexity: O(log₂ n) (Efficient for large lists).",
            "Binary Search Algorithm (Pseudocode):",
            "procedure binarySearch(list, n, searchValue)",
            "begin",
            "low = 1;",
            "high = n;",
            "while low <= high do",
            "begin",
            "mid = (low + high) / 2;",
            "if list[mid] == searchValue then return mid;",
            "if list[mid] > searchValue then high = mid - 1;",
            "else if list[mid] < searchValue then low = mid + 1;",
            "end",
            "return -1;",
            "end",
            "->Works only on sorted lists.",
            "->Efficient compared to linear search (which takes O(n) time)."
          ],
          "3d_model": "no"
        }
      ]
    },
    {
      "title": "4.3 Greedy Algorithms",
      "content": [
        "->Always picks the best-looking choice at the moment.",
        "->Aims for a globally optimal solution by making locally optimal choices.",
        "->Does not always guarantee the best solution, but works well for many problems.",
        "Steps in the Greedy Approach:",
        "->Find the problem's optimal substructure.",
        "->Create a recursive algorithm using the greedy strategy.",
        "->Ensure that making the greedy choice leaves only one subproblem.",
        "->Prove that it is always safe to make the greedy choice."
      ],
      "3d_model": "no",
      "subsections": [
        {
          "title": "4.3.1 Knapsack Problem",
          "content": [
            "->Given N items with different weights (w) and values (v).",
            "->The goal is to pack them into a bag (knapsack) of capacity W to get the highest total value.",
            "->Fractional knapsack allows taking parts of items, not just whole ones.",
            "How the Greedy Approach Works:",
            "1.Find value per weight for each item (v/w).",
            "2.Sort items based on this value (higher first).",
            "3.Pick as much of the highest value item as possible.",
            "4.If an item can't fully fit, take only the remaining space fraction.",
            "5.Repeat until the knapsack is full.",
            "Pseudocode for Fractional Knapsack:",
            "procedure fractionalKnapsack(W, V, n)",
            "begin",
            "for i = 1 to n do",
            "x[i] = 0;",
            "weight = 0;",
            "for i = 1 to n do",
            "begin",
            "if (weight + w[i] ≤ W) then begin",
            "x[i] = 1 ;",
            "weight = weight + w[i];",
            "end",
            "else begin",
            "x[i] = (W - weight) / w[i];",
            "weight = W;",
            "break;",
            "end",
            "return x;",
            "end"
          ],
          "3d_model": "no"
        }
      ]
    },
    {
      "title": "4.4 Dynamic Programming",
      "content": [
        "->Solves problems by breaking them into smaller subproblems.",
        "->Unlike divide-and-conquer, dynamic programming avoids solving the same subproblem multiple times.",
        "->Saves solutions in a table to prevent unnecessary recalculations.",
        "->Used for optimization problems (finding the best solution).",
        "Steps in Dynamic Programming:",
        "->Identify the structure of the best solution.",
        "->Define its value using recursion.",
        "->Compute the value step by step (bottom-up method).",
        "->Build the final solution from the computed values.",
        "->This method ensures efficiency and avoids repeated work!"
      ],
      "3d_model": "no"
    },
    {
      "title": "4.5 Optimal Binary Search Trees",
      "content": [
        "-->TO BE MENTIONED LATER.."
      ],
      "3d_model": "no"
    },
    {
      "title": "4.6 Warshall’s Algorithm",
      "content": [
        "Figure 4.6. Computation of Intermediate Distance Matrices using Floyds–",
        "Warshall Algorithm",
        "->The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices in a directed graph using dynamic programming.",
        "Key Points:",
        "->The graph can have negative edge weights, but no negative-weight cycles.",
        "->It finds shortest paths by checking if going through an intermediate vertex results in a shorter path.",
        "->It uses a distance matrix D that updates iteratively.",
        "Distance Calculation Formula:",
        "-->to be updated..",
        "Algorithm (Pseudocode):",
        "procedure FloydWarshall(W)",
        "begin",
        "D(0) = W;",
        "for k = 1 to n do",
        "for i = 1 to n do",
        "for j = 1 to n do",
        "D(k)[i][j] = min(D(k-1)[i][j], D(k-1)[i][k] + D(k-1)[k][j]);",
        "return D(n);",
        "end",
        "->Input: Weight matrix W of the graph .",
        "->Output: Distance matrix 𝐷(n) containing shortest paths between all pairs.",
        "->Time Complexity: 𝑂(𝑛^3)(efficient for small/medium graphs)."
      ],
      "3d_model": "no"
    },
    {
      "title": "4.7 Backtracking",
      "content": [
        "->Backtracking is a recursive technique used for solving complex problems.",
        "->It explores possible solutions step by step until a solution is found or proven impossible.",
        "->Useful for combinatorial problems like Sudoku, N-Queens, and Maze solving.",
        "How Backtracking Works:",
        "1.Start constructing a partial solution.",
        "2.Check if it follows the constraints",
        "->If valid → Expand further.",
        "->If invalid → Backtrack (go back and try a different option).",
        "3.Repeat until a complete solution is found or all possibilities are exhausted",
        "State-Space Tree:",
        "->A tree-like structure used to represent decisions.",
        "->Root node: Initial state (before starting).",
        "->Each level: Represents choices for a part of the solution.",
        "->Promising node: May lead to a solution.",
        "->Non-promising node: Leads to failure (needs backtracking).",
        "->Uses Depth-First Search (DFS) for exploration.",
        "Example Usage:",
        "->Solving puzzles (N-Queens, Crossword).",
        "->Generating combinations (Subsets, Permutations).",
        "->Pathfinding problems (Maze solving, Hamiltonian cycle).",
        "->Backtracking is efficient as it avoids exploring unnecessary paths, making it ideal for large problems."
      ],
      "3d_model": "no"
    },
    {
      "title": "4.8 N – Queens Problem",
      "content": [
        "Figure 4.7. State Space Tree for the solution to 4-Queen problem",
        "->Goal: Place n queens on an n × n chessboard so that no two queens attack each other.",
        "->Constraints: No two queens should be in the same row, column, or diagonal.",
        "->Trivial Cases:",
        "-->n = 1 → Solution exists.",
        "-->n = 2 and n = 3 → No solution.",
        "-->n = 4 → First feasible solution.",
        "How the Algorithm Works:",
        "1.Start with an empty board.",
        "2.Place the first queen in the first possible position in row 1.",
        "3.Move to row 2 and try placing the next queen in a safe position.",
        "4.If no position is valid, backtrack and move the previous queen to a new position.",
        "5.Repeat the process until all n queens are placed successfully.",
        "Backtracking Process (Example for n = 4):",
        "->First attempt → No valid position for the third queen → Backtrack.",
        "->Move first queen to a new position → Continue placing queens.",
        "->Final arrangement found → (1,2), (2,4), (3,1), (4,3).",
        "Pseudocode for N-Queens Placement:",
        "Placing n Queens in a Safe Position",
        "procedure nQueens(k, n)",
        "begin",
        "for i = 1 to n do",
        "begin",
        "if (placeQueen(k, i)) then",
        "begin",
        "x[k] = i;",
        "if (k == n) then",
        "begin",
        "write(x [1 : n]); return;",
        "end",
        "else nQueens(k+1, n);",
        "end",
        "end",
        "end",
        "Checking if a Queen Can be Placed:",
        "procedure placeQueen(k, i)",
        "begin",
        "for j = 1 to k-1 do",
        "if ((x[j] == i) or (abs(x[j] - i) == abs(j - k))) return false;",
        "return true;",
        "end"
      ],
      "3d_model": "no"
    },
    {
      "title": "4.9 Local Search Algorithm",
      "content": [
        "->Purpose: Improve a given solution step by step using small changes (local transformations).",
        "->Method:",
        "1.Start with a random solution.",
        "2.Apply a transformation to improve the current solution.",
        "3.Repeat until no further improvement is possible.",
        "->Optimality: The solution may or may not be the best one (optimal).",
        "->Efficiency:",
        "->If all possible transformations are checked, it will always find the best solution, but this is time-consuming.",
        "->Instead, only a small set of transformations is considered to make the search faster (O(n²) or O(n³)).",
        "->Key Idea:",
        "->Solutions that can be changed into one another using small steps are considered \"close\".",
        "->The process of improving solutions step by step is called local search.",
        "Example: Minimum Spanning Tree (MST) using Local Search:",
        "Transformation rule:",
        "->Add an edge that is not in the current MST.",
        "->This forms a cycle in the tree.",
        "->Remove the highest-cost edge in the cycle to restore the tree structure.",
        "Why it works: This step-by-step improvement helps reduce the total weight of the MST."
      ],
      "3d_model": "no"
    }
  ]
},

{
  "unit": "Unit V - Algorithm Analysis",
  "sections": [
    {
      "title": "5.1 Analysis of Algorithm",
      "content": [
        "->An algorithm is a step-by-step process that transforms input into output.",
        "->It may take zero or more inputs and must always produce at least one output.",
        "->Each step must be:",
        "->Clear",
        "->Feasible",
        "->Unambiguous",
        "->The algorithm must complete in a finite number of steps.",
        "Algorithm Analysis:",
        "->Resources Needed: Processor, memory, and bandwidth.",
        "->Analysis Purpose: To determine how much time and space an algorithm requires.",
        "->Key Focus:",
        "->Time Complexity: Measures the number of steps an algorithm takes.",
        "->Space Complexity: Measures the memory required.",
        "Time Complexity:",
        "->Actual execution time depends on",
        "->Machine type",
        "->Instruction set",
        "->Execution time of each instruction",
        "->To make analysis machine-independent, we use frequency count:",
        "->Counts the number of basic operations performed.",
        "->Helps compare different algorithms fairly."
      ],
      "3d_model": "no"
    },
    {
      "title": "5.2 Asymptotic Notations",
      "content": [
        "->Figure 5.1. Classification of Asymptotic Notations",
        "->Asymptotic Notations are used to describe the running time of algorithms based on input size. They classify running times into:",
        "1.Big-O (O) – Upper Bound",
        "2.Big-Theta (Θ) – Tight Bound",
        "3.Big-Omega (Ω) – Lower Bound",
        "1.Big-O Notation (Upper Bound)",
        "->Represents the worst-case time complexity",
        "->Denoted as:",
        "O(g(n))={ f(n) ∣ 0 ≤ f(n) ≤ cg(n) for n≥n0 }",
        "->Meaning:",
        "->f(n) does not grow faster than g(n) for large n.",
        "->Ensures that the execution time never exceeds a constant multiple of g(n).",
        "2.Big-Theta Notation (Tight Bound)",
        "->Represents the exact growth rate (both upper & lower bounds).",
        "->Denoted as:",
        "Θ(g(n))={ f(n) ∣ c1 g(n) ≤ f(n)≤c2 g(n) for n≥n0 }",
        "->Meaning:",
        "->f(n) grows at the same rate as g(n).",
        "->It is neither significantly faster nor slower.",
        "3.Big-Omega Notation (Lower Bound)",
        "->Represents the best-case time complexity",
        "->Denoted as:",
        "Ω(g(n))={ f(n) ∣ cg(n) ≤ f(n) for n≥n0 }",
        "->Meaning:",
        "->The algorithm will take at least this much time.",
        "->Ensures that f(n) does not grow slower than g(n).",
        "-->Big-O (O): Algorithm runs in at most 𝑂(𝑔(𝑛)).",
        "-->Big-Theta (Θ): Algorithm runs in exactly Θ(𝑔(𝑛)).",
        "-->Big-Omega (Ω): Algorithm runs in at least Ω(𝑔(𝑛))."
      ],
      "3d_model": "no"
    },
    {
      "title": "5.3 Efficiency of Algorithms",
      "content": [
        "->Table 5.1 Time Complexities with code segments",
        "->Table 5.2 Rate of Growth of Computing Functions",
        "->Figure 5.2. Order of rate of growth - n vs f(n)",
        "->Algorithm Efficiency",
        "->Measured by counting how many times an instruction runs.",
        "->Example: Table 5.1 shows how often x = x + 1 executes in different control structures based on input n.",
        "->Time Complexity Growth",
        "->Determines how execution time increases as input size grows.",
        "->Example: Table 5.2 summarizes the growth rates for different time complexities."
      ],
      "3d_model": "no"
    },
    {
      "title": "5.4 Analysis of Recursive Programs",
      "content": [
        "->Recursive Algorithms:",
        "->Defined in terms of themselves (calls itself with updated arguments).",
        "->Can have direct or indirect recursion.",
        "->More powerful than iterative algorithms but require more time and memory.",
        "->Frequency count is determined using recurrence relations.",
        "->Example: Mergesort",
        "->Divides size n into two subproblems of size n/2.",
        "->Solves each subproblem recursively.",
        "->Recurrence relation:",
        "T(n)={ c if n=1 or 2T(n/2)+Θ(n) if n>1}",
        "->Constant c is an upper bound for operations excluding recursive calls.",
        "->Final time complexity: Θ(n log₂ n) due to divide depth of log₂ n."
      ],
      "3d_model": "no"
    },
    {
      "title": "5.5 Solving Recurrence Equations",
      "content": [
        "->Methods to Solve Recurrence Equations",
        "1.Substitution Method:",
        "->Guess a solution 𝑓(𝑛).",
        "->Use recurrence to show T(n) ≤ f(n)",
        "->Apply mathematical induction to verify.",
        "->Requires a good guess, which can be difficult.",
        "2.Recurrence Tree Method:",
        "->Expand T(n) using the recurrence formula.",
        "->Keep replacing T(m) (where m<n) until only T(1) remains.",
        "->since T(1)is constant this gives a formula in terms of n.",
        "I.Substitution Method:",
        "->Consider the recurrence relation T(n) = {c if n=1 or 2T(n/2)+(n) if n>1} with initial guess T(n)=nlogn.",
        "Let T(n) ≤ cn logn for all n≥n0 for inductove hypothesis.",
        "By substitution into recurrence,",
        "T(n) ≤ 2( c[n/2] log([n/2]) + (n))",
        "= cn logn(n/2) + (n)",
        "= cn log n -cn log2 + (n)",
        "= cn log n - cn + (n)",
        "≤ cn log n",
        "->This gives the solution to the recurrence T(n) = { c if n=1 or 2T(n/2)+ (n) if n>1} as O(nlogn).",
        "II.RecurrenceTree Method:",
        "Figure 5.3. Recursion Tree Expansion for three levels",
        "->Each node in the recursion tree represents the cost of solving a subproblem.",
        "->The total cost is found by summing the costs at each level.",
        "->Example:",
        "->Given T(n)=3T(n/4) + cn^2",
        "->Tree expands for 3 levels (Figure 5.3)",
        "->Tree Height : log base4 n.",
        "->Level-Wise costs: 3/16cn^2,3/16cn^2,...,Θ(nlog power3 n).",
        "->Total cost:O(n^2)."
      ],
      "3d_model": "no"
    },
    {
      "title": "5.6 A General Solution for a Large Class of Recurrences",
      "content": [
        "->In general, recurrences divide a problem of size n into a sub problems each of size n/b.Let f(n) be a driving that is defined and non-negative on all sufficiently large reals.",
        "->Now the recurrence for T(n) is defined as",
        "* T(n) = aT(n/b) + f(n)"
      ],
      "3d_model": "no"
    }
  ]
}

]