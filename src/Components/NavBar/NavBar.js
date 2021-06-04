import React,{useState} from 'react'
import { Navbar,Form,Modal,Button,FormControl} from 'react-bootstrap'
import {AddMovie,Search} from '../../Actions/Actions'
import './NavBar.css'
import {useDispatch} from 'react-redux'

export default function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie,setNewMovie]=useState({
    id:Math.random(),
    movieName: "",
    rating: "",
    yearOfRelease: "",
    imgUrl: "",
    description: "",
    duration:"",
    type:"",
    actors:""
});
    const handleChange=(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
}
/*const handleSearch=(e)=>{
    setMovieSearch(e.target.value)
    }*/
    const dispatch = useDispatch()
    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(AddMovie(newMovie))
        handleClose()
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        dispatch(Search(e.target.value))
    }
    
    return (
    <div className="NavBar">
    <Navbar bg="light" expand="lg" className="Navbar">
    <h1 style={{color:'red'}}>Movie App</h1>
    <Button variant="primary" onClick={handleShow}>
        Add Movie
    </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form style={{display:"Flex",justifyContent:"center"}}>
                <div>
                <Form.Group >
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="text" name='movieName' placeholder="Enter Movie Name" onChange={e=>handleChange(e)}  />
                </Form.Group>
                <Form.Group >
                <Form.Label> Rating </Form.Label>
                <Form.Control type="text" name="rating" placeholder="Rating" onChange={e=>handleChange(e)}/>
                </Form.Group>
                <Form.Group >
                <Form.Label> Year of release</Form.Label>
                <Form.Control type="text" name='yearOfRelease' placeholder="Enter year of release" onChange={e=>handleChange(e)}/>
                </Form.Group>
                <Form.Group >
                <Form.Label> Image's URL</Form.Label>
                <Form.Control type="text" name='imgUrl' placeholder="Enter Image's URL" onChange={e=>handleChange(e)}/>
                </Form.Group>
                </div>
                <div>
                <Form.Group >
                <Form.Label> Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter description" onChange={e=>handleChange(e)}/>
                </Form.Group>
                <Form.Group >
                <Form.Label> Duration</Form.Label>
                <Form.Control type="text" name="duration" placeholder="Enter duration" onChange={e=>handleChange(e)}/>
                </Form.Group>
                <Form.Group >
                <Form.Label> Type</Form.Label>
                <Form.Control type="text" name="type" placeholder="Enter type" onChange={e=>handleChange(e)}/>
                </Form.Group>
                <Form.Group >
                <Form.Label> Actors</Form.Label>
                <Form.Control type="text" name="actors" placeholder="Enter actors" onChange={e=>handleChange(e)}/>
                </Form.Group>
                </div>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={(e)=>handleAdd(e)}>Add</Button>
                </Modal.Footer>
            </Modal>
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e=>handleSearch(e)}/>
    </Form>
    </Navbar>
    </div>
    );
}