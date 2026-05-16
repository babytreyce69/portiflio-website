export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit cursor-default self-start items-center gap-2 rounded-lg border border-black bg-[#f2f0e6] px-2 py-2 text-[14px] font-semibold text-black transition-colors duration-150 hover:border-black/45 hover:bg-[#e8e6dc]">
      {children}
    </span>
  )
}
