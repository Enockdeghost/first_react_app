import PropTypes from 'prop-types';

function Students(props) {
    return (
        <div className="student">
            <p>student name: {props.name}</p>
            <p>student age: {props.age}</p>
            <p>isStudent: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}


Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

//default props
Students.defaultProps = {
  name: "guest",
  age: 0,
  isStudent: false
};

export default Students; 