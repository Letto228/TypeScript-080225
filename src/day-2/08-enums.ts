// enum Size {
//     s = 100,
//     m,
//     l,
// }

// function getButtonSize(size: Size) {}

// getButtonSize(Size.m);
// getButtonSize(100);
// // Size[100]

// enum Size {
//     s = 'small',
//     m = 'medium',
//     l = 'long',
// }

// function getButtonSize(size: Size) {}

// getButtonSize(Size.l);
// getButtonSize('long');
// // Size[100]

// const enum Size {
//     s = 'small',
//     m = 'medium',
//     l = 'long',
// }

// function getButtonSize(size: Size) {}

// getButtonSize(Size.l);
// getButtonSize('long');
// Size[100]

// type Size = 'small' | 'long' | 'medium';

// function getButtonSize(size: Size) {}

// getButtonSize('long');
// getButtonSize('small');

const sizeMap = {
    s: 'small',
    m: 'medium',
    l: 'long',
} as const;

type SizeMapKeys = typeof sizeMap;
type Size = (SizeMapKeys)[keyof SizeMapKeys]
