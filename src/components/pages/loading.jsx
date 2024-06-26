function Loader() {
  return (
    <div className='fixed z-20 top-0 left-0 w-full h-screen bg-[#D9D9D9] flex justify-center items-center'>
        <div className="hourglassBackground">
            <div className="hourglassContainer">
            <div className="hourglassCurves"></div>
            <div className="hourglassCapTop"></div>
            <div className="hourglassGlassTop"></div>
            <div className="hourglassSand"></div>
            <div className="hourglassSandStream"></div>
            <div className="hourglassCapBottom"></div>
            <div className="hourglassGlass"></div>
          </div>
      </div>
    </div>
  )
}

export default Loader