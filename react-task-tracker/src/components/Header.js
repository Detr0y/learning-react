import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
            color={!showAdd ? "green" : "red"}
            text={!showAdd ? "Add tasks" : "Remove form"}
            onClick={onAdd}
            />
        </header>
    )
}

export default Header
