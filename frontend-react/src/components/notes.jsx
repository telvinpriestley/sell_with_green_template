const Notes = ({notes,ondelete}) => {

    const created = (prop) => { 
        const the_date = new Date(prop).toLocaleString("en-US") ;
        return the_date
    }

    return (   <div className="row">
    {notes.map((note, index) => (
        <div key={index} className="card m-2" style={{ width: '13rem' }}>
            <div className="card-header">
                <h5 className="card-title">{note?.title}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{note?.content}</p>
                <small>{created(note?.created_at)}</small>
            </div>
            <div className="card-footer">

                <a href="/" className="link-warning">Edit</a>
                <a type="button" onClick={() => ondelete(note?.id)} className="link-danger ">Delete</a>


            </div>
        </div>
    ))}

</div> );
}
 
export default Notes;