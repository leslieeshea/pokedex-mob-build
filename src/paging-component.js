const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

const PER_PAGE = 20;

export default function loadPaging(totalCount) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPagesSpan.textContent = totalPageCount;
    
}