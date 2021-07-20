import PropTypes from 'prop-types'

const Trial = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

Trial.defaultProps = {
    title: 'Task tracker',
}

Trial.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Trial
