const listLength = document.getElementById('listLength');
const upperBound = document.getElementById('upperBound');
const unsortedDisplay = document.getElementById('unsortedDisplay');
const sortedDisplay = document.getElementById('sortedDisplay');
let list;

document.addEventListener('click', event => {
  switch(event.target.id) {
    case 'makeListBtn':
      sortedDisplay.value = "";
      const len = parseInt(listLength.value);
      const upper = parseInt(upperBound.value);
      list = createNumList(len, upper);
      displayValues(unsortedDisplay, list);
      sortBtn.removeAttribute('disabled');
      break;
      
    case 'sortBtn':
      sortedDisplay.value = 'Sorting ....';
      let sorted;
      setTimeout(() => {
        let sortedObj = bubSort(list);
        sorted = sortedObj.numList;
        displayValues(sortedDisplay, sorted);
        displayTime(sortedObj.time);
        sortBtn.disabled = true;
      }, 1000);
      break;
  }
})

function displayValues(display, aList) {
  display.value = '';
  aList.forEach((num, index) => {
    if(index < list.length - 1) {
      display.value += num + ', ';
    } else {
      display.value += num;
    }
  });
}

function displayTime(time) {
  document.getElementById('span-length').innerText = listLength.value;
  document.getElementById('span-time').innerText = time;
}

function bubSort(numList) {
  let start = Date.now();
  let swap = false;
  do {
    swap = false;
    for(let i = 0; i < numList.length - 1; i++) {
      let j = i + 1;
      if(numList[j] < numList[i]){
          swap = true;
          let temp = numList[j];
          numList[j] = numList[i];
          numList[i] = temp;
        }
    }
  } while(swap)

  return {
          'numList': numList,
          'time': ((Date.now() - start)/1000).toFixed(5)
          };
}

function createNumList(length, upper) {
  const arr = []
  for(let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * upper) + 1;
  }
  return arr;
}

// const aList = createNumList(10);
// console.log(aList);
// console.log(bubSort(aList));