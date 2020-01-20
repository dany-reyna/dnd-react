import PropTypes from 'prop-types';

const componentType = PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]);

export default componentType;
