import PropTypes from "prop-types";

function Header({ header_text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <h2>{header_text}</h2>
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
  header_text: "Feedback System UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
};
Header.propTypes = {
  header_text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
