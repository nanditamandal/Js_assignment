function nextEdge(side1, side2) {

    let maximumEdge =( Math.abs(side1) +Math.abs(side2)) -1;
    return maximumEdge;

}
console.log(nextEdge(-8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, -2));
