const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

const PER_PAGE = 20;

export default function loadPaging(totalCount) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPagesSpan.textContent = totalPageCount;

    let currentPageNumber = 1;
    currentPageSpan.textContent = currentPageNumber;

    previousButton.disabled = currentPageNumber === 1;

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        currentPageSpan.textContent = currentPageNumber;

        const pageOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;

        console.log(pageOptions);
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        currentPageSpan.textContent = currentPageNumber;

        const pageOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        previousButton.disabled = currentPageNumber === 1;
        nextButton.disabled = currentPageNumber === totalPageCount;
    });
}