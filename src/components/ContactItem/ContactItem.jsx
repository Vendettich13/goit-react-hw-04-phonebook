export const ContactItem = ({contact:{name, number, id}, onDelete}) => {
    return <>
        <p>{name} : {number}</p>
        <button type="button" onClick={() => {onDelete(id)}}>Delete</button>
    </>
}