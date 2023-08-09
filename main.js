const partition = (arr, start, end) => {
	let pivot = arr[end]
	let i = start - 1;
	
	for (let j = start;j < end;j++) {
		if (arr[j] < pivot) {
			i++
			let tmp = arr[i]
			arr[i] = arr[j]
			arr[j] = tmp
		}
	}
	i++
	tmp = arr[i]
	arr[i] = arr[end]
	arr[end] = tmp

	return i
}

const quicksort = (arr, start = 0, end = arr.length - 1) => {
	if (start >= end) return

	let pivot = partition(arr, start, end)

	quicksort(arr, pivot + 1, end)
	quicksort(arr, start, pivot - 1)
}

const binarysearch = (arr, target, start = 0, end = arr.length - 1) => {
	if (start >= end) return "Target Not Found"

	let middle = Math.floor((start + end) / 2)

	if (arr[middle] === target) return `Found Target at index ${middle}`
	if (arr[middle] > target) return binarysearch(arr, target, start, middle - 1)
	if (arr[middle] < target) return binarysearch(arr, target, middle + 1, end)
}

function main() {
	let arr = []
	for (let i = 0;i < 100;i++) {
		arr.push(Math.floor(Math.random() * 100))
	}
	
	quicksort(arr)
	
	console.log(arr);

	for (let i of arr) {
		console.log(binarysearch(arr, i))
	}
}	

main()
