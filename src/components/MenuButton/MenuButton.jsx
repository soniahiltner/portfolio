
import './MenuButton.css'


const MenuButton = ({ open, handleClick }) => {

  return (
    <>
      {!open && (
        <button
        className="menu-btn"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
        </svg>
      </button>
      )}
      {open && (
        <button
          className='menu-btn close-btn'
          onClick={handleClick}
        >X</button>
      )}
      

    </>
  );
}

export default MenuButton