function divide(arr, n) {
    const result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentChunk.push(arr[i]);
            currentSum += arr[i];
        } else {
            // Start a new subarray
            result.push(currentChunk);
            currentChunk = [arr[i]];
            currentSum = arr[i];
        }
    }

    // Push the last chunk if not empty
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
}