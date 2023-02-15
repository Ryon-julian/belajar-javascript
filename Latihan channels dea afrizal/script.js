// manipulasi array

//1. menambah isi array
// var arr =[];
// arr [0] = "Ryon";
// arr [1] = "Julian";
// arr [2] = "Anggara";
// arr [4] = "Akbar";
// console.log(arr);

//2. menghapus isi array
// var arr = ["Ryon", "Julian", "Anggara"];
// arr[1] = undefined;
// console.log(arr);

//3. menampilkan isi array
// var arr = ["Ryon", "Julian", "Anggara", "Akbar"];

// for( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ':'+
//     arr[i]);
// }


// Method pada array
// 1. join

//  console.log(arr.join(' - '));

//  2. push & pop
// arr.push('Doddy');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join(' - '));


// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemanBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Doddy', 'Fitri');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir);
var arr = ['Ryon', 'Julian', 'Anggara', 'Ari', 'Faud' ];
var arr2 = arr.slice(1,4);
console.log(arr2.join(' _ '));