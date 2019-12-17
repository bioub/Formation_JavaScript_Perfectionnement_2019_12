setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('FIN');

// ^
// |
// |                               lg                 lg  lg               lg
// |st - st - st - st - lg ...     cbB ...            cbA cbD ...          cbC
// +-----0-------------------------10-----------------500-501--------------1000--->
//                      FIN        B                  A   D                C

// E B A D C

// File d'attente (0ms) : cbB
// File d'attente (10ms) :
// File d'attente (500ms) : cbA - cbD
// File d'attente (501ms) : cbD
// File d'attente (502ms) :
// File d'attente (1000ms) : cbC
// File d'attente (1001ms) :

// Jake Archibald (Google) (lib idb)
// JSConf Asia 2018
// In The Loop
