import AdminRouter from "./Admin/routes";
import AppRouter from "./Routes/AppRouter";

function App() {
    return (
        <div className="App">
            <AdminRouter />
            <AppRouter />
        </div>
    );
}

export default App;
