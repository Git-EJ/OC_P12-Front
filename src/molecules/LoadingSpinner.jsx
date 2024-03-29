import Logo from "../atoms/Logo"

/**
 * 
 * @returns {JSX.Element}
 * @description This component is used to display a loading spinner.
 */


const LoadingSpinner = () => {
  return (
    <div className="loading_spinner_wrapper">
      <div className="loading_spinner_container">
        <div className="loading_spinner_logo"><Logo /></div>
      </div>
      <div className="loading_spinner_text">
        <p>chargement en cours</p>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  )
}

export default LoadingSpinner