const countdown = (i) => {
    console.log(i);
    if (i <= 0) {
        return "this is the end of the loop";
    } else {
        countdown(i - 1);
    }
}

countdown(10);
