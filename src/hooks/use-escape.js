import React from 'react';


function useEscape({callback}) {
  const handleEscape = React.useCallback(
    function handleEscape(event) {
      if (event.code !== "Escape") {return}
      callback()
    },
    [callback],
  )

  React.useEffect(
    () => {
      window.addEventListener("keydown", handleEscape)

      return () => {
        window.removeEventListener("keydown", handleEscape)
      }
    },
    [handleEscape],
  )
}

export default useEscape;
