// DOM Elements
const arrayContainer = document.getElementById("array-container");
const sizeRange = document.getElementById("sizeRange");
const randomizeButton = document.getElementById("randomize");
const sortButtons = document.querySelectorAll('button[id$="Sort"]');

let array = [];

function updateBars() {
  arrayContainer.innerHTML = "";
  for (const value of array) {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${value * 2}px`;
    arrayContainer.appendChild(bar);
  }
}

function initializeArray(size) {
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  updateBars();
}

sizeRange.addEventListener("input", (e) => {
  const newSize = e.target.value;
  initializeArray(newSize);
});

randomizeButton.addEventListener("click", () => {
  initializeArray(sizeRange.value);
});
sortButtons[0].addEventListener("click", () => {
  bubbleSort(array, updateBars);
});
sortButtons[1].addEventListener("click", () => {
  insertionSort(array, updateBars);
});
sortButtons[2].addEventListener("click", () => {
  selectionSort(array, updateBars);
});



for (let i = 0; i < sortButtons.length; i++) {
    sortButtons[i].addEventListener("click", () => {
        if (i === 3){
            mergeSort(array, updateBars);
            } else {
                quickSort(array, updateBars);
                }
                });
                }

               

function bubbleSort() {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  updateBars();
}

function insertionSort() {
  let key, index;
  for (let i = 1; i < array.length; i++) {
    key = array[i];
    index = i - 1;
    while (index >= 0 && array[index] > key) {
      array[index + 1] = array[index];
      index--;
    }
    array[index + 1] = key;
    const bars = document.querySelectorAll(".bar");
    const barIndexes = Array.from({ length: size }, (_, i) => i).filter(
      (x) => x <= index || x == index + 1
    );
    barIndexes.map((idx, idx2) => {
      setTimeout(() => {
        bars[idx].classList.add("highlight");
        setTimeout(() => {
          bars[idx].classList.remove("highlight");
        }, 500);
      }, idx2 * 300);
    });
  }
}

initializeArray(sizeRange.value);
