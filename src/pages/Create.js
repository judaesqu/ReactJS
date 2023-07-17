import {useState} from "react";
import { useAppContext } from "../store/store";

import Layout from "../component/layout";
import { useNavigate } from "react-router-dom";

export default function Create(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState (false);
    const [review, setReview] = useState("");

    const store = useAppContext();
    const navigate = useNavigate();

    const inputStyles = {
        formContainer: {
            width: "400px",
            margin: "0 auto"
        },
        container: {
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            margin: "15px 0",
        },
        title: {
            fontSize: "16px",
            textAlign: "left",
            color:"white",
        },
        input: {
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
        },
    };

    const buttonStyle = {
        padding: "15px 20px",
        minWidth: "200px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#1e9638",
        color: "white",
        fontWeight: "bolder",
        fontSize: "18px",
    };

    function handleChange(e){
        const name =  e.target.name;
        const value =  e.target.value;

        switch (name){
            case "title":
                setTitle(value);
                break;
            case "author":
                setAuthor(value);
                break;
            case "intro":
                setIntro(value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "review":
                setReview(value);
                break;          

            
            default:
        }
    }

    function handleOnChangeFile(e){
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function(){
            setCover(reader.result.toString());
        };
    }

    function handleSubmit(e){
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        };

        // TODO: Registro de libro

        store.createItem(newBook);
        navigate("/");
    }

    return (
    <Layout>
            <form onSubmit ={handleSubmit} style={inputStyles.formContainer}>
            <div style={inputStyles.container}> 
                <div style={inputStyles.title}>Titulo</div>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={title}
                    style={inputStyles.input}
                    />
            </div>

             <div style={inputStyles.container}>
                <div style={inputStyles.title}>Autor</div>
                <input
                    type="text"
                    name="author"
                    onChange={handleChange}
                    value={author}
                    style={inputStyles.input}
                    />
            </div>

            <div style={inputStyles.container}>
                <div style={inputStyles.title}>Portada</div>
                <input
                    type="file"
                    name="cover"
                    onChange={handleOnChangeFile}
                    style={inputStyles.input}
                    />
                    <div>
                        {!!cover ? <img src={cover} width="200" alt="preview" />: ""}                        
                    </div>
            </div>

            <div style={inputStyles.container}> 
                <div style={inputStyles.title}>Introducción</div>
                <input
                    type="text"
                    name="intro"
                    onChange={handleChange}
                    value={intro}
                    style={inputStyles.input}
                    />
            </div>

            <div style={inputStyles.container}>
                <div style={inputStyles.title}>Completado</div>
                <input
                    type="checkbox"
                    name="completed"
                    onChange={handleChange}
                    value={completed}
                    style={inputStyles.input}
                    />
            </div>

            <div style={inputStyles.container}>
                <div style={inputStyles.title}>Comentarios</div>
                <input
                    type="text"
                    name="review"
                    onChange={handleChange}
                    value={review}
                    style={inputStyles.input}
                    />
            </div>

            <input type="submit" value="Registrar Libro"
             style={buttonStyle}
             />


        </form>
    </Layout>
    );
}
