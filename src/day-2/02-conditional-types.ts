// type IdLabel = {
//     id: number;
// }

// type Namelabel = {
//     name: string;
// }

// type NameOrId<Value extends number | string> = Value extends number
//     ? IdLabel
//     : Namelabel

// function createLabel<Value extends string | number>(value: Value): NameOrId<Value> {
//     throw '';
// }

// const idLabel = createLabel(123);
// const nameLabel = createLabel('Name');

// type Test = NameOrId<123>;
