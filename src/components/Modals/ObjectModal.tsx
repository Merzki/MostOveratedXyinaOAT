import BaseModal from './BaseModal'

interface ObjectModalProps {
  open: boolean
  onClose: () => void
}

export default function ObjectModal({ open, onClose }: ObjectModalProps) {
  return (
    <BaseModal open={open} onClose={onClose} ariaLabel="Attempt to exit the cycle" showCloseButton={false}>
      <div className="pointer-events-none fixed inset-0 z-[101] grid place-items-center bg-black/80">
        <div className="relative mx-6 max-w-3xl text-center text-[#cf2020]">
          <div className="animate-shake text-3xl font-black tracking-tight md:text-5xl">
            You tried to stop scrolling
          </div>
          <div className="animate-shake mt-4 text-base font-extrabold uppercase tracking-[0.25em] md:text-lg">
            The page kept going
          </div>
        </div>
      </div>
    </BaseModal>
  )
}
