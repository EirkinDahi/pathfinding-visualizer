const node = {
    row,
    col,
    isVisited,
    distance,
};

function dijkstra(grid, startNode, finishNode){
    if(!startNode || !finishNode || startNode == finishNode){
        return false;
    }

    nodes[startNode].distance = 0
    const unvisitedNodes = nodes.slice();

    while(!unvisitedNodes.length){
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.unshift();

        closestNode.isVisited = true;
        if(closestNode==finishNode) return "success!";
        updateNeighbours(closestNode,grid);
    }

}

function sortNodesByDistance(unvisitedNodes){
    unvisitedNodes.sort((nodeA,nodeB)=> node.distance-nodeB.distance);
}

function updateNeighbours(node,grid){
    const neightbours = getNeighbours(node,grid);
    for(const neighbour of neighbours){
        neighbour.distance = node.distance +1;

    }
}

function getNeighbours(node,grid){
    const neighbours = [];
    const {col, row} = node;

    if(row>0) neighbours.push(grid[row-1][col]);
    if(row< grid.length  -1 ) neighbours.push(grid[row+1][col]);
    if(col >0) neighbours.push(grid[row][col-1]);
    if(col < grid.length - 1) neighbours.push(grid[row][col+1]);

    return neighbors.filter(neighbor => !neighbor.isVisited);
}