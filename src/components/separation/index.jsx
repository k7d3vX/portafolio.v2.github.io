import PropTypes from 'prop-types';
import "./style.css";

const Separation = ({ children }) => {
    return <section className="line">{children}</section>;
};

Separation.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Separation;
