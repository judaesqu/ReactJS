import Book from "../component/book";
import Layout from "../component/layout";
import { useAppContext } from "../store/store";

export default function Index() {
    const store = useAppContext();

    const booksContainer = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    };


    return (
        <Layout>
            <div style={booksContainer}>
            {store.items.map((item) => (
            <Book key={item.id} item={item} />
            ))}
            </div>
        </Layout>
    );
}