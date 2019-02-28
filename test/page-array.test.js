const test = QUnit.test;

const testArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
];

function pageArray(testArray, pagingOptions) {
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return testArray.slice(startIndex, endIndex);
}

test('page 1 with 4 items per page', assert => {
    const pagingOptions = {
        page: 1,
        perPage: 4
    };

    const paged = pageArray(testArray, pagingOptions);
    const expected = [
        'one',
        'two',
        'three',
        'four'];

    assert.deepEqual(paged, expected);
});

test('page 2 with 3 items per page', assert => {
    const pagingOptions = {
        page: 2,
        perPage: 3
    };

    const paged = pageArray(testArray, pagingOptions);
    const expected = [
        'four',
        'five',
        'six'];

    assert.deepEqual(paged, expected);
});

test('page 3 with 4 items per page', assert => {
    const pagingOptions = {
        page: 3,
        perPage: 4
    };

    const paged = pageArray(testArray, pagingOptions);
    const expected = [
        'nine',
        'ten'];

    assert.deepEqual(paged, expected);
});