const { Engine, Render, Runner, World, Bodies } = Matter;

const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width: width,
        height: height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

//Walls
const walls = [
    //Bodies.rectangle(x, y, width, height, [options])
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];

World.add(world, walls);


// ----------------------- Maze Generation ----------------------

const cells = 3;


const grid = Array(cells)
    .fill(null)
    .map(() => Array(cells).fill(false))

const verticals = Array(cells)
    .fill(null)
    .map(() => Array(cells - 1).fill(false))

const horizontals = Array(cells - 1)
    .fill(null)
    .map(() => Array(cells).fill(false))

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
    //if i have visited the cell at [row, column], then return

    //Mark this cell as being visited

    //Assemble randomly-ordered list of neighbors

    // For each neighbor...

    //See if neighbor is out of bounds

    // If we have visited that neighbor, continue to next neighbor

    // Remove a wall from with horizontals or verticals

    // Visit that next cell
}

stepThroughCell(startRow, startColumn);