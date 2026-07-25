import PropTypes from 'prop-types'

function Student(props){
    //Destructuring: of props
    const {name="Guest", age=0, isMarried=false} = props;

    return(
       <div className="student">
            <p>Name: {name}</p>
            <p>Age:{age}</p>
            <p>Married:{isMarried ? "Yes" : "No"}</p>
       </div>
    );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
}

export default Student
