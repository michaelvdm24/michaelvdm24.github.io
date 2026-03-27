// helper function for bubble sort only, since bubble sort literally does a swap in the for loops 
function swap(el1, el2){
    return new Promise((resolve) => {
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;

        window.requestAnimationFrame(function() {
            setTimeout(() => {
                c.insertBefore(el2, el1);
                resolve();
            }, 2700/output.innerHTML - 13);
        });
    });
}

async function BubbleSort(){
    bubbleButton.disabled = true;
    insertionButton.disabled = true;
    selectionButton.disabled = true;
    quickButton.disabled = true;
    mergeButton.disabled = true;
    heapButton.disabled = true;
    performSort.disabled = true;
    newArray.disabled = true;

    var blocks = document.querySelectorAll(".block");

    for (var i = 0; i < blocks.length; i += 1){
        for (var j = 0; j < (blocks.length - i - 1); j += 1){

            // change color of the blocks being compared (salmon color)
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j+1].style.backgroundColor = "#FF4949";

            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j+1].childNodes[0].innerHTML);
            
            // compare value of two blocks and swap if they should
            if (value1 > value2){
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }

            // change the compared blocks back to original, untouched color
            blocks[j].style.backgroundColor = "rgb(78, 78, 78)";
            blocks[j + 1].style.backgroundColor = "rgb(78, 78, 78)";
        }

    }
    greenAccept();
    bubbleButton.disabled = false;
    insertionButton.disabled = false;
    selectionButton.disabled = false;
    quickButton.disabled = false;
    mergeButton.disabled = false;
    heapButton.disabled = false;
    performSort.disabled = false;
    newArray.disabled = false;
}








