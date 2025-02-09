// function getProperty(
//     obj: {a: string, d: string} | {b: boolean, d: string}
// ) {
//     return obj.d;
// }

// --------------------------typeof--------------------------

// function toUpperCase(a: number | string): string {
//     if (typeof a === 'string') {
//         return a.toLocaleUpperCase();
//     }

//     return `${a}`;
// }

// --------------------------instanceof--------------------------

// function log(date: Date | string): void {
//     if (date instanceof Date) {
//         console.log(date.toUTCString());

//         return;
//     }

//     console.log(date);
// }

// --------------------------in--------------------------

// type Dog = {
//     bark: () => void;
// }

// type Wolf = {
//     bark: () => void;
//     run: () => void;
// }

// type Cat = {
//     meow: () => void;
// }

// function makeSomeNoise(pet: Dog | Wolf | Cat) {
//     if ('bark' in pet) {
//         pet.bark();

//         return;
//     }

//     if ('meow' in pet) {
//         pet.meow();

//         return;
//     }
// }

// --------------------------Истинность--------------------------

// type Video = {
//     duration: number;
//     play: () => void;
// }

// function playVideo(video?: Video): void {
//     // video?.play();

//     // if (video) {
//     //     video.play();
//     // }

//     // if (!video) {
//     //     return;
//     // }

//     // video.play();

//     // return video ? video.play() : undefined;

//     return video && video.play();
// }

// --------------------------type predicate--------------------------

// type Film = {
//     title: string;
//     duration: number;
// }

// type MyResponse = {
//     status: string;
//     result: unknown;
// }

// function isFilm(entity: unknown): entity is Film {
//     const film: Film = entity as Film;

//     return !!film && typeof film.title === 'string' && typeof film.duration === 'number';
// }

// function getFilm(): Film | undefined {
//     const response: MyResponse = {
//         status: '',
//         result: {title: '', duration: 123},
//     };

//     const {result} = response;

//     if (isFilm(result)) {
//         return result;
//     };
// }

// --------------------------addon--------------------------

// const test: Record<string, string | number> = {
//     a: 123,
//     b: '',
//     c: 'true',
//     d: '',
//     e: {},
//     j: undefined,
// }

// test.e;

// const test = {
//     a: 123,
//     b: '',
//     c: 'true',
//     d: '',
//     e: {},
//     j: undefined,
// } as const;

// test.a

// const test = {
//     a: 123,
//     b: '',
//     c: 'true',
//     d: '',
//     // e: {},
//     // j: undefined,
// } as const satisfies Record<string, string | number>;

// test.c
