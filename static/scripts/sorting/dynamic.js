var slider = document.getElementById("myRange");
var output = document.getElementById("rangeReader");
output.innerHTML = slider.value; // Display the default slider value

var chooseButton = document.getElementById("main button");
chooseButton.innerHTML = "Choose Sort";

var bubbleButton = document.getElementById("bubble");
var insertionButton = document.getElementById("insertion");
var selectionButton = document.getElementById("selection");
var quickButton = document.getElementById("quick");
var mergeButton = document.getElementById("merge");
var heapButton = document.getElementById("heap");

var performSort = document.getElementById("performSort");
var newArray = document.getElementById("regenerate");

var bestcase = document.getElementById("bestcase");
var averagecase = document.getElementById("averagecase");
var worstcase = document.getElementById("worstcase");
var memory = document.getElementById("memory");
var stable = document.getElementById("stable");


bubbleButton.onclick = function(){
    chooseButton.innerHTML = "Bubble Sort";
    bestcase.innerHTML = "O(n)";
    averagecase.innerHTML = "O(n^2)";
    worstcase.innerHTML = "O(n^2)";
    memory.innerHTML = "1";
    stable.innerHTML = "No";
    regenerate();
}

insertionButton.onclick = function(){
    chooseButton.innerHTML = "Insertion Sort";
    bestcase.innerHTML = "O(n)";
    averagecase.innerHTML = "O(n^2)";
    worstcase.innerHTML = "O(n^2)";
    memory.innerHTML = "1";
    stable.innerHTML = "Yes";
    regenerate();
}

selectionButton.onclick = function(){
    chooseButton.innerHTML = "Selection Sort";
    bestcase.innerHTML = "O(n^2)";
    averagecase.innerHTML = "O(n^2)";
    worstcase.innerHTML = "O(n^2)";
    memory.innerHTML = "1";
    stable.innerHTML = "No";
    regenerate();
}

quickButton.onclick = function(){
    chooseButton.innerHTML = "Quick Sort";
    bestcase.innerHTML = "O(n log n)";
    averagecase.innerHTML = "O(n log n)";
    worstcase.innerHTML = "O(n^2)";
    memory.innerHTML = "n";
    stable.innerHTML = "No";
    regenerate();
}

mergeButton.onclick = function(){
    chooseButton.innerHTML = "Merge Sort";
    bestcase.innerHTML = "O(n log n)";
    averagecase.innerHTML = "O(n log n)";
    worstcase.innerHTML = "O(n log n)";
    memory.innerHTML = "n";
    stable.innerHTML = "Yes";
    regenerate();
}

heapButton.onclick = function(){
    chooseButton.innerHTML = "Heap Sort";
    bestcase.innerHTML = "O(n log n)";
    averagecase.innerHTML = "O(n log n)";
    worstcase.innerHTML = "O(n log n)";
    memory.innerHTML = "1";
    stable.innerHTML = "No";
    regenerate();
}

// CONTAINS ALL THE BLOCKS
var c = document.getElementById("chartContainer");

// Update the value next to "Array Size:" on screen
slider.oninput = function() {
    if (performSort.disabled == false){
        output.innerHTML = this.value;
        regenerate();
    }
}

var copy = [];

// generate random array as soon as webform is open
if (output.innerHTML >= 10){
    // empty the chartContainer
    c.innerHTML = "";
    copy = [];
    for (i=0; i < output.innerHTML; i += 1){
        var number = getRandomInt(10,575);
        var array_ele = document.createElement("div");

        // add each block into the div; adjust height, width, and transition according to the number of blocks
        array_ele.classList.add("block");
        array_ele.style.height = `${(number/600)*document.getElementById("chartContainer").offsetHeight}px`;
        array_ele.style.width = `${document.getElementById("chartContainer").offsetWidth/output.innerHTML - (0.3*document.getElementById("chartContainer").offsetWidth)/output.innerHTML}px`;
        array_ele.style.transform = `translate(${i * (document.getElementById("chartContainer").offsetWidth/output.innerHTML)}px)`;
        array_ele.style.transition = `${2/output.innerHTML}s all ease`;

        // make some text above the block that spits out the number. Also acts as the node for all sorting comparison
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.style.fontSize = `${16*(10/output.innerHTML)}px`;
        array_ele_label.innerText = number;

        //add the label to the block and the block to the chartContainer
        array_ele.appendChild(array_ele_label);
        c.appendChild(array_ele);

        // to be used in merge sort; only need the height and innerText label
        copy.push([`${number}`,`${number}px`])
    }
}

// make new array of random numbers
function regenerate(){
    c.innerHTML = "";
    copy = [];
    for (i=0; i < output.innerHTML; i += 1){
        var number = getRandomInt(10,575);
        var array_ele = document.createElement("div");

        array_ele.classList.add("block");
        array_ele.style.height = `${(number/600)*document.getElementById("chartContainer").offsetHeight}px`;
        array_ele.style.width = `${document.getElementById("chartContainer").offsetWidth/output.innerHTML - (0.3*document.getElementById("chartContainer").offsetWidth)/output.innerHTML}px`;
        array_ele.style.transform = `translate(${i * (document.getElementById("chartContainer").offsetWidth/output.innerHTML)}px)`;
        array_ele.style.transition = `${2/output.innerHTML}s all ease`;

        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.style.fontSize = `${16*(10/output.innerHTML)}px`;
        array_ele_label.innerText = number;

        array_ele.appendChild(array_ele_label);
        c.appendChild(array_ele);

        // to be used in merge sort; only need the height and innerText label
        copy.push([`${number}`,`${number}px`])
    }
}
newArray.addEventListener("click", regenerate);

performSort.onclick = function() {
    switch (chooseButton.innerHTML){
        case "Bubble Sort":
            BubbleSort();
            break;
        case "Insertion Sort":
            InsertionSort();
            break;
        case "Selection Sort":
            SelectionSort();
            break;
        case "Quick Sort":
            QuickSort(0, output.innerHTML - 1);
            break;
        case "Merge Sort":
            MergeSort(0, output.innerHTML - 1);
            break;
        case "Heap Sort":
            HeapSort(output.innerHTML);
            break;
        default:
            break;
    }
}

async function greenAccept(){
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; blocks.length; i += 1){
        blocks[i].style.backgroundColor = "#0000FF"; //#0000FF
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250/output.innerHTML)
        );
    }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}