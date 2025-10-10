import ConsentModal from '../Modals/ConsentModal'
import ObjectModal from '../Modals/ObjectModal'
import { useCTA } from '../../hooks/useCTA'
import { ctaConfig } from '../../utils/CTA/ctaConfig'
import { ctaStyles } from '../../utils/CTA/styles'

export default function CTA() {
  const {
    consentOpen,
    objectOpen,
    openConsent,
    closeConsent,
    openObject,
    closeObject,
  } = useCTA()
  return (
    <section
      id={ctaConfig.sectionId}
      data-header-bg={ctaConfig.dataHeaderBg}
      className={ctaStyles.section}
    >
      <div className={ctaStyles.backdrop} />
      <div className={ctaStyles.container}>
        <h2 className={ctaStyles.title}>{ctaConfig.title}</h2>
        <p className={ctaStyles.subtitle}>{ctaConfig.subtitle}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={openConsent} className={ctaStyles.buttonPrimary}>
            {ctaConfig.consentButton}
          </button>
          <button onClick={openObject} className={ctaStyles.buttonSecondary}>
            {ctaConfig.objectButton}
          </button>
        </div>
      </div>
      <ConsentModal open={consentOpen} onClose={closeConsent} />
      <ObjectModal open={objectOpen} onClose={closeObject} />
    </section>
  )
}

