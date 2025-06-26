let array = [1,2,3,4,5,6,7,8,9,10];

function scramble() {
   array = [1,2,3,4,5,6,7,8,9,10];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    
  }
  updateDisplay();
}

function updateDisplay(j = -1) {
  for (let i = 0; i < array.length; i++) {
    let el = document.getElementById(i.toString());
    el.textContent = array[i];
    el.style.height = (array[i] * 7) + "px";

    el.style.backgroundColor = "";

    
  }
}

async function bubbleSort() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        document.getElementById(j).style.backgroundColor = "orange";
        document.getElementById(j+1).style.backgroundColor = "orange";
        await sleep(400);
        updateDisplay(j);
        
      }
    }
  }
  updateDisplay();
}
async function selectionSort() {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    document.getElementById(i).style.backgroundColor = "orange";
    document.getElementById(minIndex).style.backgroundColor = "orange";
    await sleep(400);
    updateDisplay();
  }
  updateDisplay();
}
async function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;


    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;

      updateDisplay(j + 1);
      document.getElementById(j + 1).style.backgroundColor = "orange";
      await sleep(300);
    }

    array[j + 1] = key;
    updateDisplay(j + 1);
    document.getElementById(j + 1).style.backgroundColor = "lightgreen";
    await sleep(300);
  }

  updateDisplay();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
