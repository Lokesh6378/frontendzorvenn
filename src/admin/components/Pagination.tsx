export function Pagination({ page, pages, total, onChange }: { page: number; pages: number; total: number; onChange: (p: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm text-muted">
      <span>{total} total</span>
      <div className="flex items-center gap-2">
        <button type="button" disabled={page <= 1} onClick={() => onChange(page - 1)} className="rounded-full border border-line px-4 py-2 disabled:opacity-40">Previous</button>
        <span className="px-2">Page {page} of {pages}</span>
        <button type="button" disabled={page >= pages} onClick={() => onChange(page + 1)} className="rounded-full border border-line px-4 py-2 disabled:opacity-40">Next</button>
      </div>
    </div>
  );
}