async function InsertionSort(delay = 2526/output.innerHTML - 2.63157){
    bubbleButton.disabled = true;
    insertionButton.disabled = true;
    selectionButton.disabled = true;
    quickButton.disabled = true;
    mergeButton.disabled = true;
    heapButton.disabled = true;
    performSort.disabled = true;
    newArray.disabled = true;

    var blocks = document.querySelectorAll(".block");

    blocks[0].style.backgroundColor = "#FF4949";

    // iterate through all array elements
    for (var i = 1; i < blocks.length; i += 1){

        var j = i - 1;

        // this pointer value (value at block[i]) will be the basis of comparison for the next loop
        var pointer_value = Number(blocks[i].childNodes[0].innerHTML);

        var height = blocks[i].style.height;

        blocks[i].style.backgroundColor = "#FF4949";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        // compare block[j] to block[i] and step j backwards until block[j] greater than block[i]
        while ((j > -1) && (Number(blocks[j].childNodes[0].innerHTML) > pointer_value)){
            blocks[j].style.backgroundColor = "#FF4949";

            blocks[j + 1].style.height = blocks[j].style.height;
            blocks[j + 1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
            j--;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            for (var k = i; k >= 0; k -= 1){
                blocks[k].style.backgroundColor = "rgb(78, 78, 78)";
            }
        }

        // block[j + 1] now has been replaced by block[i]
        blocks[j + 1].style.height = height;
        blocks[j + 1].childNodes[0].innerHTML = pointer_value;

        blocks[i].style.backgroundColor = "rgb(78, 78, 78)";
    }
    greenAccept();
    bubbleButton.disabled = false;
    insertionButton.disabled = false;
    selectionButton.disabled = false;
    quickButton.disabled = false;
    mergeButton.disabled = false;
    heapButton.disabled = false;
    performSort.disabled = false;
    newArray.disabled = false;
}







async function SelectionSort(delay = 2631/output.innerHTML - 13){
    bubbleButton.disabled = true;
    insertionButton.disabled = true;
    selectionButton.disabled = true;
    quickButton.disabled = true;
    mergeButton.disabled = true;
    heapButton.disabled = true;
    performSort.disabled = true;
    newArray.disabled = true;

    var blocks = document.querySelectorAll(".block");

    var lowest_value_index = 0;

    // iterate through entire array
    for (var i = 0; i < blocks.length; i += 1){

        // the "lowest value" in the array is temporarily set at i
        lowest_value_index = i;
        blocks[i].style.backgroundColor = "#FF4949"; // color block[i] with salmon if block[i] is being looked at

        // iterate all the array elements after i only
        for (var j = i + 1; j < blocks.length; j += 1){
            blocks[j].style.backgroundColor = "#FF4949"; // color block[j] with salmon if block[j] is being looked at

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
            
            var val1 = Number(blocks[j].childNodes[0].innerHTML);
            var val2 = Number(blocks[lowest_value_index].childNodes[0].innerHTML);

            // compares value at block[j] and block[lowest_value_index] and sets lowest_value_index to j IF block[j] is indeed smaller than block[lowest_value_index]
            if (val1 < val2){
                if (lowest_value_index != i){
                    blocks[lowest_value_index].style.backgroundColor = "rgb(78, 78, 78)"; // change back to original
                }
                lowest_value_index = j;
            } else {
                blocks[j].style.backgroundColor = "rgb(78, 78, 78)"; // change back to original
            }
        }

        // swap out blocks[i] and blocks[lowest_value_index] after the true lowest value in the range of j is found
        var temp1 = blocks[lowest_value_index].style.height;
        var temp2 = blocks[lowest_value_index].childNodes[0].innerText;

        blocks[lowest_value_index].style.height = blocks[i].style.height;
        blocks[i].style.height = temp1;

        blocks[lowest_value_index].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
        blocks[i].childNodes[0].innerText = temp2;

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        // change back to original color
        blocks[lowest_value_index].style.backgroundColor = "rgb(78, 78, 78)";
        blocks[i].style.backgroundColor = "rgb(78, 78, 78)";

    }
    greenAccept();
    bubbleButton.disabled = false;
    insertionButton.disabled = false;
    selectionButton.disabled = false;
    quickButton.disabled = false;
    mergeButton.disabled = false;
    heapButton.disabled = false;
    performSort.disabled = false;
    newArray.disabled = false;
}







// partition algorithm for quicksort. Takes the value "left" as the pivot and compares all values between "left" and "right" indexes and appropriately places on either side of the pivot
async function partition(left, right, delay = 3684/output.innerHTML - 18.4) {
    var blocks = document.querySelectorAll(".block");
    var pivot = Number(blocks[left].childNodes[0].innerHTML);
  
    // index i and j are the movers of the array elements. i starts from the left and j starts from the right and divides the "less than pivot" and "greater than pivot" segments
    var i = left - 1;
    var j = right + 1;
  
    while (true) {
    
        // compare the pivot to the block at i and step i forward if the value at i is smaller than the pivot continuously
        do {
            i++;
            if (i - 1 >= left) blocks[i - 1].style.backgroundColor = "#8e3e3e"; // color left partition with maroon
            blocks[i].style.backgroundColor = "#FF4949";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
        } while (Number(blocks[i].childNodes[0].innerHTML) < pivot);
  
        // compare the pivot to the block at j and step j backwards if the value at j is greater than the pivot continuously
        do {
            j--;
            if (j + 1 <= right) blocks[j + 1].style.backgroundColor = "#021374"; // color right partition with navy
            blocks[j].style.backgroundColor = "#FF4949";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
        } while (Number(blocks[j].childNodes[0].innerHTML) > pivot);
  
        // when i meets j, change all the bars back to the original color and return the pivot which is j
        if (i >= j) {
            for (var k = 0; k < output.innerHTML; k++) blocks[k].style.backgroundColor = "rgb(78, 78, 78)";
            return j;
        }
  
        // swap the ith and jth element
        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = temp1;
        blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
        blocks[j].childNodes[0].innerText = temp2;

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
    }
}

async function QuickSort(left, right) {
    bubbleButton.disabled = true;
    insertionButton.disabled = true;
    selectionButton.disabled = true;
    quickButton.disabled = true;
    mergeButton.disabled = true;
    heapButton.disabled = true;
    performSort.disabled = true;
    newArray.disabled = true;

    if (left < right) {
        // store the index of pivot using partition function
        var pivot = await partition(left, right);

        // call quicksort again from "left" index to the pivot index
        await QuickSort(left, pivot);

        // call quicksort again from the pivot index to the "right" index
        await QuickSort(pivot + 1, right);
    }

    if (left == 0 && right == output.innerHTML - 1){
        greenAccept();
        bubbleButton.disabled = false;
        insertionButton.disabled = false;
        selectionButton.disabled = false;
        quickButton.disabled = false;
        mergeButton.disabled = false;
        heapButton.disabled = false;
        performSort.disabled = false;
        newArray.disabled = false;
    }
}







// helper function for merge sort. merges left and right sections of blocks between the indeces "left" and "right"
async function merge(left, right, delay = 2526/output.innerHTML - 2){
    var blocks = document.querySelectorAll(".block");

    var mid = (left + right) >> 1;
    var v = left;
    var i = mid + 1;
    var endv = mid;
    var endi = right;

    var u = left;

    while (v <= endv && i <= endi){
        if (Number(blocks[v].childNodes[0].innerText) <= Number(blocks[i].childNodes[0].innerText)){
            copy[u][0] = blocks[v].childNodes[0].innerText;
            copy[u][1] = blocks[v].style.height;

            blocks[v].style.backgroundColor = "#FF4949";

            u ++;
            v ++;
        } else if (Number(blocks[v].childNodes[0].innerText) > Number(blocks[i].childNodes[0].innerText)) {
            copy[u][0] = blocks[i].childNodes[0].innerText;
            copy[u][1] = blocks[i].style.height;

            blocks[i].style.backgroundColor = "#FF4949";

            u ++;
            i ++;
        }
    }

    while (v <= endv){
        blocks[v].style.backgroundColor = "#FF4949";

        copy[u][0] = blocks[v].childNodes[0].innerText;
        copy[u][1] = blocks[v].style.height;

        u ++;
        v ++;
    }

    while (i <= endi){
        blocks[i].style.backgroundColor = "#FF4949";

        copy[u][0] = blocks[i].childNodes[0].innerText;
        copy[u][1] = blocks[i].style.height;

        u ++;
        i ++;
    }

    u = left;
    while (u <= right){
        blocks[u].style.backgroundColor = "#FF4949";

        blocks[u].childNodes[0].innerText = copy[u][0];
        blocks[u].style.height = copy[u][1];
        
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        blocks[u].style.backgroundColor = "rgb(78, 78, 78)";

        u ++;
    }
}

async function MergeSort(start, end, delay = 2526/output.innerHTML - 2){
    bubbleButton.disabled = true;
    insertionButton.disabled = true;
    selectionButton.disabled = true;
    quickButton.disabled = true;
    mergeButton.disabled = true;
    heapButton.disabled = true;
    performSort.disabled = true;
    newArray.disabled = true;

    if (start < end){
        var mid = (start + end) >> 1;
        await MergeSort(start, mid);
        await MergeSort(mid + 1, end);
        await merge(start, end);
    }

    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
    );
    
    if (start == 0 && end == output.innerHTML - 1){
        greenAccept();
        bubbleButton.disabled = false;
        insertionButton.disabled = false;
        selectionButton.disabled = false;
        quickButton.disabled = false;
        mergeButton.disabled = false;
        heapButton.disabled = false;
        performSort.disabled = false;
        newArray.disabled = false;
    }
}







