import { useState, useEffect } from "react"
import api from "../api"
import Alert from "../components/alert";
import Notes from "../components/notes";
import Carousel from "../components/carousel/carousel";


export default function Home() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [alertmes, setAlertMes] = useState({ mes: null, lev: null })

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then(data => { setNotes(data), console.log(data); })
            .catch(err => { alert(err) })
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", { title, content })
            .then((res) => {
                if (res.status === 201) {
                    setAlertMes({ mes: "note created", lev: "success" })
                    setTitle("")
                    setContent("")
                } else {
                    setAlertMes({ mes: "did not create", lev: "warning" })
                }
                getNotes()
            }).catch(err => { setAlertMes(err) })
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`).then((res) => {
            if (res.status === 204) {
                setAlertMes("note deleted")
            } else {
                setAlertMes("Did not delete")
            }
            getNotes()
        }).catch(err => { setAlertMes(err) })
    }
  

    return (
        <div className="container">

      

           
            <h1>home page</h1>
            <hr />
            {alertmes.mes && <Alert mes={alertmes?.mes} level={alertmes?.lev}></Alert>}
            <div className="row">


                <div className="col col-md-6">
                    <center>Notes</center>
                  <Notes notes={notes} ondelete={deleteNote}></Notes>

                </div>
                <div className="col col-md-6">
                    <form className="col col-md-6 mx-auto" onSubmit={createNote} method="post">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input
                                type="text"
                                class="form-control"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="title.."
                            />
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Content</label>
                            <input
                                type="text"
                                class="form-control"
                                name="content"
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="content.."
                            />
                        </div>
                        <div class="mb-3 row">
                            <div class="offset-sm-4 col-sm-8">
                                <button type="submit" class="btn btn-primary">
                                    create
                                </button>
                            </div>
                        </div>


                    </form>
                </div>

            </div>
            <div className="col-8 mx-auto">
                <Carousel></Carousel>
            </div>
            <a href="/logout">logout</a>

        </div>
    )
}

