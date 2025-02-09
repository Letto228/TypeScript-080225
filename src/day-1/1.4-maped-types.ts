// const origObj: object = {...}
// const array: string[] = Object.keys(origObj);

// const obj = array.reduce(
//     (property, acc) => ({...acc, [property]: ...}),
//     {},
// )

// type Movie = {
//     readonly title: string,
//     director: string,
//     awards?: string[],
// }

// type MovieKeys = keyof Movie;

// const movieKey: MovieKeys = 'title';

// type MovieCopy = {
//     [Property in MovieKeys]: Movie[Property]
// }

// type MovieCopy = {
//     [Property in keyof Movie]: Movie[Property];
// }

// type Properies = 'name' | 'age' | 'city';

// type User = {
//     [Proprety in Properies]: unknown;
// }

// type OptionalMovie = {
//     [Property in keyof Movie]?: Movie[Property];
// }

// type RquiredMovie = {
//     [Property in keyof Movie]-?: Movie[Property];
// }

// type ReadonlyMovie = {
//     readonly [Property in keyof Movie]: Movie[Property];
// }

// type EditableMovie = {
//     -readonly [Property in keyof Movie]: Movie[Property];
// }

// ------------------------------------------------------------

// type MovieGetters = {
//     readonly [Property in (keyof Movie) as `get${Capitalize<Property>}`]-?: () => Movie[Property];
// }
// type MovieSetters = {
//     readonly [Property in keyof Movie as `set${Capitalize<Property>}`]-?: (value: Movie[Property]) => void;
// }

// type CompleteMovie = Movie & MovieGetters & MovieSetters;

// class MovieClass implements CompleteMovie {
//     title: string = '';
//     director: string = '';
//     awards?: string[] = [];

//     getTitle = () => this.title;
//     getDirector = () => this.director;
//     getAwards = () => this.awards;

//     setTitle = (value: string) => {
//         this.title = value;
//     }
//     setDirector = (value: string) => {
//         this.director = value;
//     }
//     setAwards = (value: string[] | undefined) => {
//         this.awards = value;
//     }
// }

// ------------------------------------------------------------

// type Stages = 
//     | 'play'
//     | 'pause'
//     | 'buffering'
//     | 'end'
//     | 'ready'

// type StageSwitchers = {
//     [Stage in Stages as `switchTo${Capitalize<Stage>}`]: () => Stage;
// }

// function createStageMachine(): {currentStage: Stages} & StageSwitchers {
//     return {
//         currentStage: 'ready',
//         switchToPlay: () => 'play',
//         switchToPause: () => 'pause',
//         switchToBuffering: () => 'buffering',
//         switchToEnd: () => 'end',
//         switchToReady: () => 'ready',
//     }
// }
