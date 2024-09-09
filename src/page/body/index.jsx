import PropTypes from 'prop-types';

const Body = ({ children }) => {
    return (<>{children}</>);
};

Body.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Body;
