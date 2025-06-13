function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let left = array.slice(0, Math.ceil(array.length)/2)
    let right = array.slice(Math.ceil(array.length)/2, array.length)

    left = mergeSort(left)
    right = mergeSort(right)

    let i = 0, l = 0, r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]){
            array[i] = left[l]
            i++;
            l++;
        } else {
            array[i] = right[r]
            i++;
            r++
        }
    }
    while (l < left.length) {
        array[i] = left[l]
        i++;
        l++
    }
    while(r < right.length) {
        array[i] = right[r];
        i++
        r++
    }

    return array;
}