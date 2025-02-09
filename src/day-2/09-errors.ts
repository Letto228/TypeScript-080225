try {
    throw "";
    // throw {};
    // throw 123;
    // throw null;
    // throw new Error('Uhu');
} catch (error: unknown) {
    if (error instanceof Error) {
        error.message;
    }
}
