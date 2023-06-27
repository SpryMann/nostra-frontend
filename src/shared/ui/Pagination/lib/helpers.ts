interface CutPagesResult {
  first: boolean;
  last: boolean;
  items: {
    start: number;
    end: number;
  };
}

function cutPages(
  totalPagesCount: number,
  cutPagesCount: number,
  currentPage: number
) {
  const ceiling = Math.ceil(cutPagesCount / 2);
  const floor = Math.floor(cutPagesCount / 2);

  if (totalPagesCount <= cutPagesCount) {
    return {
      first: false,
      last: false,
      items: { start: 1, end: totalPagesCount },
    };
  }
  if (currentPage >= 1 && currentPage <= ceiling) {
    return {
      first: false,
      last: true,
      items: { start: 1, end: cutPagesCount },
    };
  }
  if (currentPage + floor >= totalPagesCount) {
    return {
      first: true,
      last: false,
      items: {
        start: totalPagesCount - cutPagesCount + 1,
        end: totalPagesCount,
      },
    };
  }
  return {
    first: true,
    last: false,
    items: {
      start: currentPage - ceiling + 1,
      end: currentPage + floor,
    },
  };
}

function getPages(totalPagesCount: number, cutPagesResult: CutPagesResult) {
  const pages = [];

  if (cutPagesResult.first) {
    pages.push('1', '0');
  }

  pages.push(
    ...Array.from(
      Array(cutPagesResult.items.end - cutPagesResult.items.start + 1).keys()
    ).map((item) => (item + cutPagesResult.items.start).toString())
  );

  if (cutPagesResult.last) {
    pages.push('0', totalPagesCount.toString());
  }

  return pages;
}

export function calculatePages(
  totalPages: number,
  cutPagesCount: number,
  currentPage: number
) {
  return getPages(totalPages, cutPages(totalPages, cutPagesCount, currentPage));
}
