import "reflect-metadata"

// class Calculator {
//     @MeasureTime()
//     sum(a: number, b: number): number {
//         return a + b;
//     }
// }

// function MeasureTime() {
//     return (
//         target: object,
//         propertyName: string,
//         descriptor: PropertyDescriptor,
//     ) => {
//         const originMethod = descriptor.value;

//         descriptor.value = function(...args: unknown[]) {
//             console.time(propertyName);

//             const result = originMethod.apply(this, args);

//             console.timeEnd(propertyName);

//             return result;
//         }
//     }
// }

// ----------------------------------------------------------------------

type ServiceMetadata = {isSingleton: boolean};
type Constructor = new (...args: unknown[]) => any;

@Service({
    isSingleton: true,
})
class UserService {}

function Service(metadata: ServiceMetadata) {
    return (constructor: Constructor) => {
        Reflect.defineMetadata('service', metadata, constructor);
    }
}

function isServiceMetadata(entity: unknown): entity is ServiceMetadata {
    const serviceMetadata = entity as ServiceMetadata;

    return !!serviceMetadata && typeof serviceMetadata.isSingleton === 'boolean';
}

const instanceStorage = new Map();

function getInstance<ServiceConstructor extends Constructor>(Service: ServiceConstructor): ServiceConstructor {
    const metadata: unknown = Reflect.getMetadata('service', Service);

    if (!isServiceMetadata(metadata)) {
        return new Service();
    }

    if (!metadata.isSingleton) {
        return new Service();
    }

    if (!instanceStorage.get(Service)) {
        instanceStorage.set(Service, new Service());
    }

    return instanceStorage.get(Service);
}

// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
