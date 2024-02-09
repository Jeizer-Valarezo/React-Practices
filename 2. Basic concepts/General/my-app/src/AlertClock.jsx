export function AlertClock ({ onButtonClick }){
    function handleShowTime () {
        const currentTime = new Date().toLocaleTimeString()
        onButtonClick(currentTime)
      };
    
  return (
    <button onClick={handleShowTime}>Click para ver la hora!</button>
  )
}
