'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '../ui/pagination'

interface Props {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const CustomPagination = (props: Props) => {
  const { page, totalPages, onPageChange } = props

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, page - delta); i <= Math.min(totalPages - 1, page + delta); i++) {
      range.push(i)
    }

    if (page - delta > 4) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (page + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index)
  }

  const visiblePages = totalPages <= 3 ? Array.from({ length: totalPages }, (_, i) => i + 1) : getVisiblePages()

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={`bg-white ${page === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            onClick={(e) => {
              e.preventDefault()
              if (page > 1) {
                onPageChange(page - 1)
                window.scrollTo(0, 0)
              }
            }}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : 0}
          />
        </PaginationItem>

        {visiblePages.map((p, index) => (
          <PaginationItem key={index}>
            {p === '...' ? (
              <PaginationEllipsis className="rounded-md bg-white" />
            ) : (
              <PaginationLink
                href="#"
                isActive={p === page}
                className={`cursor-pointer bg-white transition-colors duration-200 hover:text-red-500 ${p === page ? 'font-bold text-red-500' : 'text-black'}`}
                onClick={(e) => {
                  e.preventDefault()
                  onPageChange(p as number)
                  window.scrollTo(0, 0)
                }}
              >
                {p}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            className={`bg-white ${page === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            onClick={(e) => {
              e.preventDefault()
              if (page < totalPages) {
                onPageChange(page + 1)
                window.scrollTo(0, 0)
              }
            }}
            aria-disabled={page === totalPages}
            tabIndex={page === totalPages ? -1 : 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
