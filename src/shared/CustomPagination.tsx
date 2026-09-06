'use client'

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

type CustomPaginationProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CustomPagination({ page, totalPages, onPageChange }: CustomPaginationProps) {
  if (totalPages <= 1) return null

  return (
    <Pagination>
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            data-gtm="pagination-previous"
            className={`rounded-md bg-white text-black hover:bg-white hover:text-black ${page === 1 ? 'pointer-events-none opacity-50' : ''}`}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : 0}
            onClick={(event) => {
              event.preventDefault()

              if (page > 1) {
                onPageChange(page - 1)
              }
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                data-gtm="pagination-page"
                data-gtm-page={pageNumber}
                isActive={page === pageNumber}
                className={`rounded-md bg-white hover:bg-white ${page === pageNumber ? 'font-bold text-red-500 hover:text-red-500' : 'text-black hover:text-black'}`}
                onClick={(event) => {
                  event.preventDefault()
                  onPageChange(pageNumber)
                }}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            data-gtm="pagination-next"
            className={`rounded-md bg-white text-black hover:bg-white hover:text-black ${page === totalPages ? 'pointer-events-none opacity-50' : ''}`}
            aria-disabled={page === totalPages}
            tabIndex={page === totalPages ? -1 : 0}
            onClick={(event) => {
              event.preventDefault()

              if (page < totalPages) {
                onPageChange(page + 1)
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
