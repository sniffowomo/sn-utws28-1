export default function Vid() {
  return (
    <div className="bg-center">
      <video
        src="v.mp4"
        autoPlay
        loop
        muted
        className="min-h-screen w-full object-cover object-top h-full z-0"
      />
    </div>
  )
}

// https://github.com/sniffowomo/sn-utws28-1/blob/w1/vbg/src/app/components/v.mp4
// This is the direct source
