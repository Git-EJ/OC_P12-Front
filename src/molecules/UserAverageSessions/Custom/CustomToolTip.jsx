import PropTypes from 'prop-types'

/**
 * 
 * @param {boolean} active
 * @param {object} payload
 * @returns {JSX.Element}
 * @description This component is used to display a custom tooltip.
 * 
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='user_average_sessions_custom_tooltip'>
        <p className="user_average_sessions_custom_tooltip_label">{`${payload[0].payload.sessionLength} min`}</p>
      </div>
    )
  }
  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}


export default CustomTooltip