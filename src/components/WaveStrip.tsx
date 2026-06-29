import WaveLine from './WaveLine'

export default function WaveStrip() {
  return (
    <div className="wave-strip" aria-hidden="true">
      <WaveLine className="wave-line" />
    </div>
  )
}
