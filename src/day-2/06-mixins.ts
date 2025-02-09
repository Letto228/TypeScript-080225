type Constructor = new (...args: any[]) => object;

function applyMixins(child: Constructor, parents: Constructor[]) {
    parents.forEach(parentConstructor => {
        Object.getOwnPropertyNames(parentConstructor.prototype).forEach(property => {
            child.prototype[property] = parentConstructor.prototype[property];
        });
    });
}

class Animal {
    feed(): void {}
    move(): string {
        return '';
    }
}

class Movable {
    move(): void {}
}

class Horse {}
interface Horse extends Movable, Omit<Animal, 'move'> {}
applyMixins(Horse, [Animal, Movable]);

const horse = new Horse();
