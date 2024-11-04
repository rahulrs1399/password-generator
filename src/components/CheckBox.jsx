const Checkbox = ({title, onChange, state}) => {
    return (
        <div className="checkbox">
            <input className="checkbox__input" type="checkbox" checked={state} onChange={onChange}/>
            <lable className="checkbox__title">{title}</lable>
        </div>
    )
}

export default Checkbox;