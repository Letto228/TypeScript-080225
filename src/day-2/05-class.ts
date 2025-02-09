// class Movie {
//     // title: string = '';
//     // duration: number = 123;

//     // constructor(title: string, duration: number) {
//     //     this.title = title;
//     //     this.duration = duration;
//     // }

//     constructor(
//         private title: string,
//         protected time: number,
//         public duration: number,
//         readonly director: string
//     ) {}
// }

// class Film extends Movie {
//     public getTime(): number {
//         return this.time;
//     }
// }

// const film: Movie = new Movie('', 1, 2, '');

// film.director

// ---------------------------------------------------------------

abstract class MyNode {
    x = 0;
    y = 0;

    abstract readonly type: string;

    abstract paint(options?: object): void;

    claculateSize(): number {
        return 100;
    }
}

// type MyNodeType = {
//     type: string;

//     paint(options?: object): void;
// }

// class MyNode {
//     x = 0;
//     y = 0;

//     claculateSize(): number {
//         return 100;
//     }
// }

class StorageNode extends MyNode {
    readonly type = 'Storage';

    paint(options?: object): void {
        throw new Error("Method not implemented.");
    }
}

class FabricNode extends MyNode {
    readonly type = 'Fabric';

    paint(options?: object): void {
        throw new Error("Method not implemented.");
    }
}

class CarNode extends MyNode {
    readonly type = 'Car';

    paint(options?: object): void {
        throw new Error("Method not implemented.");
    }
}

function paint(nodes: MyNode[]): void {
    nodes.forEach(node => {
        node.paint();
    });
}

paint([new StorageNode(), new FabricNode(), new CarNode()]);
