import BaseModal from './BaseModal'
import type { ObjectModalProps } from '../../types/modals'
import { objectText } from '../../utils/Modals/objectConfig'
import { objectStyles } from '../../utils/Modals/styles'

export default function ObjectModal({ open, onClose }: ObjectModalProps) {
  return (
    <BaseModal open={open} onClose={onClose} ariaLabel={objectText.ariaLabel} showCloseButton={false}>
      <div className="pointer-events-none fixed inset-0 z-[101] grid place-items-center bg-black/80">
        <div className={objectStyles.overlayTextContainer}>
          <div className={objectStyles.title}>{objectText.title}</div>
          <div className={objectStyles.subtitle}>{objectText.subtitle}</div>
        </div>
      </div>
    </BaseModal>
  )
}
