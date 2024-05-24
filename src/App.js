
import { useSelector } from "react-redux";
import AppRouter from "./Routes/AppRouter";
import Swal from "./components/Swal";

function App() {
    const { isSwalOpen } = useSelector((state) => {
        const { swalDetails } = state?.GlobalSlice;
        return { ...swalDetails }
    });
    return (
        <div className="App">
            {isSwalOpen ? <Swal /> : ""}
            <AppRouter />
        </div>
    );
}

export default App;