// helper function for heapsort. Continuously calls itself and ensures largest block (between left child, right child, and itself) is pushed to root "i" at each step
async function Heapify(n, i, delay = 5631/output.innerHTML - 13) {
    var blocks = document.querySelectorAll(".block");

    // initialize i as the root
    var largest = i;
    // left child
    var left = 2 * i + 1;
    // right child
    var right = 2 * i + 2;
    
    // sets left child as "largest" if it is
    if ( left < n && Number(blocks[left].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML) ) {
        largest = left;
    }
    
    // sets right child as "largest" if it is
    if ( right < n && Number(blocks[right].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML) ){
        largest = right;
    }
    
    // If the largest number is not the root, then the root and the "largest" number swap and it calls itself until it is (thereby completing the heap creation on the sub-tree).
    if (largest != i) {
        var tempColorLargest = blocks[largest].style.backgroundColor;
        var tempColorI = blocks[i].style.backgroundColor;

        blocks[largest].style.backgroundColor = "#FF4949";
        blocks[i].style.backgroundColor = "#FF4949";

        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[largest].style.height;
        blocks[largest].style.height = temp1;
        blocks[i].childNodes[0].innerText =
        blocks[largest].childNodes[0].innerText;
        blocks[largest].childNodes[0].innerText = temp2;
    
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        blocks[largest].style.backgroundColor = tempColorLargest;
        blocks[i].style.backgroundColor = tempColorI;
    
        // Heapify the sub-tree if the largest number is not the root
        await Heapify(n, largest);
    }
}
    
async function HeapSort(n, delay = 5631/output.innerHTML - 13) {
    bubbleButton.disabled = true;
    insertionButton.disabled = true;
    selectionButton.disabled = true;
    quickButton.disabled = true;
    mergeButton.disabled = true;
    heapButton.disabled = true;
    performSort.disabled = true;
    newArray.disabled = true;

    var blocks = document.querySelectorAll(".block");
    
    var newIdx = 0;
    for (var k = 0; k < output.innerHTML; k++){
        newIdx += Math.pow(2,k)
        var newColor = `rgb(${getRandomInt(0,200)},${getRandomInt(0,175)},${getRandomInt(0,200)})`;
        for (var j = newIdx - Math.pow(2,k); j < output.innerHTML; j++){
            blocks[j].style.backgroundColor = newColor;
        }
    }


    // Build the entire heap until the largest root is at the array index 0
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await Heapify(n, i);
    }
    
    // Swap the root at index 0 and with the left-most unsorted array element. Then remake the heap with heapify on the new unsorted section. Looped until entire list of n is heaped and reduced.
    for (var i = n - 1; i > 0; i--) {
    
        blocks[i].style.backgroundColor = "#FF4949";
        blocks[0].style.backgroundColor = "#FF4949";

        // Swap elements at i and 0
        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;

        blocks[i].style.height = blocks[0].style.height;
        blocks[i].childNodes[0].innerText = blocks[0].childNodes[0].innerText;
        blocks[0].style.height = temp1;
        blocks[0].childNodes[0].innerText = temp2;
    
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
        blocks[i].style.backgroundColor = "rgb(78, 78, 78)";
    
        // re-make heap on the reduced heap
        await Heapify(i, 0);
    }
    greenAccept();
    bubbleButton.disabled = false;
    insertionButton.disabled = false;
    selectionButton.disabled = false;
    quickButton.disabled = false;
    mergeButton.disabled = false;
    heapButton.disabled = false;
    performSort.disabled = false;
    newArray.disabled = false;
}