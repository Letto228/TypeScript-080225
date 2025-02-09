// function sum() {
//     return 1 + 1;
// }

// function sum(a: number, b: number): number {
//     return a + b;
// }

// ---------------------------------------------

// type Movie = {
//     readonly title: string,
//     director: string,
//     awards?: string[],
// }

// type Film = Movie & {
//     duration: number,
// };

// type Serials = Movie & {
//     seasonCount: number,
// };

// type MyResponce = {
//     isSuccess: boolean;
//     status: number;
// }

// type FilmResponse = MyResponce & {
//     result: Movie;
// }

// type FilmsResponse = MyResponce & {
//     result: Movie[];
// }

// interface MyResponce<Result> {
//     isSuccess: boolean;
//     status: number;
//     responce: Result;
// }

// type MyResponce<Result> = {
//     isSuccess: boolean;
//     status: number;
//     responce: Result;
// }

// function getFilm(): MyResponce<Movie> {
//     throw 'getFilms';
// }

// function getFilms(): MyResponce<Movie[]> {
//     throw 'getFilms';
// }

// function getUser(): MyResponce<{name: string; age: number}> {
//     throw 'getUser';
// }

// type ResponseStatuses = 'success' | 'error' | 'pending';

// type MyResponce<Result = unknown, Status extends ResponseStatuses = ResponseStatuses> = {
//     isSuccess: boolean;
//     status: Status;
//     responce: Result;
// }

// type FilmResponse = MyResponce<Movie, 'success'>;
// type FilmResponse = {
//     isSuccess: boolean;
//     status: number;
//     responce: unknown;
// }

// ----------------------------------------------------------------------

// function playMovie<MovieParam>(movie: MovieParam): MovieParam {
//     throw 'playMovie';
// }

// const film: Film = playMovie<Film>({title: '', director: '', duration: 123});
// const serials: Serials = playMovie<Serials>({title: '', director: '', seasonCount: 12});

// type BaseMovie<Director> = {
//     title: string;
//     director: Director;
// }

// type TvSeries<Episode, Director> = BaseMovie<Director> & {
//     episodes: Episode[];
// }

// type EpisodeBase = {
//     name: string;
//     duration: number;
// }

// function playTvSeries<
//     Episode = EpisodeBase,
//     AnyTvSeries = TvSeries<Episode, string>
// >(movie: AnyTvSeries): AnyTvSeries {
//     throw '';
// }

// playTvSeries<{name: string; awards: string[]; total: number}>({
//     title: 'title',
//     director: 'director',
//     episodes: [{name: '', awards: [''], total: 123}]
// });

// const playEpisode = <Episode>(episode: Episode): Episode => {
//     return episode;
// }

// ------------------------------------------------------------------------

// function getProperty<
//     Entity extends object,
//     Key extends (keyof Entity)
// >(entity: Entity, key: Key): Entity[Key] {
//     return entity[key];
// }

// const result = getProperty({name: 'Egor', test: 1, user: null}, 'user');

// ------------------------------------------------------------------------

// type EntityGetters<Entity extends object> = {
//     readonly [Property in (keyof Entity) as `get${Capitalize<Property & string>}`]-?: () => Entity[Property];
// }
// type EntitySetters<Entity extends object> = {
//     readonly [Property in keyof Entity as `set${Capitalize<Property & string>}`]-?: (value: Entity[Property]) => void;
// }

// type CompleteEntity<Entity extends object> = Entity & EntityGetters<Entity> & EntitySetters<Entity>;




// type FilterEntity<Entity extends object> = {
//     [Property in (keyof Entity) as Property & (symbol | string)]: Entity[Property];
// }

// const sym = Symbol();

// const test = {
//     name: 'Egor',
//     1: 'test',
//     [sym]: () => {},
// }

// type TestFilter = FilterEntity<typeof test>;


// type TransddormerProperty = 'a' | 'b' | 'c';
// type TestEntity = {
//     a: number,
//     b: string,
//     c: null,
//     d: string,
//     e: object,
// };

// type EntityFilter<Entity extends object, IncludeProperty extends keyof Entity> = {
//     [Property in keyof Entity as Property & IncludeProperty]: Entity[Property];
// }

// type Result = EntityFilter<TestEntity, TransddormerProperty>
// type Result = Pick<TestEntity, TransddormerProperty>
