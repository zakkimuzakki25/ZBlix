import PropTypes from "prop-types"

const PrimaryButton = ({ handle, name, type, icon, width }) => {
  const handleClick = (event) => {
    event.preventDefault()
    handle()
  }

  return (
    <button
      className={`flex flex-row lg:py-2 lg:px-5 lg:gap-2 justify-center items-center text-white lg:rounded-10 tl bg-red text-white-1 font-semibold hover:brightness-90 ${
        width === "full" ? "w-full" : width === "fit" ? "w-fit" : ""
      }`}
      onClick={handleClick}
      type={type}
    >
      {icon && <img src={icon} alt={`${name} icon`} />}
      <p>{name}</p>
    </button>
  )
}


PrimaryButton.propTypes = {
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
  width: PropTypes.oneOf(["full", "fit"]),
}

export default PrimaryButton
